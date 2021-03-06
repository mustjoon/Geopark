import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { routes } from './barrel.routes';
import { BarrelComponent } from './barrel.component';
import { MdlModule } from 'angular2-mdl';
import {ModalComponent} from './Modal/modal.component';



console.log('`Barrel` bundle loaded asynchronously');

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    BarrelComponent,
    ModalComponent,
   
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
export class BarrelModule {
  public static routes = routes;
}
