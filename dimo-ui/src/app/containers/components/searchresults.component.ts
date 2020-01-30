import { Component, OnInit } from '@angular/core';
import { IMovieData } from '../helpers/dashboard.interfaces';
import { SearchResultStateService } from 'src/app/services/SearchResultStateService';

@Component({
  selector: "searchresults",
  templateUrl: '../views/searchresults.component.html',
  styleUrls: ['../styles/scss/dashboard.component.scss']
})
export class SearchResultsComponent implements OnInit {
  public movies: Array<IMovieData>;

  constructor(private searchResultStateService: SearchResultStateService) {
  }

  ngOnInit() {
    var data = this.searchResultStateService.getMovies();
    this.movies = data as Array<IMovieData>;
  }
}
