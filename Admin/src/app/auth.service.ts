import { Injectable } from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable} from 'angularfire2';
@Injectable()
export class AuthService {

	logged: boolean= false;

	constructor( public af: AngularFire){
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
}