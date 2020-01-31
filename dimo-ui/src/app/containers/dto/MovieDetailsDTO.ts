import { IMovieData } from "../helpers/dashboard.interfaces";

export interface IMovieDetailsDTO {
  id: string;
  title: string;
  tagLine: string;
  description: string;
  overview: string;
  releaseDate: string;
  language: string;
  thumbNail: string;
  similarMovies: Array<IMovieData>;
  genre: Array<string>;
}

