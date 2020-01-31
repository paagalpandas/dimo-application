export interface ICategory {
  category: string;
  movies: Array<IMovieData>;
}

export interface IMovieData {
  id:string;
  title: string;
  name: string;
  tagline: string;
  poster: string;
  description:string;
  thumbNail:string;
}
