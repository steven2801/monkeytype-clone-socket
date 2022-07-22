"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const socket_io_1 = require("socket.io");
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
    socket.on("join room", ({ roomId, username }) => {
        const room = io.sockets.adapter.rooms.get(roomId);
        if (!room) {
            socket.emit("set room owner");
        }
        socket.join(roomId);
        socket.to(roomId).emit("notify", `${username} just joined the room.`);
    });
    socket.on("create room", (roomId) => {
        if (io.sockets.adapter.rooms.get(roomId)) {
            socket.emit("room already exist");
        }
        else {
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
