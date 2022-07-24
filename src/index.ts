import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";
import { shuffleList } from "./lib/functions";
import e from "express";

const port = process.env.PORT || 8080;
const app = express();
app.use(cors);

const server = http.createServer(app);
const io = new Server(server, {
	cors: {
		origin: [
			"http://localhost:3000",
			"https://mtype.vercel.app",
			"https://monkeytype-clone.vercel.app",
			"https://typez.vercel.app",
		],
		methods: ["GET", "POST"],
	},
});

type Player = {
	username: string;
	roomId: string;
	id: string;
	status: {
		wpm: number;
		progress: number;
	};
	isPlaying: boolean;
	isReady: boolean;
};

type RoomState = {
	[key: string]: {
		toType: string;
		players: Player[];
		inGame: boolean;
		winner: string | null;
	};
};

type PlayerState = {
	[key: string]: string[];
};

const playerRooms: PlayerState = {};

// rooms will consist of key value pair, key being room id, pair being users inside that room and their corresponding data
const rooms: RoomState = {};

io.on("connection", (socket) => {
	const sockets = Array.from(io.sockets.sockets).map((socket) => socket[0]);
	// console.log(io.sockets.adapter.rooms);
	// console.log(sockets);
	// console.log(socket.rooms);

	socket.on("disconnect", () => {
		// disconnected client id
		// console.log(socket.id);
		// const sockets = Array.from(io.sockets.sockets).map((socket) => socket[0]);

		// the rooms player is currently in
		const disconnectPlayerFrom = playerRooms[socket.id];
		if (!disconnectPlayerFrom) return;
		disconnectPlayerFrom.forEach((roomId) => {
			if (!rooms[roomId]) return;
			const players = rooms[roomId].players;
			rooms[roomId].players = players.filter((player) => {
				if (player.id === socket.id) {
					io.in(roomId).emit("leave room", player.username);
				}
				return player.id !== socket.id;
			});

			io.in(roomId).emit("room update", rooms[roomId].players);
			if (rooms[roomId].players.length === 0) {
				delete rooms[roomId];
			}
		});

		// remove player
		delete playerRooms[socket.id];

		console.log("disconnect", rooms);
		// console.log(io.sockets.adapter.rooms);
	});

	socket.on("room update", (user: Player) => {
		const { roomId } = user;
		if (!rooms[roomId]) return;
		const players = rooms[roomId].players;
		rooms[roomId].players = players.map((player) => (player.id !== user.id ? player : user));
		io.in(roomId).emit("room update", rooms[roomId].players);

		// start game
		const allPlayersReady = rooms[roomId].players.every((player) => player.isReady);
		if (allPlayersReady) {
			io.in(roomId).emit("start game");
			rooms[roomId].inGame = true;
		} else {
			rooms[roomId].inGame = false;
		}
	});

	socket.on("leave room", (user: Player) => {
		const { roomId } = user;
		const players = rooms[roomId];
		if (!players) return;
		rooms[roomId].players = players.players.filter((player) => {
			if (player.id === user.id) {
				socket.to(roomId).emit("leave room", player.username);
			}
			return player.id !== user.id;
		});

		io.in(roomId).emit("room update", rooms[roomId].players);
		if (rooms[roomId].players.length === 0) {
			delete rooms[roomId];
		}
		console.log("leave ", rooms);
	});

	socket.on("end game", (roomId: string) => {
		const toType = shuffleList("sentences").join(" ");
		rooms[roomId] = {
			players: rooms[roomId].players,
			toType,
			inGame: false,
			winner: socket.id,
		};
		console.log("game ended");
		io.in(roomId).emit("winner", rooms[roomId].winner);
		setTimeout(() => {
			io.in(roomId).emit("end game");
			io.in(roomId).emit("words generated", rooms[roomId].toType);
		}, 5000);
	});

	socket.on("join room", ({ roomId, user }: { roomId: string; user: Player }) => {
		const room = rooms[roomId];
		if (!room) {
			socket.emit("room invalid");
			return;
		} else if (rooms[roomId].inGame) {
			socket.emit("room in game");
			return;
		} else {
			rooms[roomId].players = [...rooms[roomId].players, user];
			playerRooms[socket.id] = [roomId];
		}

		socket.join(roomId);
		socket.emit("words generated", rooms[roomId].toType);
		io.in(roomId).emit("room update", rooms[roomId].players);
		socket.to(roomId).emit("notify", `${user.username} is here.`);
		console.log("join", rooms);
	});

	socket.on("create room", (roomId: string) => {
		if (io.sockets.adapter.rooms.get(roomId)) {
			socket.emit("room already exist");
		} else {
			const toType = shuffleList("sentences").join(" ");
			rooms[roomId] = {
				players: [],
				toType,
				inGame: false,
				winner: null,
			};

			socket.emit("words generated", rooms[roomId].toType);
			socket.emit("create room success", roomId);
			// console.log(roomId);
			// console.log(io.sockets.adapter.rooms.get(roomId));
			// const sockets = Array.from(io.sockets.sockets).map((socket) => socket[0]);
			// console.log("room created: ", socket.rooms);
		}
	});
});

server.listen(port, () => {
	console.log(`Listening to server on port ${port}`);
});
