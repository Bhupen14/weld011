(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_boxstart_boxstart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/boxstart/boxstart.component */ "./src/app/components/boxstart/boxstart.component.ts");








var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: "login", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: "register", component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: "home", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: "boxstart", component: _components_boxstart_boxstart_component__WEBPACK_IMPORTED_MODULE_7__["BoxstartComponent"] },
    // {path:"entery",component:EnteryComponent,canActivate:[AuthGuard]},
    // {path:"view",component:ViewComponent,canActivate:[AuthGuard]},
    // {path:"start",component:StartComponent,canActivate:[AuthGuard]},
    // {path:"serialbox",component:SerialBoxComponent,canActivate:[AuthGuard]}
    { path: "**", component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

// export const routingComponents = [LoginComponent,HomeComponent]


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\r\n    padding-top: 5px;\r\n    background-color: rgba(239, 241, 232, 0.89);\r\n    /* width:100%; */\r\n    min-height: calc(90vh - 130px);\r\n    overflow: hidden;\r\n    padding-bottom: 15px;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsMkNBQTJDO0lBQzNDLGdCQUFnQjtJQUNoQiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtFQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM5LCAyNDEsIDIzMiwgMC44OSk7XHJcbiAgICAvKiB3aWR0aDoxMDAlOyAqL1xyXG4gICAgbWluLWhlaWdodDogY2FsYyg5MHZoIC0gMTMwcHgpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<!-- <app-oprbar></app-oprbar> -->\n<section class=\"main\">\n    <div class=\"container-fluid\">\n    <router-outlet></router-outlet>\n    </div>\n</section>\n<app-footer></app-footer>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Weld011';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./service/auth.guard */ "./src/app/service/auth.guard.ts");
/* harmony import */ var _service_token_interceptor_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./service/token-interceptor.service */ "./src/app/service/token-interceptor.service.ts");
/* harmony import */ var _components_boxstart_boxstart_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/boxstart/boxstart.component */ "./src/app/components/boxstart/boxstart.component.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__["PageNotFoundComponent"],
                _components_boxstart_boxstart_component__WEBPACK_IMPORTED_MODULE_18__["BoxstartComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"]
            ],
            providers: [_service_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"], _service_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"],
                    useClass: _service_token_interceptor_service__WEBPACK_IMPORTED_MODULE_17__["TokenInterceptorService"],
                    multi: true
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/boxstart/boxstart.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/boxstart/boxstart.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYm94c3RhcnQvYm94c3RhcnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/boxstart/boxstart.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/boxstart/boxstart.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n<div class=\"col-sm-3\" style=\"border: 1px solid green;\">\n<p>Image here</p>\n</div>\n\n<div class=\"col-sm-9\">\n<div class=\"card\">\n  <div class=\"card-header\">\n    BoxIn\n  </div>\n  <div class=\"card-detail\">\n    <div class=\"row\">\n      <div class=\"col-sm-2\">\n    <label for=\"\">BoxId</label>\n    </div>\n  </div>\n<div class=\"row\">\n  <div class=\"col-sm-4\">\n    <input type=\"text\">\n    </div>\n</div>\n\n  </div>\n</div>\n<div class=\"card-footer\">\n  <button class=\"btn\">Cancle</button>\n  <button class=\"btn\">Ok</button>\n</div>\n</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/boxstart/boxstart.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/boxstart/boxstart.component.ts ***!
  \***********************************************************/
/*! exports provided: BoxstartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxstartComponent", function() { return BoxstartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BoxstartComponent = /** @class */ (function () {
    function BoxstartComponent() {
    }
    BoxstartComponent.prototype.ngOnInit = function () {
    };
    BoxstartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-boxstart',
            template: __webpack_require__(/*! ./boxstart.component.html */ "./src/app/components/boxstart/boxstart.component.html"),
            styles: [__webpack_require__(/*! ./boxstart.component.css */ "./src/app/components/boxstart/boxstart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BoxstartComponent);
    return BoxstartComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Set the background color of body to tan */\r\nbody {\r\n    background-color: tan;\r\n  }\r\n/* On screens that are 992px or less, set the background color to blue */\r\n@media screen and (max-width: 992px) {\r\n    body {\r\n      background-color: blue;\r\n    }\r\n  }\r\n/* On screens that are 600px or less, set the background color to olive */\r\n@media screen and (max-width: 600px) {\r\n    body {\r\n      background-color: olive;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNENBQTRDO0FBQzVDO0lBQ0kscUJBQXFCO0VBQ3ZCO0FBRUEsd0VBQXdFO0FBQ3hFO0lBQ0U7TUFDRSxzQkFBc0I7SUFDeEI7RUFDRjtBQUVBLHlFQUF5RTtBQUN6RTtJQUNFO01BQ0UsdUJBQXVCO0lBQ3pCO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFNldCB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiBib2R5IHRvIHRhbiAqL1xyXG5ib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRhbjtcclxuICB9XHJcbiAgXHJcbiAgLyogT24gc2NyZWVucyB0aGF0IGFyZSA5OTJweCBvciBsZXNzLCBzZXQgdGhlIGJhY2tncm91bmQgY29sb3IgdG8gYmx1ZSAqL1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICBib2R5IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLyogT24gc2NyZWVucyB0aGF0IGFyZSA2MDBweCBvciBsZXNzLCBzZXQgdGhlIGJhY2tncm91bmQgY29sb3IgdG8gb2xpdmUgKi9cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgYm9keSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG9saXZlO1xyXG4gICAgfVxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Navbar -->\n<nav class=\"mb-1 navbar navbar-expand-md navbar-dark bg-primary\">\n  <a class=\"navbar-brand\" href=\"#\">K</a>\n\n  <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleNavbar()\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" [ngClass]=\"{ 'show': navbarOpen }\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink =\"/home\">Home\n          <span class=\"sr-only\">(current)</span>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Features</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Pricing</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav ml-auto nav-flex-icons\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link waves-effect waves-light\" routerLink =\"/login\" *ngIf =\"!authService.loggedIn()\" >Login\n          <!-- <i class=\"fab fa-twitter\"></i> -->\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link waves-effect waves-light\" routerLink =\"/register\" *ngIf =\"!authService.loggedIn()\">Register\n          <!-- <i class=\"fab fa-google-plus-g\"></i> -->\n        </a>\n      </li>\n      <li class=\"nav-item\" >\n        <a class=\"nav-link waves-effect waves-light \" style=\"cursor: pointer;\" *ngIf =\"authService.loggedIn()\" (click)=\"logout()\">Logout\n          <!-- <i class=\"fab fa-google-plus-g\"></i> -->\n        </a>\n      </li>\n\n    </ul>\n  </div>\n</nav>\n<!--/.Navbar -->"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, route) {
        this.authService = authService;
        this.route = route;
        this.navbarOpen = false;
    }
    HeaderComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logout = function () {
        localStorage.removeItem('token');
        this.route.navigate(['\login']);
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table matSort (matSortChange)=\"sortData($event)\" class=\"table table-hover table-bordered\">\n  <tr>\n    <th mat-sort-header=\"BoxId\">BoxId</th>\n    <th style=\"width:400px\" mat-sort-header=\"Part\">Part</th>\n    <th mat-sort-header=\"Category\" >Cate</th>\n    <th >BQty</th>\n    <th >WType</th>\n    <th mat-sort-header=\"DateIn\">DateIn</th>\n    <th mat-sort-header=\"FinishDate\">Date Finish</th>\n    <th mat-sort-header=\"AcptQty\">AceptQty</th>\n    <th mat-sort-header=\"WeldQty\">WeldQty</th>\n    <th mat-sort-header=\"Deptno\">DeptID</th>\n    <th mat-sort-header=\"Machine\">Machine</th>\n    <th >Sched</th>\n    <th>By</th>\n    <th>Insp</th> \n  </tr>\nM</table>\n\n\n\n<button mat-stroked-button class=\"btn btn-default\" [routerLink]=\"['/boxstart']\">Start</button>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        // localStorage.setItem("token","bhupen");
    };
    HomeComponent.prototype.sortData = function (sort) {
        return;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-card\r\n{\r\n    max-width:400px;\r\n    margin: auto;\r\n    margin-top: 100px;\r\n\r\n}\r\n.card-header\r\n{\r\n    font-size: 30px;\r\n    background-image: linear-gradient(to right, lightblue , rgb(192, 255, 203));\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCOztBQUVyQjtBQUNBOztJQUVJLGVBQWU7SUFDZiwyRUFBMkU7QUFDL0UiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tY2FyZFxyXG57XHJcbiAgICBtYXgtd2lkdGg6NDAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuXHJcbn1cclxuLmNhcmQtaGVhZGVyXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgbGlnaHRibHVlICwgcmdiKDE5MiwgMjU1LCAyMDMpKTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form [formGroup]=\"loginForm\" class=\"login-container\" >\n\n  <div *ngIf=\"!isLogin\" class=\"alert alert-danger\" role=\"alert\" >\n    User email or password not match.. try again\n  </div>    \n\n\n  <!-- (ngSubmit)=\"loginUser()\" -->\n  <div class=\"card login-card\">\n  <div class=\"card-header\">\n    Login...\n  </div>\n  <div class=\"card-body\">\n    <mat-form-field>\n      <input matInput placeholder=\"Team\" formControlName=\"team\" required>\n    </mat-form-field> \n    <mat-form-field>\n      <input matInput placeholder=\"UserID\" formControlName=\"userid\" required>\n    </mat-form-field> \n     <mat-form-field >\n      <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\"  (keypress)=\"onKeypressEvent($event)\" required>\n    </mat-form-field>\n  </div>\n  <div class=\"card-footer text-right\">\n  <button mat-raised-button class=\"btn btn-outline-danger\" (click)=\"Cancle()\">Cancle</button>\n    <button mat-raised-button class=\"btn btn-outline-primary\" (click)=\"loginUser()\">Ok</button>\n  \n  </div>\n  </div>\n  </form>\n  <div *ngIf=\"submitted\">\n    <p *ngIf=\"!authService.loggedIn() \"   id=\"onError\">Invalid</p>\n  </div>\n  \n  \n  "

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, authService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.authService = authService;
        this.isLogin = true;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.submitted = false;
        this.loginForm = this.formBuilder.group({
            team: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    Object.defineProperty(LoginComponent.prototype, "formControls", {
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        this.submitted = true;
        this.authService.loginUser(this.loginForm.value).subscribe(function (res) {
            // console.log(res.token);
            localStorage.setItem('token', res.token);
            // sessionStorage.setItem('token',res.token);
            _this.route.navigate(['/home']);
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this.loginForm.reset({ "team": '' });
                    _this.submitted = false;
                    _this.isLogin = false;
                }
            }
        });
    };
    LoginComponent.prototype.Cancle = function () {
        this.route.navigate(['/']);
        // console.log("exit");
    };
    LoginComponent.prototype.onKeypressEvent = function (event) {
        if (event.keyCode === 13) {
            console.log(event.keyCode);
            //this.formControls.loginForm;
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/components/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"mb-1 navbar navbar-expand-lg navbar-expand-sm navbar-dark bg-primary\">\n  <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" href=\"#\">K</a>\n      </div>\n      <ul class=\"navbar-nav\"  style=\"float: left;position: absolute;margin-left:100px ;\">\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\"  routerLink =\"/home\">Home <span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/register\">Register</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Pricing</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n          </li>\n          <!-- <li><p class=\"team-info\">Hi! Team - {{Auth.getLoginUser()}}</p></li> -->\n        </ul>\n        <!-- <p class=\"team-info\">Hi! Team - {{Auth.getLoginUser()}}</p> -->\n        <ul class=\"nav navbar-nav navbar-right\">\n        <li><a class=\"nav-link\" href=\"#\"> Sign Up</a></li>\n        <li><a class=\"nav-link\" routerLink=\"/login\"> Login</a></li>\n        <li><a class=\"nav-link\" (click)=\"logout()\" href=\"#\"> Logout</a></li>\n        <!-- <li><a *ngIf=\"!Auth.loginStatus()\" class=\"nav-link\" routerLink=\"/login\"> Login</a></li> -->\n        <!-- <li><a *ngIf=\"Auth.loginStatus()\" class=\"nav-link\" (click)=\"logout()\" href=\"#\"> Logout</a></li> -->\n      </ul>\n    </div>\n    </nav>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/service/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/service/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/service/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, route) {
        this.authService = authService;
        this.route = route;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.route.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/service/auth.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



// import 'rxjs/add/operator/catch';
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.loginUser = function (userData) {
        // cellphone
        return this.http.post('http://192.168.43.138:3000/api/login', userData);
        // local
        // return this.http.post<any>('http://192.168.1.32:3000/api/login',userData);
        // return this.http.post<any>('http://localhost:3000/api/login',userData);
    };
    // loginUser(userData)
    // {
    //   return this.http.post<any>('http://192.168.1.32:3000/api/login',userData);
    //   // return this.http.post<any>('http://localhost:3000/api/login',userData);
    // }
    AuthService.prototype.loggedIn = function () {
        return !!localStorage.getItem('token');
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/service/token-interceptor.service.ts":
/*!******************************************************!*\
  !*** ./src/app/service/token-interceptor.service.ts ***!
  \******************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");



var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(injector) {
        this.injector = injector;
    }
    TokenInterceptorService.prototype.intercept = function (req, next) {
        var authService = this.injector.get(_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]);
        var tokenizeReq = req.clone({
            setHeaders: {
                Authorization: "Bearer " + authService.getToken()
            }
        });
        return next.handle(tokenizeReq);
    };
    TokenInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Bhupen\Desktop\Angular Projects\Project_Class\angular6\weld011\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map