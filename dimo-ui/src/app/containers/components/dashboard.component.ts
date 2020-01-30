import { Component, OnInit } from '@angular/core';
import { ICategory } from '../helpers/dashboard.interfaces';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ProfileService } from "../../services/ProfileService";



@Component({
  selector: 'dimo-dashboard',
  templateUrl: '../views/dashboard.component.html',
  styleUrls: ['../styles/scss/dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public categories: Array<ICategory>;

  constructor(private http: HttpClient, private profileService: ProfileService) {

  }

  ngOnInit() {
    let header = new HttpHeaders();
    header = header.append('Authorization', 'Bearer ' + this.profileService.getToken());

    this.http.get('/api/dashboard', { headers: header }).subscribe(data => {
      this.categories = data as Array<ICategory>;
    });
  }
}
