import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {googleMapsService} from '../../secure/map/googleMaps.service';
import {ActivatedRoute} from "@angular/router";
import {Router} from '@angular/router';
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
import {
  AgmCoreModule
} from 'angular2-google-maps/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */


@Component({
  selector: 'locations',
  templateUrl: 'locations.component.html',
  styleUrls: ['locations.component.css'],
  providers: [googleMapsService,googleMapsServiceFinal]
})
export class LocationsComponent extends OnInit {
 
  
    locations: FirebaseListObservable<any[]>;
    id:any;
    routeName: any;
    map: any;
    afs: any;
    user_pos: any;
    user_icon: string;
    marker_icon_locked : string;
    marker_icon_tree : string;
    observables : any[];
    categories : any [];
    markers: any[];
    markerData: any[];
    md : any[];

    router: Router;

    constructor(af: AngularFire, private _routeParams: ActivatedRoute,private gMapsServ : googleMapsServiceFinal, private googleMapsService : googleMapsService, _router: Router){
      super();
      this.afs = af;
      this.markers = [];
      this.markerData = [];
      this.md = [];
      this.observables = [];
      this.categories = [];
      this._routeParams.params.subscribe(params => {
        this.id = params['id'];
        this.routeName = params['id2'];
        this.locations = af.database.list('/geopark_dev/Reitit/' + this.id + "/",
          {query: {orderByKey:true,equalTo:this.routeName}});
      });
      this.user_icon = "../../assets/img/person_icon.png";
      this.marker_icon_locked = "../../assets/img/marker_locked.png";
      this.marker_icon_tree = "../../assets/img/marker_puu.png";

      this.router = _router;
    }

      
    public ngOnInit() { 
       let gMapsServ = this.gMapsServ;
       let map = gMapsServ.initMap();
       this.map = map;
       let SLPLayer = this.gMapsServ.getSLPlayer(map);
       this.map.overlayMapTypes.push(SLPLayer);


       this.user_pos = new google.maps.Marker({
            position: {lat: 0, lng: 0},
            map: map,
            icon: this.user_icon
        });

        let getDistance = this.getDistance;
        let user_pos = this.user_pos;
        let markers = this.markers;
        let markerData = this.markerData;
        let md = this.md;

        let marker_icon_locked = this.marker_icon_locked;
        let marker_icon_tree = this.marker_icon_tree;
        
        setInterval(function(){ 

            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(function(position) {

                var pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
                };

                md.map(function(val, index){
                    let distance = getDistance(
                        new google.maps.LatLng(pos), 
                        val.position
                    );
                  
                    if(markerData[index].previewDist == 0){
                        val.setIcon(marker_icon_tree);
                        val.locked = false;
                    }
                    else if(distance < markerData[index].previewDist)
                    {
                        val.setIcon(marker_icon_tree);
                        val.locked = false;
                    }
                    else
                    {
                        val.setIcon(marker_icon_locked);
                        val.locked = true;
                    }
                    
                });

                var gmPos = new google.maps.LatLng(pos);
                user_pos.setPosition(gmPos);
              });
            } else {
                var infoWindow = new google.maps.InfoWindow({map: map});
            }
        }, 3000);

        this.gMapsServ.centerMapToLocation(map); 
       
        var afs = this.afs;
       
        let MarkerData = this.markerData;
        let bounds = new google.maps.LatLngBounds();
        let router = this.router;
        let observables = this.observables;
        let categories = this.categories;

       let sub = this.afs.database.list('/geopark_dev/Reitit/' + this.id + "/",
          {query: {orderByKey:true,equalTo:this.routeName}})


            //LISÄTÄÄN KAIKKI PISTEET OBSERVABLETAULUUN!!!
           .map(function(data){
            
             data[0].Pisteet.map(function(_point)
            {
                let sub2 = afs.database.list('/geopark_dev/Kohteet/' + _point.category + "/",
                  {query: {orderByKey:true,equalTo: _point.id}}).take(1);
                observables.push(sub2); 
                categories.push(_point.category);      
            });

            data => [observables,categories]
          }).finally(function(data){ 

          //KÄYDÄÄN OBSERVABLETAULU LÄPI FORKJOINILLA!
         let suz =  observables.length ?  Observable.forkJoin(observables) : Observable.of([]);
        suz.subscribe(data => {
           //LISÄTÄÄN MARKKERIT JA MUUT HÄRPÄKKEET
           data.map(function(_dat,index){
             var marker = new google.maps.Marker({
                        map: map,
                        position: new google.maps.LatLng(
                          _dat[0].latitude ,_dat[0].longitude)
              });
              marker.locked = true;
              if(_dat[0].previewDistance ==0){
                marker.locked = false;
              }
              marker.addListener('click', function() {
                if(!this.locked)
                    router.navigateByUrl('/mobile/kohdepiste/'+
                    categories[index]+"/"+_dat[0].$key);
                });
              md.push(marker);
              var path = {lat :_dat[0].latitude, 
                         lng: _dat[0].longitude};
              markers.push(path);
              MarkerData.push({previewDist: _dat[0].previewDistance});
           })  

           var flightPath = new google.maps.Polyline({
                        path: markers,
                        geodesic: true,
                        strokeColor: '#FF0000',
                        strokeOpacity: 1.0,
                        strokeWeight: 2
                    })

            flightPath.setMap(map);
            console.log(md.length);
            for(var i =0;i<md.length;i++){
              console.log(md[i])
               bounds.extend(md[i].getPosition());
            }
            bounds.extend(user_pos.getPosition() );
            map.fitBounds(bounds);
            map.setCenter(bounds.getCenter());
        }) 
          }).subscribe(function(data){
            sub.unsubscribe();
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


  