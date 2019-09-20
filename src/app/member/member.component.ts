import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { jqxSchedulerModule } from '../../../node_modules/jqwidgets-ng/jqxscheduler';
import { jqxButtonModule } from '../../../node_modules/jqwidgets-ng/jqxbuttons';
import { SchedulerComponent } from '../scheduler/scheduler.component';
import{AuthService} from '../providers/auth.service'
import * as firebase from 'firebase'
@NgModule({
  
  imports: [
   
    jqxSchedulerModule,jqxButtonModule,
    SchedulerComponent
  ]
})
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
email:string;
username: string;


  constructor(private authservice: AuthService) {

   this.email= firebase.auth().currentUser.email
    let indexOfAt = this.email.indexOf('@');
 
    this.username= this.email.substring(0,indexOfAt)
   }
  

  ngOnInit() {
  }
  
}
