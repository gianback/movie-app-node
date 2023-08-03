import { Auth } from "./auth.interface";
import { IMovie } from "./movie.interface";

export interface User extends Auth {
  names: string;
  description: string;
  last_names: string;
  favorite_movies: IMovie[];
}
