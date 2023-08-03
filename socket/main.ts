import { Server, Socket } from "socket.io";
import { movieSocket } from "./movie.socket";

export const mainSocket = (io: Server) => {
  /*****  Namespaces *****/
  //Movies By Id
  const movieById = io.of("/api/movies");

  movieById.on("connection", (socket: Socket) => {
    console.log("connected! backend socket");
    movieSocket(socket);
  });
};
