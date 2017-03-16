import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {googleMapsService} from '../../secure/map/googleMaps.service';
import {ActivatedRoute} from "@angular/router";
import {Router} from '@angular/router';

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
  selector: 'locations',
  templateUrl: 'locations.component.html',
  styleUrls: ['locations.component.css'],
  providers: [googleMapsService]
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

    markers: any[];
    markerData: any[];
    md : any[];

    router: Router;

    constructor(af: AngularFire, private _routeParams: ActivatedRoute, private googleMapsService : googleMapsService, _router: Router){
      super();
      this.afs = af;
      this.markers = [];
      this.markerData = [];
      this.md = [];
      this._routeParams.params.subscribe(params => {
        this.id = params['id'];
        this.routeName = params['id2'];
        console.log(this.id);
        this.locations = af.database.list('/geopark_dev/Reitit/' + this.id + "/" + this.routeName +"/");
        console.log(this.locations);
      });
      this.user_icon = "../../assets/img/person_icon.png";
      this.marker_icon_locked = "../../assets/img/marker_locked.png";
      this.marker_icon_tree = "../../assets/img/marker_puu.png";

      this.router = _router;
    }

      
    public ngOnInit() { 
      var mapProp = {
            center: new google.maps.LatLng(51.508742, -0.120850),
            zoom: 7,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        this.map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
        let map = this.map;

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

                    if(distance < markerData[index].previewDist[0].$value)
                    {
                        val.setIcon(marker_icon_tree);
                    }
                    else
                    {
                        val.setIcon(marker_icon_locked);
                    }
                });

                var gmPos = new google.maps.LatLng(pos);
                user_pos.setPosition(gmPos);
              });
            } else {
              // Browser doesn't support Geolocation

                var infoWindow = new google.maps.InfoWindow({map: map});
                handleLocationError(false, infoWindow, map.getCenter());
            }
        }, 3000);
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
           
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            map.setCenter(pos);
          });
        } else {
          // Browser doesn't support Geolocation

            var infoWindow = new google.maps.InfoWindow({map: map});
            handleLocationError(false, infoWindow, map.getCenter());
        }
      

        function handleLocationError(browserHasGeolocation, infoWindow, pos) {
          infoWindow.setPosition(pos);
          infoWindow.setContent(browserHasGeolocation ?
                                'Error: The Geolocation service failed.' :
                                'Error: Your browser doesn\'t support geolocation.');
        }
        
        let SLPLayer = this.googleMapsService.getSLPlayer(map);
        this.map.overlayMapTypes.push(SLPLayer);

        var afs = this.afs;
        this.locations.map(function(value){
          console.log("value",value);
        })

        let testMarkers = this.markers;
        let testMarkerData = this.markerData;

        let router = this.router;
        
        this.locations.subscribe(_dat => {

             var afs = this.afs; 

             var test = _dat.filter(function(value){
                return value.constructor === Array && value['$key'] == 'Pisteet'; 
             })
            
            test[0].map(function(_point)
            {
                let emt = afs.database.list('/geopark_dev/Kohteet/' + _point.category + "/" + _point.id + "/");

                emt.subscribe(_dat => {

                    var long = _dat.filter(function(asd){
                        return asd.$key == 'longitude';
                    })

                    var lat = _dat.filter(function(asd){
                        return asd.$key == 'latitude';
                    })

                    var previewD = _dat.filter(function(asd){
                        return asd.$key == 'previewDistance';
                    })

                    var marker = new google.maps.Marker({
                        map: map,
                        position: new google.maps.LatLng(lat[0].$value ,long[0].$value)
                    });

                    marker.addListener('click', function() {
                      router.navigateByUrl('/mobile/kohdepiste/'+_point.category+"/"+_point.id);
                    });

                    md.push(marker);

                    var path = {lat :lat[0].$value , lng: long[0].$value};
                    testMarkers.push(path);
                    testMarkerData.push({previewDist: previewD});

                    var flightPath = new google.maps.Polyline({
                        path: testMarkers,
                        geodesic: true,
                        strokeColor: '#FF0000',
                        strokeOpacity: 1.0,
                        strokeWeight: 2
                    })

                    flightPath.setMap(map);
                });

                var markerCluster = new MarkerClusterer(map, testMarkers,
                {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
                   
            });
           
        });

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


  