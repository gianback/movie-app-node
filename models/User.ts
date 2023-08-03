import mongoose, { Schema } from "mongoose";
import { User } from "../interfaces/user.interface";

const UserSchema = new Schema<User>(
  {
    email: {
      require: true,
      type: String,
      trim: true,
      unique: true,
    },
    password: {
      require: true,
      type: String,
    },
    names: {
      require: true,
      type: String,
    },
    last_names: {
      require: true,
      type: String,
    },
    favorite_movies: [
      {
        type: Schema.Types.ObjectId,
        ref: "movie",
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

UserSchema.methods.toJSON = function () {
  const { password, __v, createdAt, updatedAt, _id, ...user } = this.toObject();
  user.uid = _id;
  return user;
};

export default mongoose.model("users", UserSchema);
