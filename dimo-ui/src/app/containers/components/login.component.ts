import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProfileService } from "../../services/ProfileService";
import { LoginResponseDTO } from "../dto/LoginResponseDTO";
import { Router } from "@angular/router";

@Component({
  selector: "dimo-login",
  templateUrl: '../views/login.component.html',
  styleUrls: ['../styles/scss/login.component.scss']
})

export class LoginComponent {

  public hide = true;
  public showErr = false;

  constructor(private http: HttpClient, private profileService: ProfileService, private router: Router) {
  }


  onSubmit(form: NgForm) {
    const credentials = {
      email: form.value.email,
      password: form.value.password
    };

    this.http.post("/api/users/login", credentials)
      .subscribe(data => {
        const response = data as LoginResponseDTO;
        this.profileService.setToken(response.token);
        this.router.navigate(["dashboard"]);
      }, err => {
        this.showErr = true;
        console.log(err);
      });
  }
}

