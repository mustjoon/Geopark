import { MobileComponent } from './mobile.component';
import { MapComponent } from './map/map.component';
import { KohdepisteComponent} from './kohdepiste/kohdepiste.component';
import { LocationsComponent} from './locations/locations.component';
import { LocationComponent} from './location/location.component';

export const routes = [
    { path: '', children: [
    { path: '', component: MobileComponent, children: [
    	 {path: 'map', component: MapComponent },
    	 {path: 'kohdepiste/:category/:uid', component: KohdepisteComponent },
    	 {path: 'location/:id', component: LocationComponent},
    	 {path: 'location/:id/:id2', component: LocationsComponent},
    	 {path: 'locations', component: LocationsComponent},
    	 {path: 'locations/location/:id', component: LocationComponent}
    ] },
   
    
  ]},
];
