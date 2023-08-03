import mongoose from "mongoose";
import { DB_URI } from "../config";

export const connectDb = async () => {
  try {
    const DB = await mongoose.connect(DB_URI!);
    console.log(DB.connection.name);
  } catch (error) {
    console.log(error);
  }
};
