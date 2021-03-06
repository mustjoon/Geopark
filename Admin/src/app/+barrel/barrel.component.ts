import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {MdlDialogModule, MdlSnackbaModule,MdlDialogReference} from 'angular2-mdl';
import { Overlay } from 'angular2-modal';
import {ModalComponent} from './Modal/modal';

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
  selector: 'barrel',
  templateUrl: 'barrel.component.html',
  styleUrls: ['barrel.component.css'],
})
export class BarrelComponent extends OnInit {
 
  
    items: FirebaseListObservable<any[]>;
    map: any;
    waitingForPoint : boolean = false;
    guideText : string;




    constructor(af: AngularFire,private _dialog: MdlDialogModule, private _snackbar: MdlSnackbaModule){
        super();
        this.items = af.database.list('/Kohteet');
        
    }

       
    
    
    public ngOnInit() { 

       var mapProp = {
              center: new google.maps.LatLng(51.508742, -0.120850),
              zoom: 5,
              mapTypeId: google.maps.MapTypeId.ROADMAP
          };

         this.map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
         let map = this.map;
         
         let SLPLayer = this.getSLPlayer(map);
         this.map.overlayMapTypes.push(SLPLayer);
     
          let temp = this;
          map.addListener("click", function(e){
            if(temp.waitingForPoint == false){
                console.log("start first");
             }
             else{
               console.log("pressed");
              }
          }); 
    }

   




    public getSLPlayer(map){
      return new google.maps.ImageMapType({
                      getTileUrl: function (coord, zoom) {

                          var proj = map.getProjection();
                          var zfactor = Math.pow(2, zoom);
                          // get Long Lat coordinates
                          var top = proj.fromPointToLatLng(new google.maps.Point(coord.x * 256 / zfactor, coord.y * 256 / zfactor));
                          var bot = proj.fromPointToLatLng(new google.maps.Point((coord.x + 1) * 256 / zfactor, (coord.y + 1) * 256 / zfactor));

                          //corrections for the slight shift of the SLP (mapserver)
                          var deltaX = 0.0013;
                          var deltaY = 0.00058;

                          //create the Bounding box string
                          var bbox =     (top.lng() + deltaX) + "," +
                                       (bot.lat() + deltaY) + "," +
                                       (bot.lng() + deltaX) + "," +
                                       (top.lat() + deltaY);

                          //base WMS URL
                          var url = "http://tiles.kartat.kapsi.fi/peruskartta?";
                          url += "&REQUEST=GetMap"; //WMS operation
                          url += "&SERVICE=WMS";    //WMS service
                          url += "&VERSION=1.1.1";  //WMS version  
                        //  url += "&LAYERS=" + "typologie,hm2003"; //WMS layers
                          url += "&FORMAT=image/png" ; //WMS format
                          url += "&BGCOLOR=0xFFFFFF";  
                          url += "&TRANSPARENT=TRUE";
                          url += "&SRS=EPSG:4326";     //set WGS84 
                          url += "&BBOX=" + bbox;      // set bounding box
                          url += "&WIDTH=256";         //tile size in google
                          url += "&HEIGHT=256";
                          url += "&LAYERS=peruskartta";

                          return url;                 // return URL for the tile

                      },
                      tileSize: new google.maps.Size(256, 256),
                      isPng: true
                  });
    }

    public MapClick(e){
     // console.log(waitingForPoint);
     
      if(this.waitingForPoint == false){
        console.log("start first");
      }
      else{
         console.log("pressed");
      }
     
    }

    public UusiKohde(text){
      this.guideText = text;
      this.waitingForPoint = true;

    }


    // google maps zoom level
    zoom: number = 8;

    // initial center position for the map
    lat: number = 51.673858;
    lng: number = 7.815982;

    clickedMarker(label: string, index: number) {
     console.log(`clicked the marker: ${label || index}`)
    }

    mapClicked($event) {
      console.log("HOMo");

      this.markers.push({
       lat: $event.coords.lat,
       lng: $event.coords.lng,
       label: 'A',
       draggable: true
     });
    }

    markerDragEnd(m: marker, $event: MouseEvent) {
     console.log('dragEnd', m, $event);
    }

    markers: marker[] = [
     {
       lat: 51.673858,
       lng: 7.815982,
       label: 'A',
       draggable: true
     },
     {
       lat: 51.373858,
       lng: 7.215982,
       label: 'B',
       draggable: false
     },
     {
       lat: 51.723858,
       lng: 7.895982,
       label: 'C',
       draggable: true
     }
    ]
    }
    // just an interface for type safety.
    interface marker {
    lat: number;
    lng: number;
    label?: string;
    draggable: boolean;
    }