import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {googleMapsService} from '../map/googleMaps.service';
import { Overlay } from 'angular2-modal';

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

    tmpSpots: any[];
    allSpots: any[];
    activeCategory: any;

    map: any;
    guideTxt : string;
    markers : any[];
    dialog: MdlDialogReference;
    afs: any;


    constructor(af: AngularFire, private dialogService: MdlDialogService,
    private snackbarService: MdlSnackbarService,private googleMapsService : googleMapsService){
        super();
        this.afs = af;

        this.spotList = [];
        this.allSpotsLink = af.database.list('/geopark_dev/Kohteet');
    }

 
    public ngOnInit() { 
        var mapProp = {
            center: new google.maps.LatLng(51.508742, -0.120850),
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        this.map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
        let map = this.map;

        let SLPLayer = this.googleMapsService.getSLPlayer(map);
        this.map.overlayMapTypes.push(SLPLayer);
        this.allSpots = [];
        let allSpots = this.allSpots;

        this.allSpotsLink.subscribe(_content => {

            _content.map(function(_categories)
            {
                for(var key in _categories)
                {
                    if(_categories[key].latitude == undefined)
                    {
                        console.log("Olet tuntematon");
                    }
                    else
                    {
                        allSpots.push(_categories[key]);

                        var infowindow = new google.maps.InfoWindow({
                            content: _categories[key].info,
                            maxWidth: 150
                        });

                        var marker = new google.maps.Marker({
                            position: new google.maps.LatLng(_categories[key].latitude, _categories[key].longitude),
                            map: map,
                            title: 'Hello World!'
                        });

                        marker.addListener('click', function() {
                            infowindow.open(map, marker);
                        });
                    }
                }
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

    public SpotSelect()
    {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(this.spotList[this.lastSelectedSpot].latitude, this.spotList[this.lastSelectedSpot].longitude),
            map: this.map
        });

        //this.existingSpotMarkers.push(this.spotList[this.lastSelectedSpot].$key);
        console.log(this.spotList[this.lastSelectedSpot].key);
    }

}


  