import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchedulerComponent } from './scheduler/scheduler.component'
import { RegisterComponent } from './register/register.component'
import { LoginComponent } from './login/login.component'
import { MemberComponent } from './member/member.component'
import{DashboardComponent} from './dashboard/dashboard.component'
import{RoomsComponent} from './rooms/rooms.component'



export const routes: Routes = [
  {
    path: 'scheduler',
    component: SchedulerComponent
  },
  {
    path: 'member',
    component: MemberComponent,
    data: { requiresLogin: true }
  },
  {
    path: 'register',
    component: RegisterComponent
  }, 
  {
    path: 'login',
    component: LoginComponent
  }, {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'rooms',
    component: RoomsComponent
  },
    
  
];
@NgModule({
  declarations: [
  
   
    
  ],
  imports: [
   
 
    RouterModule.forRoot(routes)
   
    
  ],
  providers: [
    
  ],
  bootstrap: []
})
export class AppRoutingModule{}
