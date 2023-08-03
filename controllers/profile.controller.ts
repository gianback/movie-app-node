import { Response } from "express";
import { RequestExt } from "../types/express";
import User from "../models/User";

export const profileController = async (req: RequestExt, res: Response) => {
  const email = req.user.id;
  const userData = await User.findOne({ email }).populate("favorite_movies", {
    title: 1,
    description: 1,
    image_primary: 1,
    image_secondary: 1,
    _id: 1,
  });
  res.status(200).json({ user: userData });
};
