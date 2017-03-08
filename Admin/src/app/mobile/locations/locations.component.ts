import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {googleMapsService} from '../../secure/map/googleMaps.service';
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
  selector: 'locations',
  templateUrl: 'locations.component.html',
  styleUrls: ['locations.component.css'],
  providers: [googleMapsService]
})
export class LocationsComponent extends OnInit {
 
  
    locations: FirebaseListObservable<any[]>;
    id:any;
    map: any;
    afs: any;

    markers: any[];

    constructor(af: AngularFire, private _routeParams: ActivatedRoute, private googleMapsService : googleMapsService){
      super();
      this.afs = af;
      this._routeParams.params.subscribe(params => {
        this.id = params['id'];   
        console.log(this.id);
        this.locations = af.database.list('/geopark_dev/Reitit/' + this.id + "/");
        console.log(this.locations);
      });
    }

      
    public ngOnInit() { 
      var mapProp = {
            center: new google.maps.LatLng(51.508742, -0.120850),
            zoom: 7,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        this.map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
        let map = this.map;

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
        this.locations.subscribe(_category => {


             var afs = this.afs; 
             console.log("1",afs);           
            _category.map(function(_allRoutesOfCategory)
            {
             // var afs = this.afs;
               console.log("2",afs);  
              console.log("all routes",_allRoutesOfCategory);

               
                    // luodaan taulu reitin pisteille
                    let markers = [];
                    _allRoutesOfCategory.Pisteet.map(function(_point)
                    {
                     // var afs = this.afs;
                       console.log("3",afs);  
                      console.log("test",_point);
                        let emt = afs.database.list('/geopark_dev/Kohteet/' + _point.category + "/" + _point.id + "/");
                        console.log('/geopark_dev/Kohteet/' + _point.category + "/" + _point.id + "/");
                        emt.subscribe(_dat => {

                          var long = _dat.filter(function(asd){
                            return asd.$key == 'longitude';
                          })

                           var lat = _dat.filter(function(asd){
                            return asd.$key == 'latitude';
                          })
                           console.log(lat[0]);
                           console.log("lat",lat[0].$value ,"long",long[0].$value);

                           
                          var marker = new google.maps.Marker({
                            map: map,
                            position: new google.maps.LatLng(lat[0].$value ,long[0].$value)
                          });

                          markers.push(marker);
                        });
                         console.log("map",map);

                   

                    console.log(markers);
                         var markerCluster = new MarkerClusterer(map, markers,
                        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
                    });
                   
                    
               
            });
        });
    }

   


}


  