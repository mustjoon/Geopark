import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';

import { XLargeDirective } from './x-large';
import {AuthService} from '../auth.service';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'login'
  selector: 'login',  // <login></login>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
   
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './login.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  // Set our default values

  // TypeScript public modifiers
  constructor(
    public appState: AppState,
    public auth: AuthService
  
  ) {}

  // ON INIT SUORITETAAN HETI, KUN SIVULLE TULLAAN

  public ngOnInit() {
    console.log('hello `Login` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  public login(username,password) {
    this.auth.login();
  }

  
}
