import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { routes } from './mobile.routes';
import { MobileComponent } from './mobile.component';
import { LocationsComponent } from './locations/locations.component';
import { LocationComponent } from './location/location.component';
import { KohdepisteComponent } from './kohdepiste/kohdepiste.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SettingsComponent } from './settings/settings.component';
import { LogoutComponent } from './logout/logout.component';
import { MapModule } from './map/map.module';
import { MdlModule } from 'angular2-mdl';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



console.log('`Barrel` bundle loaded asynchronously');

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    MobileComponent,
    LocationsComponent,
    LocationComponent,
    KohdepisteComponent,
    HomeComponent,
    ContactComponent,
    SettingsComponent,
    LogoutComponent

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
export class MobileModule {
  public static routes = routes;
}
