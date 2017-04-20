import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {ActivatedRoute,Router} from "@angular/router";

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

  text;
  editedInfo = false;
  editedHead = false;

	constructor(af: AngularFire, private _routeParams: ActivatedRoute, private router: Router){
      super();
      this.afs = af;
      this.time = new Date().getTime().toString();
  }

	public ngOnInit() { 
      
  }

  public Send()
  {
      this.text = "";
      this.editedHead = false;
      this.editedInfo = false;

      if (this.contact_header == undefined || this.contact_header == ""){
        this.editedHead = true;
        this.text += "Anna otsikko\n";
      }
      if (this.contact_info == undefined || this.contact_info == ""){
        this.editedInfo = true;
        this.text += "Anna infoo";
      }
      if (this.text != ""){
        console.log(this.text);
        return;
      }
      else{
      this.afs.database.list("/geopark_dev/Yhteys/").
      push({Aika: this.time, Otsikko: this.contact_header, Sisalto: this.contact_info});
      this.router.navigateByUrl('/mobile/thanks');
    }
  }
  
}
