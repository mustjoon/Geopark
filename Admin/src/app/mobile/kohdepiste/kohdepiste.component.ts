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

    constructor(af: AngularFire, private _routeParams: ActivatedRoute){
        super();

        this._routeParams.params.subscribe(params => {
            this.category = params['category'];   
            this.uid = params['uid'];   

            this.kohde = af.database.list('/geopark_dev/Kohteet/' + this.category + "/",
             {query: {orderByKey:true,equalTo: this.uid}});
            console.log('/geopark_dev/Kohteet/' + this.category + "/");
            console.log(this.uid);
        });

    }

    public ngOnInit() { 

        /*let img = this.img;
        let name = this.name;
        let info = this.info;

        this.kohde.subscribe(val => 
        {
            val.map(function(v)
            {
                if(v.$key == "img")
                    img = v.$value;
                else if(v.$key == "name")
                    name = v.$value;
                else if(v.$key == "info")
                    info = v.$value;

                console.log(v);
            });
        });

        console.log(img,name,info);*/
    }

}


  