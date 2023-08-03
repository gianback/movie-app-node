import mongoose, { Schema } from "mongoose";
import { Comment } from "../interfaces/movie.interface";
const commentSchema = new mongoose.Schema<Comment>(
  {
    content: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
    },
    qualification: {
      type: String,
      required: true,
    },
    movieId: {
      type: Schema.Types.ObjectId,
      ref: "movie",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
commentSchema.methods.toJSON = function () {
  const { __v, updateAt, ...comment } = this.toObject();

  return comment;
};
export default mongoose.model("comment", commentSchema);
