import { Request, Response } from "express";
import { decode } from "jsonwebtoken";
import { generateToken } from "../services/jwt";

export interface GoogleUser {
  iss: string;
  nbf: number;
  aud: string;
  sub: string;
  email: string;
  email_verified: boolean;
  azp: string;
  name: string;
  picture: string;
  given_name: string;
  family_name: string;
  iat: number;
  exp: number;
  jti: string;
}

export const googleController = (req: Request, res: Response) => {
  const { id, googleToken } = req.body.data;
  const token = generateToken(id);
  const { given_name, family_name, email, picture } = decode(
    googleToken
  ) as GoogleUser;
  res.status(200).json({
    names: given_name,
    last_names: family_name,
    email,
    picture,
    token,
  });
};
