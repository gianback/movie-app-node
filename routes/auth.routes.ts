import { Router } from "express";

import { validateRegister } from "../middlewares/validateRegister";
import {
  loginController,
  registerController,
} from "../controllers/auth.controller";
// import { googleController } from "../controllers/google.controller";
import { checkJwt } from "../middlewares";
import { profileController } from "../controllers/profile.controller";

const router = Router();

router.post("/auth/register", validateRegister, registerController);
//Todo middleware que valide si es un email
router.post("/auth/login", loginController);

// router.post("/auth/google", googleController);
router.get("/auth/profile", checkJwt, profileController);

export default router;
