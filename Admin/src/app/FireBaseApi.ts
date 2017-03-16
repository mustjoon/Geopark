import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
@Injectable()
export class FireBaseApi {

	af: any;
	allSpots : FirebaseListObservable<any[]>;
	//af:  FirebaseListObservable<any[]>;

	constructor(af: AngularFire){

		this.af = af;
		this.allSpots = af.database.list('')
	}

	public getKohteet(){
		let allSpots = thi
	}

}