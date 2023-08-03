import { Router } from "express";
import {
  getMovies,
  getMoviesById,
  createMovie,
  addFavoriteMovie,
  getMovieByUserId,
} from "../controllers/movies.controllers";
import { check } from "express-validator";
import { validateInputs } from "../middlewares/validateInput";
import { checkJwt } from "../middlewares/session";

const router = Router();

router.post(
  "/movies",
  [
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("description", "La descripcion es obligatorio").not().isEmpty(),
    validateInputs,
  ],

  createMovie
);

router.get("/movies", checkJwt, getMovies);

router.get("/movies/:id", checkJwt, getMoviesById);

router.post("/favorite-movies", checkJwt, addFavoriteMovie);
router.get("/favorite-movies/:userId", checkJwt, getMovieByUserId);

export default router;
