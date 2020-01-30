export interface ICategory {
  category: string;
  movies: Array<IMovieData>;
}

export interface IMovieData {
  title: string;
  tagline: string;
  poster: string;
}
