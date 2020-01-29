import {Component, OnInit} from '@angular/core';
import {ICategory} from '../helpers/dashboard.interfaces';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ProfileService} from "../../services/ProfileService";
import {Router} from "@angular/router";


@Component({
  selector: "dimo-entrypoint",
  templateUrl: '../views/entrypoint.component.html',
  styleUrls: ['../styles/scss/entrypoint.component.scss']
})
export class EntryPointComponent{

  public categories: Array<ICategory>;

  constructor(private http: HttpClient, private profileService: ProfileService) {

  }

}
