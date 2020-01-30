import { Component, OnInit } from '@angular/core';
import { SearchResultStateService } from 'src/app/services/SearchResultStateService';
import { IMovieData } from '../helpers/dashboard.interfaces';
import {Router} from "@angular/router";

@Component({
  selector: "searchresults",
  templateUrl: '../views/searchresults.component.html',
  styleUrls: ['../styles/scss/dashboard.component.scss']
})
export class SearchResultsComponent implements OnInit {
  public movies: Array<IMovieData>;

  constructor(private searchResultStateService: SearchResultStateService,private router: Router) {
  }

  ngOnInit() {
    this.searchResultStateService.subject.subscribe(movieList => {
      this.movies = movieList;
    });
  }

  moviedetails(movieid:string) {
    this.router.navigate(["moviedetails",movieid]);
  }
}
