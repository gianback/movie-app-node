import { Request, Response } from "express";
import { generateToken, loginUser, registerNewUser } from "../services";

export const registerController = async (req: Request, res: Response) => {
  const { formData } = req.body;
  const userCreated = await registerNewUser(formData);

  if (userCreated === "ALREADY USER") {
    return res.status(400).json({ message: "El Email ya ha sido registrado" });
  }
  const token = generateToken(formData);

  res.status(201).json({ user: userCreated, status: 201, token });
};

export const loginController = async (req: Request, res: Response) => {
  const { user } = req.body;
  const { token, message } = await loginUser(user);
  if (message) {
    return res.status(400).json({ message });
  }
  return res.status(200).json(token);
};
