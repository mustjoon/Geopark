import { SecureComponent } from './secure.component';
import { MapComponent } from './map/map.component';
import { PolkuComponent } from './polku/polku.component';
import { Contact_InfoComponent } from './contact_info/contact_info.component';
import { NoContentComponent } from './no-content/no-content.component';
export const routes = [
    { path: '', children: [
    { path: '', component: SecureComponent, children: [
    	 { path: 'map', component: MapComponent },
    	 { path: 'polku', component: PolkuComponent },
    	 { path: 'contact_info', component: Contact_InfoComponent },
    	 { path: '**', component: NoContentComponent}
    ] },
  ]},
    { path: 'test',  component: MapComponent },
];
