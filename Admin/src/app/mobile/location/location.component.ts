import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {ActivatedRoute} from "@angular/router";
import {googleMapsServiceFinal} from '../../googleMapsService';
import { MdlDialogService,
  MdlDialogReference,MdlSnackbarService,IOpenCloseRect } from 'angular2-mdl';
import {
  Component,
  OnInit,
  ViewContainerRef 
} from '@angular/core';
import 'rxjs/add/operator/map'; // you might need to import this, or not depends on your setup
import 'rxjs/add/operator/finally';
import 'rxjs/add/observable/forkJoin';
import { Observable } from 'rxjs/Observable'; 

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
    distances : any[];
    routes: FirebaseListObservable<any[]>;
    pos: any;
    afs: any;
    observables : any[];

    constructor(af: AngularFire, private _routeParams: ActivatedRoute){
        super();
        this.pos = {};
        this.observables = [];
        this.afs = af;
        this.distances = [];
        
        this._routeParams.params.subscribe(params => {
          this.id = params['id'];   
         
          console.log(this.id);
          this.routes = af.database.list('/geopark_dev/Reitit/' + this.id + "/");
        });
    }

    public ngOnInit() {
      let getDistance = this.getDistance;
      let observables = this.observables;
      let id = this.id;
      let afs = this.afs;
      
      let distances = this.distances;
      let pos = this.pos;
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

           
          });
        }
        else {
          pos = {lat:0, lng:0};
        }
      

     // let 
     let mySub = this.afs.database.list('/geopark_dev/Reitit/' + id + "/").map(function(data){
              data.map(function(route){
                let sub = afs.database.list('/geopark_dev/Kohteet/' + route.Pisteet[0].category+ "/",
                  {query: {orderByKey:true,equalTo: route.Pisteet[0].id}}).take(1);
                 observables.push(sub); 
              })
          }).finally(function(data){ 
            let suz =  observables.length ?  Observable.forkJoin(observables) : Observable.of([]);
                suz.subscribe(data => {
                  data.map(function(data){
                    let distance = getDistance(
                        new google.maps.LatLng(pos), 
                        new google.maps.LatLng({lat:data[0].latitude, lng: data[0].longitude})
                    );      
                  distances.push(Math.round(distance/1000));
                  })        
                })
          }).subscribe(function(data){
            mySub.unsubscribe();
          })
        
      
    }
    public getDistance = function(p1, p2) {
        var rad = function(x) {
            return x * Math.PI / 180;
        };

        var R = 6378137; // Earth’s mean radius in meter
        var dLat = rad(p2.lat() - p1.lat());
        var dLong = rad(p2.lng() - p1.lng());
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(rad(p1.lat())) * Math.cos(rad(p2.lat())) *
        Math.sin(dLong / 2) * Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d; // returns the distance in meter
    };

}


  