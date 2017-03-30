webpackJsonpac__name_([1],{

/***/ 1008:
/***/ function(module, exports) {

module.exports = "\r\n<div   (hide)=\"onDialogHide()\" >\r\n  <h3 class=\"mdl-dialog__title\">App Login</h3>\r\n\r\n  <div class=\"mdl-dialog__content\">\r\n    <mdl-textfield  type=\"text\" label=\"Username\" floating-label></mdl-textfield>\r\n    <br/>\r\n    <mdl-textfield type=\"password\" label=\"Password\"  floating-label></mdl-textfield>\r\n  </div>\r\n\r\n  <div class=\"mdl-dialog__actions\">\r\n    <button\r\n      type=\"button\"\r\n      mdl-button (click)=\"login()\"\r\n    \r\n      mdl-button-type=\"raised\"\r\n      mdl-colored=\"primary\" mdl-ripple>Login</button>\r\n      <button\r\n      type=\"button\"\r\n      mdl-button (click)=\"closeDialog()\"\r\n      mdl-button-type=\"raised\"\r\n      mdl-colored=\"primary\" mdl-ripple>Cancel</button>\r\n  </div>\r\n</div>\r\n"

/***/ },

/***/ 1009:
/***/ function(module, exports) {

module.exports = "<div id=\"googleMap\" style=\"width:500px;height:380px;\"></div>\r\n  \r\n<!--<ul>\r\n    <li class=\"text\" *ngFor=\"let item of items | async\">\r\n        {{item.$key}} {{item.info}}  {{item.lat}}  {{item.lng}}\r\n    </li>\r\n</ul>-->\r\n\r\n<div> {{ guideTxt }} </div>\r\n<!-- Colored raised button -->\r\n<button class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored\" (click)=\"UusiKohde('Lisää uusi kohde.')\">\r\n  Tee uusi kohde\r\n</button>\r\n\r\n<button class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored\" (click)=\"FinalSave()\">\r\n  Tallenna kohteet\r\n</button>\r\n\r\n<button style=\"display:none\" id=\"open\" #editUserButton mdl-button mdl-button-type=\"raised\" mdl-colored=\"primary\"\r\n        mdl-ripple (click)=\"editUserDialog.show()\">Edit User Dialog</button>\r\n\r\n\r\n\r\n<mdl-dialog #editUserDialog\r\n            [mdl-dialog-config]=\"{\r\n              clickOutsideToClose: true,\r\n              styles:{'width': '300px'},\r\n              isModal:true,\r\n              openFrom: editUserButton,\r\n              enterTransitionDuration: 400,\r\n              leaveTransitionDuration: 400}\"\r\n            (show)=\"onDialogShow(dialogRef)\"\r\n            (hide)=\"onDialogHide()\">\r\n  <h3 class=\"mdl-dialog__title\">Anna pisteen tiedot</h3>\r\n  <div class=\"mdl-dialog__content\">\r\n\r\n  <!-- SELECT -->\r\n  <label for=\"singleSelect\"> Kategoriat: </label><br>\r\n  <select class=\"selectbox\" [(ngModel)]=\"target_category\" >\r\n    <option *ngFor=\"let c of categories  | async\" value=\"{{c.$value}}\" >{{c.$value}}</option>\r\n  </select>\r\n\r\n    <mdl-textfield type=\"text\" id=\"nameasd\" label=\"Nimi\" [(ngModel)]=\"target_name\" floating-label autofocus></mdl-textfield>\r\n    <mdl-textfield type=\"text\" label=\"Lisäinfo\" [(ngModel)]=\"target_info\" floating-label autofocus></mdl-textfield>\r\n    <input type=\"file\" id=\"uploadthisFILE\" class=\"uploadthisFILE\" label=\"Kuvalinkki\"  (change)=\"onChange($event)\"  floating-label autofocus>\r\n\r\n    <input type=\"file\" label=\"Videolinkki\" [(ngModel)]=\"target_video\"   (change)=\"onVideoChange($event)\" floating-label autofocus>\r\n    <mdl-textfield type=\"text\" label=\"Esikatselu etäisyys\" [(ngModel)]=\"target_previewDistance\" floating-label autofocus></mdl-textfield>\r\n    <mdl-textfield type=\"text\" label=\"Latitude\" [(ngModel)]=\"target_latitude\" floating-label autofocus disabled=\"true\"></mdl-textfield>\r\n    <mdl-textfield type=\"text\" label=\"Longitude\" [(ngModel)]=\"target_longitude\" floating-label autofocus disabled=\"true\"></mdl-textfield>\r\n  </div>\r\n  <div class=\"mdl-dialog__actions\">\r\n    <button mdl-button (click)=\"SaveNewLocationInfo()\" mdl-button-type=\"raised\" mdl-colored=\"primary\" mdl-ripple>Save</button>\r\n    <button id=\"closeBtn\" mdl-button (click)=\"editUserDialog.close()\" mdl-ripple>Cancel</button>\r\n  </div>\r\n</mdl-dialog>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ },

/***/ 1010:
/***/ function(module, exports) {

module.exports = "  <div class=\"demo-card-wide mdl-card mdl-shadow--2dp\" style=\"width:25vw;height:90vh;float: left;\">\r\n    <!-- OTSIKKO -->\r\n    <mdl-textfield id=\"route_name\" type=\"text\" label=\"Reitin nimi\" [(ngModel)]=\"route_name\" floating-label autofocus></mdl-textfield>\r\n\r\n  <label id=\"label_category\" for=\"singleSelect\"> Kategoriat: </label>\r\n    <select id=\"select_category\" class=\"selectbox\" [(ngModel)]=\"route_category\" >\r\n    <option *ngFor=\"let c of categories  | async\" value=\"{{c.$value}}\" >{{c.$value}}</option>\r\n  </select>\r\n  \r\n    <!-- INFO -->\r\n    <mdl-textfield rows=\"10\" id=\"mdl-textfield__input\" [(ngModel)]=\"route_info\" type=\"text\" label=\"Info (valinnainen)\" floating-label autofocus>\r\n    </mdl-textfield>\r\n\r\n    <!-- VALITUT KOHTEET JA POISTO NAPIT -->\r\n    <ul class=\"demo-list-three mdl-list\" style=\"height:50vh;overflow-y:scroll;\">\r\n      <li class=\"mdl-list__item mdl-list__item--three-line\" *ngFor=\"let r of route; let i = index\">\r\n      <span class=\"mdl-list__item-primary-content\">\r\n\r\n        <i class=\"material-icons mdl-list__item-avatar\"  [ngStyle]=\"{\r\n        'background-image': 'url(' + r.img + ')', \r\n        'background-size' : 'cover'}\"></i>\r\n\r\n        <span>{{r.name}}</span>\r\n        <span class=\"mdl-list__item-text-body\">\r\n        {{r.info}}\r\n        </span>\r\n      </span>\r\n      <button class=\"mdl-button mdl-js-button mdl-button--icon mdl-button--colored\" (click)=\"RemoveSpotFromRoute(i)\">\r\n        <i id=\"remove\" class=\"material-icons\">remove</i>\r\n      </button>\r\n      </li>\r\n    </ul>\r\n\r\n    <!-- TALLENNA NAPPI -->\r\n    <div class=\"mdl-card__actions mdl-card--border\" (click)=\"SaveRoute()\">\r\n      <a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\">\r\n        Tallenna reitti\r\n      </a>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div id=\"googleMap\" style=\"width:74vw;height:90vh;float:left;\"></div>\r\n\r\n  <div> {{ guideTxt }} </div>\r\n\r\n  <button style=\"display:none\" id=\"open\" #editUserButton mdl-button mdl-button-type=\"raised\" mdl-colored=\"primary\"\r\n        mdl-ripple (click)=\"editUserDialog.show()\">Edit User Dialog</button>\r\n\r\n<!-- \r\n  <br>\r\n  <br>\r\n\r\n  CATEGORY\r\n  <label for=\"singleSelect\"> Kategoriat: </label><br>\r\n  <select class=\"selectbox\" [(ngModel)]=\"activeCategory\" (change)=\"CategoryChange()\">\r\n    <option *ngFor=\"let c of categories  | async\" value=\"{{c.$value}}\" >{{c.$value}}</option>\r\n  </select>-->\r\n\r\n  <!-- SPOTS \r\n  <label for=\"singleSelect\"> Kohteet: </label><br>\r\n  <select class=\"selectbox\" [(ngModel)]=\"lastSelectedSpot\" (change)=\"SpotSelect()\">\r\n    <option *ngFor=\"let s of spots  | async\" value=\"{{s.$key}}\" >{{s.$key}}</option>\r\n  </select>\r\n-->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ },

/***/ 1011:
/***/ function(module, exports) {

module.exports = "<div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-header\">\r\n  <header class=\"mdl-layout__header\">\r\n    <div class=\"mdl-layout__header-row\">\r\n      <!-- Title -->\r\n      <span class=\"mdl-layout-title\">Title</span>\r\n      <!-- Add spacer, to align navigation to the right -->\r\n      <div class=\"mdl-layout-spacer\"></div>\r\n      <!-- Navigation. We hide it in small screens. -->\r\n      <nav class=\"mdl-navigation mdl-layout--large-screen-only\">\r\n        <a class=\"mdl-navigation__link\" [routerLink]=\" ['./map'] \" routerLinkActive=\"active\">\r\n          Kartta\r\n        </a>\r\n        <a class=\"mdl-navigation__link\" [routerLink]=\" ['./polku'] \" routerLinkActive=\"active\">\r\n          Reitti\r\n        </a>\r\n      </nav>\r\n    </div>\r\n  </header>\r\n  <div class=\"mdl-layout__drawer\">\r\n    <span class=\"mdl-layout-title\">Title</span>\r\n    <nav class=\"mdl-navigation\">\r\n      <a class=\"mdl-navigation__link\" [routerLink]=\" ['./map'] \" routerLinkActive=\"active\">\r\n        Kartta\r\n      </a>\r\n      <a class=\"mdl-navigation__link\" [routerLink]=\" ['./polku'] \" routerLinkActive=\"active\">\r\n        Reitti\r\n      </a>\r\n    </nav>\r\n  </div>\r\n  <main class=\"mdl-layout__content\">\r\n    <div class=\"page-content\">\r\n       <router-outlet></router-outlet>\r\n    </div>\r\n  </main>\r\n</div>"

/***/ },

/***/ 1018:
/***/ function(module, exports, __webpack_require__) {


        var result = __webpack_require__(997);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ },

/***/ 1019:
/***/ function(module, exports, __webpack_require__) {


        var result = __webpack_require__(998);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ },

/***/ 1020:
/***/ function(module, exports, __webpack_require__) {


        var result = __webpack_require__(999);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ },

/***/ 952:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__secure_module__ = __webpack_require__(989);
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "SecureModule", function() { return __WEBPACK_IMPORTED_MODULE_0__secure_module__["a"]; });



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

/***/ 957:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__googleMaps_service__ = __webpack_require__(955);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__googleMapsService__ = __webpack_require__(954);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Modal_modal_component__ = __webpack_require__(967);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_mdl__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MapComponent; });






/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */
var MapComponent = (function (_super) {
    __extends(MapComponent, _super);
    function MapComponent(modal, firebaseApp, af, dialogService, snackbarService, googleMapsService, gMapsServ) {
        _super.call(this);
        this.dialogService = dialogService;
        this.snackbarService = snackbarService;
        this.googleMapsService = googleMapsService;
        this.gMapsServ = gMapsServ;
        this.waitingForPoint = false;
        this.afs = af;
        this.items = af.database.list('/geopark_dev/');
        this.config = af.database.list('/geopark_dev/config');
        this.categories = af.database.list('/geopark_dev/config/Kategoriat');
        this.modal = modal;
        this.new_targets = [];
        this.storageRef = firebaseApp.storage().ref();
        this.wholedatabase = firebaseApp.database().ref();
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        var mapProp = {
            center: new google.maps.LatLng(51.508742, -0.120850),
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
        var map = this.map;
        var SLPLayer = this.gMapsServ.getSLPlayer(map);
        this.map.overlayMapTypes.push(SLPLayer);
        this.gMapsServ.addMarkerToMap(map, this);
        this.config.subscribe(function (x) {
            for (var i = 0; i < x.length; i++) {
                if (x[i].$key == "notifikaatio_etaisyys")
                    _this.target_previewDistance = x[i].$value;
            }
        });
    };
    MapComponent.prototype.onDialogShow = function () {
    };
    MapComponent.prototype.onDialogHide = function () {
    };
    MapComponent.prototype.closeDialog = function () {
    };
    MapComponent.prototype.addMarker = function (location) {
        // Jos "Tee uusi kohde"-nappia painettu
        if (this.waitingForPoint == true) {
            document.getElementById("open").click();
            this.modal.onDialogShow();
            // this.markers.push(marker);
            this.TMP_currentMarkerLocation = location;
            // Show coordinates
            this.target_latitude = location.lat();
            this.target_longitude = location.lng();
        }
    };
    MapComponent.prototype.SaveNewLocationInfo = function () {
        if (this.target_category == undefined) {
            alert("Anna kategoria.");
            return;
        }
        // Get data from the form and push to new_targets
        this.new_targets.push({
            category: this.target_category,
            name: this.target_name,
            info: this.target_info,
            img: "KUVA",
            video: "VIDEO",
            previewDistance: this.target_previewDistance,
            latitude: this.TMP_currentMarkerLocation.lat(),
            longitude: this.TMP_currentMarkerLocation.lng()
        });
        document.getElementById("closeBtn").click();
        var marker = new google.maps.Marker({
            position: this.TMP_currentMarkerLocation,
            map: this.map
        });
    };
    MapComponent.prototype.FinalSave = function () {
        //let lol = this.afs.database.list('/geopark_dev/Kohteet/Puut/');
        var lol = this.afs.database.list('/geopark_dev/Kohteet/');
        //TODO
        //let exists = this.afs.database.list('/geopark_dev/Kohteet/Puut/paskaaon');
        var file = document.getElementById('filetoUpload');
        //this.afs.database.ref('/geopark_dev/Kohteet/puut/').set(this.new_targets);
        var _loop_1 = function(i) {
            var subFolder = this_1.new_targets[i].category + "/";
            delete this_1.new_targets[i].category;
            var name_1 = this_1.new_targets[i].name;
            var targets = this_1.new_targets;
            var ref = this_1.storageRef;
            var test = this_1.wholedatabase;
            var databaseref = this_1.afs.database.list('/geopark_dev/Kohteet/' + subFolder);
            if (this_1.target_video) {
                this_1.storageRef.child(name_1 + "_image").put(this_1.target_img).then(function (snapshot) {
                    targets[i].img = snapshot.downloadURL;
                });
                this_1.storageRef.child(name_1 + "_vid").put(this_1.target_video).then(function (snapshot) {
                    targets[i].video = snapshot.downloadURL;
                    databaseref.push(targets[i]);
                });
            }
            else {
                this_1.storageRef.child(name_1 + "_image").put(this_1.target_img).then(function (snapshot) {
                    targets[i].img = snapshot.downloadURL;
                    databaseref.push(targets[i]);
                });
            }
        };
        var this_1 = this;
        for (var i = 0; i < this.new_targets.length; i++) {
            _loop_1(i);
        }
        this.new_targets = [];
    };
    MapComponent.prototype.readFile = function (event) {
        var kuva = this.kuva;
        if (event.target.files && event.target.files[0]) {
            var FR = new FileReader();
            FR.onload = function (e) {
                kuva = e.target.result;
            };
            FR.readAsDataURL(event.target.files[0]);
        }
    };
    MapComponent.prototype.onChange = function (event) {
        var eventObj = event;
        var target = eventObj.target;
        var files = target.files;
        this.target_img = files[0];
        console.log(this.target_img);
    };
    MapComponent.prototype.onVideoChange = function (event) {
        var eventObj = event;
        var target = eventObj.target;
        var files = target.files;
        this.target_video = files[0];
        console.log(this.target_video);
    };
    MapComponent.prototype.UusiKohde = function (text) {
        // this.showDialog();
        this.guideTxt = "Valitse piste kartalta!";
        this.waitingForPoint = true;
    };
    MapComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'map',
            template: __webpack_require__(1009),
            styles: [__webpack_require__(1018)],
            providers: [__WEBPACK_IMPORTED_MODULE_3__Modal_modal_component__["a" /* ModalComponent */], __WEBPACK_IMPORTED_MODULE_1__googleMaps_service__["a" /* googleMapsService */], __WEBPACK_IMPORTED_MODULE_2__googleMapsService__["a" /* googleMapsServiceFinal */]]
        }),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0_angularfire2__["c" /* FirebaseApp */])), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_3__Modal_modal_component__["a" /* ModalComponent */], Object, __WEBPACK_IMPORTED_MODULE_0_angularfire2__["b" /* AngularFire */], __WEBPACK_IMPORTED_MODULE_4_angular2_mdl__["MdlDialogService"], __WEBPACK_IMPORTED_MODULE_4_angular2_mdl__["MdlSnackbarService"], __WEBPACK_IMPORTED_MODULE_1__googleMaps_service__["a" /* googleMapsService */], __WEBPACK_IMPORTED_MODULE_2__googleMapsService__["a" /* googleMapsServiceFinal */]])
    ], MapComponent);
    return MapComponent;
}(__WEBPACK_IMPORTED_MODULE_5__angular_core__["OnInit"]));


/***/ },

/***/ 967:
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
            template: __webpack_require__(1008)
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_0_angular2_mdl__["MdlDialogService"], __WEBPACK_IMPORTED_MODULE_0_angular2_mdl__["MdlSnackbarService"]])
    ], ModalComponent);
    return ModalComponent;
}());


/***/ },

/***/ 968:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NoContentComponent; });

var NoContentComponent = (function () {
    function NoContentComponent() {
    }
    NoContentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'no-content',
            template: "\n    <div>\n      <h1>404: page missing</h1>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], NoContentComponent);
    return NoContentComponent;
}());


/***/ },

/***/ 969:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_googleMaps_service__ = __webpack_require__(955);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__googleMapsService__ = __webpack_require__(954);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PolkuComponent; });




/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */
var PolkuComponent = (function (_super) {
    __extends(PolkuComponent, _super);
    function PolkuComponent(af, gMapsServ, googleMapsService, zone) {
        _super.call(this);
        this.gMapsServ = gMapsServ;
        this.zone = zone;
        this.afs = af;
        this.spotList = [];
        this.route = [];
        this.allSpotsLink = af.database.list('/geopark_dev/Kohteet');
        this.categories = af.database.list('/geopark_dev/config/Reitit_Kategoriat');
    }
    PolkuComponent.prototype.ngOnInit = function () {
        var gMapsServ = this.gMapsServ;
        var map = gMapsServ.initMap();
        this.map = map;
        var SLPLayer = this.gMapsServ.getSLPlayer(map);
        this.map.overlayMapTypes.push(SLPLayer);
        this.allSpots = [];
        var allSpots = this.allSpots;
        var AddSpotToRoute = this.AddSpotToRoute;
        var route = this.route;
        var zone = this.zone;
        var af = this.afs;
        this.gMapsServ.centerMapToLocation(map);
        af.database.list('/geopark_dev/Kohteet').subscribe(function (_content) {
            _content.map(function (_categories) {
                var _loop_1 = function() {
                    if (_categories[key].latitude != undefined) {
                        var marker = gMapsServ.createRouteAddMarker(key, _categories);
                        var infowindow_1 = gMapsServ.createRouteAddInfoWindow(key, _categories);
                        marker.addListener('click', function () {
                            // CLOSE ALL OLD INFOWINDOWS BEFORE OPENING NEW ONE!
                            infowindow_1.open(map, this);
                            var id = this.id;
                            var category = this.category;
                            var name = this.name;
                            var img = this.img;
                            var info = this.info;
                            document.getElementById('btn_addToRoute').onclick = function () {
                                var kusi = AddSpotToRoute(route, id, category, name, img, info);
                                infowindow_1.close();
                                zone.run(function () { return route = kusi; });
                            };
                        });
                        allSpots.push(marker);
                    }
                };
                for (var key in _categories) {
                    _loop_1();
                }
                var markerCluster = new MarkerClusterer(map, allSpots, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
            });
        });
    };
    PolkuComponent.prototype.CategoryChange = function () {
        var _this = this;
        this.spotList = []; // clear old data
        this.spots = this.afs.database.list('/geopark_dev/Kohteet/' + this.activeCategory);
        this.spots.subscribe(function (x) {
            _this.tmpSpots = x;
            var spotList = _this.spotList;
            _this.tmpSpots.map(function (value) {
                spotList[value.$key] = value; // Can search spotList["Hiisikivi"].info
            });
        });
    };
    PolkuComponent.prototype.AddSpotToRoute = function (_route, _id, _category, _name, _img, _info) {
        _route.push({ id: _id, category: _category, name: _name, img: _img, info: _info });
        return _route;
    };
    PolkuComponent.prototype.SaveRoute = function () {
        this.afs.database.list("/geopark_dev/Reitit/" + this.route_category + "/").
            update(this.route_name + "/", { Pisteet: this.route, Nimi: this.route_name, Info: this.route_info });
    };
    PolkuComponent.prototype.SpotSelect = function () {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(this.spotList[this.lastSelectedSpot].latitude, this.spotList[this.lastSelectedSpot].longitude),
            map: this.map
        });
    };
    PolkuComponent.prototype.RemoveSpotFromRoute = function (i) {
        this.route.splice(i, 1);
    };
    PolkuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'polku',
            template: __webpack_require__(1010),
            styles: [__webpack_require__(1019)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__map_googleMaps_service__["a" /* googleMapsService */], __WEBPACK_IMPORTED_MODULE_2__googleMapsService__["a" /* googleMapsServiceFinal */]]
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_0_angularfire2__["b" /* AngularFire */], __WEBPACK_IMPORTED_MODULE_2__googleMapsService__["a" /* googleMapsServiceFinal */], __WEBPACK_IMPORTED_MODULE_1__map_googleMaps_service__["a" /* googleMapsService */], __WEBPACK_IMPORTED_MODULE_3__angular_core__["NgZone"]])
    ], PolkuComponent);
    return PolkuComponent;
}(__WEBPACK_IMPORTED_MODULE_3__angular_core__["OnInit"]));


/***/ },

/***/ 970:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SecureComponent; });

/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */
var SecureComponent = (function (_super) {
    __extends(SecureComponent, _super);
    function SecureComponent() {
        _super.apply(this, arguments);
    }
    SecureComponent.prototype.ngOnInit = function () {
    };
    SecureComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'secure',
            template: __webpack_require__(1011),
            styles: [__webpack_require__(1020)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }), 
        __metadata('design:paramtypes', [])
    ], SecureComponent);
    return SecureComponent;
}(__WEBPACK_IMPORTED_MODULE_0__angular_core__["OnInit"]));


/***/ },

/***/ 987:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_google_maps_core__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_routes__ = __webpack_require__(988);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__map_component__ = __webpack_require__(957);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_mdl__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Modal_modal_component__ = __webpack_require__(967);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__(601);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MapModule; });









console.log('`Barrel` bundle loaded asynchronously');
var MapModule = (function () {
    function MapModule() {
    }
    MapModule.routes = __WEBPACK_IMPORTED_MODULE_4__map_routes__["a" /* routes */];
    MapModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                // Components / Directives/ Pipes
                __WEBPACK_IMPORTED_MODULE_5__map_component__["a" /* MapComponent */],
                __WEBPACK_IMPORTED_MODULE_7__Modal_modal_component__["a" /* ModalComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular2_mdl__["MdlModule"],
                __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyB9ZP_cBqTRe2cMhbqKqWCPBnbBoflO4Cc'
                })
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__Modal_modal_component__["a" /* ModalComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__map_component__["a" /* MapComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], MapModule);
    return MapModule;
}());


/***/ },

/***/ 988:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map_component__ = __webpack_require__(957);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routes; });

var routes = [
    { path: '', children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_0__map_component__["a" /* MapComponent */] }
        ] },
];


/***/ },

/***/ 989:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_google_maps_core__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__secure_routes__ = __webpack_require__(990);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__secure_component__ = __webpack_require__(970);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__no_content_no_content_component__ = __webpack_require__(968);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__polku_polku_component__ = __webpack_require__(969);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__map_map_module__ = __webpack_require__(987);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_mdl__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__ = __webpack_require__(601);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SecureModule; });












console.log('`Barrel` bundle loaded asynchronously');
var SecureModule = (function () {
    function SecureModule() {
    }
    SecureModule.routes = __WEBPACK_IMPORTED_MODULE_5__secure_routes__["a" /* routes */];
    SecureModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                // Components / Directives/ Pipes
                __WEBPACK_IMPORTED_MODULE_6__secure_component__["a" /* SecureComponent */],
                __WEBPACK_IMPORTED_MODULE_7__no_content_no_content_component__["a" /* NoContentComponent */],
                __WEBPACK_IMPORTED_MODULE_8__polku_polku_component__["a" /* PolkuComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10_angular2_mdl__["MdlModule"],
                __WEBPACK_IMPORTED_MODULE_9__map_map_module__["a" /* MapModule */],
                __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__secure_routes__["a" /* routes */]),
                __WEBPACK_IMPORTED_MODULE_4_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyB9ZP_cBqTRe2cMhbqKqWCPBnbBoflO4Cc'
                })
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], SecureModule);
    return SecureModule;
}());


/***/ },

/***/ 990:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__secure_component__ = __webpack_require__(970);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_map_component__ = __webpack_require__(957);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__polku_polku_component__ = __webpack_require__(969);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__no_content_no_content_component__ = __webpack_require__(968);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routes; });




var routes = [
    { path: '', children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_0__secure_component__["a" /* SecureComponent */], children: [
                    { path: 'map', component: __WEBPACK_IMPORTED_MODULE_1__map_map_component__["a" /* MapComponent */] },
                    { path: 'polku', component: __WEBPACK_IMPORTED_MODULE_2__polku_polku_component__["a" /* PolkuComponent */] },
                    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__no_content_no_content_component__["a" /* NoContentComponent */] }
                ] },
        ] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_1__map_map_component__["a" /* MapComponent */] },
];


/***/ },

/***/ 997:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(105)();
// imports


// module
exports.push([module.i, ".sebm-google-map-container {\r\n  height: 300px;\r\n}\r\n\r\n/* -------------------- Select Box Styles: stackoverflow.com Method */\r\n/* -------------------- Source: http://stackoverflow.com/a/5809186 */\r\nselect.selectbox, select#selectbox-color {\r\n   -webkit-appearance: button;\r\n   -webkit-border-radius: 2px;\r\n   -webkit-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);\r\n   -webkit-padding-end: 20px;\r\n   -webkit-padding-start: 2px;\r\n   -webkit-user-select: none;\r\n   background-image: url(http://i62.tinypic.com/15xvbd5.png);\r\n   background-position: 97% center;\r\n   background-repeat: no-repeat;\r\n   /*border: 1px solid #AAA;*/\r\n   color: rgb(225,225,225);\r\n   font-size: inherit;\r\n   /*margin: 20px;*/\r\n   margin: 20px 0px;\r\n   overflow: hidden;\r\n   padding: 5px 10px;\r\n   text-overflow: ellipsis;\r\n   white-space: nowrap;\r\n   width: 100%;\r\n}\r\n\r\nselect#selectbox-color {\r\n   color: #fff;\r\n   background-image: url(http://i62.tinypic.com/15xvbd5.png), -webkit-linear-gradient(#779126, #779126 40%, #779126);\r\n   background-color: #779126;\r\n   -webkit-border-radius: 20px;\r\n   -moz-border-radius: 20px;\r\n   border-radius: 20px;\r\n   padding-left: 15px;\r\n}\r\n\r\n.uploadthisFILE::-webkit-file-upload-button {\r\n   background: rgb(63,81,181);\r\n   color: white;\r\n   border-radius: 5px;\r\n   margin: 3px, 3px, 3px, 0;\r\n   font-size: 125%;\r\n   border: none;\r\n   box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);\r\n}", ""]);

// exports


/***/ },

/***/ 998:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(105)();
// imports


// module
exports.push([module.i, ".sebm-google-map-container {\r\n  height: 300px;\r\n}\r\n\r\n/* -------------------- Select Box Styles: stackoverflow.com Method */\r\n/* -------------------- Source: http://stackoverflow.com/a/5809186 */\r\nselect.selectbox, select#selectbox-color {\r\n   -webkit-appearance: button;\r\n   -webkit-border-radius: 2px;\r\n   -webkit-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);\r\n   -webkit-padding-end: 20px;\r\n   -webkit-padding-start: 2px;\r\n   -webkit-user-select: none;\r\n   background-image: url(http://i62.tinypic.com/15xvbd5.png);\r\n   background-position: 97% center;\r\n   background-repeat: no-repeat;\r\n   /*border: 1px solid #AAA;*/\r\n   color: #000;\r\n   font-size: inherit;\r\n   /*margin: 20px;*/\r\n   margin: 20px 0px;\r\n   overflow: hidden;\r\n   padding: 5px 10px;\r\n   text-overflow: ellipsis;\r\n   white-space: nowrap;\r\n   width: 100%;\r\n}\r\n\r\nselect#selectbox-color {\r\n   color: #fff;\r\n   background-image: url(http://i62.tinypic.com/15xvbd5.png), -webkit-linear-gradient(#779126, #779126 40%, #779126);\r\n   background-color: #779126;\r\n   -webkit-border-radius: 20px;\r\n   -moz-border-radius: 20px;\r\n   border-radius: 20px;\r\n   padding-left: 15px;\r\n}\r\n\r\n.mdl-button--icon {\r\n   background-color: rgb(255,64,129);\r\n   color: #fff;\r\n   border-radius: 50%;\r\n    font-size: 10px;\r\n    height: 20px;\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n    min-width: 20px;\r\n    width: 20px;\r\n    padding: 2px;\r\n    overflow: hidden;\r\n    line-height: normal;\r\n}\r\n\r\n#remove {\r\n   font-size: 15px;\r\n   background-color: inherit;\r\n}\r\n\r\n#googleMap {\r\n   background-color: #000;\r\n}\r\n\r\n.mdl-card__title .mdl-card__title_text {\r\n   font-family: 'Open Sans Condensed', sans-serif;\r\n   font-size: 22px;\r\n   font-weight: 400;\r\n   padding: 10px;\r\n   background-color: #000;\r\n   color: white;\r\n   border-radius: 2px, 2px, 0 , 0;\r\n}\r\n\r\n#route_name, #label_category, #select_category, #mdl-textfield__input {\r\n   margin-left: 5px;\r\n   width: 98%;\r\n}", ""]);

// exports


/***/ },

/***/ 999:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(105)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }

});
//# sourceMappingURL=1.chunk.js.map