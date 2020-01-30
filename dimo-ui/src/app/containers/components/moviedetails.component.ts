import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ProfileService } from "../../services/ProfileService";
import {IMovieDetailsDTO} from "../dto/MovieDetailsDTO";
import {ResponseDTO} from "../dto/ResponseDTO";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'dimo-moviedetails',
  templateUrl: '../views/moviedetails.component.html',
  styleUrls: ['../styles/scss/moviedetails.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  public moviedetails: IMovieDetailsDTO;

  constructor(private http: HttpClient, private profileService: ProfileService,private route: ActivatedRoute,private router: Router) {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.doSearch(params['id'])
      }
    });
  }

  ngOnInit() {

  }

  private doSearch(id: string) {
    let header = new HttpHeaders();
    // this.profileService.setToken("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYW5rZXRAZ21haWwuY29tIiwiRmlyc3ROYW1lIjoiU2Fua2V0IiwiaXNzIjoiRGltb0FwcGxpY2F0aW9uIiwiQXV0aG9yaXRpZXMiOiJST0xFX1ZJRVdFUiIsIkxhc3ROYW1lIjoiIEJhcmFwYXRyZSIsImV4cCI6MTU4MTI1OTM0OH0.0l_QvmUEo1XBK-EWLi57IBBR3KIpUb7g9vNFkfCxkzNIFrap0oWSq62_ZFXgWEnyhNptMA4HdP94t79-hz_LmQ")
    header = header.append('Authorization', 'Bearer ' + this.profileService.getToken());

    let url="/api/movie/"+id;

    this.http.get(url, { headers: header }).subscribe(data => {
      let response=data as ResponseDTO;
      let movieDetails= (response && response.data) ? response.data as unknown as IMovieDetailsDTO : null;
      console.log(movieDetails);
      this.moviedetails=movieDetails;
    });
  }
}
