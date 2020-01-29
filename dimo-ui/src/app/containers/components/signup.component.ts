import {Component} from "@angular/core";
import { FormControl, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: "dimo-signup",
  templateUrl: '../views/signup.component.html',
  styleUrls: ['../styles/scss/signup.component.scss']
})
export class SignUpComponent{
  emailFormControl=new FormControl('',Validators.email);
  passwordFormControl=new FormControl('',
    [Validators.required,Validators.minLength(8)]
    );

    
  hide =true;


  // static passwordMatchValidator(control: AbstractControl) {
  //   const password: string = control.get('password').value; // get password from our password form control
  //   const confirmPassword: string = control.get('confirmPassword').value; // get password from our confirmPassword form control
  //   // compare is the password math
  //   if (password !== confirmPassword) {
  //     // if they don't match, set an error in our confirmPassword form control
  //     control.get('confirmPassword').setErrors({ NoPassswordMatch: true });
  //   }
  // }

  // password(formControl:FormControl){

  // }


     
}
