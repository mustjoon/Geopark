import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { routes } from './login.routes';
import { LoginComponent } from './login.component';
import { MdlModule } from 'angular2-mdl';




console.log('`Login` bundle loaded asynchronously');

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MdlModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB9ZP_cBqTRe2cMhbqKqWCPBnbBoflO4Cc'
    })
  ],
})
export class LoginModule {
  //public static routes = routes;
}
