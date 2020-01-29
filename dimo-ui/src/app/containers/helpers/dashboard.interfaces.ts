export interface ICategory {
  category: string;
  movies: Array<IMovieData>;
}

export interface IMovieData {
  name: string;
  description: string;
  thumbNail: string;
}


