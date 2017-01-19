import {AngularFire, FirebaseListObservable} from 'angularfire2';

import {
  Component,
  OnInit,
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
 
  
    // google maps zoom level
    zoom: number = 8;

    // initial center position for the map
    lat: number = 51.673858;
    lng: number = 7.815982;

    // Holder for Firebase data
    items: FirebaseListObservable<any[]>;
    
    // Guide text
    guideTxt : string;
    
    // bools
    waitingForPin : boolean;
    
    map : any;
    
    constructor(af: AngularFire){
        super();
        
        this.items = af.database.list('/Kohteet');
        this.waitingForPin = false;
    }
    
    public ngOnInit() { 
        
        var mapProp = {
              center: new google.maps.LatLng(51.508742, -0.120850),
              zoom: 5,
              mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        
        var SLPLayer = new google.maps.ImageMapType({
                        
            getTileUrl: function (coord, zoom) {
                var proj = this.map.getProjection();
                var zfactor = Math.pow(2, zoom);
                // get Long Lat coordinates
                var top = proj.fromPointToLatLng(new google.maps.Point(coord.x * 256 / zfactor, coord.y * 256 / zfactor));
                var bot = proj.fromPointToLatLng(new google.maps.Point((coord.x + 1) * 256 / zfactor, (coord.y + 1) * 256 / zfactor));

                //corrections for the slight shift of the SLP (mapserver)
                var deltaX = 0.0013;
                var deltaY = 0.00058;

                //create the Bounding box string
                var bbox =   (top.lng() + deltaX) + "," +
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
            
        this.map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
        this.map.overlayMapTypes.push(SLPLayer);
    }
    
    // Detect click on map
    map.addListener('click', function(e,temp) {

        if(temp.waitingForPin == false) return;

        console.log("Map click");
        var _lat = e.latLng.lat();
        var _lng = e.latLng.lng();

        AddMarker(_lat, _lng);
    });
        
    public AddMarker(_lat, _lng)
    {
        var marker = new google.maps.Marker({
          position: {lat: _lat, lng: _lng},
          map: map,
          title: 'Hello World!'
        });
    } 
        
        
    public AnnaOhje(txt){
        // Päivitä ohjeteksti
    }
    
    public UusiKohde(txt){
        console.log("uusi kohde");
        this.AnnaOhje(txt);
        this.waitingForPin = true;
    }
}

    
// just an interface for type safety.
interface marker {
lat: number;
lng: number;
label?: string;
draggable: boolean;
}


