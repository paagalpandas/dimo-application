import { Component, OnInit } from '@angular/core';
import { SearchResultStateService } from 'src/app/services/SearchResultStateService';
import { IMovieData } from '../helpers/dashboard.interfaces';

@Component({
  selector: "searchresults",
  templateUrl: '../views/searchresults.component.html',
  styleUrls: ['../styles/scss/searchresults.component.scss']
})
export class SearchResultsComponent implements OnInit {
  public movies: Array<IMovieData>;

  constructor(private searchResultStateService: SearchResultStateService) {
  }

  ngOnInit() {
    this.searchResultStateService.subject.subscribe(movieList => {
      this.movies = movieList;
    });
  }
}
