import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { SearchResultStateService } from 'src/app/services/SearchResultStateService';
import { ProfileService } from "../../services/ProfileService";
import { IMovieData } from '../helpers/dashboard.interfaces';

@Component({
  selector: "searchbox",
  templateUrl: '../views/searchbox.component.html',
  styleUrls: ['../styles/scss/searchbox.component.scss']

})
export class SearchboxComponent {

  public searchStr = '';

  constructor(private http: HttpClient,
    private router: Router, private profileService: ProfileService, private searchResultStateService: SearchResultStateService) {
  }

  onSearch() {
    const keyword = this.searchStr;
    let header = new HttpHeaders();

    header = header.append('Authorization', 'Bearer ' + this.profileService.getToken());
    let params = new HttpParams().set('searchString', keyword);

    this.http.get("/api/search", { headers: header, params: params })
      .subscribe(data => {
        const movies = data as Array<IMovieData>;
        this.router.navigate(["searchresults"]);
        this.searchResultStateService.subject.next(movies);
      });
  }
}
