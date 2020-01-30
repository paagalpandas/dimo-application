import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { SearchResultStateService } from 'src/app/services/SearchResultStateService';
import { ProfileService } from "../../services/ProfileService";
import { IMovieData } from '../helpers/dashboard.interfaces';

@Component({
  selector: "searchbox",
  templateUrl: '../views/searchbox.component.html'
})
export class SearchboxComponent {
  constructor(private http: HttpClient, private router: Router, private profileService: ProfileService, private searchResultStateService: SearchResultStateService) {
  }

  onSubmit(f: NgForm) {
    var keyword = f.value.keyword;
    let header = new HttpHeaders();
    header = header.append('Authorization', 'Bearer ' + this.profileService.getToken());

    this.http.post("http://localhost:5000/api/search", { "keyword": keyword }, { headers: header })
      .subscribe(data => {
        let movies = data as Array<IMovieData>;
        this.searchResultStateService.setMovies(movies);
        this.router.navigate(["searchresults"]);
      });
  }
}
