import { Socket } from "socket.io";
import { io, rooms } from "..";
import { shuffleList } from "./functions";

export const endGameHander = (socket: Socket) => {
	socket.on("end game", (roomId: string, mode: "words" | "sentences" | "numbers") => {
		const toType = shuffleList(mode).join(" ");
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
};
