import http from "http";
import { Server as WebSocketServer } from "socket.io";
import { CLIENT_URL, PORT } from "./config";

import app from "./app";
import { connectDb } from "./db/db";
import { mainSocket } from "./socket/main";
const server = http.createServer(app);
const httpServer = server.listen(PORT);
const io = new WebSocketServer(httpServer, {
  cors: {
    origin: CLIENT_URL,
    credentials: true,
  },
});

connectDb();

//socket

mainSocket(io);

console.log("Server running in port", PORT);
