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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/default/default.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/default/default.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header (toggleSideBarForMe)=\"sideBarToggler($event)\"></app-header>\n\n<mat-drawer-container>\n    <mat-drawer mode=\"side\" [opened]=\"sideBarOpen\">\n        <app-sidebar></app-sidebar>\n    </mat-drawer>\n    <mat-drawer-content>\n        <router-outlet></router-outlet>\n    </mat-drawer-content>\n</mat-drawer-container>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/dashboard/dashboard.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/dashboard/dashboard.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"20px\">\n    <div fxFlex=\"50\">\n        <form action=\"#\">\n            <label for=\"cars\">USER</label>\n            <br>\n            <select name=\"cars\" id=\"cars\">\n              <option value=\"all\">All</option>\n              <!-- <option value=\"saab\">Saab</option>\n              <option value=\"opel\">Opel</option>\n              <option value=\"audi\">Audi</option> -->\n            </select>\n            <br><br>\n          </form>\n    </div>\n    <div fxFlex=\"50\">\n        <form action=\"#\">\n            <label for=\"cars\">PRIORITY</label>\n            <br>\n            <select name=\"cars\" id=\"cars\">\n                <option value=\"all\">All</option>\n                <!-- <option value=\"saab\">Saab</option>\n                <option value=\"opel\">Opel</option>\n                <option value=\"audi\">Audi</option> -->\n              </select>\n            <br><br>\n          </form>\n    </div>\n    <div fxFlex=\"50\">\n        <form action=\"/action_page.php\">\n            <label for=\"cars\">STATUS</label>\n            <br>\n            <select name=\"cars\" id=\"cars\">\n                <option value=\"all\">All</option>\n                <!-- <option value=\"saab\">Saab</option>\n                <option value=\"opel\">Opel</option>\n                <option value=\"audi\">Audi</option> -->\n              </select>\n            <br><br>\n          </form>\n    </div>      \n    <div fxFlex=\"50\">\n        <form action=\"/action_page.php\">\n            <label for=\"cars\">DATE</label>\n            <br>\n            <select name=\"cars\" id=\"cars\">\n                <option value=\"all\">All</option>\n                <!-- <option value=\"saab\">Saab</option>\n                <option value=\"opel\">Opel</option>\n                <option value=\"audi\">Audi</option> -->\n              </select>\n            <br><br>\n          </form>\n    </div>   \n    <div fxFlex=\"50\">\n        <form action=\"/action_page.php\">\n            <label for=\"cars\">LOCATION</label>\n            <br>\n            <select name=\"cars\" id=\"cars\">\n                <option value=\"all\">All</option>\n                <!-- <option value=\"saab\">Saab</option>\n                <option value=\"opel\">Opel</option>\n                <option value=\"audi\">Audi</option> -->\n              </select>\n            <br><br>\n          </form>\n    </div>     \n    <input class=\"button\" type=\"submit\" value=\"Submit\">\n</div>  \n\n\n<br>\n\n<mat-divider></mat-divider>\n\n<br>\n\n\n<div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"20px\">\n    <div fxFlex=\"50\">\n        <label for=\"cars\">WO-STATUS</label>\n        <app-widget-pie [data]=\"pieChart\"></app-widget-pie>\n    </div>\n    <div fxFlex=\"50\">\n        <label for=\"cars\">WO-PRIORITY</label>\n        <app-widget-pie [data]=\"pieChart\"></app-widget-pie>\n    </div>\n</div>  \n\n\n<br>\n\n<mat-divider></mat-divider>\n\n<br>\n\n<div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"20px\">\n    <div fxFlex=\"50\">\n        <label for=\"cars\">CREATED VS COMPLETED</label>\n        <app-widget-area [data]=\"bigChart\" ></app-widget-area>\n    </div>\n    <div fxFlex=\"50\">\n        <label for=\"cars\">NOTIFICATION</label>\n        <app-widget-pie [data]=\"pieChart\"></app-widget-pie>\n    </div>\n</div>  \n\n\n<br>\n\n<mat-divider></mat-divider>\n\n<br>\n\n<div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"20px\">\n    <div fxFlex=\"50\">\n        <label for=\"cars\">ON-TIME VS OVERDUE</label>\n        <app-widget-pie [data]=\"pieChart\"></app-widget-pie>\n    </div>\n    <div>\n        <label fxFlex=\"50\" for=\"cars\">AVERAGE TIME SPENT</label>\n        <app-widget-area [data]=\"bigChart\"></app-widget-area>\n    </div>\n</div>  \n\n\n<br>\n\n<mat-divider></mat-divider>\n\n<br>\n\n\n<!-- \n<div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"20px\" class=\"stats-cards\">\n    <mat-card fxFlex=\"25\">\n        <app-widget-card label=\"New Users\" total=\"12k\" percentage=\"50\" [data]=\"cards\"></app-widget-card>\n    </mat-card>\n    <mat-card fxFlex=\"25\">\n        <app-widget-card label=\"Users retention\" total=\"10k\" percentage=\"40\" [data]=\"cards\"></app-widget-card>\n    </mat-card>\n    <mat-card fxFlex=\"25\">\n        <app-widget-card label=\"Users engagement\" total=\"8k\" percentage=\"30\" [data]=\"cards\"></app-widget-card>\n    </mat-card>\n    <mat-card fxFlex=\"25\">\n        <app-widget-card label=\"Referral\" total=\"6k\" percentage=\"20\" [data]=\"cards\"></app-widget-card>\n    </mat-card>\n</div> -->\n\n<br>\n\n<mat-divider></mat-divider>\n\n<br>\n\n<div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"20px\">\n    <div fxFlex=\"100\">\n        <div class=\"mat-elevation-z8\">\n            <table mat-table [dataSource]=\"dataSource\">\n\n                <!-- Position Column -->\n                <ng-container matColumnDef=\"position\">\n                    <th mat-header-cell *matHeaderCellDef> S.No. </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n                </ng-container>\n\n                <!-- Name Column -->\n                <ng-container matColumnDef=\"name\">\n                    <th mat-header-cell *matHeaderCellDef> Oder No. </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n                </ng-container>\n\n                <!-- Weight Column -->\n                <ng-container matColumnDef=\"weight\">\n                    <th mat-header-cell *matHeaderCellDef> Type </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n                </ng-container>\n\n                <!-- Symbol Column -->\n                <ng-container matColumnDef=\"symbol\">\n                    <th mat-header-cell *matHeaderCellDef> Area </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n                </ng-container>\n\n                \n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n            </table>\n\n            <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\"></mat-paginator>\n        </div>\n\n    </div>\n</div>\n\n<br>\n<br>\n<br>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/posts/posts.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/posts/posts.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Work Oder works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/footer/footer.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/footer/footer.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-divider></mat-divider>\n<footer>\n    &copy; \n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/header/header.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/header/header.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"back\">\n    <mat-toolbar-row>\n        <button mat-icon-button (click)=\"toggleSideBar()\">\n            <mat-icon>menu</mat-icon>\n        </button>\n        <div class=\"logo\">\n            <img [src]=\"pic1\" height=\"10%\" width=\"10%\"> \n        </div>\n\n        <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"flex-end\">\n            <ul fxLayout=\"row\" fxLayoutGap=\"20px\">\n                <li>\n                    <button mat-icon-button>\n                        <mat-icon>settings</mat-icon>\n                    </button>\n                </li>\n                <li>\n                    <button mat-icon-button>\n                        <mat-icon>help_outline</mat-icon>\n                    </button>\n                </li>\n                <li>\n                    <button mat-button [matMenuTriggerFor]=\"menu\">\n                        <mat-icon>person_outline</mat-icon>\n                    </button>\n                    <mat-menu #menu=\"matMenu\">\n                        <button mat-menu-item>\n                            <mat-icon>exit_to_app</mat-icon>\n                            Sign out\n                        </button>\n                    </mat-menu>\n\n                </li>\n            </ul>\n        </div>\n    </mat-toolbar-row>\n</mat-toolbar>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/sidebar/sidebar.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/sidebar/sidebar.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\n    \n    <div class=\"profile-card\">\n        <div class=\"header\">\n            <h2>USER NAME</h2>\n            <h4>example@email.com</h4>\n        </div>\n        <img src=\"assets/user-image.jpeg\" alt=\"USER NAME\">\n    </div>\n\n    <mat-divider></mat-divider>\n\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/\">KPI</a>\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/posts\">WORK ORDER</a>\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/articles\">ASSETS</a>\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/articles\">SOP's</a>\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/articles\">ALERTS</a>\n\n    <mat-divider></mat-divider>\n\n    <!-- <h2 matSubheader>Tools</h2>\n\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/contacts\">\n        <mat-icon>import_contacts</mat-icon>\n        Contacts\n    </a>\n\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/contacts\">\n        <mat-icon>contact_phone</mat-icon>\n        Leads\n    </a> -->\n\n</mat-nav-list>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/widgets/area/area.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/widgets/area/area.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<highcharts-chart [Highcharts]=\"Highcharts\" [options]=\"chartOptions\"\n    style=\"width: 100%; height: 400px; display: block;\"></highcharts-chart>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/widgets/card/card.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/widgets/card/card.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text\">\n    <h4>{{ label }}</h4>\n\n    <span class=\"total\">{{ total }}</span>\n\n    <span>\n        <mat-icon color=\"primary\">trending_up</mat-icon>\n    </span>\n\n    <span class=\"description\">\n        {{ percentage }}%\n    </span>\n\n    <span> of target</span>\n</div>\n<div class=\"widget\">\n    <highcharts-chart [Highcharts]=\"Highcharts\" [options]=\"chartOptions\"\n        style=\"width: 100%; height: 60px; display: block;\">\n    </highcharts-chart>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/widgets/pie/pie.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/widgets/pie/pie.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<highcharts-chart [Highcharts]=\"Highcharts\" [options]=\"chartOptions\" style=\"width: 100%; display: block;\">\n</highcharts-chart>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/login/login.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/login/login.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \n<div class=\"container\" id=\"container\">\n\t<div class=\"form-container sign-up-container\">\n\t\t<form action=\"#\">\n\t\t\t<h1>Create Account</h1>\n\t\t\t<div class=\"social-container\">\n\t\t\t\t<a href=\"#\" class=\"social\"><i class=\"fab fa-facebook-f\"></i></a>\n\t\t\t\t<a href=\"#\" class=\"social\"><i class=\"fab fa-google-plus-g\"></i></a>\n\t\t\t\t<a href=\"#\" class=\"social\"><i class=\"fab fa-linkedin-in\"></i></a>\n\t\t\t</div>\n\t\t\t<span>or use your email for registration</span>\n\t\t\t<input type=\"text\" placeholder=\"Name\" />\n\t\t\t<input type=\"email\" placeholder=\"Email\" />\n\t\t\t<input type=\"password\" placeholder=\"Password\" />\n\t\t\t<button>Register</button>\n\t\t</form>\n\t</div>\n\t<div class=\"form-container sign-in-container\">\n\t\t<form #loginForm=\"ngForm\" (submit)='onLoginUser(loginForm)'>\n\t\t\t<h1>Sign in</h1>\n\t\t\t<div class=\"social-container\">\n\t\t\t\t<a href=\"#\" class=\"social\"><i class=\"fab fa-facebook-f\"></i></a>\n\t\t\t\t<a href=\"#\" class=\"social\"><i class=\"fab fa-google-plus-g\"></i></a>\n\t\t\t\t<a href=\"#\" class=\"social\"><i class=\"fab fa-linkedin-in\"></i></a>\n\t\t\t</div>\n\t\t\t<span>or use your account</span>\n\t\t\t<input name=\"emailaddress\" type=\"email\" placeholder=\"Email\" ngModel/>\n\t\t\t<input name=\"password\" type=\"password\" placeholder=\"Password\" ngModel/>\n\t\t\t<a href=\"#\">Forgot your password?</a>\n\t\t\t<button>Sign In</button>\n\t\t</form>\n\t</div>\n\t<div class=\"overlay-container\">\n\t\t<div class=\"overlay\">\n\t\t\t<div class=\"overlay-panel overlay-left\">\n\t\t\t\t<h1>Welcome Back!</h1>\n\t\t\t\t<p>To keep connected with us please login with your personal info</p>\n\t\t\t\t<button class=\"ghost\" id=\"signIn\">Sign In</button>\n\t\t\t</div>\n\t\t\t<div class=\"overlay-panel overlay-right\">\n\t\t\t\t<div class=\"logo\">\n\t\t\t\t\t<img src=\"../images/image.png\">\n\t\t\t\t</div>\n\t\t\t\t<h1>Hello, Friend!</h1>\n\t\t\t\t<p>Enter your personal details and start journey with us</p>\n\t\t\t\t<button class=\"ghost\" id=\"signUp\">Sign Up</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/register/register.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/register/register.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\" id=\"container\">\n\t<div class=\"form-container sign-in-container\">\n\t\t<form action=\"#\">\n\t\t\t<h1>Register</h1>\n\t\t\t<div class=\"social-container\">\n\t\t\t\t<a href=\"#\" class=\"social\"><i class=\"fab fa-facebook-f\"></i></a>\n\t\t\t\t<a href=\"#\" class=\"social\"><i class=\"fab fa-google-plus-g\"></i></a>\n\t\t\t\t<a href=\"#\" class=\"social\"><i class=\"fab fa-linkedin-in\"></i></a>\n\t\t\t</div>\n\t\t\t<span>or use your account</span>\n\t\t\t<input type=\"email\" placeholder=\"Email\" />\n            <input type=\"password\" placeholder=\"Password\" />\n            <input type=\"username\" placeholder=\"username\" />\n            <input type=\"pincode\" placeholder=\"pincode\" />\n            <input type=\"email\" placeholder=\"email\" />\n            <input type=\"userstatus\" placeholder=\"userstatus\" />\n            <input type=\"userrole\" placeholder=\"userrole\" />\n            <input type=\"accountid\" placeholder=\"accountid\" />\n\n            <button>Register</button>\n\t\t</form>\n\t</div>\n\t<div class=\"overlay-container\">\n\t\t<div class=\"overlay\">\n\t\t\t<div class=\"overlay-panel overlay-left\">\n\t\t\t\t<h1>Welcome Back!</h1>\n\t\t\t\t<p>To keep connected with us please login with your personal info</p>\n\t\t\t\t<button class=\"ghost\" id=\"signIn\">Sign In</button>\n\t\t\t</div>\n\t\t\t<div class=\"overlay-panel overlay-right\">\n\t\t\t\t<h1>Hello, Friend!</h1>\n\t\t\t\t<p>Enter your personal details and start journey with us</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<!-- <h1>Register works!</h1>\n<div class=\"w3-container\">\n    <form #registerForm=\"ngForm\" (submit)=\"onRegisterUser(registerForm)\"> \n        <div class=\"form-group\">\n          <label>First Name</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Enter Name\" name=\"firstname\" ngModel/>\n        </div>\n        <div class=\"form-group\">\n            <label>LastName</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Name\" name=\"lastname\" ngModel/>\n        </div>\n        <div class=\"form-group\">\n            <label>Username</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Name\" name=\"username\" ngModel/>\n        </div>\n        <div class=\"form-group\">\n            <label>Pincode</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Name\" name=\"pincode\" ngModel/>\n        </div>\n        <div class=\"form-group\">\n            <label>Email</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Password\" name=\"email\" ngModel/>\n        </div>\n        <div class=\"form-group\">\n            <label>User Status</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Name\" name=\"userstatus\" ngModel/>\n        </div>\n        <div class=\"form-group\">\n            <label>User Role</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Name\" name=\"userrole\" ngModel/>\n        </div>\n        <div class=\"form-group\">\n            <label>Account Id</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Name\" name=\"accountid\" ngModel/>\n        </div>\n        <div class=\"form-group\">\n            <label>Password</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Name\" name=\"password\" ngModel/>\n        </div>\n        <button type=\"Register\" class=\"btn btn-primary\">Register</button>\n      </form>\n</div>\n  --> -->"

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
/* harmony import */ var _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/default/default.component */ "./src/app/layouts/default/default.component.ts");
/* harmony import */ var _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/dashboard/dashboard.component */ "./src/app/modules/dashboard/dashboard.component.ts");
/* harmony import */ var _modules_posts_posts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/posts/posts.component */ "./src/app/modules/posts/posts.component.ts");






var routes = [{
        path: '',
        component: _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_3__["DefaultComponent"],
        children: [{
                path: '',
                component: _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
            }, {
                path: 'posts',
                component: _modules_posts_posts_component__WEBPACK_IMPORTED_MODULE_5__["PostsComponent"]
            }]
    }];
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



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'dashboard';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/default/default.module */ "./src/app/layouts/default/default.module.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _user_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/register/register.component */ "./src/app/user/register/register.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _user_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _user_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_6__["DefaultModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/layouts/default/default.component.scss":
/*!********************************************************!*\
  !*** ./src/app/layouts/default/default.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\nmat-drawer {\n  width: 350px;\n}\n\nmat-drawer-container {\n  height: 100%;\n}\n\nmat-drawer-content {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9kZWZhdWx0L0Q6XFxhbmd1bGFyLW1hdGVyaWFsLWRhc2hib2FyZC9zcmNcXGFwcFxcbGF5b3V0c1xcZGVmYXVsdFxcZGVmYXVsdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0cy9kZWZhdWx0L2RlZmF1bHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxZQUFBO0FDRUY7O0FEQ0E7RUFDRSxZQUFBO0FDRUY7O0FEQ0E7RUFDRSxhQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXRzL2RlZmF1bHQvZGVmYXVsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxubWF0LWRyYXdlciB7XG4gIHdpZHRoOiAzNTBweDtcbn1cblxubWF0LWRyYXdlci1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbm1hdC1kcmF3ZXItY29udGVudCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbn1cblxubWF0LWRyYXdlciB7XG4gIHdpZHRoOiAzNTBweDtcbn1cblxubWF0LWRyYXdlci1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbm1hdC1kcmF3ZXItY29udGVudCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/layouts/default/default.component.ts":
/*!******************************************************!*\
  !*** ./src/app/layouts/default/default.component.ts ***!
  \******************************************************/
/*! exports provided: DefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultComponent", function() { return DefaultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DefaultComponent = /** @class */ (function () {
    function DefaultComponent() {
        this.sideBarOpen = true;
    }
    DefaultComponent.prototype.ngOnInit = function () { };
    DefaultComponent.prototype.sideBarToggler = function () {
        this.sideBarOpen = !this.sideBarOpen;
    };
    DefaultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-default',
            template: __webpack_require__(/*! raw-loader!./default.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/default/default.component.html"),
            styles: [__webpack_require__(/*! ./default.component.scss */ "./src/app/layouts/default/default.component.scss")]
        })
    ], DefaultComponent);
    return DefaultComponent;
}());



/***/ }),

/***/ "./src/app/layouts/default/default.module.ts":
/*!***************************************************!*\
  !*** ./src/app/layouts/default/default.module.ts ***!
  \***************************************************/
/*! exports provided: DefaultModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultModule", function() { return DefaultModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default.component */ "./src/app/layouts/default/default.component.ts");
/* harmony import */ var src_app_modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/dashboard/dashboard.component */ "./src/app/modules/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_modules_posts_posts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/posts/posts.component */ "./src/app/modules/posts/posts.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var src_app_modules_dashboard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/modules/dashboard.service */ "./src/app/modules/dashboard.service.ts");











var DefaultModule = /** @class */ (function () {
    function DefaultModule() {
    }
    DefaultModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _default_component__WEBPACK_IMPORTED_MODULE_3__["DefaultComponent"],
                src_app_modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                src_app_modules_posts_posts_component__WEBPACK_IMPORTED_MODULE_6__["PostsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"]
            ],
            providers: [
                src_app_modules_dashboard_service__WEBPACK_IMPORTED_MODULE_10__["DashboardService"]
            ]
        })
    ], DefaultModule);
    return DefaultModule;
}());



/***/ }),

/***/ "./src/app/modules/dashboard.service.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/dashboard.service.ts ***!
  \**********************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardService = /** @class */ (function () {
    function DashboardService() {
    }
    DashboardService.prototype.bigChart = function () {
        return [{
                name: 'Asia',
                data: [502, 635, 809, 947, 1402, 3634, 5268]
            }, {
                name: 'Africa',
                data: [106, 107, 111, 133, 221, 767, 1766]
            }, {
                name: 'Europe',
                data: [163, 203, 276, 408, 547, 729, 628]
            }, {
                name: 'America',
                data: [18, 31, 54, 156, 339, 818, 1201]
            }, {
                name: 'Oceania',
                data: [2, 2, 2, 6, 13, 30, 46]
            }];
    };
    DashboardService.prototype.cards = function () {
        return [71, 78, 39, 66];
    };
    DashboardService.prototype.pieChart = function () {
        return [{
                name: 'Chrome',
                y: 61.41,
                sliced: true,
                selected: true
            }, {
                name: 'Internet Explorer',
                y: 11.84
            }, {
                name: 'Firefox',
                y: 10.85
            }, {
                name: 'Edge',
                y: 4.67
            }, {
                name: 'Safari',
                y: 4.18
            }, {
                name: 'Sogou Explorer',
                y: 1.64
            }, {
                name: 'Opera',
                y: 1.6
            }, {
                name: 'QQ',
                y: 1.2
            }, {
                name: 'Other',
                y: 2.61
            }];
    };
    DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/dashboard.component.scss":
/*!************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".stats-cards .mat-card {\n  overflow: hidden;\n}\n\n.button {\n  background-color: #fdb813;\n  /* Green */\n  border: none;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n}\n\n.logo {\n  height: 100px;\n  width: auto;\n  padding: 10px;\n  display: block;\n  margin: 0 auto;\n}\n\ntable {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvRDpcXGFuZ3VsYXItbWF0ZXJpYWwtZGFzaGJvYXJkL3NyY1xcYXBwXFxtb2R1bGVzXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZ0JBQUE7QUNBSjs7QURLQTtFQUNFLHlCQUFBO0VBQTJCLFVBQUE7RUFDM0IsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNERjs7QURJQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDREY7O0FESUE7RUFDRSxXQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhdHMtY2FyZHMge1xuICAubWF0LWNhcmQge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbn1cblxuXG4uYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYjgxMzsgLyogR3JlZW4gKi9cbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHggMzJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ubG9nbyB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iLCIuc3RhdHMtY2FyZHMgLm1hdC1jYXJkIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGI4MTM7XG4gIC8qIEdyZWVuICovXG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNXB4IDMycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmxvZ28ge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/dashboard/dashboard.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard.service */ "./src/app/modules/dashboard.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(dashboardService) {
        this.dashboardService = dashboardService;
        this.bigChart = [];
        this.cards = [];
        this.pieChart = [];
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](ELEMENT_DATA);
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.bigChart = this.dashboardService.bigChart();
        this.cards = this.dashboardService.cards();
        this.pieChart = this.dashboardService.pieChart();
        this.dataSource.paginator = this.paginator;
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
    ], DashboardComponent.prototype, "paginator", void 0);
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/modules/dashboard/dashboard.component.scss")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/modules/posts/posts.component.scss":
/*!****************************************************!*\
  !*** ./src/app/modules/posts/posts.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG9zdHMvcG9zdHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/posts/posts.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/posts/posts.component.ts ***!
  \**************************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PostsComponent = /** @class */ (function () {
    function PostsComponent() {
    }
    PostsComponent.prototype.ngOnInit = function () {
    };
    PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! raw-loader!./posts.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.scss */ "./src/app/modules/posts/posts.component.scss")]
        })
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL0Q6XFxhbmd1bGFyLW1hdGVyaWFsLWRhc2hib2FyZC9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuIiwiZm9vdGVyIHtcbiAgcGFkZGluZzogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
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
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/components/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul li {\n  list-style: none;\n}\n\n.back {\n  background-color: #fdb813;\n  background-image: linear-gradient(315deg, #50484a 0%, #fdb813 74%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL0Q6XFxhbmd1bGFyLW1hdGVyaWFsLWRhc2hib2FyZC9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLGtFQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uYmFja3tcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYjgxMztcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywjNTA0ODRhICAwJSwgI2ZkYjgxMyA3NCUpOyBcbn0iLCJ1bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5iYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYjgxMztcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzUwNDg0YSAwJSwgI2ZkYjgxMyA3NCUpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.pic1 = "assets/logo.jpeg";
        this.toggleSideBarForMe = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.toggleSideBar = function () {
        this.toggleSideBarForMe.emit();
        setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], HeaderComponent.prototype, "toggleSideBarForMe", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/components/header/header.component.scss")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/sidebar/sidebar.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/sidebar/sidebar.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .mat-icon {\n  vertical-align: middle;\n  margin-right: 20px;\n}\n:host .profile-card {\n  text-align: center;\n  padding: 0 20px 20px 20px;\n}\n:host .profile-card img {\n  width: 100px;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lkZWJhci9EOlxcYW5ndWxhci1tYXRlcmlhbC1kYXNoYm9hcmQvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcc2lkZWJhclxcc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtBQ0RKO0FER0U7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FDREo7QURFSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0FDQU4iLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIFxuICAubWF0LWljb24ge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG4gIC5wcm9maWxlLWNhcmQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIDIwcHggMjBweCAyMHB4O1xuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTAwcHg7XG4gICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCAubWF0LWljb24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG46aG9zdCAucHJvZmlsZS1jYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwIDIwcHggMjBweCAyMHB4O1xufVxuOmhvc3QgLnByb2ZpbGUtY2FyZCBpbWcge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/shared/components/sidebar/sidebar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/shared/components/sidebar/sidebar.component.scss")]
        })
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/shared/components/sidebar/sidebar.component.ts");
/* harmony import */ var _widgets_area_area_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./widgets/area/area.component */ "./src/app/shared/widgets/area/area.component.ts");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! highcharts-angular */ "./node_modules/highcharts-angular/fesm5/highcharts-angular.js");
/* harmony import */ var _widgets_card_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./widgets/card/card.component */ "./src/app/shared/widgets/card/card.component.ts");
/* harmony import */ var _widgets_pie_pie_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./widgets/pie/pie.component */ "./src/app/shared/widgets/pie/pie.component.ts");













var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"],
                _widgets_area_area_component__WEBPACK_IMPORTED_MODULE_9__["AreaComponent"],
                _widgets_card_card_component__WEBPACK_IMPORTED_MODULE_11__["CardComponent"],
                _widgets_pie_pie_component__WEBPACK_IMPORTED_MODULE_12__["PieComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                highcharts_angular__WEBPACK_IMPORTED_MODULE_10__["HighchartsChartModule"]
            ],
            exports: [
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"],
                _widgets_area_area_component__WEBPACK_IMPORTED_MODULE_9__["AreaComponent"],
                _widgets_card_card_component__WEBPACK_IMPORTED_MODULE_11__["CardComponent"],
                _widgets_pie_pie_component__WEBPACK_IMPORTED_MODULE_12__["PieComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/widgets/area/area.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/shared/widgets/area/area.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC93aWRnZXRzL2FyZWEvYXJlYS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/widgets/area/area.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/widgets/area/area.component.ts ***!
  \*******************************************************/
/*! exports provided: AreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaComponent", function() { return AreaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




var AreaComponent = /** @class */ (function () {
    function AreaComponent() {
        this.data = [];
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
    }
    AreaComponent.prototype.ngOnInit = function () {
        this.chartOptions = {
            chart: {
                type: 'area'
            },
            title: {
                text: 'Random DATA'
            },
            subtitle: {
                text: 'Demo'
            },
            tooltip: {
                split: true,
                valueSuffix: ' millions'
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: true,
            },
            series: this.data
        };
        highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AreaComponent.prototype, "data", void 0);
    AreaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-area',
            template: __webpack_require__(/*! raw-loader!./area.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/widgets/area/area.component.html"),
            styles: [__webpack_require__(/*! ./area.component.scss */ "./src/app/shared/widgets/area/area.component.scss")]
        })
    ], AreaComponent);
    return AreaComponent;
}());



/***/ }),

/***/ "./src/app/shared/widgets/card/card.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/shared/widgets/card/card.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4 {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n\n.total {\n  font-size: 3em;\n}\n\n.mat-icon,\n.description {\n  color: green;\n  font-size: 2em;\n}\n\n.mat-icon {\n  position: relative;\n  padding: 0 20px;\n  top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3dpZGdldHMvY2FyZC9EOlxcYW5ndWxhci1tYXRlcmlhbC1kYXNoYm9hcmQvc3JjXFxhcHBcXHNoYXJlZFxcd2lkZ2V0c1xcY2FyZFxcY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3dpZGdldHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7O0VBRUUsWUFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC93aWRnZXRzL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImg0IHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4udG90YWwge1xuICBmb250LXNpemU6IDNlbTtcbn1cblxuLm1hdC1pY29uLFxuLmRlc2NyaXB0aW9uIHtcbiAgY29sb3I6IGdyZWVuO1xuICBmb250LXNpemU6IDJlbTtcbn1cblxuLm1hdC1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIHRvcDogNXB4O1xufVxuIiwiaDQge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi50b3RhbCB7XG4gIGZvbnQtc2l6ZTogM2VtO1xufVxuXG4ubWF0LWljb24sXG4uZGVzY3JpcHRpb24ge1xuICBjb2xvcjogZ3JlZW47XG4gIGZvbnQtc2l6ZTogMmVtO1xufVxuXG4ubWF0LWljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgdG9wOiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/shared/widgets/card/card.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/widgets/card/card.component.ts ***!
  \*******************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.data = [];
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.chartOptions = {};
    }
    CardComponent.prototype.ngOnInit = function () {
        this.chartOptions = {
            chart: {
                type: 'area',
                backgroundColor: null,
                borderWidth: 0,
                margin: [2, 2, 2, 2],
                height: 60
            },
            title: {
                text: null
            },
            subtitle: {
                text: null
            },
            tooltip: {
                split: true,
                outside: true
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false,
            },
            xAxis: {
                labels: {
                    enabled: false,
                },
                title: {
                    text: null
                },
                startOnTick: false,
                endOnTick: false,
                tickOptions: []
            },
            yAxis: {
                labels: {
                    enabled: false,
                },
                title: {
                    text: null
                },
                startOnTick: false,
                endOnTick: false,
                tickOptions: []
            },
            series: [{
                    data: this.data
                }]
        };
        highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CardComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CardComponent.prototype, "total", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CardComponent.prototype, "percentage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CardComponent.prototype, "data", void 0);
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-card',
            template: __webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/widgets/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/shared/widgets/card/card.component.scss")]
        })
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/shared/widgets/pie/pie.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/shared/widgets/pie/pie.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC93aWRnZXRzL3BpZS9waWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/widgets/pie/pie.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/widgets/pie/pie.component.ts ***!
  \*****************************************************/
/*! exports provided: PieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieComponent", function() { return PieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




var PieComponent = /** @class */ (function () {
    function PieComponent() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.chartOptions = {};
        this.data = [];
    }
    PieComponent.prototype.ngOnInit = function () {
        this.chartOptions = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    }
                }
            },
            exporting: {
                enabled: true
            },
            credits: {
                enabled: false
            },
            series: [{
                    name: 'Brands',
                    colorByPoint: true,
                    data: this.data
                }]
        };
        highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PieComponent.prototype, "data", void 0);
    PieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-pie',
            template: __webpack_require__(/*! raw-loader!./pie.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/widgets/pie/pie.component.html"),
            styles: [__webpack_require__(/*! ./pie.component.scss */ "./src/app/shared/widgets/pie/pie.component.scss")]
        })
    ], PieComponent);
    return PieComponent;
}());



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* @import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');\r\n\r\n* {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\nbody {\r\n\tbackground: #f6f5f7;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tflex-direction: column;\r\n\tfont-family: 'Montserrat', sans-serif;\r\n\theight: 100vh;\r\n\tmargin: -20px 0 50px;\r\n}\r\n\r\nh1 {\r\n\tfont-weight: bold;\r\n\tmargin: 0;\r\n}\r\n\r\nh2 {\r\n\ttext-align: center;\r\n}\r\n\r\np {\r\n\tfont-size: 14px;\r\n\tfont-weight: 100;\r\n\tline-height: 20px;\r\n\tletter-spacing: 0.5px;\r\n\tmargin: 20px 0 30px;\r\n}\r\n\r\nspan {\r\n\tfont-size: 12px;\r\n}\r\n\r\na {\r\n\tcolor: #333;\r\n\tfont-size: 14px;\r\n\ttext-decoration: none;\r\n\tmargin: 15px 0;\r\n}\r\n\r\nbutton {\r\n\tborder-radius: 20px;\r\n\tborder: 1px solid #FED727;\r\n\tbackground-color: #FED727;\r\n\tcolor: #000;\r\n\tfont-size: 12px;\r\n\tfont-weight: bold;\r\n\tpadding: 12px 45px;\r\n\tletter-spacing: 1px;\r\n\ttext-transform: uppercase;\r\n\ttransition: transform 80ms ease-in;\r\n}\r\n\r\nbutton:active {\r\n\ttransform: scale(0.95);\r\n}\r\n\r\nbutton:focus {\r\n\toutline: none;\r\n}\r\n\r\nbutton.ghost {\r\n\tbackground-color: transparent;\r\n\tborder-color: #FFFFFF;\r\n}\r\n\r\nform {\r\n\tbackground-color: #FFFFFF;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tflex-direction: column;\r\n\tpadding: 0 50px;\r\n\theight: 100%;\r\n\ttext-align: center;\r\n}\r\n\r\ninput {\r\n\tbackground-color: #eee;\r\n\tborder: none;\r\n\tpadding: 12px 15px;\r\n\tmargin: 8px 0;\r\n\twidth: 100%;\r\n}\r\n\r\n.container {\r\n\tmargin-top: 50px;\r\n\tbackground-color: #fff;\r\n\tborder-radius: 10px;\r\n  \tbox-shadow: 0 14px 28px rgba(0,0,0,0.25), \r\n\t\t\t0 10px 10px rgba(0,0,0,0.22);\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\twidth: 768px;\r\n\tmax-width: 100%;\r\n\tmin-height: 480px;\r\n}\r\n\r\n.form-container {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\theight: 100%;\r\n\ttransition: all 0.6s ease-in-out;\r\n}\r\n\r\n.sign-in-container {\r\n\tleft: 0;\r\n\twidth: 50%;\r\n\tz-index: 2;\r\n}\r\n\r\n.container.right-panel-active .sign-in-container {\r\n\ttransform: translateX(100%);\r\n}\r\n\r\n.sign-up-container {\r\n\tleft: 0;\r\n\twidth: 50%;\r\n\topacity: 0;\r\n\tz-index: 1;\r\n}\r\n\r\n.container.right-panel-active .sign-up-container {\r\n\ttransform: translateX(100%);\r\n\topacity: 1;\r\n\tz-index: 5;\r\n\tanimation: show 0.6s;\r\n}\r\n\r\n@keyframes show {\r\n\t0%, 49.99% {\r\n\t\topacity: 0;\r\n\t\tz-index: 1;\r\n\t}\r\n\t\r\n\t50%, 100% {\r\n\t\topacity: 1;\r\n\t\tz-index: 5;\r\n\t}\r\n}\r\n\r\n.overlay-container {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 50%;\r\n\twidth: 50%;\r\n\theight: 100%;\r\n\toverflow: hidden;\r\n\ttransition: transform 0.6s ease-in-out;\r\n\tz-index: 100;\r\n}\r\n\r\n.container.right-panel-active .overlay-container{\r\n\ttransform: translateX(-100%);\r\n}\r\n\r\n.overlay {\r\n\tbackground: #FED727;\r\n\tbackground: -webkit-linear-gradient(to right,#FED727, #FED727);\r\n\tbackground: linear-gradient(to right, #FED727, #FED727);\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: cover;\r\n\tbackground-position: 0 0;\r\n\tcolor: #FFFFFF;\r\n\tposition: relative;\r\n\tleft: -100%;\r\n\theight: 100%;\r\n\twidth: 200%;\r\n  \ttransform: translateX(0);\r\n\ttransition: transform 0.6s ease-in-out;\r\n}\r\n\r\n.container.right-panel-active .overlay {\r\n  \ttransform: translateX(50%);\r\n}\r\n\r\n.overlay-panel {\r\n\tposition: absolute;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tflex-direction: column;\r\n\tpadding: 0 40px;\r\n\ttext-align: center;\r\n\ttop: 0;\r\n\theight: 100%;\r\n\twidth: 50%;\r\n\ttransform: translateX(0);\r\n\ttransition: transform 0.6s ease-in-out;\r\n}\r\n\r\n.overlay-left {\r\n\ttransform: translateX(-20%);\r\n}\r\n\r\n.container.right-panel-active .overlay-left {\r\n\ttransform: translateX(0);\r\n}\r\n\r\n.overlay-right {\r\n\tright: 0;\r\n\ttransform: translateX(0);\r\n}\r\n\r\n.container.right-panel-active .overlay-right {\r\n\ttransform: translateX(20%);\r\n}\r\n\r\n.social-container {\r\n\tmargin: 20px 0;\r\n}\r\n\r\n.social-container a {\r\n\tborder: 1px solid #DDDDDD;\r\n\tborder-radius: 50%;\r\n\tdisplay: inline-flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tmargin: 0 5px;\r\n\theight: 40px;\r\n\twidth: 40px;\r\n}\r\n\r\nfooter {\r\n    background-color: #222;\r\n    color: #fff;\r\n    font-size: 14px;\r\n    bottom: 0;\r\n    position: fixed;\r\n    left: 0;\r\n    right: 0;\r\n    text-align: center;\r\n    z-index: 999;\r\n}\r\n\r\nfooter p {\r\n    margin: 10px 0;\r\n}\r\n\r\nfooter i {\r\n    color: #FED727;\r\n}\r\n\r\nfooter a {\r\n    color: #3c97bf;\r\n    text-decoration: none;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTJQRyIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo0MDAsODAwJyk7XHJcblxyXG4qIHtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5IHtcclxuXHRiYWNrZ3JvdW5kOiAjZjZmNWY3O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcblx0aGVpZ2h0OiAxMDB2aDtcclxuXHRtYXJnaW46IC0yMHB4IDAgNTBweDtcclxufVxyXG5cclxuaDEge1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdG1hcmdpbjogMDtcclxufVxyXG5cclxuaDIge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxucCB7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiAxMDA7XHJcblx0bGluZS1oZWlnaHQ6IDIwcHg7XHJcblx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG5cdG1hcmdpbjogMjBweCAwIDMwcHg7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuYSB7XHJcblx0Y29sb3I6ICMzMzM7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRtYXJnaW46IDE1cHggMDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuXHRib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNGRUQ3Mjc7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI0ZFRDcyNztcclxuXHRjb2xvcjogIzAwMDtcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0cGFkZGluZzogMTJweCA0NXB4O1xyXG5cdGxldHRlci1zcGFjaW5nOiAxcHg7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gODBtcyBlYXNlLWluO1xyXG59XHJcblxyXG5idXR0b246YWN0aXZlIHtcclxuXHR0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG59XHJcblxyXG5idXR0b246Zm9jdXMge1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmJ1dHRvbi5naG9zdCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0Ym9yZGVyLWNvbG9yOiAjRkZGRkZGO1xyXG59XHJcblxyXG5mb3JtIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdHBhZGRpbmc6IDAgNTBweDtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0cGFkZGluZzogMTJweCAxNXB4O1xyXG5cdG1hcmdpbjogOHB4IDA7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG5cdG1hcmdpbi10b3A6IDUwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIFx0Ym94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLDAsMCwwLjI1KSwgXHJcblx0XHRcdDAgMTBweCAxMHB4IHJnYmEoMCwwLDAsMC4yMik7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0d2lkdGg6IDc2OHB4O1xyXG5cdG1heC13aWR0aDogMTAwJTtcclxuXHRtaW4taGVpZ2h0OiA0ODBweDtcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnNpZ24taW4tY29udGFpbmVyIHtcclxuXHRsZWZ0OiAwO1xyXG5cdHdpZHRoOiA1MCU7XHJcblx0ei1pbmRleDogMjtcclxufVxyXG5cclxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLnNpZ24taW4tY29udGFpbmVyIHtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbn1cclxuXHJcbi5zaWduLXVwLWNvbnRhaW5lciB7XHJcblx0bGVmdDogMDtcclxuXHR3aWR0aDogNTAlO1xyXG5cdG9wYWNpdHk6IDA7XHJcblx0ei1pbmRleDogMTtcclxufVxyXG5cclxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLnNpZ24tdXAtY29udGFpbmVyIHtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcblx0b3BhY2l0eTogMTtcclxuXHR6LWluZGV4OiA1O1xyXG5cdGFuaW1hdGlvbjogc2hvdyAwLjZzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNob3cge1xyXG5cdDAlLCA0OS45OSUge1xyXG5cdFx0b3BhY2l0eTogMDtcclxuXHRcdHotaW5kZXg6IDE7XHJcblx0fVxyXG5cdFxyXG5cdDUwJSwgMTAwJSB7XHJcblx0XHRvcGFjaXR5OiAxO1xyXG5cdFx0ei1pbmRleDogNTtcclxuXHR9XHJcbn1cclxuXHJcbi5vdmVybGF5LWNvbnRhaW5lciB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiA1MCU7XHJcblx0d2lkdGg6IDUwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcclxuXHR6LWluZGV4OiAxMDA7XHJcbn1cclxuXHJcbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5vdmVybGF5LWNvbnRhaW5lcntcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG59XHJcblxyXG4ub3ZlcmxheSB7XHJcblx0YmFja2dyb3VuZDogI0ZFRDcyNztcclxuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwjRkVENzI3LCAjRkVENzI3KTtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGRUQ3MjcsICNGRUQ3MjcpO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XHJcblx0Y29sb3I6ICNGRkZGRkY7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGxlZnQ6IC0xMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHR3aWR0aDogMjAwJTtcclxuICBcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLm92ZXJsYXkge1xyXG4gIFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XHJcbn1cclxuXHJcbi5vdmVybGF5LXBhbmVsIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0cGFkZGluZzogMCA0MHB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR0b3A6IDA7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHdpZHRoOiA1MCU7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ub3ZlcmxheS1sZWZ0IHtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwJSk7XHJcbn1cclxuXHJcbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5vdmVybGF5LWxlZnQge1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxufVxyXG5cclxuLm92ZXJsYXktcmlnaHQge1xyXG5cdHJpZ2h0OiAwO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxufVxyXG5cclxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLm92ZXJsYXktcmlnaHQge1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMCUpO1xyXG59XHJcblxyXG4uc29jaWFsLWNvbnRhaW5lciB7XHJcblx0bWFyZ2luOiAyMHB4IDA7XHJcbn1cclxuXHJcbi5zb2NpYWwtY29udGFpbmVyIGEge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNEREREREQ7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0bWFyZ2luOiAwIDVweDtcclxuXHRoZWlnaHQ6IDQwcHg7XHJcblx0d2lkdGg6IDQwcHg7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbn1cclxuXHJcbmZvb3RlciBwIHtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG59XHJcblxyXG5mb290ZXIgaSB7XHJcbiAgICBjb2xvcjogI0ZFRDcyNztcclxufVxyXG5cclxuZm9vdGVyIGEge1xyXG4gICAgY29sb3I6ICMzYzk3YmY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn0gKi8iXX0= */"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/register/register.component.css":
/*!******************************************************!*\
  !*** ./src/app/user/register/register.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* @import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');\r\n\r\n* {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\nbody {\r\n\tbackground: #f6f5f7;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tflex-direction: column;\r\n\tfont-family: 'Montserrat', sans-serif;\r\n\theight: 100vh;\r\n\tmargin: -20px 0 50px;\r\n}\r\n\r\nh1 {\r\n\tfont-weight: bold;\r\n\tmargin: 0;\r\n}\r\n\r\nh2 {\r\n\ttext-align: center;\r\n}\r\n\r\np {\r\n\tfont-size: 14px;\r\n\tfont-weight: 100;\r\n\tline-height: 20px;\r\n\tletter-spacing: 0.5px;\r\n\tmargin: 20px 0 30px;\r\n}\r\n\r\nspan {\r\n\tfont-size: 12px;\r\n}\r\n\r\na {\r\n\tcolor: #333;\r\n\tfont-size: 14px;\r\n\ttext-decoration: none;\r\n\tmargin: 15px 0;\r\n}\r\n\r\nbutton {\r\n\tborder-radius: 20px;\r\n\tborder: 1px solid #FFFF00;\r\n\tbackground-color: #FFFF00;\r\n\tcolor: #FFFFFF;\r\n\tfont-size: 12px;\r\n\tfont-weight: bold;\r\n\tpadding: 12px 45px;\r\n\tletter-spacing: 1px;\r\n\ttext-transform: uppercase;\r\n\ttransition: transform 80ms ease-in;\r\n}\r\n\r\nbutton:active {\r\n\ttransform: scale(0.95);\r\n}\r\n\r\nbutton:focus {\r\n\toutline: none;\r\n}\r\n\r\nbutton.ghost {\r\n\tbackground-color: transparent;\r\n\tborder-color: #FFFFFF;\r\n}\r\n\r\nform {\r\n\tbackground-color: #FFFFFF;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tflex-direction: column;\r\n\tpadding: 0 50px;\r\n\theight: 100%;\r\n\ttext-align: center;\r\n}\r\n\r\ninput {\r\n\tbackground-color: #eee;\r\n\tborder: none;\r\n\tpadding: 12px 15px;\r\n\tmargin: 8px 0;\r\n\twidth: 100%;\r\n}\r\n\r\n#container {\r\n    margin-top: 50px;\r\n    margin-bottom: 50px;\r\n\tbackground-color: #fff;\r\n\tborder-radius: 10px;\r\n  \tbox-shadow: 0 14px 28px rgba(0,0,0,0.25), \r\n\t\t\t0 10px 10px rgba(0,0,0,0.22);\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\twidth: 768px;\r\n\tmax-width: 100%;\r\n    min-height: 725px;\r\n    \r\n}\r\n\r\n.form-container {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\theight: 100%;\r\n\ttransition: all 0.6s ease-in-out;\r\n}\r\n\r\n.sign-in-container {\r\n\tleft: 0;\r\n\twidth: 50%;\r\n\tz-index: 2;\r\n}\r\n\r\n.container.right-panel-active .sign-in-container {\r\n\ttransform: translateX(100%);\r\n}\r\n\r\n.sign-up-container {\r\n\tleft: 0;\r\n\twidth: 50%;\r\n\topacity: 0;\r\n\tz-index: 1;\r\n}\r\n\r\n.container.right-panel-active .sign-up-container {\r\n\ttransform: translateX(100%);\r\n\topacity: 1;\r\n\tz-index: 5;\r\n\tanimation: show 0.6s;\r\n}\r\n\r\n@keyframes show {\r\n\t0%, 49.99% {\r\n\t\topacity: 0;\r\n\t\tz-index: 1;\r\n\t}\r\n\t\r\n\t50%, 100% {\r\n\t\topacity: 1;\r\n\t\tz-index: 5;\r\n\t}\r\n}\r\n\r\n.overlay-container {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 50%;\r\n\twidth: 50%;\r\n\theight: 100%;\r\n\toverflow: hidden;\r\n\ttransition: transform 0.6s ease-in-out;\r\n\tz-index: 100;\r\n}\r\n\r\n.container.right-panel-active .overlay-container{\r\n\ttransform: translateX(-100%);\r\n}\r\n\r\n.overlay {\r\n\tbackground: #FED727;\r\n\tbackground: -webkit-linear-gradient(to right,#FED727, #FED727);\r\n\tbackground: linear-gradient(to right, #FED727, #FED727);\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: cover;\r\n\tbackground-position: 0 0;\r\n\tcolor: #FFFFFF;\r\n\tposition: relative;\r\n\tleft: -100%;\r\n\theight: 100%;\r\n\twidth: 200%;\r\n  \ttransform: translateX(0);\r\n\ttransition: transform 0.6s ease-in-out;\r\n}\r\n\r\n.container.right-panel-active .overlay {\r\n  \ttransform: translateX(50%);\r\n}\r\n\r\n.overlay-panel {\r\n\tposition: absolute;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tflex-direction: column;\r\n\tpadding: 0 40px;\r\n\ttext-align: center;\r\n\ttop: 0;\r\n\theight: 100%;\r\n\twidth: 50%;\r\n\ttransform: translateX(0);\r\n\ttransition: transform 0.6s ease-in-out;\r\n}\r\n\r\n.overlay-left {\r\n\ttransform: translateX(-20%);\r\n}\r\n\r\n.container.right-panel-active .overlay-left {\r\n\ttransform: translateX(0);\r\n}\r\n\r\n.overlay-right {\r\n\tright: 0;\r\n\ttransform: translateX(0);\r\n}\r\n\r\n.container.right-panel-active .overlay-right {\r\n\ttransform: translateX(20%);\r\n}\r\n\r\n.social-container {\r\n\tmargin: 20px 0;\r\n}\r\n\r\n.social-container a {\r\n\tborder: 1px solid #DDDDDD;\r\n\tborder-radius: 50%;\r\n\tdisplay: inline-flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tmargin: 0 5px;\r\n\theight: 40px;\r\n\twidth: 40px;\r\n}\r\n\r\nfooter {\r\n    background-color: #222;\r\n    color: #fff;\r\n    font-size: 14px;\r\n    bottom: 0;\r\n    position: fixed;\r\n    left: 0;\r\n    right: 0;\r\n    text-align: center;\r\n    z-index: 999;\r\n}\r\n\r\nfooter p {\r\n    margin: 10px 0;\r\n}\r\n\r\nfooter i {\r\n    color: #FFFF00;\r\n}\r\n\r\nfooter a {\r\n    color: #3c97bf;\r\n    text-decoration: none;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNlBHIiwiZmlsZSI6InNyYy9hcHAvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjQwMCw4MDAnKTtcclxuXHJcbioge1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmJvZHkge1xyXG5cdGJhY2tncm91bmQ6ICNmNmY1Zjc7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0Zm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuXHRoZWlnaHQ6IDEwMHZoO1xyXG5cdG1hcmdpbjogLTIwcHggMCA1MHB4O1xyXG59XHJcblxyXG5oMSB7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0bWFyZ2luOiAwO1xyXG59XHJcblxyXG5oMiB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5wIHtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDEwMDtcclxuXHRsaW5lLWhlaWdodDogMjBweDtcclxuXHRsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcblx0bWFyZ2luOiAyMHB4IDAgMzBweDtcclxufVxyXG5cclxuc3BhbiB7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG5hIHtcclxuXHRjb2xvcjogIzMzMztcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdG1hcmdpbjogMTVweCAwO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI0ZGRkYwMDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRjAwO1xyXG5cdGNvbG9yOiAjRkZGRkZGO1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRwYWRkaW5nOiAxMnB4IDQ1cHg7XHJcblx0bGV0dGVyLXNwYWNpbmc6IDFweDtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSA4MG1zIGVhc2UtaW47XHJcbn1cclxuXHJcbmJ1dHRvbjphY3RpdmUge1xyXG5cdHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbn1cclxuXHJcbmJ1dHRvbjpmb2N1cyB7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuYnV0dG9uLmdob3N0IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRib3JkZXItY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0cGFkZGluZzogMCA1MHB4O1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRwYWRkaW5nOiAxMnB4IDE1cHg7XHJcblx0bWFyZ2luOiA4cHggMDtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI2NvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgXHRib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsMCwwLDAuMjUpLCBcclxuXHRcdFx0MCAxMHB4IDEwcHggcmdiYSgwLDAsMCwwLjIyKTtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHR3aWR0aDogNzY4cHg7XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogNzI1cHg7XHJcbiAgICBcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnNpZ24taW4tY29udGFpbmVyIHtcclxuXHRsZWZ0OiAwO1xyXG5cdHdpZHRoOiA1MCU7XHJcblx0ei1pbmRleDogMjtcclxufVxyXG5cclxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLnNpZ24taW4tY29udGFpbmVyIHtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbn1cclxuXHJcbi5zaWduLXVwLWNvbnRhaW5lciB7XHJcblx0bGVmdDogMDtcclxuXHR3aWR0aDogNTAlO1xyXG5cdG9wYWNpdHk6IDA7XHJcblx0ei1pbmRleDogMTtcclxufVxyXG5cclxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLnNpZ24tdXAtY29udGFpbmVyIHtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcblx0b3BhY2l0eTogMTtcclxuXHR6LWluZGV4OiA1O1xyXG5cdGFuaW1hdGlvbjogc2hvdyAwLjZzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNob3cge1xyXG5cdDAlLCA0OS45OSUge1xyXG5cdFx0b3BhY2l0eTogMDtcclxuXHRcdHotaW5kZXg6IDE7XHJcblx0fVxyXG5cdFxyXG5cdDUwJSwgMTAwJSB7XHJcblx0XHRvcGFjaXR5OiAxO1xyXG5cdFx0ei1pbmRleDogNTtcclxuXHR9XHJcbn1cclxuXHJcbi5vdmVybGF5LWNvbnRhaW5lciB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiA1MCU7XHJcblx0d2lkdGg6IDUwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcclxuXHR6LWluZGV4OiAxMDA7XHJcbn1cclxuXHJcbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5vdmVybGF5LWNvbnRhaW5lcntcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG59XHJcblxyXG4ub3ZlcmxheSB7XHJcblx0YmFja2dyb3VuZDogI0ZFRDcyNztcclxuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwjRkVENzI3LCAjRkVENzI3KTtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGRUQ3MjcsICNGRUQ3MjcpO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XHJcblx0Y29sb3I6ICNGRkZGRkY7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGxlZnQ6IC0xMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHR3aWR0aDogMjAwJTtcclxuICBcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLm92ZXJsYXkge1xyXG4gIFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XHJcbn1cclxuXHJcbi5vdmVybGF5LXBhbmVsIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0cGFkZGluZzogMCA0MHB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR0b3A6IDA7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHdpZHRoOiA1MCU7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ub3ZlcmxheS1sZWZ0IHtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwJSk7XHJcbn1cclxuXHJcbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5vdmVybGF5LWxlZnQge1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxufVxyXG5cclxuLm92ZXJsYXktcmlnaHQge1xyXG5cdHJpZ2h0OiAwO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxufVxyXG5cclxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLm92ZXJsYXktcmlnaHQge1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMCUpO1xyXG59XHJcblxyXG4uc29jaWFsLWNvbnRhaW5lciB7XHJcblx0bWFyZ2luOiAyMHB4IDA7XHJcbn1cclxuXHJcbi5zb2NpYWwtY29udGFpbmVyIGEge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNEREREREQ7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0bWFyZ2luOiAwIDVweDtcclxuXHRoZWlnaHQ6IDQwcHg7XHJcblx0d2lkdGg6IDQwcHg7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbn1cclxuXHJcbmZvb3RlciBwIHtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG59XHJcblxyXG5mb290ZXIgaSB7XHJcbiAgICBjb2xvcjogI0ZGRkYwMDtcclxufVxyXG5cclxuZm9vdGVyIGEge1xyXG4gICAgY29sb3I6ICMzYzk3YmY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn0gKi8iXX0= */"

/***/ }),

/***/ "./src/app/user/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/register/register.component.ts ***!
  \*****************************************************/
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
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/user/register/register.component.css")]
        })
    ], RegisterComponent);
    return RegisterComponent;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\angular-material-dashboard\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map