import { SecureComponent } from './secure.component';
import { MapComponent } from './map/map.component';
import { PolkuComponent } from './polku/polku.component';
import { NoContentComponent } from './no-content/no-content.component';
export const routes = [
    { path: '', children: [
    { path: '', component: SecureComponent, children: [
    	 { path: 'map', component: MapComponent },
    	 { path: 'polku', component: PolkuComponent },
    	 { path: '**', component: NoContentComponent}
    ] },
  ]},
    { path: 'test',  component: MapComponent },
];
