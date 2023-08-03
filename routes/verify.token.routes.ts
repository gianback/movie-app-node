import { Router } from "express";
import { checkJwt } from "../middlewares/session";
import { verifyTokenController } from "../controllers/verify.token.controller";

const router = Router();

router.post("/verify-token", checkJwt, verifyTokenController);

export default router;
