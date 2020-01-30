import {Component, OnInit} from "@angular/core";
import {
  FormControl,
  Validators,
  AbstractControl,
  NgForm,
  FormGroup,
  FormBuilder,
  FormGroupDirective
} from '@angular/forms';

import {HttpClient} from "@angular/common/http";
import {ProfileService} from "../../services/ProfileService";
import {Router} from "@angular/router";
import {IUser} from "../helpers/entrypoint.interfaces";
import {LoginResponseDTO} from "../dto/LoginResponseDTO";
import {ErrorStateMatcher} from "@angular/material/core";


@Component({
  selector: "dimo-signup",
  templateUrl: '../views/signup.component.html',
  styleUrls: ['../styles/scss/signup.component.scss']
})
export class SignUpComponent implements ErrorStateMatcher,OnInit{

  public User: IUser;

  public userForm: FormGroup;
  public submitted = false;
  hide: boolean=true;
  name: string;
  email:string;

  constructor(private http: HttpClient, private profileService: ProfileService, private router: Router) {}

  ngOnInit(){
    this.userForm = new FormGroup({
      firstName : new FormControl(null,Validators.required),
      lastName : new FormControl(null,Validators.required),
      email : new FormControl('',[Validators.email,Validators.required]),
      password : new FormControl('', [Validators.required,Validators.minLength(8)]),
      confirmPassword : new FormControl('', [Validators.required,Validators.minLength(8),this.checkPasswords])
    });
  }

  checkPasswords(userForm: FormGroup) {
    if(userForm){
      let pass = userForm.get('password') && userForm.get('password').value ?  userForm.get('password').value : '';
      let confirmPass =userForm.get('confirmPassword') &&  userForm.get('confirmPassword').value ?  userForm.get('confirmPassword').value : '';

      return pass === confirmPass ? null : { notSame: true }
    }
    return null;
  }


  onSignup(){

    const user :IUser = {
      firstName : this.userForm.controls['firstName'].value,
      lastName : this.userForm.controls['lastName'].value,
      email : this.userForm.controls['email'].value,
      password : this.userForm.controls['password'].value

    }

    this.http.post("http://dimoapp-env.usymxppnt2.ap-south-1.elasticbeanstalk.com/api/users/register",(user)).subscribe(data=>{
      let response = data as LoginResponseDTO;
      this.profileService.setToken(response.token);
    });
  }

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return false;
  }


}
