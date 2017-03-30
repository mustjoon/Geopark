import { Injectable } from '@angular/core';

@Injectable()
export class googleMapsServiceFinal {

  public initMap(){
    var mapProp = {
        center: new google.maps.LatLng(51.508742, -0.120850),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        minZoom: 12
    };

    let map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    return map;
  }


  public addMarkerToMap(map,object){
   // let func = func;
    map.addListener("click",function(e){
      object.addMarker(e.latLng);
    });
  }

  public showInfoWindow(){

  }

  public createRouteAddMarker(key,info){
    var marker = new google.maps.Marker({
                            id: key,
                            category: info.$key,
                            name: info[key].name,
                            img: info[key].img,
                            info: info[key].info,
                            position: new google.maps.LatLng(info[key].latitude, info[key].longitude)
                        });
    return marker;

                        
           
  }

  public createRouteAddInfoWindow(key,info){
    let infowindow = new google.maps.InfoWindow({
                            content:'<div id="infowindow"  class="demo-card-wide mdl-card mdl-shadow--2dp">'+
                                    '<div style="height: 176px; background: url('+info[key].img+') center / cover"  class="mdl-card__title">'+
                                    '<h2 style="background-color:white;" id="infowindow_title" class="mdl-card__title-text">'+ info[key].name +'</h2>'+
                                    '</div>'+
                                    '<div id="infowindow_text" class="mdl-card__supporting-text">'+  info[key].info + '</div>'+
                                    '<div id="btn_addToRoute" class="mdl-card__actions mdl-card--border">'+
                                    '<a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">'+
                                    'Lisää reittiin'+
                                    '</a>'+
                                    '</div>'+
                                    '</div>'
                        });
    return infowindow;
  }

  public centerMapToLocation(map){
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


}