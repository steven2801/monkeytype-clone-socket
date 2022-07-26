import { Socket } from "socket.io";
import { io, playerRooms, rooms } from "..";

export const disconnectHandler = (socket: Socket) => {
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
};
