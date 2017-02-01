import { SecureComponent } from './secure.component';
import { MapComponent } from './map/map.component';

export const routes = [
    { path: '', children: [
    { path: '', component: SecureComponent, children: [
    	 { path: 'map', component: MapComponent }
    ] },
   
    
  ]},
    { path: 'test',  component: MapComponent },
];
