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




@Component({
  selector: 'settings',
  templateUrl: 'settings.component.html',
  styleUrls: ['settings.component.css']

})
export class SettingsComponent extends OnInit {

	constructor(af: AngularFire, private _routeParams: ActivatedRoute){
        super();
    }

	public ngOnInit() { 
      
    }
}
