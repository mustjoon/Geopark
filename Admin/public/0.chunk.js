webpackJsonpac__name_([0],{

/***/ 1002:
/***/ function(module, exports) {

module.exports = "<style>\r\n\r\n.kohdepiste-img-header\r\n{\r\n\tbackground: center / cover;\r\n}\r\n\r\n</style>\r\n\r\n<div  *ngFor=\"let k of kohde  | async\">\r\n\t  \r\n\t  <!-- OTSIKKO KUVA -->asdasda\r\n\t  <div class=\"kohdepiste-img-header\">{{k.name}}</div>\r\n\r\n\t  <!-- OTSIKKO \r\n\t  <div class=\"mdl-card__title\" *ngIf=\"k.$key == 'name'\">\r\n\t    \t<h2 class=\"mdl-card__title-text\">{{k.$value}}</h2>\r\n\t  </div>\r\n\r\n\t   INFO \r\n\t  <div class=\"mdl-card__supporting-text\" *ngIf=\"k.$key == 'info'\">\r\n\t\t    {{k.$value}}\r\n\t  </div>-->\r\n\r\n</div>"

/***/ },

/***/ 1003:
/***/ function(module, exports) {

module.exports = "<h1>Reitit</h1>\r\n<br>\r\n<ul>\r\n    <li *ngFor=\"let r of routes | async\">\r\n        <a  [routerLink]=\" [r.$key] \" >{{ r.$key }}</a>\r\n    </li>\r\n</ul> "

/***/ },

/***/ 1004:
/***/ function(module, exports) {

module.exports = "<div id=\"googleMap\" style=\"width:100vw;height:80vw;\"></div>\r\n  \r\n\r\n\r\n\r\n"

/***/ },

/***/ 1005:
/***/ function(module, exports) {

module.exports = "\r\n<div   (hide)=\"onDialogHide()\" >\r\n  <h3 class=\"mdl-dialog__title\">App Login</h3>\r\n\r\n  <div class=\"mdl-dialog__content\">\r\n    <mdl-textfield  type=\"text\" label=\"Username\" floating-label></mdl-textfield>\r\n    <br/>\r\n    <mdl-textfield type=\"password\" label=\"Password\"  floating-label></mdl-textfield>\r\n  </div>\r\n\r\n  <div class=\"mdl-dialog__actions\">\r\n    <button\r\n      type=\"button\"\r\n      mdl-button (click)=\"login()\"\r\n    \r\n      mdl-button-type=\"raised\"\r\n      mdl-colored=\"primary\" mdl-ripple>Login</button>\r\n      <button\r\n      type=\"button\"\r\n      mdl-button (click)=\"closeDialog()\"\r\n      mdl-button-type=\"raised\"\r\n      mdl-colored=\"primary\" mdl-ripple>Cancel</button>\r\n  </div>\r\n</div>\r\n"

/***/ },

/***/ 1006:
/***/ function(module, exports) {

module.exports = "<h1>Kategoriat</h1>\r\n<br>\r\n<ul>\r\n    <li *ngFor=\"let location of categories | async\">\r\n        <a  [routerLink]=\" ['../location/'+location.$value] \" >{{ location.$value }}</a>\r\n    </li>\r\n</ul> "

/***/ },

/***/ 1007:
/***/ function(module, exports) {

module.exports = "\r\n<div class=\"demo-layout-transparent mdl-layout mdl-js-layout\">\r\n  <header class=\"mdl-layout__header mdl-layout__header--transparent\">\r\n    <div class=\"mdl-layout__header-row\">\r\n      <!-- Title -->\r\n      <span class=\"mdl-layout-title\">Title</span>\r\n      <!-- Add spacer, to align navigation to the right -->\r\n      <div class=\"mdl-layout-spacer\"></div>\r\n      <!-- Navigation -->\r\n      <nav class=\"mdl-navigation\">\r\n       \r\n      </nav>\r\n    </div>\r\n  </header>\r\n  <div class=\"mdl-layout__drawer\">\r\n    <span class=\"mdl-layout-title\">Title</span>\r\n    <nav class=\"mdl-navigation\">\r\n       <a class=\"mdl-navigation__link\" [routerLink]=\" ['.mobile/Category/Pyöräily'] \" routerLinkActive=\"active\">\r\n        ddd\r\n      </a>\r\n      <a class=\"mdl-navigation__link\" [routerLink]=\" ['./mobile/Category/Kävely'] \" routerLinkActive=\"active\">\r\n        aa\r\n      </a>\r\n     \r\n    </nav>\r\n  </div>\r\n <main style=\"margin-top:10%;\" class=\"mdl-layout__content\">\r\n    <div class=\"page-content\">\r\n       <router-outlet></router-outlet>\r\n    </div>\r\n  </main>\r\n</div>\r\n\r\n"

/***/ },

/***/ 1013:
/***/ function(module, exports, __webpack_require__) {


        var result = __webpack_require__(992);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ },

/***/ 1014:
/***/ function(module, exports, __webpack_require__) {


        var result = __webpack_require__(993);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ },

/***/ 1015:
/***/ function(module, exports, __webpack_require__) {


        var result = __webpack_require__(994);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ },

/***/ 1016:
/***/ function(module, exports, __webpack_require__) {


        var result = __webpack_require__(995);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ },

/***/ 1017:
/***/ function(module, exports, __webpack_require__) {


        var result = __webpack_require__(996);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ },

/***/ 951:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mobile_module__ = __webpack_require__(985);
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "MobileModule", function() { return __WEBPACK_IMPORTED_MODULE_0__mobile_module__["a"]; });



/***/ },

/***/ 954:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return googleMapsServiceFinal; });

var googleMapsServiceFinal = (function () {
    function googleMapsServiceFinal() {
    }
    googleMapsServiceFinal.prototype.initMap = function () {
        var mapProp = {
            center: new google.maps.LatLng(51.508742, -0.120850),
            zoom: 7,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
        return map;
    };
    googleMapsServiceFinal.prototype.addMarkerToMap = function (map, object) {
        // let func = func;
        map.addListener("click", function (e) {
            object.addMarker(e.latLng);
        });
    };
    googleMapsServiceFinal.prototype.showInfoWindow = function () {
    };
    googleMapsServiceFinal.prototype.createRouteAddMarker = function (key, info) {
        var marker = new google.maps.Marker({
            id: key,
            category: info.$key,
            name: info[key].name,
            img: info[key].img,
            info: info[key].info,
            position: new google.maps.LatLng(info[key].latitude, info[key].longitude)
        });
        return marker;
    };
    googleMapsServiceFinal.prototype.createRouteAddInfoWindow = function (key, info) {
        var infowindow = new google.maps.InfoWindow({
            content: '<div id="infowindow"  class="demo-card-wide mdl-card mdl-shadow--2dp">' +
                '<div style="height: 176px; background: url(' + info[key].img + ') center / cover"  class="mdl-card__title">' +
                '<h2 style="background-color:white;" id="infowindow_title" class="mdl-card__title-text">' + info[key].name + '</h2>' +
                '</div>' +
                '<div id="infowindow_text" class="mdl-card__supporting-text">' + info[key].info + '</div>' +
                '<div id="btn_addToRoute" class="mdl-card__actions mdl-card--border">' +
                '<a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">' +
                'Lisää reittiin' +
                '</a>' +
                '</div>' +
                '</div>'
        });
        return infowindow;
    };
    googleMapsServiceFinal.prototype.centerMapToLocation = function (map) {
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                map.setCenter(pos);
            });
        }
        else {
            // Browser doesn't support Geolocation
            var infoWindow = new google.maps.InfoWindow({ map: map });
            handleLocationError(false, infoWindow, map.getCenter());
        }
        function handleLocationError(browserHasGeolocation, infoWindow, pos) {
            infoWindow.setPosition(pos);
            infoWindow.setContent(browserHasGeolocation ?
                'Error: The Geolocation service failed.' :
                'Error: Your browser doesn\'t support geolocation.');
        }
    };
    googleMapsServiceFinal.prototype.getSLPlayer = function (map) {
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
                var bbox = (top.lng() + deltaX) + "," +
                    (bot.lat() + deltaY) + "," +
                    (bot.lng() + deltaX) + "," +
                    (top.lat() + deltaY);
                //base WMS URL
                var url = "http://tiles.kartat.kapsi.fi/peruskartta?";
                url += "&REQUEST=GetMap"; //WMS operation
                url += "&SERVICE=WMS"; //WMS service
                url += "&VERSION=1.1.1"; //WMS version  
                //  url += "&LAYERS=" + "typologie,hm2003"; //WMS layers
                url += "&FORMAT=image/png"; //WMS format
                url += "&BGCOLOR=0xFFFFFF";
                url += "&TRANSPARENT=TRUE";
                url += "&SRS=EPSG:4326"; //set WGS84 
                url += "&BBOX=" + bbox; // set bounding box
                url += "&WIDTH=256"; //tile size in google
                url += "&HEIGHT=256";
                url += "&LAYERS=peruskartta";
                return url; // return URL for the tile
            },
            tileSize: new google.maps.Size(256, 256),
            isPng: true
        });
    };
    googleMapsServiceFinal = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], googleMapsServiceFinal);
    return googleMapsServiceFinal;
}());


/***/ },

/***/ 955:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return googleMapsService; });

var googleMapsService = (function () {
    function googleMapsService() {
    }
    googleMapsService.prototype.getSLPlayer = function (map) {
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
                var bbox = (top.lng() + deltaX) + "," +
                    (bot.lat() + deltaY) + "," +
                    (bot.lng() + deltaX) + "," +
                    (top.lat() + deltaY);
                //base WMS URL
                var url = "http://tiles.kartat.kapsi.fi/peruskartta?";
                url += "&REQUEST=GetMap"; //WMS operation
                url += "&SERVICE=WMS"; //WMS service
                url += "&VERSION=1.1.1"; //WMS version  
                //  url += "&LAYERS=" + "typologie,hm2003"; //WMS layers
                url += "&FORMAT=image/png"; //WMS format
                url += "&BGCOLOR=0xFFFFFF";
                url += "&TRANSPARENT=TRUE";
                url += "&SRS=EPSG:4326"; //set WGS84 
                url += "&BBOX=" + bbox; // set bounding box
                url += "&WIDTH=256"; //tile size in google
                url += "&HEIGHT=256";
                url += "&LAYERS=peruskartta";
                return url; // return URL for the tile
            },
            tileSize: new google.maps.Size(256, 256),
            isPng: true
        });
    };
    googleMapsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], googleMapsService);
    return googleMapsService;
}());


/***/ },

/***/ 956:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__googleMaps_service__ = __webpack_require__(982);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Modal_modal_component__ = __webpack_require__(965);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MapComponent; });




/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */
var MapComponent = (function (_super) {
    __extends(MapComponent, _super);
    function MapComponent(af) {
        _super.call(this);
        this.categories = af.database.list('/geopark_dev/config/Reitit_Kategoriat');
    }
    MapComponent.prototype.ngOnInit = function () {
    };
    MapComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'map',
            template: __webpack_require__(1006),
            styles: [__webpack_require__(1016)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__Modal_modal_component__["a" /* ModalComponent */], __WEBPACK_IMPORTED_MODULE_1__googleMaps_service__["a" /* googleMapsService */]]
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_0_angularfire2__["b" /* AngularFire */]])
    ], MapComponent);
    return MapComponent;
}(__WEBPACK_IMPORTED_MODULE_3__angular_core__["OnInit"]));


/***/ },

/***/ 962:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return KohdepisteComponent; });



var KohdepisteComponent = (function (_super) {
    __extends(KohdepisteComponent, _super);
    function KohdepisteComponent(af, _routeParams) {
        var _this = this;
        _super.call(this);
        this._routeParams = _routeParams;
        this._routeParams.params.subscribe(function (params) {
            _this.category = params['category'];
            _this.uid = params['uid'];
            _this.kohde = af.database.list('/geopark_dev/Kohteet/' + _this.category + "/", { query: { orderByKey: true, equalTo: _this.uid } });
            console.log('/geopark_dev/Kohteet/' + _this.category + "/");
            console.log(_this.uid);
        });
    }
    KohdepisteComponent.prototype.ngOnInit = function () {
        /*let img = this.img;
        let name = this.name;
        let info = this.info;

        this.kohde.subscribe(val =>
        {
            val.map(function(v)
            {
                if(v.$key == "img")
                    img = v.$value;
                else if(v.$key == "name")
                    name = v.$value;
                else if(v.$key == "info")
                    info = v.$value;

                console.log(v);
            });
        });

        console.log(img,name,info);*/
    };
    KohdepisteComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'kohdepiste',
            template: __webpack_require__(1002),
            styles: [__webpack_require__(1013)]
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_0_angularfire2__["b" /* AngularFire */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]])
    ], KohdepisteComponent);
    return KohdepisteComponent;
}(__WEBPACK_IMPORTED_MODULE_2__angular_core__["OnInit"]));


/***/ },

/***/ 963:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LocationComponent; });



/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */
var LocationComponent = (function (_super) {
    __extends(LocationComponent, _super);
    function LocationComponent(af, _routeParams) {
        var _this = this;
        _super.call(this);
        this._routeParams = _routeParams;
        this._routeParams.params.subscribe(function (params) {
            _this.id = params['id'];
            console.log(_this.id);
            _this.routes = af.database.list('/geopark_dev/Reitit/' + _this.id + "/");
            console.log(_this.routes);
        });
    }
    LocationComponent.prototype.ngOnInit = function () {
    };
    LocationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'location',
            template: __webpack_require__(1003),
            styles: [__webpack_require__(1014)]
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_0_angularfire2__["b" /* AngularFire */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]])
    ], LocationComponent);
    return LocationComponent;
}(__WEBPACK_IMPORTED_MODULE_2__angular_core__["OnInit"]));


/***/ },

/***/ 964:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__secure_map_googleMaps_service__ = __webpack_require__(955);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__googleMapsService__ = __webpack_require__(954);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LocationsComponent; });






/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */
var LocationsComponent = (function (_super) {
    __extends(LocationsComponent, _super);
    function LocationsComponent(af, _routeParams, gMapsServ, googleMapsService, _router) {
        var _this = this;
        _super.call(this);
        this._routeParams = _routeParams;
        this.gMapsServ = gMapsServ;
        this.googleMapsService = googleMapsService;
        this.getDistance = function (p1, p2) {
            var rad = function (x) {
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
        this.afs = af;
        this.markers = [];
        this.markerData = [];
        this.md = [];
        this._routeParams.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.routeName = params['id2'];
            _this.locations = af.database.list('/geopark_dev/Reitit/' + _this.id + "/", { query: { orderByKey: true, equalTo: _this.routeName } });
        });
        this.user_icon = "../../assets/img/person_icon.png";
        this.marker_icon_locked = "../../assets/img/marker_locked.png";
        this.marker_icon_tree = "../../assets/img/marker_puu.png";
        this.router = _router;
    }
    LocationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var gMapsServ = this.gMapsServ;
        var map = gMapsServ.initMap();
        this.map = map;
        var SLPLayer = this.gMapsServ.getSLPlayer(map);
        this.map.overlayMapTypes.push(SLPLayer);
        this.user_pos = new google.maps.Marker({
            position: { lat: 0, lng: 0 },
            map: map,
            icon: this.user_icon
        });
        var getDistance = this.getDistance;
        var user_pos = this.user_pos;
        var markers = this.markers;
        var markerData = this.markerData;
        var md = this.md;
        var marker_icon_locked = this.marker_icon_locked;
        var marker_icon_tree = this.marker_icon_tree;
        setInterval(function () {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    var pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    md.map(function (val, index) {
                        var distance = getDistance(new google.maps.LatLng(pos), val.position);
                        if (markerData[index].previewDist == 0) {
                            val.setIcon(marker_icon_tree);
                            val.locked = false;
                        }
                        else if (distance < markerData[index].previewDist) {
                            val.setIcon(marker_icon_tree);
                            val.locked = false;
                        }
                        else {
                            val.setIcon(marker_icon_locked);
                            val.locked = true;
                        }
                    });
                    var gmPos = new google.maps.LatLng(pos);
                    user_pos.setPosition(gmPos);
                });
            }
            else {
                var infoWindow = new google.maps.InfoWindow({ map: map });
            }
        }, 3000);
        this.gMapsServ.centerMapToLocation(map);
        var afs = this.afs;
        var MarkerData = this.markerData;
        var router = this.router;
        this.locations.subscribe(function (_dat) {
            var afs = _this.afs;
            _dat[0].Pisteet.map(function (_point) {
                var kohde = afs.database.list('/geopark_dev/Kohteet/' + _point.category + "/", { query: { orderByKey: true, equalTo: _point.id } });
                kohde.subscribe(function (_dat) {
                    var marker = new google.maps.Marker({
                        map: map,
                        position: new google.maps.LatLng(_dat[0].latitude, _dat[0].longitude)
                    });
                    marker.locked = true;
                    if (_dat[0].previewDistance == 0) {
                        marker.locked = false;
                    }
                    marker.addListener('click', function () {
                        if (!this.locked)
                            router.navigateByUrl('/mobile/kohdepiste/' + _point.category + "/" + _point.id);
                    });
                    md.push(marker);
                    var path = { lat: _dat[0].latitude, lng: _dat[0].longitude };
                    markers.push(path);
                    MarkerData.push({ previewDist: _dat[0].previewDistance });
                    var flightPath = new google.maps.Polyline({
                        path: markers,
                        geodesic: true,
                        strokeColor: '#FF0000',
                        strokeOpacity: 1.0,
                        strokeWeight: 2
                    });
                    flightPath.setMap(map);
                });
                var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
            });
        });
    };
    LocationsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'locations',
            template: __webpack_require__(1004),
            styles: [__webpack_require__(1015)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__secure_map_googleMaps_service__["a" /* googleMapsService */], __WEBPACK_IMPORTED_MODULE_3__googleMapsService__["a" /* googleMapsServiceFinal */]]
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_0_angularfire2__["b" /* AngularFire */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__googleMapsService__["a" /* googleMapsServiceFinal */], __WEBPACK_IMPORTED_MODULE_1__secure_map_googleMaps_service__["a" /* googleMapsService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]])
    ], LocationsComponent);
    return LocationsComponent;
}(__WEBPACK_IMPORTED_MODULE_4__angular_core__["OnInit"]));


/***/ },

/***/ 965:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_mdl__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ModalComponent; });


var ModalComponent = (function () {
    function ModalComponent(dialogService, snackbarService) {
        this.dialogService = dialogService;
        this.snackbarService = snackbarService;
    }
    ModalComponent.prototype.savePoint = function () {
        console.log(this.kuva);
    };
    ModalComponent.prototype.readFile = function (event) {
        var kuva = this.kuva;
        if (event.target.files && event.target.files[0]) {
            var FR = new FileReader();
            FR.onload = function (e) {
                kuva = e.target.result;
            };
            FR.readAsDataURL(event.target.files[0]);
        }
    };
    ModalComponent.prototype.onDialogShow = function (dialogRef) {
        console.log("OK");
    };
    ModalComponent.prototype.onDialogHide = function () {
        console.log("closed");
    };
    ModalComponent.prototype.login = function () {
        //  console.log('login', this.dialog);
        //  this.dialog.hide();
    };
    ModalComponent.prototype.cancel = function (dialog) {
        dialog.hide();
    };
    ModalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'Modal',
            template: __webpack_require__(1005)
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_0_angular2_mdl__["MdlDialogService"], __WEBPACK_IMPORTED_MODULE_0_angular2_mdl__["MdlSnackbarService"]])
    ], ModalComponent);
    return ModalComponent;
}());


/***/ },

/***/ 966:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MobileComponent; });


/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */
var MobileComponent = (function (_super) {
    __extends(MobileComponent, _super);
    function MobileComponent(af) {
        _super.call(this);
        this.kohteet = af.database.list('geopark_dev/Kohteet');
    }
    MobileComponent.prototype.ngOnInit = function () {
        console.log(this.kohteet);
    };
    MobileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'mobile',
            template: __webpack_require__(1007),
            styles: [__webpack_require__(1017)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewEncapsulation"].None,
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_0_angularfire2__["b" /* AngularFire */]])
    ], MobileComponent);
    return MobileComponent;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core__["OnInit"]));


/***/ },

/***/ 982:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return googleMapsService; });

var googleMapsService = (function () {
    function googleMapsService() {
    }
    googleMapsService.prototype.getSLPlayer = function (map) {
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
                var bbox = (top.lng() + deltaX) + "," +
                    (bot.lat() + deltaY) + "," +
                    (bot.lng() + deltaX) + "," +
                    (top.lat() + deltaY);
                //base WMS URL
                var url = "http://tiles.kartat.kapsi.fi/peruskartta?";
                url += "&REQUEST=GetMap"; //WMS operation
                url += "&SERVICE=WMS"; //WMS service
                url += "&VERSION=1.1.1"; //WMS version  
                //  url += "&LAYERS=" + "typologie,hm2003"; //WMS layers
                url += "&FORMAT=image/png"; //WMS format
                url += "&BGCOLOR=0xFFFFFF";
                url += "&TRANSPARENT=TRUE";
                url += "&SRS=EPSG:4326"; //set WGS84 
                url += "&BBOX=" + bbox; // set bounding box
                url += "&WIDTH=256"; //tile size in google
                url += "&HEIGHT=256";
                url += "&LAYERS=peruskartta";
                return url; // return URL for the tile
            },
            tileSize: new google.maps.Size(256, 256),
            isPng: true
        });
    };
    googleMapsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], googleMapsService);
    return googleMapsService;
}());


/***/ },

/***/ 983:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_google_maps_core__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__map_component__ = __webpack_require__(956);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_mdl__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Modal_modal_component__ = __webpack_require__(965);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__map_routes__ = __webpack_require__(984);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MapModule; });










console.log('`Barrel` bundle loaded asynchronously');
var MapModule = (function () {
    function MapModule() {
    }
    MapModule.routes = __WEBPACK_IMPORTED_MODULE_9__map_routes__["a" /* routes */];
    MapModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                // Components / Directives/ Pipes
                __WEBPACK_IMPORTED_MODULE_5__map_component__["a" /* MapComponent */],
                __WEBPACK_IMPORTED_MODULE_7__Modal_modal_component__["a" /* ModalComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_9__map_routes__["a" /* routes */]),
                __WEBPACK_IMPORTED_MODULE_6_angular2_mdl__["MdlModule"],
                __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyB9ZP_cBqTRe2cMhbqKqWCPBnbBoflO4Cc'
                }),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__Modal_modal_component__["a" /* ModalComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__map_component__["a" /* MapComponent */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], MapModule);
    return MapModule;
}());


/***/ },

/***/ 984:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map_component__ = __webpack_require__(956);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routes; });

var routes = [
    { path: '', children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_0__map_component__["a" /* MapComponent */] }
        ] },
];


/***/ },

/***/ 985:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_google_maps_core__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mobile_routes__ = __webpack_require__(986);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mobile_component__ = __webpack_require__(966);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__locations_locations_component__ = __webpack_require__(964);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__location_location_component__ = __webpack_require__(963);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__kohdepiste_kohdepiste_component__ = __webpack_require__(962);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__map_map_module__ = __webpack_require__(983);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_mdl__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__ = __webpack_require__(601);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MobileModule; });













console.log('`Barrel` bundle loaded asynchronously');
var MobileModule = (function () {
    function MobileModule() {
    }
    MobileModule.routes = __WEBPACK_IMPORTED_MODULE_5__mobile_routes__["a" /* routes */];
    MobileModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                // Components / Directives/ Pipes
                __WEBPACK_IMPORTED_MODULE_6__mobile_component__["a" /* MobileComponent */],
                __WEBPACK_IMPORTED_MODULE_7__locations_locations_component__["a" /* LocationsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__location_location_component__["a" /* LocationComponent */],
                __WEBPACK_IMPORTED_MODULE_9__kohdepiste_kohdepiste_component__["a" /* KohdepisteComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_11_angular2_mdl__["MdlModule"],
                __WEBPACK_IMPORTED_MODULE_10__map_map_module__["a" /* MapModule */],
                __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__mobile_routes__["a" /* routes */]),
                __WEBPACK_IMPORTED_MODULE_4_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyB9ZP_cBqTRe2cMhbqKqWCPBnbBoflO4Cc'
                })
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], MobileModule);
    return MobileModule;
}());


/***/ },

/***/ 986:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mobile_component__ = __webpack_require__(966);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_map_component__ = __webpack_require__(956);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__kohdepiste_kohdepiste_component__ = __webpack_require__(962);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__locations_locations_component__ = __webpack_require__(964);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__location_location_component__ = __webpack_require__(963);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routes; });





var routes = [
    { path: '', children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_0__mobile_component__["a" /* MobileComponent */], children: [
                    { path: 'map', component: __WEBPACK_IMPORTED_MODULE_1__map_map_component__["a" /* MapComponent */] },
                    { path: 'kohdepiste/:category/:uid', component: __WEBPACK_IMPORTED_MODULE_2__kohdepiste_kohdepiste_component__["a" /* KohdepisteComponent */] },
                    { path: 'location/:id', component: __WEBPACK_IMPORTED_MODULE_4__location_location_component__["a" /* LocationComponent */] },
                    { path: 'location/:id/:id2', component: __WEBPACK_IMPORTED_MODULE_3__locations_locations_component__["a" /* LocationsComponent */] },
                    { path: 'locations', component: __WEBPACK_IMPORTED_MODULE_3__locations_locations_component__["a" /* LocationsComponent */] },
                    { path: 'locations/location/:id', component: __WEBPACK_IMPORTED_MODULE_4__location_location_component__["a" /* LocationComponent */] }
                ] },
        ] },
];


/***/ },

/***/ 992:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(105)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ },

/***/ 993:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(105)();
// imports


// module
exports.push([module.i, "#infooo {\r\n   \tborder-radius: 25px;\r\n    border: 2px solid #73AD21;\r\n    padding: 20px; \r\n    width: 460px!important;\r\n    height: 150px!important;\r\n}\r\n\r\n.gm-style-iw {\r\nwidth: 200px; \r\nmin-height: 150px;\r\n}", ""]);

// exports


/***/ },

/***/ 994:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(105)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ },

/***/ 995:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(105)();
// imports


// module
exports.push([module.i, ".sebm-google-map-container {\r\n  height: 300px;\r\n}", ""]);

// exports


/***/ },

/***/ 996:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(105)();
// imports


// module
exports.push([module.i, ".mdl-layout__header-row {\r\n\tbackground: #dadada;\r\n}\r\n\r\n\r\n.mdl-layout__drawer {\r\n\tbackground: #efefef;\r\n}\r\n\r\n/* background: #efefef; */", ""]);

// exports


/***/ }

});
//# sourceMappingURL=0.chunk.js.map