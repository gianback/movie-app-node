import mongoose, { Model, Schema } from "mongoose";
import { IMovie } from "../interfaces/movie.interface";

export interface IMovieModel extends Model<IMovie> {
  addCommentToMovie(movieId: string, commentId: string): Promise<void>;
}
const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "El titulo es obligatorio"],
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    image_primary: {
      public_id: String,
      secure_url: String,
    },
    image_secondary: {
      public_id: String,
      secure_url: String,
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "comment",
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

movieSchema.methods.toJSON = function () {
  const { __v, ...movie } = this.toObject();

  return movie;
};
movieSchema.statics.addCommentToMovie = async function (
  movieId: any,
  commentId: any
) {
  await this.findByIdAndUpdate(movieId, {
    $push: { comments: commentId },
  });
};
export const Movie = mongoose.model<IMovie, IMovieModel>("movie", movieSchema);
