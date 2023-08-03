import { Response, Request } from "express";
import Comment from "../models/Comment";
import { Movie } from "../models/Movie";

export const createComment = async (req: Request, res: Response) => {
  const { payload, qualification, movieId } = req.body.formData;

  const movie = await Movie.findById(movieId);

  if (!movie)
    return res.status(404).json({ status: 404, message: "Movie not found" });

  const newComment = await new Comment({
    payload,
    qualification,
    date: new Date(),
    movieId: movie._id,
  });

  try {
    const savedComment = await newComment.save();
    movie.comments = movie.comments.concat(savedComment.id);
    await movie.save();
    return res.json(savedComment);
  } catch (error) {
    return res.status(500).json({ error });
  }
};
