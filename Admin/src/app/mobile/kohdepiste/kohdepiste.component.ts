import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {ActivatedRoute} from "@angular/router";

import { MdlDialogService,
  MdlDialogReference,MdlSnackbarService,IOpenCloseRect } from 'angular2-mdl';
import {
  Component,
  OnInit,
  ViewContainerRef 
} from '@angular/core';
import 'rxjs/add/operator/map'; // you might need to import this, or not depends on your setup
import 'rxjs/add/operator/finally'; 
import {
  AgmCoreModule
} from 'angular2-google-maps/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';


@Component({
  selector: 'kohdepiste',
  templateUrl: 'kohdepiste.component.html',
  styleUrls: ['kohdepiste.component.css']

})
export class KohdepisteComponent extends OnInit {
 
    // From URL
    category: any;
    uid: any;

    kohde: FirebaseListObservable<any[]>;

    img : any;
    name : any;
    info : any;
    af: any;
    category: any;

    constructor(af: AngularFire, public _routeParams: ActivatedRoute){
       super();           
       this.info = {};
       this.af = af;
    }

     public ngOnInit() { 

      this._routeParams.params
        .subscribe((params) => {
          console.log(params);
          this.category = params['category']; 
          this.uid = params['uid']
        });
     
   
      this.af.database.list('/geopark_dev/Kohteet/' + this.category + "/",
             {query: {orderByKey:true,equalTo: this.uid}}).subscribe(
      val => {    
        console.log(val);
        this.info = val[0];

      });


    
    }

}


  