webpackJsonpac__name_([7],{

/***/ 958:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ChildBarrelComponent; });

/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */
console.log('`Barrel` component loaded asynchronously');
var ChildBarrelComponent = (function () {
    function ChildBarrelComponent() {
    }
    ChildBarrelComponent.prototype.ngOnInit = function () {
        console.log('hello `ChildBarrel` component');
    };
    ChildBarrelComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'child-barrel',
            template: "\n    <h1>Hello from Child Barrel</h1>    \n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], ChildBarrelComponent);
    return ChildBarrelComponent;
}());


/***/ },

/***/ 971:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__child_barrel_routes__ = __webpack_require__(972);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__child_barrel_component__ = __webpack_require__(958);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ChildBarrelModule; });






console.log('`ChildBarrel` bundle loaded asynchronously');
var ChildBarrelModule = (function () {
    function ChildBarrelModule() {
    }
    ChildBarrelModule.routes = __WEBPACK_IMPORTED_MODULE_4__child_barrel_routes__["a" /* routes */];
    ChildBarrelModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                // Components / Directives/ Pipes
                __WEBPACK_IMPORTED_MODULE_5__child_barrel_component__["a" /* ChildBarrelComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__child_barrel_routes__["a" /* routes */]),
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], ChildBarrelModule);
    return ChildBarrelModule;
}());


/***/ },

/***/ 972:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__child_barrel_component__ = __webpack_require__(958);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routes; });

var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__child_barrel_component__["a" /* ChildBarrelComponent */], pathMatch: 'full' },
];


/***/ },

/***/ 973:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__child_barrel_module__ = __webpack_require__(971);
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "ChildBarrelModule", function() { return __WEBPACK_IMPORTED_MODULE_0__child_barrel_module__["a"]; });



/***/ }

});
//# sourceMappingURL=7.chunk.js.map