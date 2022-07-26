import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";
import { shuffleList } from "./lib/functions";
import { Player, PlayerState, RoomState } from "./lib/types";
import { createRoomHandler, joinRoomHander, leaveRoomHandler, updateRoomHandler } from "./lib/roomHandler";
import { disconnectHandler } from "./lib/disconnectHandler";
import { endGameHander } from "./lib/gameHandler";

const port = process.env.PORT || 8080;
const app = express();
app.use(cors);

const server = http.createServer(app);
export const io = new Server(server, {
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

export const playerRooms: PlayerState = {};

// rooms will consist of key value pair, key being room id, pair being users inside that room and their corresponding data
export const rooms: RoomState = {};

io.on("connection", (socket) => {
	// const sockets = Array.from(io.sockets.sockets).map((socket) => socket[0]);
	// console.log(io.sockets.adapter.rooms);
	// console.log(sockets);
	// console.log(socket.rooms);

	// handle user disconnect
	disconnectHandler(socket);

	// handle end game
	endGameHander(socket);

	// room handlers
	joinRoomHander(socket);
	leaveRoomHandler(socket);
	createRoomHandler(socket);
	updateRoomHandler(socket);
});

server.listen(port, () => {
	console.log(`Listening to server on port ${port}`);
});
