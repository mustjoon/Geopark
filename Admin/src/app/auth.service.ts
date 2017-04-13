import { Injectable } from '@angular/core';
import * as Firebase from 'firebase';
import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable} from 'angularfire2';
@Injectable()
export class AuthService {

	logged: boolean= false;
	 firebaseAuth: FirebaseAuth;
  	 private _firebase: Firebase;

	constructor( public af: AngularFire){

		 this.firebaseAuth = AngularFire.auth;
     //this.firebaseAuth = firebas
    // this._firebase = new Firebase('https://geo-planner.firebaseio.com/');
		 af.auth.subscribe(
      (auth) => {
      	if(auth){
      		this.logged = true;
      	}
      	this.logged = true;
      })
		
	 }
	

	//FIREBASE 
    

    // KIRJAUTUU SISÄÄN
	login(): void{
		console.log("OK");
	}

	// KATSOO ONKO KÄYTTÄJÄ KIRJAUTUNUT SISÄÄN


	 isAuthenticated():  boolean{
	 	console.log(this.logged);
	 	return this.logged;
	 }

		
		//this.af.auth.logout();
		

	//KIRJAUTUU ULOS
	logout() : void {
		
	}

	resetPassword(email): Promise<void> {
    this.firebaseAuth.sendPasswordResetEmail(emailAddress).then(function() {
  // Email sent.
}, function(error) {
  // An error happened.
});
  }

  changePassword(credentials: FirebaseChangePasswordCredentials): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this._firebase.changePassword(credentials, error => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }

  changeEmail(credentials: FirebaseChangeEmailCredentials): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this._firebase.changeEmail(credentials, error => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }


}