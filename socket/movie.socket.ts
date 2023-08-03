import { Socket } from "socket.io";

import { verify } from "jsonwebtoken";
import Comment from "../models/Comment";
import { Movie } from "../models/Movie";
import { Comment as ICommnet } from "../interfaces/movie.interface";
import { JWT_SECRET } from "../config";

const socketMiddleware = (socket: any, next: (err?: any) => void) => {
  const { token } = socket;

  verify(token, JWT_SECRET, (err: any, _: any) => {
    if (err) return new Error("Token not valid");
  });
  next();
};

export const movieSocket = (socket: Socket) => {
  socket.use(socketMiddleware);

  socket.on("client:save-comment", async (data) => {
    const { payload } = data;

    const newComment = new Comment({
      content: payload.content,
      qualification: payload.qualification,
      movieId: payload.movieId,
      date: Date.now(),
    });

    const savedComment: ICommnet = await newComment.save();
    await Movie.addCommentToMovie(payload.movieId, savedComment._id);

    const user = await Movie.findById(payload.movieId).populate("comments", {
      content: 1,
      qualification: 1,
      date: 1,
      _id: 1,
    });
    socket.emit("server:new-comment", user?.comments);
  });
};
