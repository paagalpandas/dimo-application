import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ProfileService } from "../../services/ProfileService";
import { IMovieDetailsDTO } from "../dto/MovieDetailsDTO";
import { ActivatedRoute, Router } from "@angular/router";
import { ResponseDTO } from '../dto/ResponseDTO';
import { IMovieData } from '../helpers/dashboard.interfaces';

@Component({
  selector: 'dimo-moviedetails',
  templateUrl: '../views/moviedetails.component.html',
  styleUrls: ['../styles/scss/moviedetails.component.scss']
})
export class MovieDetailsComponent {

  public moviedetails: IMovieDetailsDTO;

  constructor(private http: HttpClient, private profileService: ProfileService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.doSearch(params['id'])
      }
    });
  }


  public viewDetails(movie: IMovieData) {
    const id = movie.id;
    this.doSearch(id);
  }

  private doSearch(id: string) {
    const url = `/api/movie/${id}`;


    this.http.get(url).subscribe(data => {
      const response = data as ResponseDTO;
      const movieDetails = (response && response.data) ? response.data as unknown as IMovieDetailsDTO : null;
      this.moviedetails = movieDetails;
    });
  }
}
