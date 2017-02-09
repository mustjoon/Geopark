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
 
  
    spots: FirebaseListObservable<any[]>;
    id:any;
    map: any;
    items: any[];


    constructor(af: AngularFire,private _routeParams: ActivatedRoute){
     super();
       this._routeParams.params.subscribe(params => {
        this.id = params['id'];   
    });



     this.spots = af.database.list('geopark_dev/Kohteet/'+this.id);

    
      
    }

      
    public ngOnInit() { 
      
       var mapProp = {
              center: new google.maps.LatLng(51.508742, -0.120850),
              zoom: 5,
              mapTypeId: google.maps.MapTypeId.ROADMAP
          };

         this.map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
         let map = this.map;

         console.log(this.items);

          this.spots.subscribe(x => {
            console.log(map);
            this.items = x;
            
            this.items.map(function(value){

              console.log(value);
             var marker = new google.maps.Marker({
                position: new google.maps.LatLng(value.latitude, value.longitude),
                map: map,
                title: 'Hello World!'
              });
              
           })
          });
        
         /*
         this.items.map(function(x){
           var marker = new google.maps.Marker({
            position: [x.lat,x.lng],
            map: map,
            title: 'Hello World!'
        });
         })
         */
       
        // let SLPLayer = this.googleMapsService.getSLPlayer(map);
       //  this.map.overlayMapTypes.push(SLPLayer);
     
          let temp = this;
          map.addListener("click", function(e){
           // temp.addMarker(e.latLng);
          });
    
    }

   


}


  