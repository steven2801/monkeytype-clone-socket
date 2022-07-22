import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";

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

// rooms will consist of key value pair, key being room id, pair being users inside that room and their corresponding data

io.on("connection", (socket) => {
	const sockets = Array.from(io.sockets.sockets).map((socket) => socket[0]);
	// console.log(io.sockets.adapter.rooms);
	// console.log(sockets);
	// console.log(socket.rooms);

	socket.on("disconnect", () => {
		// disconnected client id
		// console.log(socket.id);
		// const sockets = Array.from(io.sockets.sockets).map((socket) => socket[0]);
		// console.log(io.sockets.adapter.rooms.get("8a7e5d"));
	});

	socket.on("join room", ({ roomId, username }: { roomId: string; username: string }) => {
		const room = io.sockets.adapter.rooms.get(roomId);
		if (!room) {
			socket.emit("set room owner");
		}
		socket.join(roomId);
		socket.to(roomId).emit("notify", `${username} just joined the room.`);
	});

	socket.on("create room", (roomId: string) => {
		if (io.sockets.adapter.rooms.get(roomId)) {
			socket.emit("room already exist");
		} else {
			socket.join(roomId);
			socket.join(roomId);
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
