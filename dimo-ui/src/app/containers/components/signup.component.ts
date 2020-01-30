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
import {ResponseDTO} from "../dto/ResponseDTO";
import {MatSnackBar} from "@angular/material/snack-bar";


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

  constructor(private http: HttpClient, private profileService: ProfileService, private router: Router,private _snackBar: MatSnackBar) {}

  ngOnInit(){
    this.userForm = new FormGroup({
      firstName : new FormControl(null,Validators.required),
      lastName : new FormControl(null,Validators.required),
      email : new FormControl('',[Validators.email,Validators.required]),
      password : new FormControl('', [Validators.required,Validators.minLength(8)]),
      confirmPassword : new FormControl('')
    }, this.checkPasswords);
  }

  checkPasswords(userForm: FormGroup) {
    if(userForm){
      let pass = userForm.get('password') && userForm.get('password').value ?  userForm.get('password').value : '';
      let confirmPass =userForm.get('confirmPassword') &&  userForm.get('confirmPassword').value ?  userForm.get('confirmPassword').value : '';

      return pass === confirmPass ? null : { notSame: true }
    }
    return null;
  }

  message(message: string) {
    this._snackBar.open(message, null, {
      duration: 2000,
    });
  }

  onSignup(){

    const user :IUser = {
      firstName : this.userForm.controls['firstName'].value,
      lastName : this.userForm.controls['lastName'].value,
      email : this.userForm.controls['email'].value,
      password : this.userForm.controls['password'].value

    }

    if(!(user.firstName && user.lastName && user.email && user.password))
      return;

    let headers={
      'Content-Type':'application/json'
    };

    this.http.post("http://dimoapp-env.usymxppnt2.ap-south-1.elasticbeanstalk.com/api/users/register",(user),{headers:headers}).subscribe(data=>{
      let response = data as ResponseDTO;
      console.log(response);
      this.message("User registered successfully. Please proceed to login.");
    },
      err => {
      // let response=err as ResponseDTO
        this.message("User already exists. Please try with different email address.");
        // console.log(response);
        // console.log(err);
        //
        // this.message(response.errorResponse[0].errorMessage);
      });
  }

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return false;
  }

}
