import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import {Router} from '@angular/router';
import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable} from 'angularfire2';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router, public af: AngularFire ) {}

  canActivate() {
    
  	return this.af.auth.map((auth) => {
        if (!auth) {
          this.router.navigateByUrl('login');
          return false;
        }
        return true;
    }).take(1);
   
  }
}