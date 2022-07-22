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

io.on("connection", (socket) => {
	console.log("connected");
	socket.on("disconnect", () => {
		console.log("user disconnected");
	});

	socket.on("hi", (data) => {
		socket.emit("hello", data);
	});
});

server.listen(port, () => {
	console.log(`Listening to server on port ${port}`);
});
