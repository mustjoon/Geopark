import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
@Injectable()
export class AuthService {

	//FIREBASE 
    af: AngularFire;

    // KIRJAUTUU SISÄÄN
	login(): void{
		console.log("OK");
	}

	// KATSOO ONKO KÄYTTÄJÄ KIRJAUTUNUT SISÄÄN


	isAuthenticated(): boolean{ return true;}

	//KIRJAUTUU ULOS
	logout() : void {
		
	}
}