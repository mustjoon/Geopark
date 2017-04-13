import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {googleMapsService} from './googleMaps.service';
import { Overlay } from 'angular2-modal';
 import {ModalComponent} from './Modal/modal.component';
import { MdlDialogService,
  MdlDialogReference,MdlSnackbarService,IOpenCloseRect } from 'angular2-mdl';
  import {Renderer} from '@angular/core';
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
  selector: 'map',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.css'],
  providers: [ModalComponent,googleMapsService]
})
export class MapComponent extends OnInit {
 
    categories: FirebaseListObservable<any[]>;
    id: any;
    distances : any[];
    routes: FirebaseListObservable<any[]>;
    pos: any;
    afs: any;
    observables : any[];

    allData: any[];


    constructor(af: AngularFire, private render:Renderer){
        super();
        this.allData =  [];
        this.pos = {};
        
        this.observables = [];
        this.afs = af;
        this.distances = [];
        this.categories = af.database.list('/geopark_dev/config/Reitit_Kategoriat');
        
    }

      
     public ngOnInit() {
      let getDistance = this.getDistance;
      let observables = this.observables;
      let id = this.id;
      let afs = this.afs;
      let allData = this.allData;
      
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
      

        //HAETAAN KATEGORIAT

     this.categories = this.afs.database.list('/geopark_dev/config/Reitit_Kategoriat').map(function(data,value){
         data.map(function(val,index){
            allData[index] = {};
           allData[index].cat = val.$value;
           allData[index].routes = [];
           observables = [];
           let mySub = afs.database.list('/geopark_dev/Reitit/' + val.$value + "/").map(function(data,dind){
               console.log("WHAT",data);
              data.map(function(route,i){
                console.log(route);
                console.log(i);
                allData[index].routes[i] = {};
                allData[index].routes[i].name = route.Nimi;

                console.log("VOIASJDOIASJDOas");
                let sub = afs.database.list('/geopark_dev/Kohteet/' + route.Pisteet[0].category+ "/",
                  {query: {orderByKey:true,equalTo: route.Pisteet[0].id}}).take(1);
                 observables.push(sub); 
              })
          }).finally(function(data){ 
            var i = 0;
            let suz =  observables.length ?  Observable.forkJoin(observables) : Observable.of([]);
                suz.subscribe(data => {
                  console.log("REITIT?",data);
                  data.map(function(data){
                    let distance = getDistance(
                        new google.maps.LatLng(pos), 
                        new google.maps.LatLng({lat:data[0].latitude, lng: data[0].longitude})
                    ); 
                 
                  allData[index].routes[i].distance = Math.round(distance/1000);
                 
                  distances.push(Math.round(distance/1000));
                  i++; 
                  })    
              
                })
               
          }).subscribe(function(data){
            mySub.unsubscribe();
          })
          

         })
      

     })



    
        
      
    }


    


    public OpenCategory(event:any){

        // is active or not
        let hasClass = event.currentTarget.classList.contains('active'));

        if(hasClass){ // item is open
            this.render.setElementClass(event.currentTarget,"active",false); // close
        }else if(!hasClass){ // item is closed
            this.render.setElementClass(event.currentTarget,"active",true); // open
        }
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