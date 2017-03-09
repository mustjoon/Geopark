import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {ActivatedRoute} from "@angular/router";

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
  selector: 'location',
  templateUrl: 'location.component.html',
  styleUrls: ['location.component.css']

})
export class LocationComponent extends OnInit {
 
    id: any;
    routes: FirebaseListObservable<any[]>;

    constructor(af: AngularFire, private _routeParams: ActivatedRoute){
        super();
        this._routeParams.params.subscribe(params => {
          this.id = params['id'];   
          console.log(this.id);
          this.routes = af.database.list('/geopark_dev/Reitit/' + this.id + "/");
          console.log(this.routes);
        });
    }

    public ngOnInit() { 
      
    }

}


  