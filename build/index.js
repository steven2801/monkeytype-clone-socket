"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const socket_io_1 = require("socket.io");
const port = 8080;
const app = (0, express_1.default)();
app.use(cors_1.default);
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: ["http://localhost:3000", "https://mtype.vercel.app", "https://monkeytype-clone.vercel.app"],
        methods: ["GET", "POST"],
    },
});
io.on("connection", (socket) => {
    console.log("connected");
    socket.on("disconnect", () => {
        console.log("user disconnected");
    });
    socket.on("hi", (data) => {
        console.log(data);
    });
});
server.listen(port, () => {
    console.log(`Listening to server on port ${port}`);
});
