import { v2 as cloudinary } from "cloudinary";
import fs from "fs-extra";

import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_CLOUD_NAME,
} from "../config";

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
  secure: true,
});
//llama un metodo
export const uploadImage = async (filepath: string) => {
  return await cloudinary.uploader.upload(filepath, {
    folder: "movies",
  });
};

export const extractPublicIdAndSecureUrl = async (filepath: string) => {
  const { public_id, secure_url } = await uploadImage(filepath);
  await fs.unlink(filepath);

  return {
    public_id,
    secure_url,
  };
};
