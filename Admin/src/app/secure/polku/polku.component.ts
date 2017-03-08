import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {googleMapsService} from '../map/googleMaps.service';
import { Overlay } from 'angular2-modal';

import { MdlDialogService,
  MdlDialogReference,MdlSnackbarService,IOpenCloseRect } from 'angular2-mdl';
import {
  Component,
  NgZone,
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
  selector: 'polku',
  templateUrl: 'polku.component.html',
  styleUrls: ['polku.component.css'],
  providers: [googleMapsService]
})
export class PolkuComponent extends OnInit {

  
    // GET DATA FROM FIREBASE
    spots: FirebaseListObservable<any[]>; 
    allSpotsLink: FirebaseListObservable<any[]>; 
    categories: FirebaseListObservable<any[]>; 

    spotList: any[];
    lastSelectedSpot: string;
    existingSpotMarkers: any[]; // names of all visible markers (to prevent duplicates)
    route: any[];

    tmpSpots: any[];
    allSpots: any[];
    activeCategory: any;

    map: any;
    guideTxt : string;
    markers : any[];
    dialog: MdlDialogReference;
    afs: any;

    route_name: any;
    route_category: any;
    route_info: any;


    currentlySelectedSpotData: any[];

    constructor(af: AngularFire, private dialogService: MdlDialogService,
    private snackbarService: MdlSnackbarService, private googleMapsService : googleMapsService, public zone:NgZone){

        super();
        this.afs = af;

        this.spotList = [];
        this.route = [];

        this.allSpotsLink = af.database.list('/geopark_dev/Kohteet');
        this.categories = af.database.list('/geopark_dev/config/Reitit_Kategoriat');
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
        this.allSpots = [];
        let allSpots = this.allSpots;
        let AddSpotToRoute = this.AddSpotToRoute;
        let route = this.route;
        let zone = this.zone;

        this.allSpotsLink.subscribe(_content => {

            _content.map(function(_categories)
            {
                for(var key in _categories)
                {
                    if(_categories[key].latitude == undefined)
                    {

                    }
                    else
                    {
                        var marker = new google.maps.Marker({
                            id: key,
                            category: _categories.$key,
                            name: _categories[key].name,
                            img: _categories[key].img,
                            info: _categories[key].info,
                            position: new google.maps.LatLng(_categories[key].latitude, _categories[key].longitude)
                        });

                        let infowindow = new google.maps.InfoWindow({
                            content:'<div id="infowindow"  class="demo-card-wide mdl-card mdl-shadow--2dp">'+
                                    '<div style="height: 176px; background: url('+_categories[key].img+') center / cover"  class="mdl-card__title">'+
                                    '<h2 style="background-color:white;" id="infowindow_title" class="mdl-card__title-text">'+ _categories[key].name +'</h2>'+
                                    '</div>'+
                                    '<div id="infowindow_text" class="mdl-card__supporting-text">'+  _categories[key].info + '</div>'+
                                    '<div id="btn_addToRoute" class="mdl-card__actions mdl-card--border">'+
                                    '<a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">'+
                                    'Lisää reittiin'+
                                    '</a>'+
                                    '</div>'+
                                    '</div>';
                        });

                        marker.addListener('click', function() {

                            // CLOSE ALL OLD INFOWINDOWS BEFORE OPENING NEW ONE!
                            infowindow.open(map, this);

                            let id = this.id;
                            let category = this.category;
                            let name = this.name;
                            let img = this.img;
                            let info = this.info;

                            document.getElementById('btn_addToRoute').onclick = function(){
                                let kusi = AddSpotToRoute(route, id, category, name, img, info);
                                infowindow.close();
                                zone.run(() => route = kusi);
                            }
                        });

                        allSpots.push(marker);
                    }
                }

                var markerCluster = new MarkerClusterer(map, allSpots,
                {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
            });

        });
    }

    public CategoryChange()
    {
        this.spotList = []; // clear old data

        this.spots = this.afs.database.list('/geopark_dev/Kohteet/' + this.activeCategory);

        this.spots.subscribe(x => {

            this.tmpSpots = x;

            let spotList = this.spotList;

            this.tmpSpots.map(function(value)
            {
                //console.log(this.spotList);
                spotList[value.$key] = value; // Can search spotList["Hiisikivi"].info
            });

        });

    }

    public AddSpotToRoute(_route, _id, _category, _name, _img, _info)
    {
        _route.push(
            {id: _id, category: _category, name: _name, img: _img, info: _info}
        );

        return _route;
    }

    public SaveRoute()
    {
          this.afs.database.list("/geopark_dev/Reitit/" + this.route_category + "/").
          update(this.route_name+"/" ,{Pisteet: this.route, Nimi: this.route_name, Info: this.route_info});
        
      //  this.afs.database.list("/geopark_dev/Reitit/Lahden Vesistö").update("/Pisteet",this.route);
    }
    
    public SpotSelect()
    {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(this.spotList[this.lastSelectedSpot].latitude, this.spotList[this.lastSelectedSpot].longitude),
            map: this.map
        });

        // this.existingSpotMarkers.push(this.spotList[this.lastSelectedSpot].$key);
        // console.log(this.spotList[this.lastSelectedSpot].key);
    }

    public RemoveSpotFromRoute(i)
    {
       this.route.splice(i,1);
    }

}


  