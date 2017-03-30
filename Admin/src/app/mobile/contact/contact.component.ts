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
  selector: 'contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.css']

})
export class ContactComponent extends OnInit {

  contact_header: any;
  contact_info: any;
  afs: any;
  time: any;

	constructor(af: AngularFire, private _routeParams: ActivatedRoute){
        super();
        this.afs = af;
        this.time = new Date().getTime().toString();
    }

	public ngOnInit() { 
      
    }

  public Send()
    {
        this.afs.database.list("/geopark_dev/Yhteys/").
        push({Aika: this.time, Otsikko: this.contact_header, Sisalto: this.contact_info});
    }
}
