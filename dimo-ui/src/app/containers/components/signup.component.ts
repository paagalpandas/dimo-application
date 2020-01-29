import {Component} from "@angular/core";
import {FormControl, Validators, AbstractControl, NgForm, FormGroup} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {ProfileService} from "../../services/ProfileService";
import {Router} from "@angular/router";
import {ICategory} from "../helpers/dashboard.interfaces";
import {IUser} from "../helpers/entrypoint.interfaces";
import {LoginResponseDTO} from "../dto/LoginResponseDTO";


@Component({
  selector: "dimo-signup",
  templateUrl: '../views/signup.component.html',
  styleUrls: ['../styles/scss/signup.component.scss']
})
export class SignUpComponent{

  public User: IUser;

  constructor(private http: HttpClient, private profileService: ProfileService, private router: Router) {
  }


  emailFormControl=new FormControl('',Validators.email);


  passwordFormControl=new FormControl('',
    [Validators.required,Validators.minLength(8)]
    );

  hide =true;

  checkPasswords(signupgroup: FormGroup) {
    let pass = signupgroup.get('password').value;
    let confirmPass = signupgroup.get('confirmPass').value;

    return pass === confirmPass ? null : { notSame: true }
  }


  onSignup(form:NgForm){
    console.log(form.value);


    let User;
    this.http.post("http://localhost:5000/api/users/register",(User)).subscribe(data=>{
      let response = data as LoginResponseDTO;
      this.profileService.setToken(response.token);

      // this.router.navigate(["dashboard"]);
    });
  }


}
