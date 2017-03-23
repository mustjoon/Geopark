import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {ActivatedRoute} from "@angular/router";

import { MdlDialogService,
  MdlDialogReference,MdlSnackbarService,IOpenCloseRect } from 'angular2-mdl';
import {
  Component,
  OnInit,
  ViewContainerRef,
  ViewEncapsulation 
} from '@angular/core';

import {
  AgmCoreModule
} from 'angular2-google-maps/core';




@Component({
  selector: 'contact_info',
  templateUrl: 'contact_info.component.html',
  styleUrls: ['contact_info.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class Contact_InfoComponent extends OnInit {
 
  allComplains: FirebaseListObservable<any[]>;

  constructor(af: AngularFire, private _routeParams: ActivatedRoute){
        super();
        this.allComplains = af.database.list('/geopark_dev/Yhteys');
    }

 
    public ngOnInit() { 

       
    }

  }