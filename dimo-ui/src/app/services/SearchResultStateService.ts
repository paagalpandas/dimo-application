import { Injectable } from '@angular/core';
import { IMovieData } from '../containers/helpers/dashboard.interfaces';

@Injectable({
  providedIn: 'root',
})
export class SearchResultStateService {
  private movies: Array<IMovieData>;

  constructor() {
  }

  setMovies(token: Array<IMovieData>) {
    this.movies = token;
  }

  getMovies(): Array<IMovieData> {
    return this.movies;
  }
}
