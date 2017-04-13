import {
  Component,
  Inject,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';
import {AngularFire,FirebaseApp, AuthProviders, AuthMethods } from 'angularfire2';
import { XLargeDirective } from './x-large';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import * as firebase from 'firebase';
@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'login'
  selector: 'login',  // <login></login>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
   
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './forgot.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './forgot.component.html'
})
export class ForgotComponent implements OnInit {
  // Set our default values

   private auth: any;
   email: string;
   errorMsg: string;
  constructor(private af : AngularFire, @Inject(FirebaseApp) fa : any) {
   // this.errorMsg = "HAIST VITTU";
    this.auth = fa.auth();
  }

  // ON INIT SUORITETAAN HETI, KUN SIVULLE TULLAAN

  public ngOnInit() {
   
  }

  

  resetPassword() {
     this.auth.sendPasswordResetEmail(this.email)
        .then( resp => console.log('sent!') )
        .catch(( error) => {
          this.errorMsg = error.message;
        });
  
  }



  
}
