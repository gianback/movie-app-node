import { Request, Response } from "express";
export const verifyTokenController = async (_req: Request, res: Response) => {
  return res.status(200).json({ status: 200, mssg: "token valido" });
};
