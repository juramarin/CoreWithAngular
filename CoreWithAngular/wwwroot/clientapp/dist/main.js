(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app/app-routing.module.ts":
/*!***********************************!*\
  !*** ./app/app-routing.module.ts ***!
  \***********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./app/app.component.css":
/*!*******************************!*\
  !*** ./app/app.component.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./app/app.component.html":
/*!********************************!*\
  !*** ./app/app.component.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\r\n    <img width=\"80\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\r\n    <h1>{{ title }}</h1>\r\n</div>\n\n<hr />\n\n<app-heroes></app-heroes>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./app/app.component.ts":
/*!******************************!*\
  !*** ./app/app.component.ts ***!
  \******************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'hero editor example';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/*!***************************!*\
  !*** ./app/app.module.ts ***!
  \***************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./app/app.component.ts");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shop/shop.component */ "./app/shop/shop.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkout/checkout.component */ "./app/checkout/checkout.component.ts");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/dataService */ "./app/shared/dataService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./heroes/heroes.component */ "./app/heroes/heroes.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: "", component: _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_9__["HeroesComponent"] },
    { path: "checkout", component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_6__["Checkout"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _shop_shop_component__WEBPACK_IMPORTED_MODULE_5__["Shop"],
                _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_6__["Checkout"],
                _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_9__["HeroesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes, {
                    useHash: true,
                    enableTracing: false // for Debuging of the Routes
                })
            ],
            providers: [
                _shared_dataService__WEBPACK_IMPORTED_MODULE_7__["DataService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/checkout/checkout.component.html":
/*!**********************************************!*\
  !*** ./app/checkout/checkout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <h2>Checkout</h2>\r\n    <h3>Some products from DataService</h3>\r\n    <div class=\"col-md-3\">\r\n        <ul>\r\n            <li *ngFor=\"let p of products\">{{ p.title }}: {{ p.price | currency: \"USD\" }}</li>\r\n        </ul>\r\n        <h4>Total: $xxxxx.xx</h4>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n        <a routerLink=\"\" class=\"btn btn-info\">Back</a>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./app/checkout/checkout.component.ts":
/*!********************************************!*\
  !*** ./app/checkout/checkout.component.ts ***!
  \********************************************/
/*! exports provided: Checkout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkout", function() { return Checkout; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/dataService */ "./app/shared/dataService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Checkout = /** @class */ (function () {
    function Checkout(data) {
        this.data = data;
        this.products = [];
        this.products = data.products;
    }
    Checkout = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "the-checkout",
            template: __webpack_require__(/*! ./checkout.component.html */ "./app/checkout/checkout.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [_shared_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], Checkout);
    return Checkout;
}());



/***/ }),

/***/ "./app/heroes/heroes.component.css":
/*!*****************************************!*\
  !*** ./app/heroes/heroes.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* HeroesComponent's private CSS styles */\r\n.selected {\r\n    background-color: #CFD8DC !important;\r\n    color: white;\r\n}\r\n.heroes {\r\n    margin: 0 0 2em 0;\r\n    list-style-type: none;\r\n    padding: 0;\r\n    width: 15em;\r\n}\r\n.heroes li {\r\n        cursor: pointer;\r\n        position: relative;\r\n        left: 0;\r\n        background-color: #EEE;\r\n        margin: .5em;\r\n        padding: .3em 0;\r\n        height: 1.6em;\r\n        border-radius: 4px;\r\n    }\r\n.heroes li.selected:hover {\r\n            background-color: #BBD8DC !important;\r\n            color: white;\r\n        }\r\n.heroes li:hover {\r\n            color: #607D8B;\r\n            background-color: #DDD;\r\n            left: .1em;\r\n        }\r\n.heroes .text {\r\n        position: relative;\r\n        top: -3px;\r\n    }\r\n.heroes .badge {\r\n        display: inline-block;\r\n        font-size: small;\r\n        color: white;\r\n        padding: 0.8em 0.7em 0 0.7em;\r\n        background-color: #607D8B;\r\n        line-height: 1em;\r\n        position: relative;\r\n        left: -1px;\r\n        top: -4px;\r\n        height: 1.8em;\r\n        margin-right: .8em;\r\n        border-radius: 4px 0 0 4px;\r\n    }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvaGVyb2VzL2hlcm9lcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBDQUEwQztBQUMxQztJQUNJLHFDQUFxQztJQUNyQyxhQUFhO0NBQ2hCO0FBRUQ7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0NBQ2Y7QUFFRztRQUNJLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsUUFBUTtRQUNSLHVCQUF1QjtRQUN2QixhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxtQkFBbUI7S0FDdEI7QUFFRztZQUNJLHFDQUFxQztZQUNyQyxhQUFhO1NBQ2hCO0FBRUQ7WUFDSSxlQUFlO1lBQ2YsdUJBQXVCO1lBQ3ZCLFdBQVc7U0FDZDtBQUVMO1FBQ0ksbUJBQW1CO1FBQ25CLFVBQVU7S0FDYjtBQUVEO1FBQ0ksc0JBQXNCO1FBQ3RCLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2IsNkJBQTZCO1FBQzdCLDBCQUEwQjtRQUMxQixpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxVQUFVO1FBQ1YsY0FBYztRQUNkLG1CQUFtQjtRQUNuQiwyQkFBMkI7S0FDOUIiLCJmaWxlIjoiQ2xpZW50QXBwL2FwcC9oZXJvZXMvaGVyb2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBIZXJvZXNDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cclxuLnNlbGVjdGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDRkQ4REMgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmhlcm9lcyB7XHJcbiAgICBtYXJnaW46IDAgMCAyZW0gMDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogMTVlbTtcclxufVxyXG5cclxuICAgIC5oZXJvZXMgbGkge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xyXG4gICAgICAgIG1hcmdpbjogLjVlbTtcclxuICAgICAgICBwYWRkaW5nOiAuM2VtIDA7XHJcbiAgICAgICAgaGVpZ2h0OiAxLjZlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgICAgIC5oZXJvZXMgbGkuc2VsZWN0ZWQ6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkJEOERDICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5oZXJvZXMgbGk6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogIzYwN0Q4QjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcclxuICAgICAgICAgICAgbGVmdDogLjFlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgLmhlcm9lcyAudGV4dCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogLTNweDtcclxuICAgIH1cclxuXHJcbiAgICAuaGVyb2VzIC5iYWRnZSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuOGVtIDAuN2VtIDAgMC43ZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzYwN0Q4QjtcclxuICAgICAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBsZWZ0OiAtMXB4O1xyXG4gICAgICAgIHRvcDogLTRweDtcclxuICAgICAgICBoZWlnaHQ6IDEuOGVtO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogLjhlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcclxuICAgIH1cclxuIl19 */"

/***/ }),

/***/ "./app/heroes/heroes.component.html":
/*!******************************************!*\
  !*** ./app/heroes/heroes.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<h2>{{hero.name | uppercase }} Details</h2>\r\n<div><span>id: </span>{{hero.id}}</div>\r\n<div><span>name: </span>{{hero.name}}</div>\r\n\r\n<hr />\r\n\r\n<div>\r\n    <label>\r\n        name:\r\n        <input [(ngModel)]=\"hero.name\" placeholder=\"name\">\r\n    </label>\r\n</div>\r\n\r\n<hr />\r\n\r\n<h2>My Heroes</h2>\r\n<ul class=\"heroes\">\r\n    <li *ngFor=\"let hero of heroes\">\r\n        <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\r\n    </li>\r\n</ul>\r\n"

/***/ }),

/***/ "./app/heroes/heroes.component.ts":
/*!****************************************!*\
  !*** ./app/heroes/heroes.component.ts ***!
  \****************************************/
/*! exports provided: HeroesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroesComponent", function() { return HeroesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_heroes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock-heroes */ "./app/mock-heroes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeroesComponent = /** @class */ (function () {
    function HeroesComponent() {
        this.hero = {
            id: 1,
            name: 'Windstorm'
        };
        this.heroes = _mock_heroes__WEBPACK_IMPORTED_MODULE_1__["HEROES"];
    }
    HeroesComponent.prototype.ngOnInit = function () {
    };
    HeroesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-heroes',
            template: __webpack_require__(/*! ./heroes.component.html */ "./app/heroes/heroes.component.html"),
            styles: [__webpack_require__(/*! ./heroes.component.css */ "./app/heroes/heroes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeroesComponent);
    return HeroesComponent;
}());



/***/ }),

/***/ "./app/mock-heroes.ts":
/*!****************************!*\
  !*** ./app/mock-heroes.ts ***!
  \****************************/
/*! exports provided: HEROES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEROES", function() { return HEROES; });
var HEROES = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];


/***/ }),

/***/ "./app/shared/dataService.ts":
/*!***********************************!*\
  !*** ./app/shared/dataService.ts ***!
  \***********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
var DataService = /** @class */ (function () {
    function DataService() {
        this.products = [{
                title: "First product",
                price: 1.00
            }, {
                title: "Second product",
                price: 82.25
            }, {
                title: "Third product",
                price: 117.02
            }];
    }
    return DataService;
}());



/***/ }),

/***/ "./app/shop/shop.component.html":
/*!**************************************!*\
  !*** ./app/shop/shop.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <h2>Shop</h2>\r\n    <h3>Some shop description</h3>\r\n    <div class=\"col-md-3\">\r\n        <div class=\"well well-sm\">\r\n            some text some text some text some text\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n        <a routerLink=\"checkout\" class=\"btn btn-success\">Checkout</a>\r\n    </div> \r\n</div>\r\n"

/***/ }),

/***/ "./app/shop/shop.component.ts":
/*!************************************!*\
  !*** ./app/shop/shop.component.ts ***!
  \************************************/
/*! exports provided: Shop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shop", function() { return Shop; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Shop = /** @class */ (function () {
    function Shop() {
    }
    Shop = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "the-shop",
            template: __webpack_require__(/*! ./shop.component.html */ "./app/shop/shop.component.html")
        })
    ], Shop);
    return Shop;
}());



/***/ }),

/***/ "./environments/environment.ts":
/*!*************************************!*\
  !*** ./environments/environment.ts ***!
  \*************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./main.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Users\mjuranko\Documents\Visual Studio 2017\Projects\CoreWithAngular\CoreWithAngular\ClientApp\main.ts */"./main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map