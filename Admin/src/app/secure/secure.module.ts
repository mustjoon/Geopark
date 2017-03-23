import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { routes } from './secure.routes';
import { SecureComponent } from './secure.component';
import { NoContentComponent } from './no-content/no-content.component';
import { PolkuComponent } from './polku/polku.component';
import { MapModule } from './map/map.module';
import { Contact_InfoComponent } from './contact_info/contact_info.component';

import { MdlModule } from 'angular2-mdl';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



console.log('`Barrel` bundle loaded asynchronously');

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    SecureComponent,
    NoContentComponent,
    PolkuComponent,
    Contact_InfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MdlModule,
    MapModule,
    NgbModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB9ZP_cBqTRe2cMhbqKqWCPBnbBoflO4Cc'
    })
  ],
})
export class SecureModule {
  public static routes = routes;
}
