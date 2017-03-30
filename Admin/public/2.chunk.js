webpackJsonpac__name_([2],{

/***/ 1000:
/***/ function(module, exports) {

module.exports = "<button #editUserButton mdl-button mdl-button-type=\"raised\" mdl-colored=\"primary\"\r\n        mdl-ripple (click)=\"editUserDialog.show()\">Edit User Dialog</button>\r\n\r\n\r\n<mdl-dialog #editUserDialog\r\n            [mdl-dialog-config]=\"{\r\n              clickOutsideToClose: true,\r\n              styles:{'width': '300px'},\r\n              isModal:true,\r\n              openFrom: editUserButton,\r\n              enterTransitionDuration: 400,\r\n              leaveTransitionDuration: 400}\"\r\n              (show)=\"onDialogShow(dialogRef)\"\r\n              (hide)=\"onDialogHide()\"\r\n           >\r\n  <h3 class=\"mdl-dialog__title\">Aseta uusi piste</h3>\r\n  <div class=\"mdl-dialog__content\">\r\n    <mdl-textfield type=\"text\" label=\"Nimi\" [(ngModel)]=\"name\" floating-label autofocus></mdl-textfield>\r\n    <mdl-textfield type=\"text\" label=\"Info\" [(ngModel)]=\"info\" floating-label autofocus></mdl-textfield>\r\n    <input type=\"file\" label=\"Image\" (change)=\"readFile($event)\"  floating-label autofocus/>\r\n  </div>\r\n  <div class=\"mdl-dialog__actions\">\r\n    <button mdl-button (click)=\"savePoint()\" mdl-button-type=\"raised\" mdl-colored=\"primary\" mdl-ripple>Save</button>\r\n    <button mdl-button (click)=\"editUserDialog.close()\" mdl-ripple>Cancel</button>\r\n  </div>\r\n</mdl-dialog>"

/***/ },

/***/ 1001:
/***/ function(module, exports) {

module.exports = "<div id=\"googleMap\" style=\"width:500px;height:380px;\"></div>\r\n  \r\n<!--<ul>\r\n    <li class=\"text\" *ngFor=\"let item of items | async\">\r\n        {{item.$key}} {{item.info}}  {{item.lat}}  {{item.lng}}\r\n    </li>\r\n</ul>-->\r\n\r\n<div> {{ guideTxt }} </div>\r\n<!-- Colored raised button -->\r\n<button class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored\" (click)=\"UusiKohde('Lisää uusi kohde.')\">\r\n  Aloita uusi reitti\r\n</button>\r\n\r\n<Modal></Modal>"

/***/ },

/***/ 1012:
/***/ function(module, exports, __webpack_require__) {


        var result = __webpack_require__(991);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ },

/***/ 949:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__barrel_module__ = __webpack_require__(975);
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "BarrelModule", function() { return __WEBPACK_IMPORTED_MODULE_0__barrel_module__["a"]; });



/***/ },

/***/ 959:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_mdl__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BarrelComponent; });



/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */
var BarrelComponent = (function (_super) {
    __extends(BarrelComponent, _super);
    function BarrelComponent(af, _dialog, _snackbar) {
        _super.call(this);
        this._dialog = _dialog;
        this._snackbar = _snackbar;
        this.waitingForPoint = false;
        // google maps zoom level
        this.zoom = 8;
        // initial center position for the map
        this.lat = 51.673858;
        this.lng = 7.815982;
        this.markers = [
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
        ];
        this.items = af.database.list('/Kohteet');
    }
    BarrelComponent.prototype.ngOnInit = function () {
        var mapProp = {
            center: new google.maps.LatLng(51.508742, -0.120850),
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
        var map = this.map;
        var SLPLayer = this.getSLPlayer(map);
        this.map.overlayMapTypes.push(SLPLayer);
        var temp = this;
        map.addListener("click", function (e) {
            if (temp.waitingForPoint == false) {
                console.log("start first");
            }
            else {
                console.log("pressed");
            }
        });
    };
    BarrelComponent.prototype.getSLPlayer = function (map) {
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
    BarrelComponent.prototype.MapClick = function (e) {
        // console.log(waitingForPoint);
        if (this.waitingForPoint == false) {
            console.log("start first");
        }
        else {
            console.log("pressed");
        }
    };
    BarrelComponent.prototype.UusiKohde = function (text) {
        this.guideText = text;
        this.waitingForPoint = true;
    };
    BarrelComponent.prototype.clickedMarker = function (label, index) {
        console.log("clicked the marker: " + (label || index));
    };
    BarrelComponent.prototype.mapClicked = function ($event) {
        console.log("HOMo");
        this.markers.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            label: 'A',
            draggable: true
        });
    };
    BarrelComponent.prototype.markerDragEnd = function (m, $event) {
        console.log('dragEnd', m, $event);
    };
    BarrelComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'barrel',
            template: __webpack_require__(1001),
            styles: [__webpack_require__(1012)],
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_0_angularfire2__["b" /* AngularFire */], __WEBPACK_IMPORTED_MODULE_1_angular2_mdl__["MdlDialogModule"], __WEBPACK_IMPORTED_MODULE_1_angular2_mdl__["MdlSnackbaModule"]])
    ], BarrelComponent);
    return BarrelComponent;
}(__WEBPACK_IMPORTED_MODULE_2__angular_core__["OnInit"]));


/***/ },

/***/ 974:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ModalComponent; });

var ModalComponent = (function () {
    function ModalComponent() {
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
    ModalComponent.prototype.onEsc = function () {
        console.log(this.kuva);
        //   this.dialog.hide();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('keydown.esc'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], ModalComponent.prototype, "onEsc", null);
    ModalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'Modal',
            template: __webpack_require__(1000)
        }), 
        __metadata('design:paramtypes', [])
    ], ModalComponent);
    return ModalComponent;
}());


/***/ },

/***/ 975:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_google_maps_core__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__barrel_routes__ = __webpack_require__(976);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__barrel_component__ = __webpack_require__(959);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_mdl__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Modal_modal_component__ = __webpack_require__(974);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BarrelModule; });









console.log('`Barrel` bundle loaded asynchronously');
var BarrelModule = (function () {
    function BarrelModule() {
    }
    BarrelModule.routes = __WEBPACK_IMPORTED_MODULE_5__barrel_routes__["a" /* routes */];
    BarrelModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                // Components / Directives/ Pipes
                __WEBPACK_IMPORTED_MODULE_6__barrel_component__["a" /* BarrelComponent */],
                __WEBPACK_IMPORTED_MODULE_8__Modal_modal_component__["a" /* ModalComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular2_mdl__["MdlModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__barrel_routes__["a" /* routes */]),
                __WEBPACK_IMPORTED_MODULE_4_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyB9ZP_cBqTRe2cMhbqKqWCPBnbBoflO4Cc'
                })
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], BarrelModule);
    return BarrelModule;
}());


/***/ },

/***/ 976:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__barrel_component__ = __webpack_require__(959);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routes; });

var routes = [
    { path: '', children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_0__barrel_component__["a" /* BarrelComponent */] },
            { path: 'child-barrel', loadChildren: function () { return __webpack_require__.e/* import() */(7).then(__webpack_require__.bind(null, 973)).then(function (module) { return module['ChildBarrelModule']; }); } }
        ] },
];


/***/ },

/***/ 991:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(105)();
// imports


// module
exports.push([module.i, ".sebm-google-map-container {\r\n  height: 300px;\r\n}", ""]);

// exports


/***/ }

});
//# sourceMappingURL=2.chunk.js.map