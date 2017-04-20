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
  selector: 'thanks',
  templateUrl: 'thanks.component.html',
  styleUrls: ['thanks.component.css']

})
export class ThanksComponent extends OnInit {

	constructor(af: AngularFire, private _routeParams: ActivatedRoute){
        super();
    }

	public ngOnInit() { 
      
    }
}
