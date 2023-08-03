import { NextFunction, Request, Response } from "express";
import { schema } from "../utilities/validator";

export const validateRegister = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { formData } = req.body;

  const { error } = schema.validate(formData, {
    abortEarly: false,
  });

  if (error) {
    const errorsFormated = error.details.map((error) => ({
      message: error.message,
      field: error.context?.key,
    }));
    return res.status(401).json(errorsFormated);
  }

  next();
};
