"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const socket_io_1 = require("socket.io");
const functions_1 = require("./lib/functions");
const port = process.env.PORT || 8080;
const app = (0, express_1.default)();
app.use(cors_1.default);
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server, {
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
const playerRooms = {};
// rooms will consist of key value pair, key being room id, pair being users inside that room and their corresponding data
const rooms = {};
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
        if (!disconnectPlayerFrom)
            return;
        disconnectPlayerFrom.forEach((roomId) => {
            if (!rooms[roomId])
                return;
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
    socket.on("room update", (user) => {
        const { roomId } = user;
        if (!rooms[roomId])
            return;
        const players = rooms[roomId].players;
        rooms[roomId].players = players.map((player) => (player.id !== user.id ? player : user));
        io.in(roomId).emit("room update", rooms[roomId].players);
        // start game
        const allPlayersReady = rooms[roomId].players.every((player) => player.isReady);
        if (allPlayersReady) {
            io.in(roomId).emit("start game");
            rooms[roomId].inGame = true;
        }
        else {
            rooms[roomId].inGame = false;
        }
    });
    socket.on("leave room", (user) => {
        const { roomId } = user;
        const players = rooms[roomId];
        if (!players)
            return;
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
    socket.on("end game", (roomId) => {
        const toType = (0, functions_1.shuffleList)("sentences").join(" ");
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
    socket.on("join room", ({ roomId, user }) => {
        const room = rooms[roomId];
        if (!room) {
            socket.emit("room invalid");
            return;
        }
        else if (rooms[roomId].inGame) {
            socket.emit("room in game");
            return;
        }
        else {
            rooms[roomId].players = [...rooms[roomId].players, user];
            playerRooms[socket.id] = [roomId];
        }
        socket.join(roomId);
        socket.emit("words generated", rooms[roomId].toType);
        io.in(roomId).emit("room update", rooms[roomId].players);
        socket.to(roomId).emit("notify", `${user.username} is here.`);
        console.log("join", rooms);
    });
    socket.on("create room", (roomId) => {
        if (io.sockets.adapter.rooms.get(roomId)) {
            socket.emit("room already exist");
        }
        else {
            const toType = (0, functions_1.shuffleList)("sentences").join(" ");
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
