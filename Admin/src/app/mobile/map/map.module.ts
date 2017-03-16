import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { MapComponent } from './map.component';
import { MdlModule } from 'angular2-mdl';
import {ModalComponent} from './Modal/modal.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { routes } from './map.routes';

console.log('`Barrel` bundle loaded asynchronously');

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    MapComponent,
    ModalComponent,
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    MdlModule,
    NgbModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB9ZP_cBqTRe2cMhbqKqWCPBnbBoflO4Cc'
    }),

  ],
  entryComponents : [
  ModalComponent
  ],
  exports : [
  MapComponent,
  RouterModule
  ]
 
})
export class MapModule {
  public static routes = routes;
}
