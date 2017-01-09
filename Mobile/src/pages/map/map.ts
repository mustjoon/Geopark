import { Component, ViewChild, ElementRef } from '@angular/core';
import { Diagnostic } from 'ionic-native'; // DIAGNOSIIKKA
import { ConferenceData } from '../../providers/conference-data';
import { Geolocation } from 'ionic-native'; // GPS LUURIIN
import { Platform } from 'ionic-angular';


declare var google: any;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  @ViewChild('mapCanvas') mapElement: ElementRef;
  constructor(public confData: ConferenceData, public platform: Platform) {
  }

  isLocation = true;

  ionViewDidLoad() {

      this.platform.ready().then(() => {

      Diagnostic.isLocationAvailable().then(function(res){
        console.log(res);
        if(res == false){
           alert("Anna sovelluksen käyttää puhelimen GPS-yhteyttä ja käynnistä kartta uudelleen!");
        }
       
        this.isLocation = res;
      }).catch(function(err){
         // this.isLocation = false;
      });



      this.confData.getMap().subscribe(mapData => {
        let mapEle = this.mapElement.nativeElement;
        let josefov = new google.maps.LatLng( 59.83333, 68.90596);

        
        // WMS LAYERI
        let SLPLayer = new google.maps.ImageMapType({
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
      

        let map = new google.maps.Map(mapEle, {
        
          zoom: 16,
          center: josefov

        });
        map.overlayMapTypes.push(SLPLayer);



        //TEMP PISTEITÄ ToDo: Datat firebasesta!!!
        mapData.forEach(markerData => {
          let infoWindow = new google.maps.InfoWindow({
            content: `<h5>${markerData.name}</h5>`
          });

          let marker = new google.maps.Marker({
            position: markerData,
            map: map,
            title: markerData.name
          });

          marker.addListener('click', () => {
            infoWindow.open(map, marker);
          });
        });

        let infoWindow = new google.maps.InfoWindow({map: map});

       
            Geolocation.getCurrentPosition().then((position) => {
          
            let pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
            console.log("LOL");
            infoWindow.setPosition(pos);
            infoWindow.setContent("SUP");
            map.setCenter(pos);
          }, (err) => {

          })
          
      



        google.maps.event.addListenerOnce(map, 'idle', () => {
          mapEle.classList.add('show-map');
        });

      });
    });

  }
}
