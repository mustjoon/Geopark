import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {googleMapsService} from '../map/googleMaps.service';
import { Overlay } from 'angular2-modal';
import {googleMapsServiceFinal} from '../../googleMapsService';


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
  providers: [googleMapsService,googleMapsServiceFinal]
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

    public editedRoute = false;
    public editedCat = false;
    text;

    currentlySelectedSpotData: any[];

    constructor(af: AngularFire,   private gMapsServ : googleMapsServiceFinal,
                googleMapsService : googleMapsService, public zone:NgZone){

        super();
        this.afs = af;

        this.spotList = [];
        this.route = [];

        this.allSpotsLink = af.database.list('/geopark_dev/Kohteet');
        this.categories = af.database.list('/geopark_dev/config/Reitit_Kategoriat');
    }

 
    public ngOnInit() { 
        let gMapsServ = this.gMapsServ;
        let map = gMapsServ.initMap();
        this.map = map;
        let SLPLayer = this.gMapsServ.getSLPlayer(map);
        this.map.overlayMapTypes.push(SLPLayer);
        this.allSpots = [];
        let allSpots = this.allSpots;
        let AddSpotToRoute = this.AddSpotToRoute;
        let route = this.route;
        let zone = this.zone;
        let af = this.afs;

        this.gMapsServ.centerMapToLocation(map); 
        
         af.database.list('/geopark_dev/Kohteet').subscribe(_content => {

           
            _content.map(function(_categories)
            {
              

                for(var key in _categories)
                {
                    
                    if(_categories[key].latitude != undefined)
                    {

                        let marker = gMapsServ.createRouteAddMarker(key,_categories);
                        let infowindow = gMapsServ.createRouteAddInfoWindow(key,_categories);

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
        this.editedRoute = false;
        this.editedCat = false;
        this.text = "";

        if (this.route_name == undefined && this.route_name != ""){
            this.editedRoute = true;
            this.text += "Anna reitin nimi!\n";
        }

        if (this.route_category == undefined){
            this.editedCat = true;
            this.text += "Anna kategoria!\n";
        }

        if (this.route.length < 1){
            this.text += "Anna piste!";
        }

        if (this.text != ""){
            console.log(this.text);
            return;
        }
        else {
            console.log("Jep!");
            this.afs.database.list("/geopark_dev/Reitit/" + this.route_category + "/").
            update(this.route_name+"/" ,{Pisteet: this.route, Nimi: this.route_name, Info: this.route_info});
        }
          
        
    }
    
    public SpotSelect()
    {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(this.spotList[this.lastSelectedSpot].latitude, this.spotList[this.lastSelectedSpot].longitude),
            map: this.map
        });
    }

    public RemoveSpotFromRoute(i)
    {
       this.route.splice(i,1);
    }

}


  