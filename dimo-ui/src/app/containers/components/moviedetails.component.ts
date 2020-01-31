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
    let url="/api/movie/"+id;
    this.http.get(url).subscribe(data => {
      let response=data as ResponseDTO;
      let movieDetails= (response && response.data) ? response.data as unknown as IMovieDetailsDTO : null;
      console.log(movieDetails);
      this.moviedetails=movieDetails;
    });
  }
}
