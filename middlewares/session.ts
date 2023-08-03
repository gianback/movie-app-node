import { NextFunction, Response } from "express";
import { verify } from "jsonwebtoken";
import { RequestExt } from "../types/express";
import { JWT_SECRET } from "../config";

export const checkJwt = (
  req: RequestExt,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "Unauthorized headers",
    });
  }
  const token = authHeader?.split(" ")[1] as string;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized token malo",
    });
  }

  verify(token, JWT_SECRET, (error, user) => {
    if (error)
      return res.status(401).send({ message: "token invalido", status: 401 });
    req.user = user;
    next();
    return;
  });
  return;
};
