import { MobileComponent } from './mobile.component';
import { MapComponent } from './map/map.component';
import { KohdepisteComponent} from './kohdepiste/kohdepiste.component';
import { LocationsComponent} from './locations/locations.component';
import { LocationComponent} from './location/location.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SettingsComponent } from './settings/settings.component';
import { LogoutComponent } from './logout/logout.component';


export const routes = [
    { path: '', children: [
    { path: '', component: MobileComponent, children: [
    	 {path: 'map', component: MapComponent },
    	 {path: 'kohdepiste/:category/:uid', component: KohdepisteComponent },
    	 {path: 'location/:id', component: LocationComponent},
    	 {path: 'location/:id/:id2', component: LocationsComponent},
    	 {path: 'locations', component: LocationsComponent},
    	 {path: 'locations/location/:id', component: LocationComponent},
         {path: 'home', component: HomeComponent},
         {path: 'home/home/:id', component: HomeComponent},
         {path: 'contact', component: ContactComponent},
         {path: 'contact/contact/:id', component: ContactComponent},
         {path: 'settings', component: SettingsComponent},
         {path: 'settings/settings/:id', component: SettingsComponent},
         {path: 'logout', component: LogoutComponent},
         {path: 'logout/logout/:id', component: LogoutComponent}

    ] },
   
    
  ]},
];
