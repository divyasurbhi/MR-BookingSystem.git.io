import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routes } from './app.routing';
import { RouterModule, RouteReuseStrategy } from '@angular/router';
import * as firebase from 'firebase';
import { AppComponent } from './app.component';
import { jqxSchedulerModule } from '../../node_modules/jqwidgets-ng/jqxscheduler';
import { jqxButtonModule } from '../../node_modules/jqwidgets-ng/jqxbuttons';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MemberComponent } from './member/member.component'
import{AccessGuardGuard} from './providers/access-guard.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoomsComponent } from './rooms/rooms.component';

import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';


export const firebaseConfig = {
  apiKey: "AIzaSyBYNnqzJ2NAkX0oBjsraVbPRPwhb8CA7Lg",
  authDomain: "mr-bookingsystem.firebaseapp.com",
  databaseURL: "https://mr-bookingsystem.firebaseio.com",
  projectId: "mr-bookingsystem",
  storageBucket: "mr-bookingsystem.appspot.com",
  messagingSenderId: "868051752893",
  appId: "1:868051752893:web:b7ba2f93fa977428"
};
firebase.initializeApp(firebaseConfig);




@NgModule({
  declarations: [
    AppComponent,
    SchedulerComponent,
    RegisterComponent,
    LoginComponent,
    MemberComponent,
    DashboardComponent,
    RoomsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    jqxSchedulerModule,jqxButtonModule,
    FormsModule,ReactiveFormsModule,
    ScheduleModule
  ],
  providers: [
    AccessGuardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
  constructor(){
    
  }
  getUser(){
    let fireBaseUser = firebase.auth().currentUser;
  console.log(fireBaseUser);
  }
}
