import {Component} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ProfileService} from "../../services/ProfileService";
import {LoginResponseDTO} from "../dto/LoginResponseDTO";
import {Router} from "@angular/router";

@Component({
  selector: "dimo-login",
  templateUrl: '../views/login.component.html',
  styleUrls: ['../styles/scss/dashboard.component.scss']
})

export class LoginComponent {

  hide= true;

  constructor(private http: HttpClient, private profileService: ProfileService, private router: Router) {
  }


  onSubmit(form: NgForm) {
    console.log(form.value.password);
    console.log(form.value.email)

    var credentials = {
      email: form.value.email,
      passwordHash: form.value.password
    };

    this.http.post("http://localhost:5000/api/users/login", credentials)
      .subscribe(data => {
        let response = data as LoginResponseDTO;
        this.profileService.setToken(response.token);
        this.router.navigate(["dashboard"]);
      });
  }
}

