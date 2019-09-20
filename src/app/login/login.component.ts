import { Component, OnInit } from '@angular/core';
import{AuthService} from '../providers/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import{MemberComponent} from '../member/member.component'
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [
    
    MemberComponent
  ],
 
})
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  submitted = false;
  
  constructor(private formBuilder: FormBuilder, private authservice: AuthService,private router: Router){}
  ngOnInit() {
    this.loginForm = this.formBuilder.group( 
      {
    pwd: ['', [Validators.required,Validators.minLength(6)]],
    email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]]
       } );
  
      }
  

  onSubmit(){
    const values = this.loginForm.value ;

if (this.loginForm.invalid) {
  alert("Incorrect credentials");
   return;
}
else{
  this.authservice.Login(values.email, values.pwd);
this.loginForm.reset();
 alert("Login successfull.");
 this.router.navigate(["member"]);

}
  }

}
