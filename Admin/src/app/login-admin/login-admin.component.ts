import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';
import {AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { XLargeDirective } from './x-large';

import {Router} from '@angular/router';
@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'login'
  selector: 'login',  // <login></login>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
   
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './login-admin.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './login-admin.component.html'
})
export class LoginAdminComponent implements OnInit {
  // Set our default values

  email: string;
  password: string;
  // TypeScript public modifiers
  constructor(
    public appState: AppState,
    public af: AngularFire,
    private router: Router
  
  ) {
     this.af.auth.subscribe(auth => console.log(auth));
  }

  // ON INIT SUORITETAAN HETI, KUN SIVULLE TULLAAN

  public ngOnInit() {
    console.log('hello `Login` component');
    this.af.auth.logout();
  }

  

  login() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    }).then(res=>  this.router.navigateByUrl('mobile/map'))
  }
  overrideLogin() {
    this.af.auth.login({
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous,
    });
  }

  emailLogin(){
    this.af.auth.login({
      email: this.email,
      password: this.password
    },
    {
      provider: AuthProviders.Password,
      method: AuthMethods.Password,
    }).then(res=>  this.router.navigateByUrl('secure'))
    .catch(err => console.log("error"))
    
  }



  
}
