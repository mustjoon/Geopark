import { SecureComponent } from './secure.component';
import { MapComponent } from './map/map.component';
import {NoContentComponent} from './no-content/no-content.component';
export const routes = [
    { path: '', children: [
    { path: '', component: SecureComponent, children: [
    	 { path: 'map', component: MapComponent },
    	 { path: '**', component: NoContentComponent}
    ] },
  ]},
    { path: 'test',  component: MapComponent },
];
