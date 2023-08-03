import dotenv from "dotenv";

dotenv.config();

export const DB_URI = process.env.MONGODB_URI;
export const PORT = process.env.PORT || 4000;
export const CLOUDINARY_CLOUD_NAME = process.env.CLOUD_NAME;
export const CLOUDINARY_API_KEY = process.env.API_KEY;
export const CLOUDINARY_API_SECRET = process.env.API_SECRET;
export const CLIENT_URL = process.env.CLIENT_URL;
export const JWT_SECRET = process.env.JWT_SECRET as string;
