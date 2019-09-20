import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase'
import { Router, ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { 

   
  }

 
 isLoggedIn():boolean{
firebase.auth().onAuthStateChanged(function(user) {
      if (user.email) 
        return true;
       else 
      return false;
      

    });
    return true;
  }

 SignUp( email :string, password :string){
 firebase.auth().createUserWithEmailAndPassword(email, password)
   error=> console.log(error)
   
  }

  
  Login(email: string, password : string){
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(
     response=>console.log("login successful"),
     
 
     
      )
    .catch(


    );
   
   }

  
}
