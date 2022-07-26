"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.endGameHander = void 0;
const __1 = require("..");
const functions_1 = require("./functions");
const endGameHander = (socket) => {
    socket.on("end game", (roomId) => {
        const toType = (0, functions_1.shuffleList)("sentences").join(" ");
        __1.rooms[roomId] = {
            players: __1.rooms[roomId].players,
            toType,
            inGame: false,
            winner: socket.id,
        };
        console.log("game ended");
        __1.io.in(roomId).emit("winner", __1.rooms[roomId].winner);
        setTimeout(() => {
            __1.io.in(roomId).emit("end game");
            __1.io.in(roomId).emit("words generated", __1.rooms[roomId].toType);
        }, 5000);
    });
};
exports.endGameHander = endGameHander;
