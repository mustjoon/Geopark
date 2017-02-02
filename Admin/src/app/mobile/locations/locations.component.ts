import {AngularFire, FirebaseListObservable} from 'angularfire2';


import { MdlDialogService,
  MdlDialogReference,MdlSnackbarService,IOpenCloseRect } from 'angular2-mdl';
import {
  Component,
  OnInit,
  ViewContainerRef 
} from '@angular/core';

import {
  AgmCoreModule
} from 'angular2-google-maps/core';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */




@Component({
  selector: 'locations',
  templateUrl: 'locations.component.html',
  styleUrls: ['locations.component.css']

})
export class LocationsComponent extends OnInit {
 
  
    locations: FirebaseListObservable<any[]>;
   


    constructor(af: AngularFire){
     super();
     this.locations = af.database.list('geopark_dev/Kohteet');
     console.log(this.locations);
    }

      
    public ngOnInit() { 
      
    }

   


}


  