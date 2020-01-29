import {Component} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ProfileService} from "../../services/ProfileService";
import {LoginResponseDTO} from "../dto/LoginResponseDTO";
import {Router} from "@angular/router";

@Component({
  selector: "dimo-login",
  templateUrl: '../views/login.component.html',
  styleUrls: ['../styles/scss/login.component.scss']
})
export class LoginComponent {

  constructor(private http: HttpClient, private profileService: ProfileService, private router: Router) {
  }


  onSubmit(f: NgForm) {
    console.log(f.value.password);
    console.log(f.value.email)

    var credentials = {
      email: f.value.email,
      password: f.value.password
    };

    this.http.post("http://localhost:5000/api/users/login", credentials)
      .subscribe(data => {
        let response = data as LoginResponseDTO;
        this.profileService.setToken(response.token);
        this.router.navigate(["dashboard"]);
      });
  }

}

