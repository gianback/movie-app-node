import Joi from "joi";

export const schema = Joi.object({
  names: Joi.string().trim().required().messages({
    "string.empty": "Los nombres son obligatorios",
  }),
  last_names: Joi.string().trim().required().messages({
    "string.empty": "Los apellidos son obligatorios",
  }),
  email: Joi.string().trim().required().email().messages({
    "string.empty": "El email es obligatorio",
    "string.email": "El email ingresado es invalido",
  }),
  password: Joi.string().trim().required().max(20).messages({
    "string.empty": "La contraseña es obligatorio",
    "string.max": "La contraseña debe tener como maximo 20 caracteres",
  }),
});
