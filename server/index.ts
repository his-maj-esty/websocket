import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("message", (msg) => {
    console.log(msg);
    socket.emit("received", "message received");
  });
});

server.listen(3000, () => {
  console.log("server listening at 3000");
});
