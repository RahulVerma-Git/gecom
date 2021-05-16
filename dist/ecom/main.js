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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");
/* harmony import */ var _component_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/about/about.component */ "./src/app/component/about/about.component.ts");
/* harmony import */ var _component_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/catalog/catalog.component */ "./src/app/component/catalog/catalog.component.ts");
/* harmony import */ var _component_my_cart_my_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/my-cart/my-cart.component */ "./src/app/component/my-cart/my-cart.component.ts");
/* harmony import */ var _component_login_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/login/login/login.component */ "./src/app/component/login/login/login.component.ts");









const routes = [
    { path: '', component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'home', component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'catalog', component: _component_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_4__["CatalogComponent"] },
    { path: 'about', component: _component_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: 'cartitems', component: _component_my_cart_my_cart_component__WEBPACK_IMPORTED_MODULE_5__["MyCartComponent"] },
    { path: 'login', component: _component_login_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _component_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/header/header.component */ "./src/app/component/header/header.component.ts");
/* harmony import */ var _component_announcement_bar_announcement_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/announcement-bar/announcement-bar.component */ "./src/app/component/announcement-bar/announcement-bar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/footer/footer.component */ "./src/app/component/footer/footer.component.ts");






class AppComponent {
    constructor() {
        this.title = 'ecom';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 13, vars: 0, consts: [["lang", "en"], ["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1, shrink-to-fit=no"], ["name", "description", "content", ""], ["name", "author", "content", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "meta", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Small Business - Start Bootstrap Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-announcement-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_component_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _component_announcement_bar_announcement_bar_component__WEBPACK_IMPORTED_MODULE_2__["AnnouncementBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-webcam */ "./node_modules/ngx-webcam/__ivy_ngcc__/fesm2015/ngx-webcam.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/header/header.component */ "./src/app/component/header/header.component.ts");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");
/* harmony import */ var _component_about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/about/about.component */ "./src/app/component/about/about.component.ts");
/* harmony import */ var _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/footer/footer.component */ "./src/app/component/footer/footer.component.ts");
/* harmony import */ var _component_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/catalog/catalog.component */ "./src/app/component/catalog/catalog.component.ts");
/* harmony import */ var _component_cart_cart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/cart/cart.component */ "./src/app/component/cart/cart.component.ts");
/* harmony import */ var _component_my_cart_my_cart_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/my-cart/my-cart.component */ "./src/app/component/my-cart/my-cart.component.ts");
/* harmony import */ var _service_window_ref_window_ref_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./service/window-ref/window-ref.service */ "./src/app/service/window-ref/window-ref.service.ts");
/* harmony import */ var _component_announcement_bar_announcement_bar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/announcement-bar/announcement-bar.component */ "./src/app/component/announcement-bar/announcement-bar.component.ts");
/* harmony import */ var _component_login_login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/login/login/login.component */ "./src/app/component/login/login/login.component.ts");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_service_window_ref_window_ref_service__WEBPACK_IMPORTED_MODULE_14__["WindowRefService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ngx_webcam__WEBPACK_IMPORTED_MODULE_4__["WebcamModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _component_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        _component_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
        _component_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
        _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
        _component_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_11__["CatalogComponent"],
        _component_cart_cart_component__WEBPACK_IMPORTED_MODULE_12__["CartComponent"],
        _component_my_cart_my_cart_component__WEBPACK_IMPORTED_MODULE_13__["MyCartComponent"],
        _component_announcement_bar_announcement_bar_component__WEBPACK_IMPORTED_MODULE_15__["AnnouncementBarComponent"],
        _component_login_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        ngx_webcam__WEBPACK_IMPORTED_MODULE_4__["WebcamModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _component_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                    _component_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                    _component_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
                    _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                    _component_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_11__["CatalogComponent"],
                    _component_cart_cart_component__WEBPACK_IMPORTED_MODULE_12__["CartComponent"],
                    _component_my_cart_my_cart_component__WEBPACK_IMPORTED_MODULE_13__["MyCartComponent"],
                    _component_announcement_bar_announcement_bar_component__WEBPACK_IMPORTED_MODULE_15__["AnnouncementBarComponent"],
                    _component_login_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    ngx_webcam__WEBPACK_IMPORTED_MODULE_4__["WebcamModule"]
                ],
                providers: [_service_window_ref_window_ref_service__WEBPACK_IMPORTED_MODULE_14__["WindowRefService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/component/about/about.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/about/about.component.ts ***!
  \****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 18, vars: 0, consts: [[1, "container", "my-5"], [1, "row", "contentBody"], [1, "col-sm-6", "p-3", 2, "border", "1px solid goldenrod", "border-radius", "10px"], [1, "col-sm-6"], [1, "text-center", 2, "margin-top", "50% !important"], [1, "fa", "fa-facebook-square", "fa-2x", "m-2", 2, "cursor", "pointer"], [1, "fa", "fa-twitter-square", "fa-2x", "m-2", 2, "cursor", "pointer"], [1, "fa", "fa-youtube-square", "fa-2x", "m-2", 2, "cursor", "pointer"], [1, "fa", "fa-instagram", "fa-2x", "m-2", 2, "cursor", "pointer"], [1, "fa", "fa-linkedin-square", "fa-2x", "m-2", 2, "cursor", "pointer"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "An About Us page helps your company make a good first impression, and is critical for building customer trust and loyalty. An About Us page should make sure to cover basic information about the store and its founders, explain the company's purpose and how it differs from the competition, and encourage discussion and interaction. Here are some free templates, samples, and example About Us pages to help your ecommerce store stand out from the crowd.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "When it comes to personalizing your online store, nothing is more effective than an About Us page. This is a quick summary of your company's history and purpose, and should provide a clear overview of the company's brand story. A great About Us page can help tell your brand story, establish customer loyalty, and turn your bland ecommerce store into an well-loved brand icon. Most importantly, it will give your customers a reason to shop from your brand.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "In this post, we'll give you three different ways to create a professional about us page for your online store, blog, or other website - use our about us page generator, use the fill-in-the-blank about us template below, or create your own custom page using the about us examples within this article ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/component/announcement-bar/announcement-bar.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/component/announcement-bar/announcement-bar.component.ts ***!
  \**************************************************************************/
/*! exports provided: AnnouncementBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementBarComponent", function() { return AnnouncementBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AnnouncementBarComponent {
    constructor() { }
    ngOnInit() {
        this.hideAnnouncementBar();
    }
    displayAnnouncementBar(msg, type) {
        $("#announcement-bar").css("visibility", "visible");
        $("#announcement-bar").removeClass("fade-out");
        $("#announcement-bar").addClass("fade-in");
        switch (type) {
            case "success":
                $("#announcement-bar").css({ "background": "green", "color": "white" });
                $("#announcement-bar-msg").html(msg);
                break;
            case "failure":
                $("#announcement-bar").css({ "background": "red", "color": "white" });
                $("#announcement-bar-msg").html(msg);
                break;
            case "warning":
                $("#announcement-bar").css({ "background": "orange", "color": "white" });
                $("#announcement-bar-msg").html(msg);
                break;
            case "notify":
                $("#announcement-bar").css({ "background": "blue", "color": "white" });
                $("#announcement-bar-msg").html(msg);
                break;
        }
        var classRef = this;
        setTimeout(function () {
            classRef.hideAnnouncementBar();
        }, 5000);
    }
    hideAnnouncementBar() {
        $("#announcement-bar").removeClass("fade-in");
        $("#announcement-bar").addClass("fade-out");
        setTimeout(function () {
            $("#announcement-bar").css("visibility", "hidden");
        }, 5000);
    }
    closeAnnouncementBar() {
        $("#announcement-bar").css("visibility", "hidden");
    }
}
AnnouncementBarComponent.ɵfac = function AnnouncementBarComponent_Factory(t) { return new (t || AnnouncementBarComponent)(); };
AnnouncementBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnnouncementBarComponent, selectors: [["app-announcement-bar"]], decls: 4, vars: 0, consts: [["id", "announcement-bar", 1, "text-center", "fade-in", "fixed-top", 2, "margin-top", "80px"], ["id", "announcement-bar-msg"], [1, "btn", "btn-sm", "pull-right", 2, "color", "white", 3, "click"], [1, "fa", "fa-times"]], template: function AnnouncementBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnnouncementBarComponent_Template_button_click_2_listener() { return ctx.closeAnnouncementBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".fade-in[_ngcontent-%COMP%] {\r\n    animation: fadeIn ease 5s;\r\n    -webkit-animation: fadeIn ease 5s;\r\n    -moz-animation: fadeIn ease 5s;\r\n    -o-animation: fadeIn ease 5s;\r\n    -ms-animation: fadeIn ease 5s;\r\n  }\r\n@keyframes fadeIn {\r\n    0% {\r\n      opacity:0;\r\n    }\r\n    100% {\r\n      opacity:1;\r\n    }\r\n  }\r\n\r\n.fade-out[_ngcontent-%COMP%] {\r\n    animation: fadeOut ease 8s;\r\n    -webkit-animation: fadeOut ease 8s;\r\n    -moz-animation: fadeOut ease 8s;\r\n    -o-animation: fadeOut ease 8s;\r\n    -ms-animation: fadeOut ease 8s;\r\n  }\r\n@keyframes fadeOut {\r\n    0% {\r\n      opacity:1;\r\n    }\r\n    100% {\r\n      opacity:0;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2Fubm91bmNlbWVudC1iYXIvYW5ub3VuY2VtZW50LWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGVBQWU7QUFDZjtJQUNJLHlCQUF5QjtJQUN6QixpQ0FBaUM7SUFDakMsOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7RUFDL0I7QUFDQTtJQUNFO01BQ0UsU0FBUztJQUNYO0lBQ0E7TUFDRSxTQUFTO0lBQ1g7RUFDRjtBQXFDRixnQkFBZ0I7QUFDaEI7SUFDSSwwQkFBMEI7SUFDMUIsa0NBQWtDO0lBQ2xDLCtCQUErQjtJQUMvQiw2QkFBNkI7SUFDN0IsOEJBQThCO0VBQ2hDO0FBQ0E7SUFDRTtNQUNFLFNBQVM7SUFDWDtJQUNBO01BQ0UsU0FBUztJQUNYO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvYW5ub3VuY2VtZW50LWJhci9hbm5vdW5jZW1lbnQtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBmYWRlIGluIGNzcyovXHJcbi5mYWRlLWluIHtcclxuICAgIGFuaW1hdGlvbjogZmFkZUluIGVhc2UgNXM7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIGVhc2UgNXM7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogZmFkZUluIGVhc2UgNXM7XHJcbiAgICAtby1hbmltYXRpb246IGZhZGVJbiBlYXNlIDVzO1xyXG4gICAgLW1zLWFuaW1hdGlvbjogZmFkZUluIGVhc2UgNXM7XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTowO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6MTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQC1tb3ota2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6MDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OjE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OjA7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eToxO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBALW8ta2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6MDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OjE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEAtbXMta2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6MDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OjE7XHJcbiAgfVxyXG59XHJcbi8qIGZhZGUgb3V0IGNzcyovXHJcbi5mYWRlLW91dCB7XHJcbiAgICBhbmltYXRpb246IGZhZGVPdXQgZWFzZSA4cztcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlT3V0IGVhc2UgOHM7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogZmFkZU91dCBlYXNlIDhzO1xyXG4gICAgLW8tYW5pbWF0aW9uOiBmYWRlT3V0IGVhc2UgOHM7XHJcbiAgICAtbXMtYW5pbWF0aW9uOiBmYWRlT3V0IGVhc2UgOHM7XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgZmFkZU91dCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6MTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OjA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEAtbW96LWtleWZyYW1lcyBmYWRlT3V0IHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eToxO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6MDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVPdXQge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OjE7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTowO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBALW8ta2V5ZnJhbWVzIGZhZGVPdXQge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OjE7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTowO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBALW1zLWtleWZyYW1lcyBmYWRlT3V0IHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eToxO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6MDtcclxuICB9XHJcbn0iXX0= */"] });
AnnouncementBarComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AnnouncementBarComponent, factory: AnnouncementBarComponent.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnnouncementBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-announcement-bar',
                templateUrl: './announcement-bar.component.html',
                styleUrls: ['./announcement-bar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/component/cart/cart.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/cart/cart.component.ts ***!
  \**************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _announcement_bar_announcement_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../announcement-bar/announcement-bar.component */ "./src/app/component/announcement-bar/announcement-bar.component.ts");



class CartComponent {
    constructor(announcementBarComponent) {
        this.announcementBarComponent = announcementBarComponent;
    }
    ngOnInit() {
        this.showCart();
    }
    showCart() {
        this.cartItems = JSON.parse(window.localStorage.getItem("mycart"));
        if (!this.cartItems) {
            this.cartItems = [];
        }
        $("#cartItem").attr("data-count", this.cartItems.length);
    }
    addToCart(item) {
        this.showCart();
        this.cartItems.push(item);
        $("#cartItem").attr("data-count", this.cartItems.length);
        window.localStorage.setItem("mycart", JSON.stringify(this.cartItems));
        this.announcementBarComponent.displayAnnouncementBar("Item has been added to you cart", "notify");
    }
    removeItemFromCart(item) {
        this.showCart();
        var index = this.cartItems.indexOf(item);
        this.cartItems.splice(index, 1);
        $("#cartItem").attr("data-count", this.cartItems.length);
        window.localStorage.setItem("mycart", JSON.stringify(this.cartItems));
        if (this.cartItems == null || this.cartItems.length == 0) {
            this.announcementBarComponent.displayAnnouncementBar("Your cart is empty now", "notify");
        }
    }
    clearCart() {
        this.showCart();
        this.cartItems.splice(0);
        $("#cartItem").attr("data-count", this.cartItems.length);
        window.localStorage.setItem("mycart", JSON.stringify(this.cartItems));
        this.announcementBarComponent.displayAnnouncementBar("Your cart is empty now", "notify");
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_announcement_bar_announcement_bar_component__WEBPACK_IMPORTED_MODULE_1__["AnnouncementBarComponent"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 3, vars: 0, consts: [["id", "cartItem", "data-count", "5", 1, "fa-stack", "fa-2x", "has-badge"], [1, "fa", "fa-circle", "fa-inverse"], [1, "fa", "fa-shopping-cart", "red-cart"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".fa-stack[data-count][_ngcontent-%COMP%]:after{\r\n    position:absolute;\r\n    right:0%;\r\n    top:0%;\r\n    content: attr(data-count);\r\n    font-size:40%;\r\n    padding:.6em;\r\n    border-radius:999px;\r\n    line-height:.75em;\r\n    color: white;\r\n    color:white;\r\n    text-align:center;\r\n    min-width:2em;\r\n    font-weight:bold;\r\n    background: goldenrod;\r\n    border-style:solid;\r\n  }\r\n  .fa-circle[_ngcontent-%COMP%] {\r\n      color: goldenrod;\r\n  }\r\n  .red-cart[_ngcontent-%COMP%] {\r\n      color:white;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2NhcnQvY2FydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLFFBQVE7SUFDUixNQUFNO0lBQ04seUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixrQkFBa0I7RUFDcEI7RUFDQTtNQUNJLGdCQUFnQjtFQUNwQjtFQUVBO01BQ0ksV0FBVztFQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2NhcnQvY2FydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhLXN0YWNrW2RhdGEtY291bnRdOmFmdGVye1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICByaWdodDowJTtcclxuICAgIHRvcDowJTtcclxuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1jb3VudCk7XHJcbiAgICBmb250LXNpemU6NDAlO1xyXG4gICAgcGFkZGluZzouNmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czo5OTlweDtcclxuICAgIGxpbmUtaGVpZ2h0Oi43NWVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIG1pbi13aWR0aDoyZW07XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgYmFja2dyb3VuZDogZ29sZGVucm9kO1xyXG4gICAgYm9yZGVyLXN0eWxlOnNvbGlkO1xyXG4gIH1cclxuICAuZmEtY2lyY2xlIHtcclxuICAgICAgY29sb3I6IGdvbGRlbnJvZDtcclxuICB9XHJcbiAgXHJcbiAgLnJlZC1jYXJ0IHtcclxuICAgICAgY29sb3I6d2hpdGU7XHJcbiAgfSJdfQ== */"] });
CartComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CartComponent, factory: CartComponent.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cart',
                templateUrl: './cart.component.html',
                styleUrls: ['./cart.component.css']
            }]
    }], function () { return [{ type: _announcement_bar_announcement_bar_component__WEBPACK_IMPORTED_MODULE_1__["AnnouncementBarComponent"] }]; }, null); })();


/***/ }),

/***/ "./src/app/component/catalog/catalog.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/catalog/catalog.component.ts ***!
  \********************************************************/
/*! exports provided: CatalogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogComponent", function() { return CatalogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cart/cart.component */ "./src/app/component/cart/cart.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function CatalogComponent_div_98_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CatalogComponent_div_98_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.previewImages(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CatalogComponent_div_98_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.addToCart(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.productDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.productPrice);
} }
class Filter {
    constructor() {
        this.catagory = "all";
        this.caret = "all";
        this.priceRange = "all";
        this.sortBy = "PRICE_LOW_TO_HIGH";
    }
}
class CatalogComponent {
    constructor(cartComponent) {
        this.cartComponent = cartComponent;
        this.items = [];
        this.filteredItems = [];
    }
    ngOnInit() {
        this.filter = new Filter();
        this.items = [{
                productId: 1,
                productName: "Gold Bangle",
                productPrice: 10000,
                imagePath: "assets/images/sliderimg1.jpg",
                productDescription: "About Product",
                catagory: "Bangle",
                caret: "24",
                isFeatured: true
            },
            {
                productId: 1,
                productName: "Gold Biscuit",
                productPrice: 10000,
                imagePath: "assets/images/sliderimg2.jpg",
                productDescription: "About Product",
                catagory: "Solid Gold",
                caret: "24",
                isFeatured: true
            },
            {
                productId: 1,
                productName: "Gold Bangle",
                productPrice: 100000,
                imagePath: "assets/images/sliderimg3.jpg",
                productDescription: "About Product",
                catagory: "Bangle",
                caret: "24",
                isFeatured: true
            },
            {
                productId: 1,
                productName: "Gold Bangle",
                productPrice: 100000,
                imagePath: "assets/images/sliderimg1.jpg",
                productDescription: "About Product",
                catagory: "Bangle",
                caret: "24",
                isFeatured: true
            },
            {
                productId: 1,
                productName: "Gold Biscuit",
                productPrice: 100000,
                imagePath: "assets/images/sliderimg2.jpg",
                productDescription: "About Product",
                catagory: "Solid Gold",
                caret: "24",
                isFeatured: true
            }];
        this.filterItem();
    }
    previewImages() {
        $("#previewImagesPopUp").modal("show");
    }
    closepreviewImages() {
        $("#previewImagesPopUp").modal("hide");
    }
    filterItem() {
        var thisClass = this;
        this.filteredItems = this.items;
        if (this.filter.catagory != "all") {
            this.filteredItems = this.items.filter(function (t) {
                return (t.catagory == thisClass.filter.catagory);
            });
        }
        if (this.filter.caret != "all") {
            this.filteredItems = this.filteredItems.filter(function (t) {
                return (t.caret == thisClass.filter.caret);
            });
        }
        if (this.filter.priceRange != "all") {
            var min = Number(this.filter.priceRange.split("-")[0]);
            var max = this.filter.priceRange.split("-")[1] != "x" ? Number(this.filter.priceRange.split("-")[1]) : Number.POSITIVE_INFINITY;
            this.filteredItems = this.filteredItems.filter(function (t) {
                return (t.productPrice <= max && t.productPrice >= min);
            });
        }
        switch (this.filter.sortBy) {
            case "PRICE_LOW_TO_HIGH":
                this.filteredItems = this.filteredItems.sort(function (t1, t2) {
                    return t1.productPrice - t2.productPrice;
                });
                break;
            case "PRICE_HIGH_TO_LOW":
                this.filteredItems = this.filteredItems.sort(function (t1, t2) {
                    return t2.productPrice - t1.productPrice;
                });
                break;
        }
    }
    addToCart(item) {
        this.cartComponent.addToCart(item);
    }
}
CatalogComponent.ɵfac = function CatalogComponent_Factory(t) { return new (t || CatalogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_cart_component__WEBPACK_IMPORTED_MODULE_1__["CartComponent"])); };
CatalogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CatalogComponent, selectors: [["app-catalog"]], decls: 99, vars: 5, consts: [["id", "previewImagesPopUp", 1, "modal", "fade"], [1, "modal-dialog", "modal-xl"], [1, "modal-content"], [1, "modal-body", 2, "background", "black"], ["id", "homeslider", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#homeslider", "data-slide-to", "0", 1, "active"], ["data-target", "#homeslider", "data-slide-to", "1"], ["data-target", "#homeslider", "data-slide-to", "2"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "assets/images/sliderimg1.jpg", "alt", "First slide", 1, "d-block", "w-100"], [1, "carousel-caption", "d-none", "d-md-block"], [1, "carousel-item"], ["src", "assets/images/sliderimg2.jpg", "alt", "Second slide", 1, "d-block", "w-100"], ["src", "assets/images/sliderimg3.jpg", "alt", "Third slide", 1, "d-block", "w-100"], ["href", "#homeslider", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#homeslider", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "modal-footer"], [1, "btn", "btn-ms", "custombtn", 3, "click"], [1, "container"], [1, "row", "align-items-center", "contentBody"], [1, "col-xs-12", "col-lg-3"], [1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["value", "all"], ["value", "Bracelet"], ["value", "Bangle"], ["value", "Necklace"], ["value", "Solid Gold"], ["value", "21"], ["value", "22"], ["value", "23"], ["value", "24"], ["value", "0-10000"], ["value", "10000-50000"], ["value", "50000-100000"], ["value", "100000-500000"], ["value", "500000-X"], ["value", "PRICE_LOW_TO_HIGH"], ["value", "PRICE_HIGH_TO_LOW"], [1, "col-xs-12", "my-5"], [1, "row"], ["class", "col-md-4 mb-5", 4, "ngFor", "ngForOf"], [1, "col-md-4", "mb-5"], [1, "card", "h-100"], [1, "card-body", 3, "click"], [1, "card-title"], ["alt", "Third slide", 1, "d-block", "w-100", 3, "src"], [1, "card-text"], [1, "card-footer"], [1, "pricetag"], [1, "fa", "fa-inr"], [1, "btn", "custombtn", "btn-sm", "pull-right", 3, "click"]], template: function CatalogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Hallmark | 100% pure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Best Deal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Hallmark | 100% pure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Best Deal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Hallmark | 100% pure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Best Deal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CatalogComponent_Template_button_click_40_listener() { return ctx.closepreviewImages(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Catagory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CatalogComponent_Template_select_ngModelChange_47_listener($event) { return ctx.filter.catagory = $event; })("change", function CatalogComponent_Template_select_change_47_listener() { return ctx.filterItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Bracelet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Bangle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Necklace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Solid Gold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Carets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CatalogComponent_Template_select_ngModelChange_61_listener($event) { return ctx.filter.caret = $event; })("change", function CatalogComponent_Template_select_change_61_listener() { return ctx.filterItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "21 carets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "22 carets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "23 carets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "24 carets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Price Range");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CatalogComponent_Template_select_ngModelChange_75_listener($event) { return ctx.filter.priceRange = $event; })("change", function CatalogComponent_Template_select_change_75_listener() { return ctx.filterItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\u20B90-10,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\u20B910,000-50,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\u20B950,000-1,00,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\u20B91,00,000-5,00,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "\u20B95,00,000 above");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Sort By");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CatalogComponent_Template_select_ngModelChange_91_listener($event) { return ctx.filter.sortBy = $event; })("change", function CatalogComponent_Template_select_change_91_listener() { return ctx.filterItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Price (low to high)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Price (hight to low)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, CatalogComponent_div_98_Template, 14, 4, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filter.catagory);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filter.caret);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filter.priceRange);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filter.sortBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredItems);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["label[_ngcontent-%COMP%]{\r\n    font-weight:500 !important;\r\n}\r\n.pricetag[_ngcontent-%COMP%]{\r\n    background: goldenrod;\r\n    padding: 5px;\r\n    border-radius: 5px;\r\n  }\r\n.card-body[_ngcontent-%COMP%]:hover{\r\n    background: bisque;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2NhdGFsb2cvY2F0YWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGtCQUFrQjtFQUNwQjtBQUNGO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2NhdGFsb2cvY2F0YWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWx7XHJcbiAgICBmb250LXdlaWdodDo1MDAgIWltcG9ydGFudDtcclxufVxyXG4ucHJpY2V0YWd7XHJcbiAgICBiYWNrZ3JvdW5kOiBnb2xkZW5yb2Q7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4uY2FyZC1ib2R5OmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogYmlzcXVlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CatalogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-catalog',
                templateUrl: './catalog.component.html',
                styleUrls: ['./catalog.component.css']
            }]
    }], function () { return [{ type: _cart_cart_component__WEBPACK_IMPORTED_MODULE_1__["CartComponent"] }]; }, null); })();


/***/ }),

/***/ "./src/app/component/footer/footer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 4, vars: 0, consts: [[1, "py-2"], [1, "container"], [1, "m-0", "text-left", "text-white"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Copyright \u00A9 Your Website 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["footer[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    bottom:0;\r\n    width: 100%;\r\n    background-color: goldenrod;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixRQUFRO0lBQ1IsV0FBVztJQUNYLDJCQUEyQjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXJ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206MDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZGVucm9kO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/component/header/header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_window_ref_window_ref_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/window-ref/window-ref.service */ "./src/app/service/window-ref/window-ref.service.ts");
/* harmony import */ var _login_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login/login.component */ "./src/app/component/login/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cart/cart.component */ "./src/app/component/cart/cart.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function HeaderComponent_a_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_29_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_a_29_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "My Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(windowRefService, loginComponent) {
        this.windowRefService = windowRefService;
        this.loginComponent = loginComponent;
        this.isLoggedIn = false;
    }
    ngOnInit() {
        this.isUserLoggedIn();
    }
    isUserLoggedIn() {
        this.isLoggedIn = false;
        if (this.windowRefService.nativeWindow.sessionStorage.getItem("name") != null && this.windowRefService.nativeWindow.sessionStorage.getItem("name").length > 0) {
            this.isLoggedIn = true;
        }
    }
    logout() {
        this.loginComponent.logout();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_window_ref_window_ref_service__WEBPACK_IMPORTED_MODULE_1__["WindowRefService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 32, vars: 3, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "fixed-top", "customheader"], [1, "container"], ["href", "#", 1, "navbar-brand"], ["routerLink", "/cartitems", 2, "margin-left", "40%"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarResponsive", "aria-controls", "navbarResponsive", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarResponsive", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto", 3, "click"], [1, "nav-item", "active"], ["routerLink", "/home", "routerLinkActive", "active", 1, "nav-link"], [1, "sr-only"], [1, "nav-item"], ["routerLink", "/catalog", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/about", "routerLinkActive", "active", 1, "nav-link"], ["href", "#", 1, "nav-link"], ["class", "nav-link", "routerLink", "/login", "routerLinkActive", "active", 4, "ngIf"], ["class", "nav-link", "style", "cursor: pointer;", 3, "click", 4, "ngIf"], ["routerLink", "/login", "routerLinkActive", "active", 1, "nav-link"], [1, "nav-link", 2, "cursor", "pointer", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_ul_click_9_listener() { return ctx.isUserLoggedIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Catalog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, HeaderComponent_a_28_Template, 2, 0, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, HeaderComponent_a_29_Template, 2, 0, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, HeaderComponent_a_31_Template, 2, 0, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__["CartComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".customheader[_ngcontent-%COMP%]{\r\n    background-color: goldenrod;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9taGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZGVucm9kO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: src_app_service_window_ref_window_ref_service__WEBPACK_IMPORTED_MODULE_1__["WindowRefService"] }, { type: _login_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] }]; }, null); })();


/***/ }),

/***/ "./src/app/component/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cart/cart.component */ "./src/app/component/cart/cart.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function HomeComponent_div_92_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_92_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.previewImages(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_92_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.addToCart(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.productDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.productPrice);
} }
class HomeComponent {
    constructor(cartComponent) {
        this.cartComponent = cartComponent;
        this.items = [];
    }
    ngOnInit() {
        this.items = [{
                productId: 1,
                productName: "Gold Bangle",
                productPrice: 1000,
                imagePath: "assets/images/sliderimg1.jpg",
                productDescription: "About Product",
                catagory: "Bangle",
                caret: "24",
                isFeatured: true
            },
            {
                productId: 1,
                productName: "Gold Biscuit",
                productPrice: 1000,
                imagePath: "assets/images/sliderimg2.jpg",
                productDescription: "About Product",
                catagory: "Bangle",
                caret: "24",
                isFeatured: true
            },
            {
                productId: 1,
                productName: "Gold Bangle",
                productPrice: 1000,
                imagePath: "assets/images/sliderimg3.jpg",
                productDescription: "About Product",
                catagory: "Bangle",
                caret: "24",
                isFeatured: true
            },
            {
                productId: 1,
                productName: "Gold Bangle",
                productPrice: 1000,
                imagePath: "assets/images/sliderimg1.jpg",
                productDescription: "About Product",
                catagory: "Bangle",
                caret: "24",
                isFeatured: true
            },
            {
                productId: 1,
                productName: "Gold Biscuit",
                productPrice: 1000,
                imagePath: "assets/images/sliderimg2.jpg",
                productDescription: "About Product",
                catagory: "Bangle",
                caret: "24",
                isFeatured: true
            }];
    }
    addToCart(item) {
        this.cartComponent.addToCart(item);
    }
    previewImages() {
        $("#previewImagesPopUp").modal("show");
    }
    closepreviewImages() {
        $("#previewImagesPopUp").modal("hide");
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_cart_component__WEBPACK_IMPORTED_MODULE_1__["CartComponent"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 93, vars: 1, consts: [["id", "previewImagesPopUp", 1, "modal", "fade"], [1, "modal-dialog", "modal-xl"], [1, "modal-content"], [1, "modal-body", 2, "background", "black"], ["id", "homeslider", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#homeslider", "data-slide-to", "0", 1, "active"], ["data-target", "#homeslider", "data-slide-to", "1"], ["data-target", "#homeslider", "data-slide-to", "2"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "assets/images/sliderimg1.jpg", "alt", "First slide", 1, "d-block", "w-100"], [1, "carousel-caption", "d-none", "d-md-block"], [1, "carousel-item"], ["src", "assets/images/sliderimg2.jpg", "alt", "Second slide", 1, "d-block", "w-100"], ["src", "assets/images/sliderimg3.jpg", "alt", "Third slide", 1, "d-block", "w-100"], ["href", "#homeslider", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#homeslider", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "modal-footer"], [1, "btn", "btn-ms", "custombtn", 3, "click"], [1, "container"], [1, "row", "align-items-center", "my-5"], [1, "col-lg-7"], [1, "col-lg-5"], [1, "font-weight-light"], ["href", "#", 1, "btn", "custombtn"], [1, "card", "text-white", "my-5", "text-center", 2, "background-color", "goldenrod"], [1, "card-body"], [1, "text-white", "m-0"], [1, "row"], ["class", "col-md-4 mb-5", 4, "ngFor", "ngForOf"], [1, "col-md-4", "mb-5"], [1, "card", "h-100"], [1, "card-body", 3, "click"], [1, "card-title"], ["alt", "Third slide", 1, "d-block", "w-100", 3, "src"], [1, "card-text"], [1, "card-footer"], [1, "pricetag"], [1, "fa", "fa-inr"], [1, "btn", "custombtn", "btn-sm", "pull-right", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Hallmark | 100% pure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Best Deal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Hallmark | 100% pure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Best Deal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Hallmark | 100% pure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Best Deal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_40_listener() { return ctx.closepreviewImages(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ol", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Hallmark | 100% pure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Best Deal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Hallmark | 100% pure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Best Deal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Hallmark | 100% pure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Best Deal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h1", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Business Name or Tagline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Call to Action!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "This call to action card is a great place to showcase some important information or display a clever tagline!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, HomeComponent_div_92_Template, 14, 4, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".container[_ngcontent-%COMP%] {\r\n    padding-top: 56px !important;\r\n  }\r\n.pricetag[_ngcontent-%COMP%]{\r\n  background: goldenrod;\r\n  padding: 5px;\r\n  border-radius: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNEJBQTRCO0VBQzlCO0FBQ0Y7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDU2cHggIWltcG9ydGFudDtcclxuICB9XHJcbi5wcmljZXRhZ3tcclxuICBiYWNrZ3JvdW5kOiBnb2xkZW5yb2Q7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _cart_cart_component__WEBPACK_IMPORTED_MODULE_1__["CartComponent"] }]; }, null); })();


/***/ }),

/***/ "./src/app/component/login/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/login/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_window_ref_window_ref_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/window-ref/window-ref.service */ "./src/app/service/window-ref/window-ref.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _announcement_bar_announcement_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../announcement-bar/announcement-bar.component */ "./src/app/component/announcement-bar/announcement-bar.component.ts");
/* harmony import */ var src_app_service_oauth_oauth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/oauth/oauth.service */ "./src/app/service/oauth/oauth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







class LoginComponent {
    constructor(windowRefService, router, announcementBarComponent, oauthService) {
        this.windowRefService = windowRefService;
        this.router = router;
        this.announcementBarComponent = announcementBarComponent;
        this.oauthService = oauthService;
    }
    ngOnInit() {
        var username = this.windowRefService.nativeWindow.sessionStorage.getItem("name");
        if (username) {
            this.router.navigate(["/home"]);
            this.announcementBarComponent.displayAnnouncementBar("Welcome " + username, "notify");
        }
    }
    login() {
        var user = {
            email: this.email,
            password: this.password
        };
        this.oauthService.login(user)
            .subscribe(response => {
            this.windowRefService.nativeWindow.sessionStorage.setItem("name", "Mr.x");
            this.windowRefService.nativeWindow.location.reload();
        });
    }
    logout() {
        this.windowRefService.nativeWindow.sessionStorage.clear();
        this.announcementBarComponent.displayAnnouncementBar("You have logged out !", "notify");
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_window_ref_window_ref_service__WEBPACK_IMPORTED_MODULE_1__["WindowRefService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_announcement_bar_announcement_bar_component__WEBPACK_IMPORTED_MODULE_3__["AnnouncementBarComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_oauth_oauth_service__WEBPACK_IMPORTED_MODULE_4__["OauthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 34, vars: 2, consts: [[1, "background-page"], [1, "d-flex", "justify-content-center", "h-100"], [1, "card", "contentBody"], [1, "card-header"], [1, "d-flex", "justify-content-end", "social_icon"], [1, "fa", "fa-google-plus-square"], [1, "card-body"], [1, "input-group", "form-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fa", "fa-user"], ["type", "text", "name", "email", "placeholder", "username", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "fa", "fa-key"], ["type", "password", "name", "password", "placeholder", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row", "align-items-center", "remember"], ["type", "checkbox"], [1, "form-group"], ["type", "submit", "value", "Login", 1, "btn", "float-right", "login_btn", 3, "click"], [1, "card-footer"], [1, "d-flex", "justify-content-center", "links"], ["href", "#", 2, "color", "goldenrod"], [1, "d-flex", "justify-content-center"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_15_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_20_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Remember Me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_input_click_25_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Don't have an account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Forgot your password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: ["@import url('https://fonts.googleapis.com/css?family=Numans');\r\n\r\n\r\n\r\n.background-page[_ngcontent-%COMP%]{\r\nheight: 800px !important;\r\nwidth: 100% !important;\r\nalign-content: center !important;\r\nbackground-image: url('/assets/images/background.jpg') !important;\r\nbackground-size: cover !important;\r\nbackground-repeat: no-repeat !important;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]{\r\nheight: 370px;\r\nmargin-top: auto;\r\nmargin-bottom: auto;\r\nwidth: 400px;\r\nbackground-color: rgba(0,0,0,0.5) !important;\r\n}\r\n\r\n.social_icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\nfont-size: 60px;\r\nmargin-left: 10px;\r\ncolor: #FFC312;\r\n}\r\n\r\n.social_icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{\r\ncolor: white;\r\ncursor: pointer;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\ncolor: white;\r\n}\r\n\r\n.social_icon[_ngcontent-%COMP%]{\r\nposition: absolute;\r\nright: 20px;\r\ntop: -45px;\r\n}\r\n\r\n.input-group-prepend[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\nwidth: 50px;\r\nbackground-color: #FFC312;\r\ncolor: black;\r\nborder:0 !important;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus{\r\noutline: 0 0 0 0  !important;\r\nbox-shadow: 0 0 0 0 !important;\r\n\r\n}\r\n\r\n.remember[_ngcontent-%COMP%]{\r\ncolor: white;\r\n}\r\n\r\n.remember[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]\r\n{\r\nwidth: 20px;\r\nheight: 20px;\r\nmargin-left: 15px;\r\nmargin-right: 5px;\r\n}\r\n\r\n.login_btn[_ngcontent-%COMP%]{\r\ncolor: black;\r\nbackground-color: #FFC312;\r\nwidth: 100px;\r\n}\r\n\r\n.login_btn[_ngcontent-%COMP%]:hover{\r\ncolor: black;\r\nbackground-color: white;\r\n}\r\n\r\n.links[_ngcontent-%COMP%]{\r\ncolor: white;\r\n}\r\n\r\n.links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\nmargin-left: 4px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2xvZ2luL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkRBQTZEOztBQUU3RDs7Ozs7O0VBTUU7O0FBRUY7QUFDQSx3QkFBd0I7QUFDeEIsc0JBQXNCO0FBQ3RCLGdDQUFnQztBQUNoQyxpRUFBaUU7QUFDakUsaUNBQWlDO0FBQ2pDLHVDQUF1QztBQUN2Qzs7QUFFQTtBQUNBLGFBQWE7QUFDYixnQkFBZ0I7QUFDaEIsbUJBQW1CO0FBQ25CLFlBQVk7QUFDWiw0Q0FBNEM7QUFDNUM7O0FBRUE7QUFDQSxlQUFlO0FBQ2YsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZDs7QUFFQTtBQUNBLFlBQVk7QUFDWixlQUFlO0FBQ2Y7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEIsV0FBVztBQUNYLFVBQVU7QUFDVjs7QUFFQTtBQUNBLFdBQVc7QUFDWCx5QkFBeUI7QUFDekIsWUFBWTtBQUNaLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1Qiw4QkFBOEI7O0FBRTlCOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBOztBQUVBLFdBQVc7QUFDWCxZQUFZO0FBQ1osaUJBQWlCO0FBQ2pCLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBLFlBQVk7QUFDWix5QkFBeUI7QUFDekIsWUFBWTtBQUNaOztBQUVBO0FBQ0EsWUFBWTtBQUNaLHVCQUF1QjtBQUN2Qjs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9sb2dpbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW1hbnMnKTtcclxuXHJcbi8qaHRtbCxib2R5e1xyXG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHA6Ly9nZXR3YWxscGFwZXJzLmNvbS93YWxscGFwZXIvZnVsbC9hLzUvZC81NDQ3NTAuanBnJyk7XHJcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmhlaWdodDogMTAwJTtcclxuZm9udC1mYW1pbHk6ICdOdW1hbnMnLCBzYW5zLXNlcmlmO1xyXG59Ki9cclxuXHJcbi5iYWNrZ3JvdW5kLXBhZ2V7XHJcbmhlaWdodDogODAwcHggIWltcG9ydGFudDtcclxud2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuYWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbmJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC5qcGcnKSAhaW1wb3J0YW50O1xyXG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmR7XHJcbmhlaWdodDogMzcwcHg7XHJcbm1hcmdpbi10b3A6IGF1dG87XHJcbm1hcmdpbi1ib3R0b206IGF1dG87XHJcbndpZHRoOiA0MDBweDtcclxuYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zb2NpYWxfaWNvbiBzcGFue1xyXG5mb250LXNpemU6IDYwcHg7XHJcbm1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5jb2xvcjogI0ZGQzMxMjtcclxufVxyXG5cclxuLnNvY2lhbF9pY29uIHNwYW46aG92ZXJ7XHJcbmNvbG9yOiB3aGl0ZTtcclxuY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIgaDN7XHJcbmNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNvY2lhbF9pY29ue1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbnJpZ2h0OiAyMHB4O1xyXG50b3A6IC00NXB4O1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAtcHJlcGVuZCBzcGFue1xyXG53aWR0aDogNTBweDtcclxuYmFja2dyb3VuZC1jb2xvcjogI0ZGQzMxMjtcclxuY29sb3I6IGJsYWNrO1xyXG5ib3JkZXI6MCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pbnB1dDpmb2N1c3tcclxub3V0bGluZTogMCAwIDAgMCAgIWltcG9ydGFudDtcclxuYm94LXNoYWRvdzogMCAwIDAgMCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuLnJlbWVtYmVye1xyXG5jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5yZW1lbWJlciBpbnB1dFxyXG57XHJcbndpZHRoOiAyMHB4O1xyXG5oZWlnaHQ6IDIwcHg7XHJcbm1hcmdpbi1sZWZ0OiAxNXB4O1xyXG5tYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmxvZ2luX2J0bntcclxuY29sb3I6IGJsYWNrO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMzEyO1xyXG53aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi5sb2dpbl9idG46aG92ZXJ7XHJcbmNvbG9yOiBibGFjaztcclxuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5saW5rc3tcclxuY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubGlua3MgYXtcclxubWFyZ2luLWxlZnQ6IDRweDtcclxufSJdfQ== */"] });
LoginComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginComponent, factory: LoginComponent.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: src_app_service_window_ref_window_ref_service__WEBPACK_IMPORTED_MODULE_1__["WindowRefService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _announcement_bar_announcement_bar_component__WEBPACK_IMPORTED_MODULE_3__["AnnouncementBarComponent"] }, { type: src_app_service_oauth_oauth_service__WEBPACK_IMPORTED_MODULE_4__["OauthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/component/my-cart/my-cart.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/my-cart/my-cart.component.ts ***!
  \********************************************************/
/*! exports provided: MyCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCartComponent", function() { return MyCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_model_razorpaypayment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/razorpaypayment */ "./src/app/model/razorpaypayment.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cart/cart.component */ "./src/app/component/cart/cart.component.ts");
/* harmony import */ var _service_payment_payment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/payment/payment.service */ "./src/app/service/payment/payment.service.ts");
/* harmony import */ var src_app_service_window_ref_window_ref_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/window-ref/window-ref.service */ "./src/app/service/window-ref/window-ref.service.ts");
/* harmony import */ var _announcement_bar_announcement_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../announcement-bar/announcement-bar.component */ "./src/app/component/announcement-bar/announcement-bar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function MyCartComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Your cart is empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyCartComponent_ng_template_4_tr_13_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyCartComponent_ng_template_4_tr_13_Template_i_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const item_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.removeItemFromCart(item_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r4.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.productDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.productPrice);
} }
function MyCartComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyCartComponent_ng_template_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.paynow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pay Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Product Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Descriprion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MyCartComponent_ng_template_4_tr_13_Template, 11, 4, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tfoot");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Total : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyCartComponent_ng_template_4_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.paynow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Pay Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.cartComponent.cartItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", ctx_r2.totalPrice, "");
} }
class MyCartComponent {
    constructor(cartComponent, paymentService, windowRefService, announcementBarComponent) {
        this.cartComponent = cartComponent;
        this.paymentService = paymentService;
        this.windowRefService = windowRefService;
        this.announcementBarComponent = announcementBarComponent;
        this.totalPrice = 0;
    }
    ngOnInit() {
        this.cartComponent.showCart();
        this.cartComponent.cartItems.forEach(element => {
            this.totalPrice = this.totalPrice + element.productPrice;
        });
        console.log($("#announcementMsg"));
    }
    removeItemFromCart(item) {
        this.cartComponent.removeItemFromCart(item);
        this.totalPrice = 0;
        this.cartComponent.cartItems.forEach(element => {
            this.totalPrice = this.totalPrice + element.productPrice;
        });
    }
    paynow() {
        var request = {
            amount: this.totalPrice,
            currency: "INR",
            receipt: "order_rcptid_11"
        };
        this.paymentService.createRazorpayOrder(request)
            .subscribe(response => {
            this.razorpayPayment = new src_app_model_razorpaypayment__WEBPACK_IMPORTED_MODULE_1__["RazorpayPayment"]("Mr.X", "t@gmail.com", "1111111111", "my country", "goldenrod");
            this.razorpayPayment.amount = this.totalPrice.toString();
            this.razorpayPayment.currency = "INR";
            this.razorpayPayment.description = "This is test payment";
            this.razorpayPayment.order_id = response.id;
            var classRef = this;
            this.razorpayPayment.handler = function (response) {
                classRef.onPaymentSuccess(classRef.cartComponent, classRef.announcementBarComponent, response);
            };
            var rzp1 = new this.windowRefService.nativeWindow.Razorpay(this.razorpayPayment);
            rzp1.open();
            rzp1.on('payment.failed', function (response) {
                alert(response.error.code);
            });
        });
    }
    onPaymentSuccess(cartComponentRef, announcementBarComponentRef, response) {
        cartComponentRef.clearCart();
        announcementBarComponentRef.displayAnnouncementBar("Payment Success for Transaction Id : " + response.razorpay_order_id, "success");
        console.log("payment done");
    }
}
MyCartComponent.ɵfac = function MyCartComponent_Factory(t) { return new (t || MyCartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_payment_payment_service__WEBPACK_IMPORTED_MODULE_3__["PaymentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_window_ref_window_ref_service__WEBPACK_IMPORTED_MODULE_4__["WindowRefService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_announcement_bar_announcement_bar_component__WEBPACK_IMPORTED_MODULE_5__["AnnouncementBarComponent"])); };
MyCartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyCartComponent, selectors: [["app-my-cart"]], decls: 6, vars: 2, consts: [[1, "container", "contentBody"], [1, "row"], [1, "col-md-12", "mb-5", "table-responsive"], ["class", "text-center", 4, "ngIf", "ngIfElse"], ["showcart", ""], [1, "text-center"], [1, "fa", "fa-shopping-cart", "fa-2x"], [1, "btn", "btn-sm", "custombtn", "pull-right", "mb-2", 3, "click"], [1, "table"], [4, "ngFor", "ngForOf"], [2, "font-weight", "bold"], ["alt", "Third slide", 2, "width", "200px", 3, "src"], [1, "fa", "fa-times-circle", "fa-2x", 3, "click"]], template: function MyCartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MyCartComponent_div_3_Template, 5, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MyCartComponent_ng_template_4_Template, 23, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartComponent.cartItems == null || ctx.cartComponent.cartItems.length == 0)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9teS1jYXJ0L215LWNhcnQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyCartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-cart',
                templateUrl: './my-cart.component.html',
                styleUrls: ['./my-cart.component.css']
            }]
    }], function () { return [{ type: _cart_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"] }, { type: _service_payment_payment_service__WEBPACK_IMPORTED_MODULE_3__["PaymentService"] }, { type: src_app_service_window_ref_window_ref_service__WEBPACK_IMPORTED_MODULE_4__["WindowRefService"] }, { type: _announcement_bar_announcement_bar_component__WEBPACK_IMPORTED_MODULE_5__["AnnouncementBarComponent"] }]; }, null); })();


/***/ }),

/***/ "./src/app/model/razorpaypayment.ts":
/*!******************************************!*\
  !*** ./src/app/model/razorpaypayment.ts ***!
  \******************************************/
/*! exports provided: RazorpayPayment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RazorpayPayment", function() { return RazorpayPayment; });
class Prefill {
    constructor(name, email, contact) {
        this.name = name;
        this.email = email;
        this.contact = contact;
    }
}
class Notes {
    constructor(address) {
        this.address = address;
    }
}
class Theme {
    constructor(color) {
        this.color = color;
    }
}
class RazorpayPayment {
    constructor(name, email, contact, address, color) {
        this.key = "rzp_test_JINkiaJWgTUGBv"; // Enter the Key ID generated from the Dashboard
        this.prefill = new Prefill(name, email, contact);
        this.notes = new Notes(address);
        this.theme = new Theme(color);
    }
}


/***/ }),

/***/ "./src/app/service/constant/constant.service.ts":
/*!******************************************************!*\
  !*** ./src/app/service/constant/constant.service.ts ***!
  \******************************************************/
/*! exports provided: ConstantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstantService", function() { return ConstantService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const razorpayHostURL = "https://api.razorpay.com";
const serverBaseURL = "http://192.168.0.11:8080";
class ConstantService {
    constructor() { }
    getRazorpayHostURL() {
        return razorpayHostURL;
    }
    getServerBaseURL() {
        return serverBaseURL;
    }
}
ConstantService.ɵfac = function ConstantService_Factory(t) { return new (t || ConstantService)(); };
ConstantService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConstantService, factory: ConstantService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConstantService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/service/oauth/oauth.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/oauth/oauth.service.ts ***!
  \************************************************/
/*! exports provided: OauthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OauthService", function() { return OauthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _constant_constant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constant/constant.service */ "./src/app/service/constant/constant.service.ts");





class OauthService {
    constructor(http, constantService) {
        this.http = http;
        this.constantService = constantService;
    }
    login(user) {
        return this.http.post(this.constantService.getServerBaseURL() + "/oauth/login", user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => {
            console.log(error);
            return null;
        }));
    }
}
OauthService.ɵfac = function OauthService_Factory(t) { return new (t || OauthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_constant_constant_service__WEBPACK_IMPORTED_MODULE_3__["ConstantService"])); };
OauthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OauthService, factory: OauthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OauthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _constant_constant_service__WEBPACK_IMPORTED_MODULE_3__["ConstantService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/payment/payment.service.ts":
/*!****************************************************!*\
  !*** ./src/app/service/payment/payment.service.ts ***!
  \****************************************************/
/*! exports provided: PaymentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentService", function() { return PaymentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _constant_constant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constant/constant.service */ "./src/app/service/constant/constant.service.ts");





class PaymentService {
    constructor(http, constantService) {
        this.http = http;
        this.constantService = constantService;
    }
    createRazorpayOrder(request) {
        return this.http.post(this.constantService.getServerBaseURL() + "/payment/createRazorpayOrder", request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => { alert(error.message); return null; }));
    }
}
PaymentService.ɵfac = function PaymentService_Factory(t) { return new (t || PaymentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_constant_constant_service__WEBPACK_IMPORTED_MODULE_3__["ConstantService"])); };
PaymentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PaymentService, factory: PaymentService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _constant_constant_service__WEBPACK_IMPORTED_MODULE_3__["ConstantService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/window-ref/window-ref.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/service/window-ref/window-ref.service.ts ***!
  \**********************************************************/
/*! exports provided: WindowRefService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowRefService", function() { return WindowRefService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


function _window() {
    // return the global native browser window object
    return window;
}
class WindowRefService {
    constructor() { }
    get nativeWindow() {
        return _window();
    }
}
WindowRefService.ɵfac = function WindowRefService_Factory(t) { return new (t || WindowRefService)(); };
WindowRefService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WindowRefService, factory: WindowRefService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WindowRefService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Rahul.k.verma\Downloads\startbootstrap\ecom\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map