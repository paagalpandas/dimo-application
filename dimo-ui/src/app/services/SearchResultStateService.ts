import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMovieData } from '../containers/helpers/dashboard.interfaces';

@Injectable({
  providedIn: 'root',
})
export class SearchResultStateService {
  private movies: Array<IMovieData>;
  public subject: BehaviorSubject<Array<IMovieData>> = new BehaviorSubject(null);

  constructor() {
  }
}
