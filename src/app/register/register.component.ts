import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule, NgForm,FormsModule } from '@angular/forms';
import { MustMatch } from '../_helpers/must-match.validator';
import{AuthService} from'../providers/auth.service'
import {NgModule} from '@angular/core';
import{Router} from '@angular/router'
@NgModule({
  imports: [FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule],
  
  })
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  submitted = false;
  
  constructor(private formBuilder: FormBuilder, private authservice: AuthService,private router: Router) { }

 ngOnInit() {
    this.registerForm = this.formBuilder.group( 
        {
      name: ['', Validators.required],
      role: ['', Validators.required],
      desig: ['', Validators.required],
      pwd: ['', [Validators.required,Validators.minLength(6)]],
     confirmpwd: ['',Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]]
    },
    {
      validator: MustMatch('pwd', 'confirmpwd')
  }
  );
 
}

get name() { return this.registerForm.get('name'); }
get email() { return this.registerForm.get('email'); }
get role() { return this.registerForm.get('role'); }
get desig() { return this.registerForm.get('desig'); }
get pwd() { return this.registerForm.get('pwd'); }
get confirmpwd() { return this.registerForm.get('confirmpwd'); }

onSubmit() {
  const values = this.registerForm.value ;

    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
else{
  this.authservice.SignUp(values.email, values.pwd);
  this.registerForm.reset();
  alert("Your form is submitted.");
  this.router.navigate(["dashboard"]);
}
}
}
