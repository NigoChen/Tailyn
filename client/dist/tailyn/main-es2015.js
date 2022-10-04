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
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/error/error.component */ "./src/app/components/error/error.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _auth_auth_guard_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth-guard.guard */ "./src/app/auth/auth-guard.guard.ts");
/* harmony import */ var _auth_child_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/child.guard */ "./src/app/auth/child.guard.ts");
/* harmony import */ var _auth_leave_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/leave.guard */ "./src/app/auth/leave.guard.ts");










const routes = [
    { path: '', redirectTo: 'Login', pathMatch: 'full' },
    {
        path: 'Login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        canActivate: [_auth_auth_guard_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    },
    {
        path: 'Tailyn',
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
        canActivateChild: [_auth_child_guard__WEBPACK_IMPORTED_MODULE_6__["ChildGuard"]],
        canDeactivate: [_auth_leave_guard__WEBPACK_IMPORTED_MODULE_7__["LeaveGuard"]],
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./components/dashboard.module */ "./src/app/components/dashboard.module.ts")).then(m => m.DashboardModule)
    },
    { path: '**', component: _components_error_error_component__WEBPACK_IMPORTED_MODULE_2__["ErrorComponent"] }
];
const routerOptions = {
    useHash: false,
    anchorScrolling: 'enabled',
};
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, routerOptions)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, routerOptions)],
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
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/loading/loading.component */ "./src/app/components/loading/loading.component.ts");






function AppComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class AppComponent {
    constructor(loadingService, router) {
        this.loadingService = loadingService;
        this.router = router;
        this.loading_val = false;
        this.app_Loading = this.loadingService.get_App_Loading().subscribe();
        this.loading_val = false;
    }
    ngOnInit() {
        this.loadingService.get_App_Loading().subscribe(res => this.loading_val = res);
        // let test:any = this.router.getCurrentNavigation().extras.state.loading;
        // console.log(test);
        // this.router.events.subscribe(event => {
        // console.log(event);
        // if(event instanceof NavigationEnd) {
        //  alert('navigation succeeded');
        // }
        // })
    }
    ngOnChanges(changes) {
        // console.log('change');
    }
    ngAfterContentInit() {
        // console.log('ngAfterContentInit');
    }
    ngAfterContentChecked() {
        // console.log('ngAfterContentChecked');
    }
    ngAfterViewInit() {
        // console.log('ngAfterViewInit');
    }
    ngAfterViewChecked() {
        // console.log('ngAfterViewChecked');
    }
    ngOnDestroy() {
        // console.log('ngOnDestroy');
        this.app_Loading.unsubscribe();
    }
    ngDoCheck() {
        //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
        //Add 'implements DoCheck' to the class.
        // this.loginComponent.status_View.subscribe(res => {
        //   console.log(res);
        // });
    }
    onActivate(event) {
        this.app_Loading.unsubscribe();
        if (event) {
            // setTimeout(() => {
            //   console.clear();
            // }, 1000);
        }
    }
    onDeactivate(event) {
        if (event) {
            // setTimeout(() => {
            //   console.clear();
            // }, 1000);
        }
        // console.log("onDeactivate");
    }
    ngOnAttach() {
        console.log(this, 'attached!');
    }
    ngOnDetach() {
        console.log(this, 'detached!');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_loading_service__WEBPACK_IMPORTED_MODULE_1__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 1, consts: [[4, "ngIf"], [3, "activate", "deactivate"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_ng_container_0_Template, 2, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "router-outlet", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function AppComponent_Template_router_outlet_activate_1_listener($event) { return ctx.onActivate($event); })("deactivate", function AppComponent_Template_router_outlet_deactivate_1_listener($event) { return ctx.onDeactivate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading_val);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"]], styles: ["[_ngcontent-%COMP%]:root {\n  --btn-add-color: #45ccb8;\n}\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXEFuZ3VsYXJcXFZlcnNpb24gMTNcXFRhaWx5blxcY2xpZW50L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHdCQUFBO0FDQUo7O0FER0E7RUFFSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdFxyXG57XHJcbiAgICAtLWJ0bi1hZGQtY29sb3I6ICM0NWNjYjg7XHJcbn1cclxuXHJcbipcclxue1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn0iLCI6cm9vdCB7XG4gIC0tYnRuLWFkZC1jb2xvcjogIzQ1Y2NiODtcbn1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _services_loading_service__WEBPACK_IMPORTED_MODULE_1__["LoadingService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_dashboard_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dashboard.module */ "./src/app/components/dashboard.module.ts");
/* harmony import */ var _shard_shard_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shard/shard.module */ "./src/app/shard/shard.module.ts");
/* harmony import */ var _auth_auth_guard_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/auth-guard.guard */ "./src/app/auth/auth-guard.guard.ts");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _auth_auth_guard_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _components_dashboard_module__WEBPACK_IMPORTED_MODULE_5__["DashboardModule"],
            _shard_shard_module__WEBPACK_IMPORTED_MODULE_6__["ShardModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _components_dashboard_module__WEBPACK_IMPORTED_MODULE_5__["DashboardModule"],
        _shard_shard_module__WEBPACK_IMPORTED_MODULE_6__["ShardModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _components_dashboard_module__WEBPACK_IMPORTED_MODULE_5__["DashboardModule"],
                    _shard_shard_module__WEBPACK_IMPORTED_MODULE_6__["ShardModule"],
                ],
                providers: [
                    _auth_auth_guard_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth/auth-guard.guard.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth-guard.guard.ts ***!
  \******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthGuard {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    canActivate(route, state) {
        const user = this.loginService.read_User_SessionStorage();
        if (user != null) {
            if (Object.keys(user).length === 3) {
                this.router.navigate(['/Tailyn']);
                return false;
            }
        }
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/child.guard.ts":
/*!*************************************!*\
  !*** ./src/app/auth/child.guard.ts ***!
  \*************************************/
/*! exports provided: ChildGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildGuard", function() { return ChildGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class ChildGuard {
    constructor(loginService, loadingService, router) {
        this.loginService = loginService;
        this.loadingService = loadingService;
        this.router = router;
    }
    canActivateChild(childRoute, state) {
        this.loadingService.set_Dashboard_Loading(true);
        const user = this.loginService.read_User_SessionStorage();
        if ((user == null) || (Object.keys(user).length < 3)) {
            this.router.navigate(['/Login']);
            return false;
        }
        return true;
    }
}
ChildGuard.ɵfac = function ChildGuard_Factory(t) { return new (t || ChildGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ChildGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChildGuard, factory: ChildGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChildGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] }, { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/leave.guard.ts":
/*!*************************************!*\
  !*** ./src/app/auth/leave.guard.ts ***!
  \*************************************/
/*! exports provided: LeaveGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveGuard", function() { return LeaveGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LeaveGuard {
    canDeactivate(component, currentRoute, currentState) {
        // console.log('LeaveGuard');
        // console.log(currentRoute.params);
        // console.log(currentState.url);
        return component.canDeactivate || window.confirm('Are u sure??');
    }
}
LeaveGuard.ɵfac = function LeaveGuard_Factory(t) { return new (t || LeaveGuard)(); };
LeaveGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LeaveGuard, factory: LeaveGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeaveGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/bootstrap/bootstrap.module.ts":
/*!***********************************************!*\
  !*** ./src/app/bootstrap/bootstrap.module.ts ***!
  \***********************************************/
/*! exports provided: BootstrapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootstrapModule", function() { return BootstrapModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");




class BootstrapModule {
}
BootstrapModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BootstrapModule });
BootstrapModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BootstrapModule_Factory(t) { return new (t || BootstrapModule)(); }, imports: [[
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPaginationModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbAlertModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCollapseModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownModule"]
        ],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPaginationModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbAlertModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCollapseModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BootstrapModule, { imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPaginationModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbAlertModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCollapseModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownModule"]], exports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPaginationModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbAlertModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCollapseModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BootstrapModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPaginationModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbAlertModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCollapseModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownModule"]
                ],
                exports: [
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPaginationModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbAlertModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCollapseModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/alert/alert.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/alert/alert.component.ts ***!
  \*****************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");




function AlertComponent_ngb_alert_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_ngb_alert_0_Template_ngb_alert_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.status = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r0.types)("dismissible", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.messages);
} }
class AlertComponent {
    constructor() {
        this.status = false;
        this.types = 'danger';
        this.messages = '...';
    }
    ngOnInit() {
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(); };
AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["app-alert"]], inputs: { status: "status", types: "types", messages: "messages" }, decls: 1, vars: 1, consts: [["animation", "true", 3, "type", "dismissible", "click", 4, "ngIf"], ["animation", "true", 3, "type", "dismissible", "click"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AlertComponent_ngb_alert_0_Template, 3, 3, "ngb-alert", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlert"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-alert',
                templateUrl: './alert.component.html',
                styleUrls: ['./alert.component.scss']
            }]
    }], function () { return []; }, { status: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], types: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], messages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/content-header/content-header.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/content-header/content-header.component.ts ***!
  \***********************************************************************/
/*! exports provided: ContentHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentHeaderComponent", function() { return ContentHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/modal.service */ "./src/app/services/modal.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function ContentHeaderComponent_ng_container_11_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentHeaderComponent_ng_container_11_ng_container_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.create(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u65B0\u589E");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ContentHeaderComponent_ng_container_11_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentHeaderComponent_ng_container_11_ng_container_4_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.update(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u66F4\u65B0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentHeaderComponent_ng_container_11_ng_container_4_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u522A\u9664");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.user.lv < 2 || false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.user.lv < 2 || false);
} }
function ContentHeaderComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ContentHeaderComponent_ng_container_11_ng_container_3_Template, 3, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ContentHeaderComponent_ng_container_11_ng_container_4_Template, 7, 2, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.user.lv > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.fb_Value_Index[0]);
} }
class ContentHeaderComponent {
    // Modal
    // private modal_Subscription: Subscription;
    // @Input() user_: User | null;
    // @Input() fb_Value_:  { [key: string]: AbstractControl};
    constructor(loginService, modalService) {
        this.loginService = loginService;
        this.modalService = modalService;
    }
    ngOnInit() {
        this.searchText = '';
        this.user_Profile();
        this.delayTime = true;
        this.modalService.get_FormGroup().subscribe(res => this.fbGroup = res);
    }
    ngAfterViewInit() { }
    // FormGroup Controls Value By Index
    get fb_Value_Index() {
        if (!this.fbGroup)
            return '';
        return Object.values(this.fbGroup.value) || '';
    }
    // User Profile
    user_Profile(employee = []) {
        this.user = { jNumber: '', name: '', lv: 1 };
        let user_Session = this.loginService.read_User_SessionStorage();
        if (user_Session != null) {
            if (employee.length) {
                const userData = employee.find((item, index) => item.e_JobNumber === user_Session.jNumber);
                if (userData != undefined) {
                    this.loginService.create_User_SessionStorage(userData);
                    this.user = {
                        jNumber: userData.e_JobNumber,
                        name: userData.e_Name,
                        lv: userData.e_Lv
                    };
                }
                else {
                    this.loginService.logout();
                }
            }
            else {
                this.user = user_Session;
            }
        }
        else {
            this.loginService.logout();
        }
    }
    // Create
    create() {
        this.modalService.set_modalMDForm(['show', 'create']);
    }
    // Update
    update() {
        this.modalService.set_modalMDForm(['show', 'update']);
    }
    // Read
    read() {
        this.delayTime = false;
        this.searchText = '';
        this.modalService.set_Read(true);
        setTimeout(() => {
            this.delayTime = true;
        }, 5000);
    }
    // Search
    search() {
        this.modalService.set_Search(this.searchText);
    }
    // Delete
    delete() {
        this.modalService.set_modalSM(true);
    }
}
ContentHeaderComponent.ɵfac = function ContentHeaderComponent_Factory(t) { return new (t || ContentHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"])); };
ContentHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentHeaderComponent, selectors: [["app-content-header"]], decls: 12, vars: 4, consts: [[1, "container-md", "mt-2", "mb-2"], [1, "row", "justify-content-md-center"], [1, "col-md-7", "col-sm-8"], [1, "input-group", "input-group-sm", "mb-3"], [1, "input-group-prepend"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-sm", 3, "disabled", "click"], ["type", "text", "maxlength", "20", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", 3, "disabled", "click"], [4, "ngIf"], [1, "col-md-5", "col-sm-12", "d-flex", "justify-content-between"], [1, "col", "text-center"], ["type", "button", 1, "btn", "btn-outline-info", "btn-sm", 3, "click"], ["type", "button", 1, "btn", "btn-outline-warning", "btn-sm", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-outline-danger", "btn-sm", 3, "disabled", "click"]], template: function ContentHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentHeaderComponent_Template_button_click_5_listener() { return ctx.read(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u5237\u65B0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContentHeaderComponent_Template_input_ngModelChange_7_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentHeaderComponent_Template_button_click_9_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u641C\u5C0B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ContentHeaderComponent_ng_container_11_Template, 5, 2, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.searchText.length && !ctx.delayTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.searchText.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fbGroup != null);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGVudC1oZWFkZXIvY29udGVudC1oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-content-header',
                templateUrl: './content-header.component.html',
                styleUrls: ['./content-header.component.scss']
            }]
    }], function () { return [{ type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] }, { type: src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/dashboard-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/dashboard-routing.module.ts ***!
  \********************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/components/employee/employee.component.ts");
/* harmony import */ var _repair_repair_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./repair/repair.component */ "./src/app/components/repair/repair.component.ts");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./work/work.component */ "./src/app/components/work/work.component.ts");
/* harmony import */ var _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tutorial/tutorial.component */ "./src/app/components/tutorial/tutorial.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error/error.component */ "./src/app/components/error/error.component.ts");










const routes = [
    { path: '', pathMatch: 'full', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    {
        path: 'Employee', component: _employee_employee_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeComponent"],
        data: { title: '員工', icon: 'bi bi-file-earmark-person' }
    },
    { path: 'Repair', component: _repair_repair_component__WEBPACK_IMPORTED_MODULE_4__["RepairComponent"] },
    { path: 'Work', component: _work_work_component__WEBPACK_IMPORTED_MODULE_5__["WorkComponent"] },
    { path: 'Tutorial', component: _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_6__["TutorialComponent"] },
    { path: '**', component: _error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"] }
];
class DashboardRoutingModule {
}
DashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); }, imports: [[
            // CommonModule, // 針對export components 對外使用
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    // CommonModule, // 針對export components 對外使用
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/dashboard.module.ts":
/*!************************************************!*\
  !*** ./src/app/components/dashboard.module.ts ***!
  \************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/components/modal/modal.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/components/employee/employee.component.ts");
/* harmony import */ var _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tutorial/tutorial.component */ "./src/app/components/tutorial/tutorial.component.ts");
/* harmony import */ var _repair_repair_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./repair/repair.component */ "./src/app/components/repair/repair.component.ts");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./work/work.component */ "./src/app/components/work/work.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/components/dashboard-routing.module.ts");
/* harmony import */ var _shard_shard_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shard/shard.module */ "./src/app/shard/shard.module.ts");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _auth_child_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../auth/child.guard */ "./src/app/auth/child.guard.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./error/error.component */ "./src/app/components/error/error.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _content_header_content_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./content-header/content-header.component */ "./src/app/components/content-header/content-header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _services_work_hours_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../services/work-hours.service */ "./src/app/services/work-hours.service.ts");
/* harmony import */ var _services_stand_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../services/stand.service */ "./src/app/services/stand.service.ts");
/* harmony import */ var _pipes_splite_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../pipes/splite.pipe */ "./src/app/pipes/splite.pipe.ts");










// import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { ErrorInterceptor } from '../helps/error.interceptor';












class DashboardModule {
}
DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardModule_Factory(t) { return new (t || DashboardModule)(); }, providers: [
        _auth_child_guard__WEBPACK_IMPORTED_MODULE_12__["ChildGuard"],
        _services_employee_service__WEBPACK_IMPORTED_MODULE_10__["EmployeeService"],
        _services_work_hours_service__WEBPACK_IMPORTED_MODULE_18__["WorkHoursService"],
        _services_stand_service__WEBPACK_IMPORTED_MODULE_19__["StandService"],
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_8__["DashboardRoutingModule"],
            _shard_shard_module__WEBPACK_IMPORTED_MODULE_9__["ShardModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__["ModalComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        _employee_employee_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeComponent"],
        _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_4__["TutorialComponent"],
        _repair_repair_component__WEBPACK_IMPORTED_MODULE_5__["RepairComponent"],
        _work_work_component__WEBPACK_IMPORTED_MODULE_6__["WorkComponent"],
        _error_error_component__WEBPACK_IMPORTED_MODULE_13__["ErrorComponent"],
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__["SidebarComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
        _content_header_content_header_component__WEBPACK_IMPORTED_MODULE_16__["ContentHeaderComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"],
        _pipes_splite_pipe__WEBPACK_IMPORTED_MODULE_20__["SplitePipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_8__["DashboardRoutingModule"],
        _shard_shard_module__WEBPACK_IMPORTED_MODULE_9__["ShardModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _modal_modal_component__WEBPACK_IMPORTED_MODULE_1__["ModalComponent"],
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
                    _employee_employee_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeComponent"],
                    _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_4__["TutorialComponent"],
                    _repair_repair_component__WEBPACK_IMPORTED_MODULE_5__["RepairComponent"],
                    _work_work_component__WEBPACK_IMPORTED_MODULE_6__["WorkComponent"],
                    _error_error_component__WEBPACK_IMPORTED_MODULE_13__["ErrorComponent"],
                    _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__["SidebarComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
                    _content_header_content_header_component__WEBPACK_IMPORTED_MODULE_16__["ContentHeaderComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"],
                    _pipes_splite_pipe__WEBPACK_IMPORTED_MODULE_20__["SplitePipe"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
                    _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_8__["DashboardRoutingModule"],
                    _shard_shard_module__WEBPACK_IMPORTED_MODULE_9__["ShardModule"]
                ],
                exports: [],
                providers: [
                    _auth_child_guard__WEBPACK_IMPORTED_MODULE_12__["ChildGuard"],
                    _services_employee_service__WEBPACK_IMPORTED_MODULE_10__["EmployeeService"],
                    _services_work_hours_service__WEBPACK_IMPORTED_MODULE_18__["WorkHoursService"],
                    _services_stand_service__WEBPACK_IMPORTED_MODULE_19__["StandService"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _content_header_content_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../content-header/content-header.component */ "./src/app/components/content-header/content-header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal/modal.component */ "./src/app/components/modal/modal.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../loading/loading.component */ "./src/app/components/loading/loading.component.ts");











function DashboardComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class DashboardComponent {
    constructor(loadingService, loginService) {
        this.loadingService = loadingService;
        this.loginService = loginService;
        this.dashboard_Loading = this.loadingService.get_Dashboard_Loading().subscribe();
        this.is_Loading = false;
    }
    ngOnInit() {
        this.loadingService.get_Dashboard_Loading().subscribe(res => this.is_Loading = res);
    }
    get canDeactivate() {
        return true;
    }
    onActivate(event) {
        // console.log(event);
        // setTimeout(() => {
        //   if(event.result_Data.length)
        //   {
        //     this.loadingService.set_Loading(false);
        //   }
        // }, 1000);
    }
    onDeactivate(event) {
        console.log(event);
        console.log("onDeactivate");
    }
    ngOnDestroy() {
        // console.log('ngOnDestroy');
        this.dashboard_Loading.unsubscribe();
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_1__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 8, vars: 1, consts: [[1, "d-flex"], [4, "ngIf"], ["role", "main", 1, "container-fluid"], [3, "activate", "deactivate"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardComponent_ng_container_2_Template, 2, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-content-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "router-outlet", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function DashboardComponent_Template_router_outlet_activate_5_listener($event) { return ctx.onActivate($event); })("deactivate", function DashboardComponent_Template_router_outlet_deactivate_5_listener($event) { return ctx.onDeactivate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.is_Loading);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _content_header_content_header_component__WEBPACK_IMPORTED_MODULE_5__["ContentHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_7__["ModalComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss']
            }]
    }], function () { return [{ type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_1__["LoadingService"] }, { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/employee/employee.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/employee/employee.component.ts ***!
  \***********************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_methods_input_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/methods/input-validators */ "./src/app/methods/input-validators.ts");
/* harmony import */ var src_app_methods_password_Match_Validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/methods/password-Match-Validator */ "./src/app/methods/password-Match-Validator.ts");
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/modal.service */ "./src/app/services/modal.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");













const _c0 = ["form_"];
const _c1 = function (a0) { return { "text-light bg-secondary": a0 }; };
function EmployeeComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeComponent_tr_17_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const item_r3 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.choose(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ngb-rating", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, (item_r3 == null ? null : item_r3.e_Id) == ctx_r0.fb_Value_Index[0]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r4 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.e_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.e_Email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.e_JobNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", item_r3.e_Lv);
} }
function EmployeeComponent_ng_template_18_label_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u59D3\u540D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeeComponent_ng_template_18_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.errorValidators["e_Name"]);
} }
function EmployeeComponent_ng_template_18_label_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u5DE5\u865F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeeComponent_ng_template_18_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r13.errorValidators["e_JobNumber"]);
} }
function EmployeeComponent_ng_template_18_label_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u5BC6\u78BC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeeComponent_ng_template_18_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.errorValidators["e_PassWord"]);
} }
function EmployeeComponent_ng_template_18_ng_container_25_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u78BA\u8A8D\u5BC6\u78BC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeeComponent_ng_template_18_ng_container_25_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r24.errorValidators["e_ConfirmPassword"]);
} }
function EmployeeComponent_ng_template_18_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmployeeComponent_ng_template_18_ng_container_25_label_2_Template, 2, 0, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EmployeeComponent_ng_template_18_ng_container_25_ng_template_3_Template, 3, 1, "ng-template", null, 46, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function EmployeeComponent_ng_template_18_ng_container_25_Template_input_blur_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.inputValidators(ctx_r25.fbGroup, "e_ConfirmPassword"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r18.errorValidators["e_ConfirmPassword"].length)("ngIfElse", _r23);
} }
function EmployeeComponent_ng_template_18_label_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u4FE1\u7BB1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeeComponent_ng_template_18_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r21.errorValidators["e_Email"]);
} }
function EmployeeComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EmployeeComponent_ng_template_18_label_3_Template, 2, 0, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EmployeeComponent_ng_template_18_ng_template_4_Template, 2, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function EmployeeComponent_ng_template_18_Template_input_blur_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.inputValidators(ctx_r27.fbGroup, "e_Name"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EmployeeComponent_ng_template_18_label_9_Template, 2, 0, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EmployeeComponent_ng_template_18_ng_template_10_Template, 2, 1, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function EmployeeComponent_ng_template_18_Template_input_blur_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.inputValidators(ctx_r29.fbGroup, "e_JobNumber"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EmployeeComponent_ng_template_18_label_15_Template, 2, 0, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, EmployeeComponent_ng_template_18_ng_template_16_Template, 2, 1, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function EmployeeComponent_ng_template_18_Template_input_blur_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.inputValidators(ctx_r30.fbGroup, "e_PassWord"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeComponent_ng_template_18_Template_span_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21); return _r17.type == "text" ? _r17.type = "password" : _r17.type = "text"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, EmployeeComponent_ng_template_18_ng_container_25_Template, 7, 2, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, EmployeeComponent_ng_template_18_label_27_Template, 2, 0, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, EmployeeComponent_ng_template_18_ng_template_28_Template, 2, 1, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function EmployeeComponent_ng_template_18_Template_input_blur_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.inputValidators(ctx_r32.fbGroup, "e_Email"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u6B0A\u9650");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "ngb-rating", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " \u666E\u901A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " \u4E2D\u7D1A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " \u9AD8\u7D1A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.fbGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.errorValidators["e_Name"].length)("ngIfElse", _r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.errorValidators["e_JobNumber"].length)("ngIfElse", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx_r2.user.lv < 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.errorValidators["e_PassWord"].length)("ngIfElse", _r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _r17.type == "password" ? "bi bi-eye-slash-fill" : "bi bi-eye-fill");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.fb_Value_Index[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.errorValidators["e_Email"].length)("ngIfElse", _r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", ctx_r2.fb_Value["e_Lv"].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx_r2.fb_Value["e_Lv"].value == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx_r2.fb_Value["e_Lv"].value == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx_r2.fb_Value["e_Lv"].value == 3);
} }
class EmployeeComponent {
    constructor(loadingService, loginService, employeeService, fb, modalService, alertService, ngbRatingConfig) {
        this.loadingService = loadingService;
        this.loginService = loginService;
        this.employeeService = employeeService;
        this.fb = fb;
        this.modalService = modalService;
        this.alertService = alertService;
        this.ngbRatingConfig = ngbRatingConfig;
        // Form Controls
        this.form_Controls = {
            e_Id: [''],
            e_Name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z\u4e00-\u9fa5]{2,10}$/)]],
            e_JobNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z0-9]{3,5}$/)]],
            e_PassWord: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[\d\W\a-zA-Z]{3,30}$/)]],
            e_ConfirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            e_Email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
            e_Lv: ['1', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(1)]]
        };
        // e_ConfirmPassword: [
        //   '', 
        //   {
        //     Validators:[
        //       Validators.required
        //     ],
        //     updateOn: 'blur',
        //     validators: [passwordMatchValidator]
        //   },
        // ],
        // FormGroup
        this.fbGroup = this.fb.group(this.form_Controls, {
            updateOn: 'blur',
            validators: [src_app_methods_password_Match_Validator__WEBPACK_IMPORTED_MODULE_3__["passwordMatchValidator"]]
        });
        // Input Validators blur
        this.inputValidators = src_app_methods_input_validators__WEBPACK_IMPORTED_MODULE_2__["InputValidators"];
        // Input Validators Error
        this.errorValidators = src_app_methods_input_validators__WEBPACK_IMPORTED_MODULE_2__["ErrorValidators"];
        ngbRatingConfig.max = 3;
        ngbRatingConfig.readonly = true;
        this.modalService.get_modalMDForm().subscribe(res => this.reset_FormGroup(res));
        this.modalService.get_Search().subscribe(res => this.search(res));
        this.modalService.get_Create().subscribe(res => this.create(res));
        this.modalService.get_Read().subscribe(res => this.read());
        this.modalService.get_Update().subscribe(res => this.update(res));
        this.modalService.get_Delete().subscribe(res => this.delete(res));
    }
    ngOnInit() {
        Object(src_app_methods_input_validators__WEBPACK_IMPORTED_MODULE_2__["Reset_Validators"])(this.fbGroup);
        this.result_Data = [];
        this.result_List = [];
        this.read();
    }
    ngAfterViewInit() {
        this.modalService.set_FormControls(this.form_Controls);
        this.modalService.set_FormGroup(this.fbGroup);
        this.modalService.set_Form(this.form_);
        this.modalService.set_User_Profile(this.user_Profile);
    }
    // ngAfterViewChecked(): void {
    //   console.log(this.form_);
    // }
    // FormGroup Controls Value
    get fb_Value() {
        return this.fbGroup.controls;
    }
    // FormGroup Controls Value By Index
    get fb_Value_Index() {
        return Object.values(this.fbGroup.value) || '';
    }
    // FormGroup Reset
    reset_FormGroup(value) {
        if (value[0] == 'show') {
            if (value[1] == 'create') {
                this.fbGroup.reset({ e_Lv: '1' });
            }
            else {
                this.fbGroup.get('e_PassWord').setValidators(null);
                this.fb_Value['e_PassWord'].updateValueAndValidity();
                this.fb_Value['e_ConfirmPassword'].setValidators(null);
                this.fb_Value['e_ConfirmPassword'].updateValueAndValidity();
            }
        }
        Object(src_app_methods_input_validators__WEBPACK_IMPORTED_MODULE_2__["Reset_Validators"])(this.fbGroup);
    }
    // User Profile
    user_Profile(employee) {
        this.user = { jNumber: '', name: '', lv: 1 };
        let user_Session = this.loginService.read_User_SessionStorage();
        if (user_Session != null) {
            const userData = employee.find((item, index) => item.e_JobNumber === user_Session.jNumber);
            if (userData != undefined) {
                this.loginService.create_User_SessionStorage(userData);
                this.user = {
                    jNumber: userData.e_JobNumber,
                    name: userData.e_Name,
                    lv: userData.e_Lv
                };
            }
            else {
                this.loginService.logout();
            }
        }
    }
    // Create
    create(fg) {
        this.employeeService.create(fg.value)
            .subscribe({
            next: (res) => {
                if (res) {
                    this.read();
                }
                else {
                    this.alertService.set_Alert(22);
                }
            },
            error: (err) => {
                this.alertService.set_Alert(23);
            },
            complete: () => {
                this.modalService.set_modalMDForm(['hide', 'create']);
            }
        });
    }
    // Read
    read() {
        // this.employeeAsync$ = this.employeeService.read();
        this.employeeService.read()
            .subscribe({
            next: (res) => {
                if (res.length) {
                    // const arr = res[0].e_Inventory.split(',').filter(Boolean);
                    // this.result_Async$ = this.employeeService.read();
                    this.result_Data = res;
                    this.result_List = res;
                    this.user_Profile(res);
                }
            },
            error: (err) => {
                this.alertService.set_Alert(13);
            },
            complete: () => {
                this.loadingService.set_Dashboard_Loading(false);
            }
        });
    }
    // Refresh
    refresh() { }
    // Search
    // search(searchText: HTMLInputElement): void {
    search(searchText) {
        this.result_List = [];
        for (let i = 0; i < this.result_Data.length; i++) {
            if (this.result_Data[i]['e_JobNumber'].includes(searchText) || this.result_Data[i]['e_Name'].includes(searchText)) {
                this.result_List.push(this.result_Data[i]);
            }
        }
    }
    // Update
    update(fg) {
        this.employeeService.update(fg.value)
            .subscribe({
            next: (res) => {
                if (res) {
                    this.read();
                    this.modalService.set_modalMDForm(['hide', 'update']);
                }
                else {
                    this.alertService.set_Alert(32);
                }
                // this.stateView.next({loading: false, error: false});
            },
            error: (err) => {
                this.alertService.set_Alert(33);
            },
            complete: () => {
                // this.stateView.next({loading: false, error: false});
            }
        });
    }
    // Delete
    delete(id) {
        this.employeeService.delete(id)
            .subscribe({
            next: (res) => {
                if (res) {
                    this.read();
                    this.modalService.set_modalMDForm(['hide', 'delete']);
                }
                else {
                    this.alertService.set_Alert(42);
                }
                // this.stateView.next({loading: false, error: false});
            },
            error: (err) => {
                this.alertService.set_Alert(43);
            }
        });
    }
    // choose
    choose(item) {
        this.fbGroup.patchValue({
            e_Id: item.e_Id,
            e_Name: item.e_Name,
            e_JobNumber: item.e_JobNumber,
            e_Email: item.e_Email,
            e_Lv: item.e_Lv
        });
        // @Input() control: AbstractControl;
        // let listOfAllValidationRules = this.control.getValidators().push(validateZipFn(countryCode)]);
        // this.control.setValidators(listOfAllValidationRules);
        // Update Modal FormGroup
        this.modalService.set_FormGroup(this.fbGroup);
    }
    // Destroy
    ngOnDestroy() {
        this.modalService.set_FormGroup(null);
    }
}
EmployeeComponent.ɵfac = function EmployeeComponent_Factory(t) { return new (t || EmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbRatingConfig"])); };
EmployeeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmployeeComponent, selectors: [["app-employee"]], viewQuery: function EmployeeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.form_ = _t.first);
    } }, decls: 20, vars: 1, consts: [[1, "container-lg", "border", "border-dark", "p-2", "mt-2", "mb-2"], [1, "table-responsive", "table-scrollbar"], [1, "table", "table-bordered", "table-sm"], [1, "thead-dark"], ["scope", "col"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["form_", ""], [3, "ngClass", "click"], ["readonly", "true", 1, "h6", 3, "rate"], [3, "formGroup"], ["form", "ngForm"], [1, "form-group", "row"], ["for", "name", "class", "col-3 col-form-label", 4, "ngIf", "ngIfElse"], ["e_Name", ""], [1, "col"], ["type", "text", "id", "name", "formControlName", "e_Name", "placeholder", "\u59D3\u540D", 1, "form-control", 3, "blur"], ["for", "jobNumber", "class", "col-3 col-form-label", 4, "ngIf", "ngIfElse"], ["e_JobNumber", ""], ["type", "text", "id", "jobNumber", "formControlName", "e_JobNumber", "placeholder", "\u5DE5\u865F", 1, "form-control", 3, "readonly", "blur"], ["for", "passWord", "class", "col-3 col-form-label", 4, "ngIf", "ngIfElse"], ["e_PassWord", ""], [1, "input-group", "input-group-md"], ["id", "passWord", "formControlName", "e_PassWord", "placeholder", "\u5BC6\u78BC", "autocomplete", "false", 1, "form-control", 3, "type", "blur"], ["passWord_Type", ""], [1, "input-group-prepend"], [1, "input-group-text", 3, "click"], [3, "ngClass"], [4, "ngIf"], ["for", "email", "class", "col-3 col-form-label", 4, "ngIf", "ngIfElse"], ["e_Email", ""], ["type", "email", "id", "email", "formControlName", "e_Email", "placeholder", "\u4FE1\u7BB1", 1, "form-control", 3, "blur"], ["for", "lv", 1, "col-3", "col-form-label"], [1, "col-3"], ["readonly", "true", 1, "h4", 3, "rate"], [1, "col-6"], ["id", "lv", "formControlName", "e_Lv", 1, "form-control", "text-center", "custom-select"], ["value", "1", 3, "selected"], ["value", "2", 3, "selected"], ["value", "3", 3, "selected"], ["for", "name", 1, "col-3", "col-form-label"], ["for", "name", 1, "col-3", "col-form-label", "text-danger"], ["for", "jobNumber", 1, "col-3", "col-form-label"], ["for", "jobNumber", 1, "col-3", "col-form-label", "text-danger"], ["for", "passWord", 1, "col-3", "col-form-label"], ["for", "passWord", 1, "col-3", "col-form-label", "text-danger"], ["for", "confirmPassword", "class", "col-3 col-form-label", 4, "ngIf", "ngIfElse"], ["e_ConfirmPassword", ""], ["type", "password", "id", "confirmPassword", "formControlName", "e_ConfirmPassword", "placeholder", "\u78BA\u8A8D\u5BC6\u78BC", "autocomplete", "false", 1, "form-control", 3, "blur"], ["for", "confirmPassword", 1, "col-3", "col-form-label"], ["for", "confirmPassword", 1, "col-3", "col-form-label", "text-danger"], [1, "text-danger", "h6"], ["for", "email", 1, "col-3", "col-form-label"], ["for", "email", 1, "col-3", "col-form-label", "text-danger"]], template: function EmployeeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, nam.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u59D3\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u4FE1\u7BB1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u5DE5\u865F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u6B0A\u9650");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, EmployeeComponent_tr_17_Template, 11, 8, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, EmployeeComponent_ng_template_18_Template, 45, 17, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.result_List);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbRating"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZWUvZW1wbG95ZWUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-employee',
                templateUrl: './employee.component.html',
                styleUrls: ['./employee.component.scss']
            }]
    }], function () { return [{ type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] }, { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] }, { type: src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"] }, { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbRatingConfig"] }]; }, { form_: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['form_']
        }] }); })();


/***/ }),

/***/ "./src/app/components/error/error.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/error/error.component.ts ***!
  \*****************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ErrorComponent {
    constructor() { }
    ngOnInit() {
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(); };
ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], decls: 2, vars: 0, template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "error works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXJyb3IvZXJyb3IuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error',
                templateUrl: './error.component.html',
                styleUrls: ['./error.component.scss']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");




class HeaderComponent {
    constructor() {
        this.sideBar_Value = false;
        this.navbarCollapsed = false;
    }
    ngOnInit() { }
    siedeBar_Controller() {
        this.sideBar_Value = !this.sideBar_Value;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 4, vars: 0, consts: [[1, "navbar", "navbar-dark", "sticky-top", "bg-dark", "flex-md-nowrap", "shadow", "p-0"], [1, "col-md-2", "col-lg-2", "mr-0", "px-3", "text-danger"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tailyn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/loading.service */ "./src/app/services/loading.service.ts");



class HomeComponent {
    constructor(loadingService) {
        this.loadingService = loadingService;
        this.chart_Line = null;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.loadingService.set_Dashboard_Loading(false);
    }
    chart_setting() {
        if (this.chart_Line == null) {
            // this.chart_Line = new Chart('canvasPie', {
            //   'type': 'pie',
            //   'data': {
            //     'labels': this.chart_Label,
            //     'datasets': [
            //       {
            //         'data': [0,0,0,0,0,0],
            //         'backgroundColor': [
            //           'rgba(100, 255, 150, 0.4)',
            //           'rgba(70, 165, 200, 0.4)',
            //           'rgba(255, 206, 86, 0.4)',
            //           'rgba(0, 100, 255, 0.4)',
            //           'rgba(200, 60, 60, 0.4)',
            //           'rgba(150, 150, 150, 0.4)',
            //         ],
            //         'borderColor': [
            //           'rgba(100, 255, 150, 1)',
            //           'rgba(70, 165, 200, 1)',
            //           'rgba(255, 206, 86, 1)',
            //           'rgba(0, 100, 255, 1)',
            //           'rgba(200, 60, 60, 1)',
            //           'rgba(150, 150, 150, 1)',
            //         ],
            //         'borderWidth': 2,
            //       }
            //     ]
            //   },
            //   'options': {
            //     'responsive': true,
            //     'plugins': {
            //       'title': {
            //         'display': false,
            //         'text': ''
            //       }
            //     },
            //     'scales': {
            //       'yAxes': [{
            //         'ticks': {
            //           'suggestedMin': 0,
            //           'suggestedMax': 10
            //         }
            //         ,
            //         'scaleLabel': {
            //           'display': false,
            //           'labelString': ''
            //         }
            //       }],
            //       'xAxes': []
            //     }
            //   }
            // });
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_1__["LoadingService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 205, vars: 0, consts: [[1, "d-flex", "justify-content-between", "flex-wrap", "flex-md-nowrap", "align-items-center", "pt-3", "pb-2", "mb-3", "border-bottom"], [1, "h2"], [1, "btn-toolbar", "mb-2", "mb-md-0"], [1, "btn-group", "mr-2"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", "dropdown-toggle"], ["data-feather", "calendar"], [1, "table-responsive"], [1, "table", "table-striped", "table-sm"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Export");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " This week ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Section title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "1,001");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "random");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "placeholder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "1,002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "placeholder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "irrelevant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "visual");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "1,003");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "rich");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "tabular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "1,003");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "placeholder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "illustrative");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "1,004");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "random");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "1,005");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "irrelevant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "placeholder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "1,006");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "illustrative");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "rich");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "1,007");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "placeholder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "tabular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "irrelevant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "1,008");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "random");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "placeholder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "1,009");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "placeholder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "irrelevant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "visual");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "1,010");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "rich");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "tabular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "1,011");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "placeholder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "illustrative");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "1,012");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "placeholder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "1,013");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "irrelevant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "visual");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "1,014");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "illustrative");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "rich");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "1,015");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "random");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "tabular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_1__["LoadingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/loading/loading.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/loading/loading.component.ts ***!
  \*********************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LoadingComponent {
    constructor() { }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["app-loading"]], decls: 4, vars: 0, consts: [[1, "load-backdrop"], ["role", "status", 1, "spinner-grow", 2, "width", "3rem", "height", "3rem"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".load-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 9999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2FkaW5nL0Q6XFxBbmd1bGFyXFxWZXJzaW9uIDEzXFxUYWlseW5cXGNsaWVudC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbG9hZGluZ1xcbG9hZGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWQtYmFja2Ryb3Bcclxue1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDIwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG59IiwiLmxvYWQtYmFja2Ryb3Age1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB6LWluZGV4OiA5OTk5O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading',
                templateUrl: './loading.component.html',
                styleUrls: ['./loading.component.scss']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_directives_alerts_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/directives/alerts.directive */ "./src/app/directives/alerts.directive.ts");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../alert/alert.component */ "./src/app/components/alert/alert.component.ts");
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");













function LoginComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ngb-progressbar", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showValue", true)("type", ctx_r0.progressbar_Type)("value", ctx_r0.progressbar_Value)("max", 100);
} }
function LoginComponent_small_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u5DE5\u865F \u6216 \u5BC6\u78BC \u932F\u8AA4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_small_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u5DE5\u865F \u6216 \u4FE1\u7BB1 \u932F\u8AA4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_small_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u7CFB\u7D71\u932F\u8AA4\uFF0C\u7A0D\u5F8C\u5728\u8A66");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_small_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u4EE3\u78BC\u8F38\u5165\u932F\u8AA4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_ng_container_13_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r16.status.counter, " \u5206\u9418\u5F8C\u518D\u8A66");
} }
function LoginComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_ng_container_13_small_2_Template, 2, 1, "small", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.status.counter);
} }
function LoginComponent_ng_container_20_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u65B0\u5BC6\u78BC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 32, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_container_20_ng_container_6_Template_span_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return _r18.type == "text" ? _r18.type = "password" : _r18.type = "text"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u4EE3\u78BC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _r18.type == "password" ? "bi bi-eye-slash-fill" : "bi bi-eye-fill");
} }
function LoginComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fieldset", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u4FE1\u7BB1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LoginComponent_ng_container_20_ng_container_6_Template, 14, 2, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r6.status.counter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.forms.code);
} }
function LoginComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u5BC6\u78BC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 40, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_21_Template_span_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return _r21.type == "text" ? _r21.type = "password" : _r21.type = "text"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "passWord");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _r21.type == "password" ? "bi bi-eye-slash-fill" : "bi bi-eye-fill");
} }
function LoginComponent_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u8FD4\u56DE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function LoginComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " \u5FD8\u8A18\u5BC6\u78BC ");
} }
function LoginComponent_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u9001\u51FA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r12.fb_Value["jNumber"].valid && ctx_r12.fb_Value["newPassWord"].valid && ctx_r12.fb_Value["email"].valid && ctx_r12.fb_Value["code"].valid && ctx_r12.status.counter == 0 ? false : true);
} }
function LoginComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u767B\u5165 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r14.fb_Value["jNumber"].valid && ctx_r14.fb_Value["passWord"].valid ? false : true);
} }
function LoginComponent_ng_template_31_Template(rf, ctx) { }
class LoginComponent {
    // Constructor
    constructor(loadingService, loginService, fb, router, componentFactoryResolver) {
        this.loadingService = loadingService;
        this.loginService = loginService;
        this.fb = fb;
        this.router = router;
        this.componentFactoryResolver = componentFactoryResolver;
        // progressbar View
        this.progressbar_View = false;
        // progressbar Type
        this.progressbar_Type = 'secondary';
        // progressbar Value
        this.progressbar_Value = 25;
        // FormGroup
        this.fbGroup = this.fb.group({
            jNumber: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            passWord: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)]],
            newPassWord: [null],
            email: [null],
            code: [null]
        });
        // FormGroup Error
        this.forms = {
            email: false,
            code: false
        };
        this.status = {
            account: true,
            email: true,
            code: true,
            system: true,
            ip: '',
            counter: 0
        };
    }
    // NgOnInit
    ngOnInit() {
        this.counter();
    }
    // NgAfterContentInit
    ngAfterContentInit() {
        // this.router.events.subscribe(event => {
        //   console.log(event);
        //   if(event instanceof NavigationEnd) {
        //      alert('navigation succeeded');
        //   }
        // });
    }
    // FormGroup Controls Value
    get fb_Value() {
        return this.fbGroup.controls;
    }
    // Reset Forms
    reset_Forms() {
        this.forms = {
            email: false,
            code: false
        };
    }
    // Reset Status
    reset_Status() {
        this.status = {
            account: true,
            email: true,
            code: true,
            system: true,
            ip: '',
            counter: this.loginService.read_Time_SessionStorage() ? this.loginService.read_Time_SessionStorage() : 0
        };
    }
    // Toggle View
    toggle_Form() {
        this.forms.email = !this.forms.email;
        this.reset_Status();
        if (this.forms.email) {
            this.fb_Value['email'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
            this.fb_Value['email'].updateValueAndValidity();
        }
        else {
            this.fb_Value['passWord'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
            this.fb_Value['passWord'].updateValueAndValidity();
            this.fb_Value['newPassWord'].clearValidators();
            this.fb_Value['newPassWord'].updateValueAndValidity();
            this.fb_Value['code'].clearValidators();
            this.fb_Value['code'].updateValueAndValidity();
        }
        this.fbGroup.reset();
    }
    // User Ip
    /*
    * 1. get ip
    *
    * 2. send ip to email
    */
    get_IP() {
        this.loginService.user_Ip().subscribe({
            next: (userIP) => {
                this.status.ip = userIP.length && userIP;
            },
            error: (err) => {
                this.status.system = false;
                this.progressbar_Show(false);
            },
            complete: () => {
                if (this.status.ip.length) {
                    this.get_Email({
                        jNumber: this.fb_Value['jNumber'].value,
                        email: this.fb_Value['email'].value,
                        ip: this.status.ip
                    });
                }
            }
        });
    }
    // counter
    counter() {
        this.status.counter = this.loginService.read_Time_SessionStorage();
        if (this.status.counter) {
            // 60 minutes
            this.iscounter = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, 60000).subscribe(() => {
                if (this.status.counter) {
                    --this.status.counter;
                }
                else {
                    this.iscounter = null;
                }
            });
        }
        else {
            this.status.counter = 0;
        }
    }
    // User Email
    get_Email(userData) {
        this.loginService.send_Email(userData).subscribe({
            next: (res) => {
                this.status.email = res;
            },
            error: (err) => {
                this.status.system = false;
                this.progressbar_Show(false);
            },
            complete: () => {
                if (this.status.email) {
                    this.fb_Value['newPassWord'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)]);
                    this.fb_Value['newPassWord'].updateValueAndValidity();
                    this.fb_Value['code'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
                    this.fb_Value['code'].updateValueAndValidity();
                    this.forms.code = true;
                    this.progressbar_Show(true, true);
                }
            }
        });
    }
    // Login
    login() {
        const alertComponent = this.componentFactoryResolver.resolveComponentFactory(_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"]);
        this.alerts.viewContainerRef.clear();
        const componentRef = this.alerts.viewContainerRef.createComponent(alertComponent);
        componentRef.instance.messages = 'Nigo Chen';
        componentRef.instance.status = true;
        this.loginService.login(this.fbGroup.value).subscribe({
            next: (res) => {
                this.status.account = res;
            },
            error: (err) => {
                this.status.system = false;
                this.progressbar_Show(false);
            },
            complete: () => {
                if (this.status.account) {
                    this.progressbar_Show(true, true);
                    this.loadingService.set_App_Loading(true);
                    window.location.reload();
                }
                this.fbGroup.reset();
            }
        });
    }
    create_Time_Delay() {
        this.loginService.create_Time_SessionStorage();
    }
    // New PassWord
    new_PassWord() {
        this.loginService.update(this.fbGroup.value).subscribe({
            next: (res) => {
                this.status.code = res;
            },
            error: (err) => {
                this.status.system = false;
                this.progressbar_Show(this.status.system);
            },
            complete: () => {
                if (this.status.code) {
                    this.progressbar_Show(true, true);
                    this.counter();
                    this.reset_Forms();
                    this.fbGroup.reset();
                    this.create_Time_Delay();
                }
            }
        });
    }
    // Progressbar Show
    progressbar_Show(status, complete) {
        this.progressbar_View = true;
        this.progressbar_Type = status ? 'success' : 'danger';
        this.progressbar_Value = 25;
        setTimeout(() => {
            this.progressbar_Value = 50;
        }, 600);
        if (complete) {
            setTimeout(() => {
                this.progressbar_Value = 100;
            }, 1200);
        }
        setTimeout(() => {
            this.progressbar_View = false;
            this.progressbar_Value = 0;
        }, 2800);
    }
    // Form Submit
    onSubmit() {
        this.reset_Status();
        this.progressbar_Show(true);
        if (this.forms.email && this.fb_Value['newPassWord'].value == null) {
            this.get_IP();
        }
        else if (this.fb_Value['newPassWord'].value != null) {
            this.new_PassWord();
        }
        else {
            this.login();
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], viewQuery: function LoginComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](src_app_directives_alerts_directive__WEBPACK_IMPORTED_MODULE_3__["AlertsDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.alerts = _t.first);
    } }, decls: 32, vars: 15, consts: [[1, "container-sm", "d-flex", "align-items-center", "justify-content-center", "vh-100"], [1, "row", "d-block"], [4, "ngIf"], [1, "col", "shadow", "p-3", "mb-5", "bg-white", "rounded"], [1, "card", 2, "width", "18rem", "margin-left", "auto", "margin-right", "auto"], [1, "card-body", "d-flex", "align-items-center", "flex-column"], [1, "card-title", "text-danger"], ["role", "alert", 1, "alert-danger", "alert", "p-1", "w-75", "text-center", "mt-2"], ["class", "form-text", 4, "ngIf"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "form-group", "mb-2"], ["for", "jNumber"], ["type", "text", "id", "jNumber", "formControlName", "jNumber", "minlength", "3", "maxlength", "10", "required", "", 1, "form-control", "mt-2"], [4, "ngIf", "ngIfElse"], ["passWord_Input", ""], [1, "d-flex", "justify-content-between", "mt-3"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["btn_Email", ""], ["btn_Login", ""], ["appAlerts", ""], [1, "col", "mb-1"], [2, "width", "18rem", "margin-left", "auto", "margin-right", "auto"], [3, "showValue", "type", "value", "max"], [1, "form-text"], ["role", "alert", 1, "alert-warning", "alert", "p-1", "w-75", "text-center", "mt-2"], [3, "disabled"], [1, "form-group"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", "minlength", "6", "maxlength", "40", "required", "", 1, "form-control", "mt-2"], ["for", "newPassWord"], [1, "input-group", "input-group-md"], ["id", "newPassWord", "formControlName", "newPassWord", "minlength", "3", "maxlength", "20", "autocomplete", "false", 1, "form-control", 3, "type"], ["newPassWord_Type", ""], [1, "input-group-prepend"], [1, "input-group-text", 2, "cursor", "pointer", 3, "click"], [3, "ngClass"], ["for", "code"], ["type", "text", "id", "code", "formControlName", "code", "required", "", 1, "form-control", "mt-2"], ["for", "passWord"], ["id", "passWord", "formControlName", "passWord", "minlength", "3", "maxlength", "20", "autocomplete", "false", 1, "form-control", 3, "type"], ["passWord_Type", ""], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_ng_container_2_Template, 4, 4, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Tailyn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginComponent_small_9_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginComponent_small_10_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LoginComponent_small_11_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginComponent_small_12_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginComponent_ng_container_13_Template, 3, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_15_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u5DE5\u865F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LoginComponent_ng_container_20_Template, 7, 2, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, LoginComponent_ng_template_21_Template, 9, 2, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "footer", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_24_listener() { return ctx.toggle_Form(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, LoginComponent_ng_container_25_Template, 2, 0, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, LoginComponent_ng_template_26_Template, 1, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, LoginComponent_ng_container_28_Template, 3, 1, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, LoginComponent_ng_template_29_Template, 2, 1, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, LoginComponent_ng_template_31_Template, 0, 0, "ng-template", 20);
    } if (rf & 2) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.progressbar_View);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", ctx.status.account && ctx.status.email && ctx.status.system && ctx.status.code ? true : false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.status.account);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.status.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.status.system);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.status.code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.forms.email && ctx.status.counter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.fbGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.forms.email)("ngIfElse", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.forms.email)("ngIfElse", _r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.forms.email)("ngIfElse", _r13);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], src_app_directives_alerts_directive__WEBPACK_IMPORTED_MODULE_3__["AlertsDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbProgressbar"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] }, { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }]; }, { alerts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [src_app_directives_alerts_directive__WEBPACK_IMPORTED_MODULE_3__["AlertsDirective"]]
        }] }); })();


/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_methods_input_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/methods/input-validators */ "./src/app/methods/input-validators.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/modal.service */ "./src/app/services/modal.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










const _c0 = ["modalForm"];
const _c1 = ["modalSM"];
function ModalComponent_ng_template_0_ngb_alert_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_ng_template_0_ngb_alert_1_Template_ngb_alert_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.alerts.status = !ctx_r7.alerts.status; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r5.alerts.type)("dismissible", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.alerts.message);
} }
function ModalComponent_ng_template_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function ModalComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModalComponent_ng_template_0_ngb_alert_1_Template, 3, 3, "ngb-alert", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ModalComponent_ng_template_0_ng_container_3_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_ng_template_0_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u53D6\u6D88");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_ng_template_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u78BA\u5B9A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.alerts.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.fbGroup.valid);
} }
function ModalComponent_ng_template_2_ngb_alert_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_ng_template_2_ngb_alert_1_Template_ngb_alert_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.alerts.status = !ctx_r14.alerts.status; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r13.alerts.type)("dismissible", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r13.alerts.message);
} }
function ModalComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModalComponent_ng_template_2_ngb_alert_1_Template, 3, 3, "ngb-alert", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u662F\u5426\u522A\u9664\u4EE5\u4E0B\u8CC7\u6599? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_ng_template_2_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u53D6\u6D88");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_ng_template_2_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u78BA\u5B9A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.alerts.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.fb_Value_Index[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r3.fb_Value_Index[0]);
} }
class ModalComponent {
    // Alert
    // @ViewChild(AlertsDirective) alerts: AlertsDirective;
    constructor(ngbModal, modalService, config, alertService, vref, elementRef, _viewContainerRef, componentFactoryResolver, loadingService, loginService, employeeService) {
        this.ngbModal = ngbModal;
        this.modalService = modalService;
        this.alertService = alertService;
        this.vref = vref;
        this.elementRef = elementRef;
        this._viewContainerRef = _viewContainerRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.loadingService = loadingService;
        this.loginService = loginService;
        this.employeeService = employeeService;
        this.errorValidators = src_app_methods_input_validators__WEBPACK_IMPORTED_MODULE_1__["ErrorValidators"];
        this.times = { hour: 15, minute: 58 };
        config.backdrop = 'static';
        config.keyboard = false;
        this.alerts = {
            status: false,
            type: 'danger',
            message: '...'
        };
    }
    ngOnInit() {
        this.modalService.get_modalMDForm().subscribe((res) => {
            if (res[0] == 'show') {
                this.ngbModal.open(this.modalForm, { backdropClass: 'light-blue-backdrop', size: 'md', windowClass: 'modal-holder' });
            }
            else {
                this.close();
            }
        });
        this.modalService.get_modalSM().subscribe(res => {
            if (res) {
                this.ngbModal.open(this.modalSM, { backdropClass: 'light-blue-backdrop', size: 'sm', windowClass: 'modal-holder' });
            }
            else {
                this.close();
            }
        });
        this.modalService.get_FormGroup().subscribe(res => this.fbGroup = res);
        this.modalService.get_Form().subscribe(res => this.form = res);
        this.alertService.get_Alert().subscribe(res => this.alerts = res);
    }
    // FormGroup Controls Value
    get fb_Value() {
        return this.fbGroup.controls;
    }
    // FormGroup Controls Value By Index
    get fb_Value_Index() {
        // if(Number.isInteger(Object.values(this.fbGroup.value)))
        // {
        //   return Object.values(this.fbGroup.value).toString() || '';
        // }
        // return '0';
        return Object.values(this.fbGroup.value) || '';
    }
    // open(): void {        
    //   const alertComponent = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
    //   this.alerts.viewContainerRef.clear();
    //   const componentRef = this.alerts.viewContainerRef.createComponent(alertComponent);
    //   componentRef.instance.messages = 'Nigo Chen';    
    //   componentRef.instance.status =  true;  
    // secondChild
    // constructing new DOM after splitting
    // this.errorChild.nativeElement.innerHTML = `
    //   <div class="errors-head">
    //     <span class="number">${splitted[0]}</span>
    //     <span class="typo">${splitted[1]}</span>
    //   </div>
    // `;
    // this.modal_Content.((div: ElementRef) => console.log(div.nativeElement));
    // this.vref.createEmbeddedView(this.form);
    // this.ngbModal.open(this.modal, {backdropClass: 'light-blue-backdrop', size: 'md', windowClass:'modal-holder'},);
    // this.ngbModal.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {  
    //   this.closeResult = `Closed with: ${result}`;  
    // }, (reason) => {  
    //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;  
    // }); 
    // if (reason === ModalOfDismissReasons.ESC) {  
    //   return 'by pressing ESC';  
    // } else if (reason === ModalOfDismissReasons.BACKDROP_CLICK) {  
    //   return 'by clicking on a backdrop';  
    // } else {  
    //   return  `with: ${reason}`;  
    // }  
    // }
    close() {
        this.ngbModal.dismissAll();
        this.alertService.clear_Alert();
    }
    // Delete
    delete() {
        const id = parseInt(this.fb_Value_Index[0]);
        this.modalService.set_Delete(id);
        this.close();
    }
    save() {
        if (this.fbGroup.valid && this.fb_Value_Index[0]) {
            this.modalService.set_Update(this.fbGroup);
        }
        else {
            this.modalService.set_Create(this.fbGroup);
        }
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModalConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_7__["EmployeeService"])); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], viewQuery: function ModalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modalForm = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modalSM = _t.first);
    } }, decls: 4, vars: 0, consts: [["modalForm", ""], ["modalSM", ""], [1, "modal-header"], ["class", "modal-title text-center w-100 p-0", "animation", "true", 3, "type", "dismissible", "click", 4, "ngIf"], [1, "modal-body"], [4, "ngTemplateOutlet"], [1, "modal-footer", "d-flex", "justify-content-between"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "disabled", "click"], ["animation", "true", 1, "modal-title", "text-center", "w-100", "p-0", 3, "type", "dismissible", "click"], [1, "text-danger", "text-center", "font-weight-bold", "font-italic"], [1, "text-truncate", "text-center", "h4", "text-dark"], ["type", "submit", 1, "btn", "btn-outline-danger", 3, "disabled", "click"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ModalComponent_ng_template_0_Template, 9, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ModalComponent_ng_template_2_Template, 14, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgTemplateOutlet"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlert"]], styles: [".light-blue-backdrop[_ngcontent-%COMP%] {\n  background-color: black;\n}\n.modal-holder[_ngcontent-%COMP%] {\n  -webkit-animation-name: modal-effect;\n          animation-name: modal-effect;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n}\n@-webkit-keyframes modal-effect {\n  0% {\n    transform: scale(0.5);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes modal-effect {\n  0% {\n    transform: scale(0.5);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n.modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  text-align: center;\n  letter-spacing: 4px;\n  background-color: rgba(204, 204, 204, 0.2);\n}\n.modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::after {\n  content: \":\";\n  float: right;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC9EOlxcQW5ndWxhclxcVmVyc2lvbiAxM1xcVGFpbHluXFxjbGllbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG1vZGFsXFxtb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBQTtBQUNBO0VBRUUsdUJBQUE7QUNBRjtBREdBO0VBRUUsb0NBQUE7VUFBQSw0QkFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7QUNERjtBRElBO0VBRUU7SUFBTSxxQkFBQTtFQ0ROO0VERUE7SUFBTSxtQkFBQTtFQ0NOO0FBQ0Y7QURMQTtFQUVFO0lBQU0scUJBQUE7RUNETjtFREVBO0lBQU0sbUJBQUE7RUNDTjtBQUNGO0FEQ0EsNkJBQUE7QUFDQTtFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtBQ0FGO0FER0E7RUFFRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogIE1vZGFsIEJhY2tkcm9wICovXG4ubGlnaHQtYmx1ZS1iYWNrZHJvcFxue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpXG59XG5cbi5tb2RhbC1ob2xkZXJcbntcbiAgYW5pbWF0aW9uLW5hbWU6IG1vZGFsLWVmZmVjdDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xufVxuXG5Aa2V5ZnJhbWVzIG1vZGFsLWVmZmVjdFxue1xuICAwJSAgIHt0cmFuc2Zvcm06IHNjYWxlKDAuNSl9XG4gIDEwMCUge3RyYW5zZm9ybTogc2NhbGUoMSl9XG59XG5cbi8qIE1haW4gZm9ybS1ncm91cCBsYWJlbCBCZyAqL1xuLm1vZGFsLWJvZHkgLmZvcm0tZ3JvdXAgbGFiZWxcbntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogI2NjY2NjYywgJGFscGhhOiAuMik7XG59XG5cbi5tb2RhbC1ib2R5IC5mb3JtLWdyb3VwIGxhYmVsOjphZnRlclxue1xuICBjb250ZW50OiBcIjpcIjtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiIsIi8qICBNb2RhbCBCYWNrZHJvcCAqL1xuLmxpZ2h0LWJsdWUtYmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLm1vZGFsLWhvbGRlciB7XG4gIGFuaW1hdGlvbi1uYW1lOiBtb2RhbC1lZmZlY3Q7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcbn1cblxuQGtleWZyYW1lcyBtb2RhbC1lZmZlY3Qge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbi8qIE1haW4gZm9ybS1ncm91cCBsYWJlbCBCZyAqL1xuLm1vZGFsLWJvZHkgLmZvcm0tZ3JvdXAgbGFiZWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA0LCAyMDQsIDIwNCwgMC4yKTtcbn1cblxuLm1vZGFsLWJvZHkgLmZvcm0tZ3JvdXAgbGFiZWw6OmFmdGVyIHtcbiAgY29udGVudDogXCI6XCI7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal',
                templateUrl: './modal.component.html',
                styleUrls: ['./modal.component.scss']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }, { type: src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModalConfig"] }, { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }, { type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] }, { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"] }, { type: src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_7__["EmployeeService"] }]; }, { modalForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['modalForm']
        }], modalSM: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['modalSM']
        }] }); })();


/***/ }),

/***/ "./src/app/components/repair/repair.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/repair/repair.component.ts ***!
  \*******************************************************/
/*! exports provided: RepairComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepairComponent", function() { return RepairComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class RepairComponent {
    constructor() { }
    ngOnInit() {
    }
}
RepairComponent.ɵfac = function RepairComponent_Factory(t) { return new (t || RepairComponent)(); };
RepairComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RepairComponent, selectors: [["app-repair"]], decls: 2, vars: 0, template: function RepairComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "repair works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVwYWlyL3JlcGFpci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RepairComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-repair',
                templateUrl: './repair.component.html',
                styleUrls: ['./repair.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");






class SidebarComponent {
    constructor(loginService, router, activatedRoute, elementRef) {
        this.loginService = loginService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.elementRef = elementRef;
    }
    ngAfterViewInit() {
        let navLink = this.elementRef.nativeElement.querySelectorAll('.nav-link')[0];
        // Page Reload Check Url
        // if(this.router.url.includes('/Tailyn'))
        if (this.router.url == '/Tailyn') {
            navLink.classList.add('text-danger', 'font-weight-bold');
        }
        else {
            navLink.classList.remove('text-danger', 'font-weight-bold');
        }
        // When routerLinkActive
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (event.url == '/Tailyn' || event.url == '/') {
                    navLink.classList.add('text-danger', 'font-weight-bold');
                }
                else {
                    navLink.classList.remove('text-danger', 'font-weight-bold');
                }
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
            }
        });
        // Only page reload
        // this.activatedRoute.data.subscribe(data => {
        //     console.log(data);
        // });
        // Only page reload
        // this.activatedRoute.firstChild.data.subscribe(data => {
        //     console.log(data);
        // });
    }
    ngOnInit() {
        this.user = { jNumber: '', name: '', lv: 1 };
        this.user_Profile();
    }
    // User Profile
    user_Profile() {
        let user_Session = this.loginService.read_User_SessionStorage();
        if (user_Session != null) {
            this.user = user_Session;
        }
        else {
            this.logout();
        }
    }
    // Logout
    logout() {
        this.loginService.logout();
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 30, vars: 2, consts: [[1, "d-flex"], [1, "nav", "px-1"], [1, "nav-item", "text-nowrap"], ["routerLink", "/", "title", "\u9996\u9801", 1, "nav-link"], [1, "bi", "bi-house-door-fill"], ["routerLink", "Work", "routerLinkActive", "text-danger font-weight-bold", "title", "\u5DE5\u6642", 1, "nav-link"], [1, "bi", "bi-calculator-fill"], ["routerLink", "Repair", "routerLinkActive", "text-danger font-weight-bold", "title", "\u7DAD\u4FEE", 1, "nav-link"], [1, "bi", "bi-hammer"], ["routerLink", "Employee", "routerLinkActive", "text-danger font-weight-bold", "title", "\u54E1\u5DE5", 1, "nav-link"], [1, "bi", "bi-file-earmark-person"], [1, "nav", "px-3"], ["ngbDropdown", "", "display", "dynamic", 1, "d-inline-block"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "nav-link", "text-white"], [1, "bi", "bi-person-circle"], [1, "p-1"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1", 1, "shadow", "header_DropMenu", "bg-dark"], ["ngbDropdownItem", "", 1, "text-center"], ["ngbDropdownItem", "", 1, "text-center", 3, "click"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u9996\u9801 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u5DE5\u6642 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \u7DAD\u4FEE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \u54E1\u5DE5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_28_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u767B\u51FA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.jNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.name);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownItem"]], styles: [".header_DropMenu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: relative;\n  color: white;\n}\n\n.header_DropMenu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: black;\n}\n\n.header_DropMenu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]::after {\n  content: \"\\a\";\n  border-style: solid;\n  border-width: 5px 10px 5px 0;\n  border-color: transparent red transparent transparent;\n  position: absolute;\n  opacity: 0;\n  transition: 0.5s;\n  right: -5%;\n  top: 40%;\n}\n\n.header_DropMenu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover::after {\n  opacity: 0.8;\n  right: 25%;\n}\n\n.nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  position: relative;\n  color: var(--white-color);\n}\n\n.nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]::before {\n  content: \"\";\n  background-color: white;\n  left: 19%;\n  position: absolute;\n  width: 55px;\n  height: 1px;\n  bottom: -4px;\n  opacity: 0;\n  transition: 0.5s;\n}\n\n.nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover::before {\n  bottom: 8px;\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL0Q6XFxBbmd1bGFyXFxWZXJzaW9uIDEzXFxUYWlseW5cXGNsaWVudC9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2lkZWJhclxcc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxrQkFBQTtFQUNBLFlBQUE7QUNBSjs7QURFQTtFQUVJLFlBQUE7QUNBSjs7QURHQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EscURBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FDQUo7O0FERUE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREdBO0VBRUksa0JBQUE7RUFDQSx5QkFBQTtBQ0RKOztBREdBO0VBRUksV0FBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDREo7O0FER0E7RUFFSSxXQUFBO0VBQ0EsWUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyX0Ryb3BNZW51IGJ1dHRvblxue1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4uaGVhZGVyX0Ryb3BNZW51IGJ1dHRvbjpob3Zlclxue1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLmhlYWRlcl9Ecm9wTWVudSBidXR0b246OmFmdGVyIHtcbiAgICBjb250ZW50OlwiXFxBXCI7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDVweCAxMHB4IDVweCAwO1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgcmVkIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IC41cztcbiAgICByaWdodDogLTUlO1xuICAgIHRvcDogNDAlO1xufVxuLmhlYWRlcl9Ecm9wTWVudSBidXR0b246aG92ZXI6OmFmdGVyIHtcbiAgICBvcGFjaXR5OiAuODtcbiAgICByaWdodDoyNSU7XG59XG5cblxuLm5hdi1pdGVtIC5uYXYtbGlua1xue1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xufVxuLm5hdi1pdGVtIC5uYXYtbGluazo6YmVmb3JlXG57XG4gICAgY29udGVudDogXCJcIjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBsZWZ0OiAxOSU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA1NXB4O1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJvdHRvbTogLTRweDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IC41cztcbn1cbi5uYXYtaXRlbSAubmF2LWxpbms6aG92ZXI6OmJlZm9yZVxue1xuICAgIGJvdHRvbTogOHB4O1xuICAgIG9wYWNpdHk6IC44OyAgICBcbn0iLCIuaGVhZGVyX0Ryb3BNZW51IGJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaGVhZGVyX0Ryb3BNZW51IGJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmhlYWRlcl9Ecm9wTWVudSBidXR0b246OmFmdGVyIHtcbiAgY29udGVudDogXCJcXGFcIjtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiA1cHggMTBweCA1cHggMDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCByZWQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgcmlnaHQ6IC01JTtcbiAgdG9wOiA0MCU7XG59XG5cbi5oZWFkZXJfRHJvcE1lbnUgYnV0dG9uOmhvdmVyOjphZnRlciB7XG4gIG9wYWNpdHk6IDAuODtcbiAgcmlnaHQ6IDI1JTtcbn1cblxuLm5hdi1pdGVtIC5uYXYtbGluayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcbn1cblxuLm5hdi1pdGVtIC5uYXYtbGluazo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGxlZnQ6IDE5JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNTVweDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJvdHRvbTogLTRweDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLm5hdi1pdGVtIC5uYXYtbGluazpob3Zlcjo6YmVmb3JlIHtcbiAgYm90dG9tOiA4cHg7XG4gIG9wYWNpdHk6IDAuODtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/tutorial/tutorial.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/tutorial/tutorial.component.ts ***!
  \***********************************************************/
/*! exports provided: TutorialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialComponent", function() { return TutorialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TutorialComponent {
    constructor() { }
    ngOnInit() {
    }
}
TutorialComponent.ɵfac = function TutorialComponent_Factory(t) { return new (t || TutorialComponent)(); };
TutorialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TutorialComponent, selectors: [["app-tutorial"]], decls: 2, vars: 0, template: function TutorialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "tutorial works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHV0b3JpYWwvdHV0b3JpYWwuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TutorialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tutorial',
                templateUrl: './tutorial.component.html',
                styleUrls: ['./tutorial.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/work/work.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/work/work.component.ts ***!
  \***************************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_methods_input_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/methods/input-validators */ "./src/app/methods/input-validators.ts");
/* harmony import */ var src_app_pipes_splite_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pipes/splite.pipe */ "./src/app/pipes/splite.pipe.ts");
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var src_app_services_work_hours_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/work-hours.service */ "./src/app/services/work-hours.service.ts");
/* harmony import */ var src_app_services_stand_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/stand.service */ "./src/app/services/stand.service.ts");
/* harmony import */ var src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/modal.service */ "./src/app/services/modal.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");















const _c0 = ["form_"];
function WorkComponent_tbody_24_tr_1_td_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r3.w_JobNumber, " ", item_r3.e_Name, " ");
} }
function WorkComponent_tbody_24_tr_1_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WorkComponent_tbody_24_tr_1_td_1_span_1_Template, 2, 2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const y_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("rowspan", y_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !y_r7);
} }
function WorkComponent_tbody_24_tr_1_td_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r3.w_BTotal, "\u5206 | \u5DF2\u6263\u9664", item_r3.w_BDeduct, " ");
} }
const _c1 = function (a0) { return [a0]; };
function WorkComponent_tbody_24_tr_1_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WorkComponent_tbody_24_tr_1_td_2_span_1_Template, 2, 2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const y_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, item_r3.w_BTotal < 0 ? "text-danger" : "text-truncate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("rowspan", y_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !y_r7);
} }
function WorkComponent_tbody_24_tr_1_td_3_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r3.w_OTotal, "\u5206 | \u5DF2\u6263\u9664", item_r3.w_ODeduct, " ");
} }
function WorkComponent_tbody_24_tr_1_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WorkComponent_tbody_24_tr_1_td_3_span_1_Template, 2, 2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const y_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, item_r3.w_OTotal < 0 ? "text-danger" : "text-truncate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("rowspan", y_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !y_r7);
} }
function WorkComponent_tbody_24_tr_1_td_19_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, item_r3.w_Time, "yyyy-MM-dd"), " ");
} }
function WorkComponent_tbody_24_tr_1_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WorkComponent_tbody_24_tr_1_td_19_span_1_Template, 3, 4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const y_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("rowspan", y_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !y_r7);
} }
function WorkComponent_tbody_24_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WorkComponent_tbody_24_tr_1_td_1_Template, 2, 2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WorkComponent_tbody_24_tr_1_td_2_Template, 2, 5, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WorkComponent_tbody_24_tr_1_td_3_Template, 2, 5, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "splite");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "splite");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "splite");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "splite");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "splite");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, WorkComponent_tbody_24_tr_1_td_19_Template, 2, 2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const y_r7 = ctx.index;
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !y_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !y_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !y_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 10, item_r3.w_WorkOrder, y_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 13, item_r3.w_Model, y_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 16, item_r3.w_Stand, y_r7), " ", item_r3.s_Title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 19, item_r3.w_Quantity, y_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 22, item_r3.w_Remark, y_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !y_r7);
} }
const _c2 = function (a0) { return { "table-dark": a0 }; };
function WorkComponent_tbody_24_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkComponent_tbody_24_Template_tbody_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const item_r3 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.choose(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WorkComponent_tbody_24_tr_1_Template, 20, 25, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, (item_r3 == null ? null : item_r3.w_Id) == ctx_r0.fb_Value_Index[0]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r3.w_WorkOrder.split(","));
} }
function WorkComponent_ng_template_25_div_61_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r35.s_Code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r35.s_Code, " ", item_r35.s_Title, " ");
} }
const _c3 = function (a1) { return ["bi text-info h6 position-absolute", a1]; };
function WorkComponent_ng_template_25_div_61_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkComponent_ng_template_25_div_61_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const i_r33 = ctx.index; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r37.reset_FormArray(i_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function WorkComponent_ng_template_25_div_61_Template_input_blur_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const i_r33 = ctx.index; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r39.inputValidators(ctx_r39.fbGroup, "w_WorkOrder", i_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function WorkComponent_ng_template_25_div_61_Template_input_blur_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const i_r33 = ctx.index; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r40.inputValidators(ctx_r40.fbGroup, "w_Model", i_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "select", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function WorkComponent_ng_template_25_div_61_Template_select_blur_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const i_r33 = ctx.index; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r41.inputValidators(ctx_r41.fbGroup, "w_Stand", i_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, WorkComponent_ng_template_25_div_61_option_15_Template, 2, 3, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function WorkComponent_ng_template_25_div_61_Template_input_blur_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const i_r33 = ctx.index; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r42.inputValidators(ctx_r42.fbGroup, "w_Quantity", i_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function WorkComponent_ng_template_25_div_61_Template_input_blur_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const i_r33 = ctx.index; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r43.inputValidators(ctx_r43.fbGroup, "w_Remark", i_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r33 = ctx.index;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c3, i_r33 > 0 ? "text-danger bi-dash-square" : "text-info bi-plus-square"))("title", i_r33 > 0 ? "\u522A\u9664" : "\u65B0\u589E");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("text-danger", ctx_r31.errorValidators["w_WorkOrder"][i_r33].length && true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r31.errorValidators["w_WorkOrder"][i_r33].length && ctx_r31.fb_Value["w_WorkOrder"].get("" + i_r33).touched ? ctx_r31.errorValidators["w_WorkOrder"][i_r33] : "\u5DE5\u55AE", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", i_r33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("text-danger", ctx_r31.errorValidators["w_Model"][i_r33].length && true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r31.errorValidators["w_Model"][i_r33].length && ctx_r31.fb_Value["w_WorkOrder"].get("" + i_r33).touched ? ctx_r31.errorValidators["w_Model"][i_r33] : "\u6A5F\u7A2E", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", i_r33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("text-danger", ctx_r31.errorValidators["w_Stand"][i_r33].length && true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r31.errorValidators["w_Stand"][i_r33].length && ctx_r31.fb_Value["w_WorkOrder"].get("" + i_r33).touched ? ctx_r31.errorValidators["w_Stand"][i_r33] : "\u7AD9\u5225", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", i_r33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 23, ctx_r31.standList$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("text-danger", ctx_r31.errorValidators["w_Quantity"][i_r33].length && true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r31.errorValidators["w_Quantity"][i_r33].length ? ctx_r31.errorValidators["w_Quantity"][i_r33] : "\u6578\u91CF", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", i_r33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("text-danger", ctx_r31.errorValidators["w_Remark"][i_r33].length && true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r31.errorValidators["w_Remark"][i_r33] ? ctx_r31.errorValidators["w_Remark"][i_r33] : "\u5099\u8A3B", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", i_r33);
} }
const _c4 = function () { return []; };
function WorkComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u5DE5\u865F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u59D3\u540D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function WorkComponent_ng_template_25_Template_input_input_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.onDate($event.target); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u4E00\u822C\u5DE5\u6642");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function WorkComponent_ng_template_25_Template_input_input_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.deduct_Change("w_BMinute"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 32, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function WorkComponent_ng_template_25_Template_input_input_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.onDate($event.target); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkComponent_ng_template_25_Template_span_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31); return _r30.show(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u958B\u59CB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function WorkComponent_ng_template_25_Template_input_input_36_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.onDate($event.target); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u7D50\u675F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u52A0\u73ED\u5DE5\u6642");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function WorkComponent_ng_template_25_Template_input_input_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.deduct_Change("w_OMinute"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function WorkComponent_ng_template_25_Template_input_input_52_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.onDate($event.target); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\u958B\u59CB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function WorkComponent_ng_template_25_Template_input_input_57_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.onDate($event.target); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\u7D50\u675F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, WorkComponent_ng_template_25_div_61_Template, 26, 27, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.fbGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r2.fb_Value["w_JobNumber"].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r2.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r2.fb_Value["w_Time"].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("text-danger", ctx_r2.errorValidators["w_Time"].length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.errorValidators["w_Time"].length ? ctx_r2.errorValidators["w_Time"] : "\u65E5\u671F", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("text-danger", ctx_r2.fb_Value["w_BTotal"].value < 0 || ctx_r2.errorValidators["w_BTotal"].length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.fb_Value["w_BTotal"].value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx_r2.dateTime_Min)("max", ctx_r2.dateTime_Max)("value", ctx_r2.onValue("SbMinute"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx_r2.dateTime_Min)("max", ctx_r2.dateTime_Max)("value", ctx_r2.onValue("EbMinute"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("text-danger", ctx_r2.fb_Value["w_OTotal"].value < 0 || ctx_r2.errorValidators["w_OTotal"].length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.fb_Value["w_OTotal"].value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx_r2.dateTime_Min)("max", ctx_r2.dateTime_Max)("value", ctx_r2.onValue("SoMinute"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx_r2.dateTime_Min)("max", ctx_r2.dateTime_Max)("value", ctx_r2.onValue("EoMinute"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c4).constructor(ctx_r2.fb_Value["w_WorkOrder"].value.length));
} }
class WorkComponent {
    constructor(loadingService, loginService, workHoursService, standService, fb, modalService, alertService, calendar, elementRef) {
        this.loadingService = loadingService;
        this.loginService = loginService;
        this.workHoursService = workHoursService;
        this.standService = standService;
        this.fb = fb;
        this.modalService = modalService;
        this.alertService = alertService;
        this.calendar = calendar;
        this.elementRef = elementRef;
        // FormGroup Object
        this.form_Controls = {
            w_Id: [''],
            w_JobNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            w_BMinute: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]],
            w_OMinute: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]],
            w_WorkOrder: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)])]),
            w_Model: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)])]),
            w_Stand: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)])]),
            w_Quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](1, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(4)])]),
            w_Remark: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)])]),
            w_Time: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)]],
            w_BTotal: ['0', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            w_OTotal: ['0', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            w_BDeduct: [70, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            w_ODeduct: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        };
        // FormGroup
        this.fbGroup = this.fb.group(this.form_Controls);
        // Input Validators blur
        this.inputValidators = src_app_methods_input_validators__WEBPACK_IMPORTED_MODULE_2__["InputValidators"];
        // Input Validators Error
        this.errorValidators = src_app_methods_input_validators__WEBPACK_IMPORTED_MODULE_2__["ErrorValidators"];
        // Timezone
        this.getTimezoneOffset = (new Date()).getTimezoneOffset() * 60000;
        // DateTime
        this.dateTime = (new Date(Date.now() - this.getTimezoneOffset)).toISOString().slice(0, -8);
        this.dateTime_Min = (new Date(new Date().setDate(new Date().getDate() - 5))).toISOString().slice(0, -8);
        this.dateTime_Max = (new Date(new Date().setDate(new Date().getDate() + 5))).toISOString().slice(0, -8);
        // Minutes Total Title
        this.minutesTotalTitle = new Map([['w_BTotal', '0'], ['w_OTotal', '0']]);
        this.modalService.get_modalMDForm().subscribe(res => this.reset_FormGroup(res));
        this.modalService.get_Search().subscribe(res => this.search(res));
        this.modalService.get_Create().subscribe(res => this.create(res));
        this.modalService.get_Read().subscribe(res => this.read());
        this.modalService.get_Update().subscribe(res => this.update(res));
        this.modalService.get_Delete().subscribe(res => this.delete(res));
    }
    ngOnInit() {
        Object(src_app_methods_input_validators__WEBPACK_IMPORTED_MODULE_2__["Reset_Validators"])(this.fbGroup);
        this.result_Data = [];
        this.result_List = [];
        this.read();
        this.user_Profile();
        this.standList$ = this.standService.read();
    }
    ngAfterViewInit() {
        this.modalService.set_FormControls(this.form_Controls);
        this.modalService.set_FormGroup(this.fbGroup);
        this.modalService.set_Form(this.form_);
        // this.modalService.set_User_Profile(this.user_Profile);
    }
    // FormGroup Controls Value
    get fb_Value() {
        return this.fbGroup.controls;
    }
    // FormGroup Controls Value By Index
    get fb_Value_Index() {
        return Object.values(this.fbGroup.value) || '';
    }
    // Add / Remove FormArray
    reset_FormArray(index) {
        if (index) {
            this.fb_Value['w_WorkOrder'].removeAt(index);
            this.fb_Value['w_Model'].removeAt(index);
            this.fb_Value['w_Stand'].removeAt(index);
            this.fb_Value['w_Quantity'].removeAt(index);
            this.fb_Value['w_Remark'].removeAt(index);
        }
        else if (this.fb_Value['w_WorkOrder'].value.length < 5) {
            this.fb_Value['w_WorkOrder'].push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)]));
            this.fb_Value['w_Model'].push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)]));
            this.fb_Value['w_Stand'].push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('40', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)]));
            this.fb_Value['w_Quantity'].push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](1, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(4)]));
            this.fb_Value['w_Remark'].push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]));
        }
        Object(src_app_methods_input_validators__WEBPACK_IMPORTED_MODULE_2__["Reset_Validators"])(this.fbGroup, index);
    }
    // FormGroup Reset
    reset_FormGroup(value) {
        // if(value[0] == 'show')
        // {
        if (value[1] == 'create') {
            this.fbGroup.reset({
                w_Id: '',
                w_JobNumber: this.user.jNumber,
                w_BMinute: ',,,',
                w_OMinute: ',,,',
                w_BTotal: '0',
                w_OTotal: '0',
                w_BDeduct: 70,
                w_ODeduct: 0,
                w_Time: new Date().toISOString().slice(0, 10)
            });
            // Reset FormArray Value
            this.reset_FormArray_Val();
        }
        // Reset ErrorValidators Object
        Object(src_app_methods_input_validators__WEBPACK_IMPORTED_MODULE_2__["Reset_Validators"])(this.fbGroup);
        // }    
    }
    // User Profile
    user_Profile() {
        this.user = { jNumber: '', name: '', lv: 1 };
        let user_Session = this.loginService.read_User_SessionStorage();
        if (user_Session) {
            this.user = user_Session;
        }
        else {
            this.loginService.logout();
        }
    }
    // Create
    create(fg) {
        const bMinutes = this.fb_Value['w_BMinute'].value.length;
        const oMinutes = this.fb_Value['w_OMinute'].value.length;
        const bTotalInt = parseInt(this.fb_Value['w_BTotal'].value);
        const oTotalInt = parseInt(this.fb_Value['w_OTotal'].value);
        if ((bMinutes > 40 && bTotalInt > -1) || (oMinutes > 40 && oTotalInt > -1)) {
            this.workHoursService.create(fg.value)
                .subscribe({
                next: (res) => {
                    if (res) {
                        this.read();
                    }
                    else {
                        this.alertService.set_Alert(22);
                    }
                },
                error: (err) => {
                    this.alertService.set_Alert(23);
                },
                complete: () => {
                    this.modalService.set_modalMDForm(['hide', 'create']);
                }
            });
        }
        else {
            this.alertService.set_Alert('工時異常');
        }
    }
    // Read
    read() {
        this.workHoursService.read()
            .subscribe({
            next: (res) => {
                if (res.length) {
                    this.result_Data = res;
                    this.result_List = res;
                }
            },
            error: (err) => {
                this.alertService.set_Alert(13);
            },
            complete: () => {
                this.loadingService.set_Dashboard_Loading(false);
            }
        });
    }
    // Refresh
    refresh() { }
    // Search
    search(searchText) {
        this.result_List = [];
        for (let i = 0; i < this.result_Data.length; i++) {
            if (this.result_Data[i]['w_JobNumber'].includes(searchText) || this.result_Data[i]['w_WorkOrder'].includes(searchText)) {
                this.result_List.push(this.result_Data[i]);
            }
        }
    }
    // Update
    update(fg) {
        const bMinutes = this.fb_Value['w_BMinute'].value.length;
        const oMinutes = this.fb_Value['w_OMinute'].value.length;
        const bTotalInt = parseInt(this.fb_Value['w_BTotal'].value);
        const oTotalInt = parseInt(this.fb_Value['w_OTotal'].value);
        if ((bMinutes > 40 && bTotalInt > -1) || (oMinutes > 40 && oTotalInt > -1)) {
            this.workHoursService.create(fg.value)
                .subscribe({
                next: (res) => {
                    if (res) {
                        this.read();
                    }
                    else {
                        this.alertService.set_Alert(32);
                    }
                },
                error: (err) => {
                    this.alertService.set_Alert(33);
                },
                complete: () => {
                    this.modalService.set_modalMDForm(['hide', 'update']);
                }
            });
        }
        else {
            this.alertService.set_Alert('工時不可為 0');
        }
    }
    // Delete
    delete(id) {
        this.workHoursService.delete(id)
            .subscribe({
            next: (res) => {
                if (res) {
                    this.read();
                    this.modalService.set_modalMDForm(['hide', 'delete']);
                }
                else {
                    this.alertService.set_Alert(42);
                }
            },
            error: (err) => {
                this.alertService.set_Alert(43);
            }
        });
    }
    // choose
    choose(item) {
        this.fbGroup.patchValue({
            w_Id: item.w_Id,
            w_JobNumber: item.w_JobNumber,
            w_BMinute: item.w_BMinute,
            w_OMinute: item.w_OMinute,
            w_Time: new Date(item.w_Time).toISOString().slice(0, 10),
            w_BTotal: item.w_BTotal,
            w_OTotal: item.w_OTotal,
            w_BDeduct: item.w_BDeduct,
            w_ODeduct: item.w_ODeduct
        });
        this.minutesTotalTitle.set('w_BTotal', item.w_BMinute);
        this.minutesTotalTitle.set('w_OTotal', item.w_OTotal);
        // FormArray Value
        this.set_FormArray_Val(item);
        // Update Modal FormGroup
        this.modalService.set_FormGroup(this.fbGroup);
    }
    // Update FormArray Value
    set_FormArray_Val(item) {
        const array_Name = ['w_WorkOrder', 'w_Model', 'w_Stand', 'w_Quantity', 'w_Remark'];
        for (const name of array_Name) {
            const formArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([]);
            const validators = this.fb_Value[name].get('0').validator;
            for (const val of item[name].split(',')) {
                formArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](val, validators));
            }
            this.fbGroup.setControl(name, formArray);
        }
    }
    // Reset FormArray Value
    reset_FormArray_Val() {
        const array_Name = ['w_WorkOrder', 'w_Model', 'w_Stand', 'w_Quantity', 'w_Remark'];
        for (const name of array_Name) {
            const formArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([]);
            const validators = this.fb_Value[name].get('0').validator;
            if (name == 'w_Stand') {
                formArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('40', validators));
            }
            else if (name == 'w_Quantity') {
                formArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](1, validators));
            }
            else {
                formArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', validators));
            }
            this.fbGroup.setControl(name, formArray);
        }
    }
    // DateTimePick Value Chekc
    onValue_Check(id, index) {
        let values = this.fb_Value[id].value;
        return values.length > 18 ? values.split(',')[index] : '';
    }
    // DateTimePick Value
    onValue(id) {
        let values = '';
        if (this.fb_Value_Index[0]) {
            switch (id) {
                case 'SbMinute':
                    values = this.onValue_Check('w_BMinute', 0);
                    break;
                case 'EbMinute':
                    values = this.onValue_Check('w_BMinute', 1);
                    break;
                case 'SoMinute':
                    values = this.onValue_Check('w_OMinute', 0);
                    break;
                case 'EoMinute':
                    values = this.onValue_Check('w_OMinute', 1);
                    break;
            }
        }
        if (values.length == 19) {
            values = values.replace(' ', 'T');
            // substring skip second value
            return values.substring(0, 16);
        }
        return values;
    }
    // DateTime Replace Value
    datetim_Replace(value) {
        const timestamp = value.replace('T', ' ');
        let datetime = timestamp.replace('/', '-');
        return value ? `${datetime}:00` : '';
    }
    // Check VALUE
    onDate_Check(name, value, index) {
        let choose_Value = this.fb_Value[name].value.split(',');
        choose_Value[index] = '';
        choose_Value[2] = '0';
        if (value.length) {
            // index  ~ 1
            choose_Value[index] = value;
            // Total minutes for array index 2
            choose_Value[2] = this.dateTime_Count(choose_Value, name);
        }
        // Update Deduct Total
        let deduct = 'w_BDeduct';
        // Update Minutes Total
        let minutes = 'w_BTotal';
        if (name == 'w_OMinute') {
            deduct = 'w_ODeduct';
            minutes = 'w_OTotal';
        }
        this.fb_Value[minutes].patchValue(choose_Value[2]);
        choose_Value[3] = this.fb_Value[deduct].value;
        // Update FormGroup Controls Value
        this.fb_Value[name].patchValue(choose_Value.toString());
    }
    // DateTimePick Event
    onDate(event) {
        const id = event.id;
        // day2.getTime()-day1.getTime();
        // now.setHours(0,0,0,0);    
        const value = this.datetim_Replace(event.value);
        switch (id) {
            case 'SbMinute':
                this.onDate_Check('w_BMinute', value, 0);
                break;
            case 'EbMinute':
                this.onDate_Check('w_BMinute', value, 1);
                break;
            case 'SoMinute':
                this.onDate_Check('w_OMinute', value, 0);
                break;
            case 'EoMinute':
                this.onDate_Check('w_OMinute', value, 1);
                break;
            case 'w_Time':
                if (value.length) {
                    this.fb_Value[id].patchValue(event.value);
                }
                else {
                    this.fb_Value[id].patchValue(new Date().toISOString().slice(0, 10));
                }
                break;
        }
    }
    // DataTime Minutes Count
    dateTime_Count(dateTime_Total, name) {
        let result = '0';
        if (dateTime_Total.toString().length > 42) {
            const start = new Date(dateTime_Total[0]);
            const end = new Date(dateTime_Total[1]);
            const total = Math.abs(end - start);
            const days = total / (1000 * 3600 * 24);
            const hours = days * 24;
            let minutes = Math.floor(hours * 60);
            minutes = (name == 'w_BMinute') ? (minutes - this.fb_Value['w_BDeduct'].value) : (minutes - this.fb_Value['w_ODeduct'].value);
            result = (start.getTime() > end.getTime()) ? `-${minutes}` : `${minutes}`;
        }
        return result;
    }
    // Minutes Total
    deduct_Change(name) {
        // if(this.fb_Value[name].value.length < 4)
        // {
        //   return;
        // }
        // Update Deduct Total
        let deduct = 'w_BDeduct';
        // Update Minutes Total
        let minutes = 'w_BTotal';
        if (name == 'w_OMinute') {
            deduct = 'w_ODeduct';
            minutes = 'w_OTotal';
        }
        let dateTime_Total = this.fb_Value[name].value.split(',');
        // Update Minutes Total
        dateTime_Total[2] = this.dateTime_Count(dateTime_Total, name);
        this.fb_Value[minutes].patchValue(dateTime_Total[2]);
        // Update Deduct Total
        dateTime_Total[3] = this.fb_Value[deduct].value;
        // Update DateTime Total Value
        this.fb_Value[name].patchValue(dateTime_Total.toString());
    }
    // Destroy
    ngOnDestroy() {
        this.modalService.set_FormGroup(null);
    }
    // mouse click 
    onClick($event) {
        this.modalService.set_modalMDForm(['hide', 'create']);
        // console.info('Click event fired', $event);
        // if($event.which === 2)
        // {
        //   console.info('Middle mouse button clicked');
        // }
    }
}
WorkComponent.ɵfac = function WorkComponent_Factory(t) { return new (t || WorkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_work_hours_service__WEBPACK_IMPORTED_MODULE_6__["WorkHoursService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_stand_service__WEBPACK_IMPORTED_MODULE_7__["StandService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_8__["ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbCalendar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
WorkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkComponent, selectors: [["app-work"]], viewQuery: function WorkComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.form_ = _t.first);
    } }, hostBindings: function WorkComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseup", function WorkComponent_mouseup_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([src_app_pipes_splite_pipe__WEBPACK_IMPORTED_MODULE_3__["SplitePipe"]])], decls: 27, vars: 1, consts: [[1, "container-lg", "border", "border-dark", "p-2", "mt-2", "mb-2"], [1, "table-responsive", "table-scrollbar"], [1, "table", "table-bordered", "table-sm", "table-hover"], [1, "thead-dark"], ["scope", "col"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["form_", ""], [3, "ngClass", "click"], [4, "ngFor", "ngForOf"], ["align", "center", "style", "vertical-align: middle;", 4, "ngIf"], ["align", "center", "style", "vertical-align: middle;", 3, "ngClass", 4, "ngIf"], ["align", "center", 2, "vertical-align", "middle"], [4, "ngIf"], ["align", "center", 2, "vertical-align", "middle", 3, "ngClass"], [3, "formGroup"], ["form", "ngForm"], [1, "form-row", "pb-1"], [1, "input-group", "input-group-sm", "col"], [1, "input-group-prepend"], [1, "input-group-text", "p-1"], ["type", "text", "readonly", "", 1, "form-control", "form-control-sm", "text-center", 3, "value"], ["type", "date", "id", "w_Time", 1, "form-control", "form-control-sm", "text-center", 3, "value", "input"], [1, "input-group-append"], [1, "form-row", "border", "border-dark", "mb-1", "pt-1", "pb-1"], [1, "input-group", "input-group-sm", "col-md-12", "mb-0", "d-inline-flex", "d-flex", "justify-content-center"], [1, "input-group-prepend", "mb-1"], [1, "input-group-text", "bg-white"], [1, "bi", "bi-clock", "input-group-text", "ml-1", "mr-1", "bg-white"], [1, "input-group-text", "font-weight-bold", "mr-1"], [1, "input-group-text", "font-weight-bold"], ["type", "number", "id", "bDeduct", "step", "5", "min", "0", "max", "100", "formControlName", "w_BDeduct", 1, "form-control", "form-control-sm", "col-2", 3, "input"], [1, "input-group", "input-group-sm", "col-md-6"], ["type", "datetime-local", "id", "SbMinute", "step", "3600", 1, "form-control", "form-control-sm", 3, "min", "max", "value", "input"], ["SbMinute", ""], [1, "input-group-text", "p-1", 3, "click"], ["type", "datetime-local", "id", "EbMinute", "step", "3600", 1, "form-control", "form-control-sm", 3, "min", "max", "value", "input"], ["type", "number", "id", "oDeduct", "step", "5", "min", "0", "max", "100", "formControlName", "w_ODeduct", 1, "form-control", "form-control-sm", "col-2", 3, "input"], ["type", "datetime-local", "id", "SoMinute", "step", "3600", 1, "form-control", "form-control-sm", 3, "min", "max", "value", "input"], ["type", "datetime-local", "id", "EoMinute", "step", "3600", 1, "form-control", "form-control-sm", 3, "min", "max", "value", "input"], ["class", "form-row border border-dark mb-1", 4, "ngFor", "ngForOf"], [1, "form-row", "border", "border-dark", "mb-1"], [1, "form-row", "col-12", "position-relative"], [2, "top", "5px", "right", "5px", "cursor", "pointer", "z-index", "999", 3, "ngClass", "title", "click"], ["formArrayName", "w_WorkOrder", 1, "form-group", "col", "text-center", "mb-1"], ["type", "text", "placeholder", "\u5DE5\u55AE", 1, "form-control", "form-control-sm", 3, "formControlName", "blur"], ["formArrayName", "w_Model", 1, "form-group", "col", "text-center", "mb-1"], ["type", "text", "placeholder", "\u6A5F\u7A2E", 1, "form-control", "form-control-sm", 3, "formControlName", "blur"], ["formArrayName", "w_Stand", 1, "form-group", "col", "text-center", "mb-1"], ["id", "lv", 1, "form-control", "text-center", "custom-select", 3, "formControlName", "blur"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-row", "col-12"], ["formArrayName", "w_Quantity", 1, "form-group", "col-2", "text-center", "mb-1"], ["type", "number", "step", "1", "min", "0", "max", "999", 1, "form-control", "form-control-sm", "text-center", 3, "formControlName", "blur"], ["formArrayName", "w_Remark", 1, "form-group", "col-10", "text-center", "mb-1"], ["type", "text", "placeholder", "\u5099\u8A3B", 1, "form-control", "form-control-sm", 3, "formControlName", "blur"], [3, "value"]], template: function WorkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, nam.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u5DE5\u865F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u4E00\u822C\u5DE5\u6642");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u52A0\u73ED\u5DE5\u6642");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u5DE5\u55AE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u6A5F\u7A2E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u7AD9\u5225");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u6578\u91CF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u5099\u8A3B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u6642\u9593");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, WorkComponent_tbody_24_Template, 2, 4, "tbody", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, WorkComponent_ng_template_25_Template, 62, 27, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.result_List);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], pipes: [src_app_pipes_splite_pipe__WEBPACK_IMPORTED_MODULE_3__["SplitePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]], styles: [".datetime-font-size[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93b3JrL0Q6XFxBbmd1bGFyXFxWZXJzaW9uIDEzXFxUYWlseW5cXGNsaWVudC9zcmNcXGFwcFxcY29tcG9uZW50c1xcd29ya1xcd29yay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy93b3JrL3dvcmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkNBO0VBRUksZ0JBQUE7QUM3Q0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dvcmsvd29yay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlucHV0W3R5cGU9XCJkYXRldGltZS1sb2NhbFwiXSB7XG4vLyAgICAgb3BhY2l0eTogMTtcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuLy8gICAgIGJvcmRlcjogbm9uZTtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbi8vIH1cblxuLy8gaW5wdXRbdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICB0b3A6IDA7XG4vLyAgICAgYm90dG9tOiAwO1xuLy8gICAgIHJpZ2h0OiAwO1xuLy8gICAgIGxlZnQ6IDA7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgaGVpZ2h0OiAxMDAlO1xuLy8gICAgIHotaW5kZXg6IDEwMDtcbi8vICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJkYXRldGltZS1sb2NhbFwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yOmhvdmVyIHtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbi8vIH1cblxuLy8gaW5wdXRbdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbi8vICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJkYXRldGltZS1sb2NhbFwiXTo6LXdlYmtpdC1kYXRldGltZS1lZGl0XG4vLyB7XG4vLyAgICAgb3BhY2l0eTogMDtcbi8vICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJkYXRldGltZS1sb2NhbFwiXTo6LXdlYmtpdC1jbGVhci1idXR0b25cbi8vIHtcbi8vICAgICBiYWNrZ3JvdW5kOiBub25lO1xuLy8gICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbi8vIH1cblxuLy8gLmlucHV0LWdyb3VwLXRleHQge1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuLy8gICAgIGJvcmRlcjogbm9uZTtcbi8vIH1cblxuLmRhdGV0aW1lLWZvbnQtc2l6ZVxue1xuICAgIGZvbnQtc2l6ZTogLjhlbTtcbn0iLCIuZGF0ZXRpbWUtZm9udC1zaXplIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-work',
                templateUrl: './work.component.html',
                styleUrls: ['./work.component.scss'],
                providers: [src_app_pipes_splite_pipe__WEBPACK_IMPORTED_MODULE_3__["SplitePipe"]]
            }]
    }], function () { return [{ type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] }, { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] }, { type: src_app_services_work_hours_service__WEBPACK_IMPORTED_MODULE_6__["WorkHoursService"] }, { type: src_app_services_stand_service__WEBPACK_IMPORTED_MODULE_7__["StandService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_8__["ModalService"] }, { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbCalendar"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { form_: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['form_']
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseup', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/configs/url.config.ts":
/*!***************************************!*\
  !*** ./src/app/configs/url.config.ts ***!
  \***************************************/
/*! exports provided: Urls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Urls", function() { return Urls; });
const url_Server = 'http://localhost:3000';
// const url: string = 'http://localhost:3000';
const Urls = {
    login: {
        login: `${url_Server}/api/login`,
        email: `${url_Server}/api/login/email`,
        update: `${url_Server}/api/login/update`,
    },
    employee: {
        read: `${url_Server}/api/employee/read`,
        findOne: `${url_Server}/api/employee/find/one`,
        findLike: `${url_Server}/api/employee/find/like`,
        create: `${url_Server}/api/employee/create`,
        update: `${url_Server}/api/employee/update`,
        updatePassword: `${url_Server}/api/employee/update/password`,
        concat: `${url_Server}/api/employee/concat`,
        replace: `${url_Server}/api/employee/replace`,
        delete: `${url_Server}/api/employee/delete`,
        email: `${url_Server}/api/employee/email`,
    },
    workHours: {
        read: `${url_Server}/api/workHours/read`,
        findOne: `${url_Server}/api/workHours/find/one`,
        findLike: `${url_Server}/api/workHours/find/like`,
        create: `${url_Server}/api/workHours/create`,
        update: `${url_Server}/api/workHours/update`,
        delete: `${url_Server}/api/workHours/delete`,
    },
    stand: {
        read: `${url_Server}/api/stand/read`,
        create: `${url_Server}/api/stand/create`,
        update: `${url_Server}/api/stand/update`,
        delete: `${url_Server}/api/stand/delete`,
    },
    rma: {
        read: `${url_Server}/api/rma/read`,
        findOne: `${url_Server}/api/rma/find/one`,
        findLike: `${url_Server}/api/rma/find/like`,
        create: `${url_Server}/api/rma/create`,
        update: `${url_Server}/api/rma/update`,
        delete: `${url_Server}/api/rma/delete`,
    },
    recycle: {
        read: `${url_Server}/api/recycle/read`,
        create: `${url_Server}/api/recycle/create`,
        delete: `${url_Server}/api/recycle/delete`,
    },
    ip: 'http://api.ipify.org/?format=json'
};


/***/ }),

/***/ "./src/app/directives/alerts.directive.ts":
/*!************************************************!*\
  !*** ./src/app/directives/alerts.directive.ts ***!
  \************************************************/
/*! exports provided: AlertsDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsDirective", function() { return AlertsDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AlertsDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
AlertsDirective.ɵfac = function AlertsDirective_Factory(t) { return new (t || AlertsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
AlertsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AlertsDirective, selectors: [["", "appAlerts", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertsDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appAlerts]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/helps/error.interceptor.ts":
/*!********************************************!*\
  !*** ./src/app/helps/error.interceptor.ts ***!
  \********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




class ErrorInterceptor {
    constructor() { }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            if ([401, 403, 404].indexOf(err.status) !== -1) {
                // this.authenticationService.logout();
                console.log('error');
                // location.reload();
            }
            const error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(() => error);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(); };
ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/methods/input-validators.ts":
/*!*********************************************!*\
  !*** ./src/app/methods/input-validators.ts ***!
  \*********************************************/
/*! exports provided: ErrorValidators, Reset_Validators, InputValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorValidators", function() { return ErrorValidators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reset_Validators", function() { return Reset_Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputValidators", function() { return InputValidators; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

/**
 * ErrorValidators
 *
 * Class ex:
 *
 * [class.text-danger]="errorValidators['w_WorkOrder'][i].length"
 *
 * Html ex:
 *
 * {{errorValidators['w_WorkOrder'][i]}}
 */
let ErrorValidators = {};
/**
 * Reset_Validators(FormGroup, index)
 *
 * Type FormGroup
 *
 * Type number or null for FormArray Reomve index
 */
const Reset_Validators = (fbGroup, index = null) => {
    Object.keys(fbGroup.controls).forEach((key, i) => {
        if (fbGroup.controls[key] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]) {
            const fbArray = fbGroup.controls[key];
            if (fbArray.controls instanceof Array) {
                if (index == null && ErrorValidators[key] == undefined && fbArray.length == 1) {
                    ErrorValidators[key] = [''];
                }
                else {
                    if (fbArray.length == 1) {
                        ErrorValidators[key] = [''];
                    }
                    else if (fbArray.length > ErrorValidators[key].length) {
                        for (let i = 0; i < fbArray.length; i++) {
                            ErrorValidators[key].push('');
                        }
                    }
                    else if (index) {
                        ErrorValidators[key].splice(index, 1);
                    }
                }
            }
        }
        else {
            ErrorValidators[key] = '';
        }
    });
};
/**
 * Input (onBlur)="InputValidators(FormGroup, Controls Name, index)"
 *
 * Type FormGroup
 *
 * Type String FormControl Name
 *
 * Type Number For FormArray By Index Value
 */
const InputValidators = (fbGroup, key = '', index = 0) => {
    if (key.length) {
        if (fbGroup.controls[key] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]) {
            const errorKey = fbGroup.controls[key].errors;
            const otherErrorKey = fbGroup.hasError('passWordMatch');
            ErrorValidators[key] = '';
            if (errorKey != null) {
                if (errorKey.required) {
                    ErrorValidators[key] = '未輸入';
                }
                if (errorKey.pattern) {
                    ErrorValidators[key] = '格式錯';
                }
            }
            else if (otherErrorKey && key == 'e_ConfirmPassword') {
                ErrorValidators[key] = '密碼不符';
            }
            return ErrorValidators[key];
        }
        else {
            const fbArray = fbGroup.controls[key];
            // if(fbArray.controls instanceof Array)
            // {				
            // 	fbArray.controls.forEach((c, i) => {
            const errorKey = fbArray.controls[index].errors;
            ErrorValidators[key][index] = '';
            if (errorKey) {
                if (errorKey.required) {
                    ErrorValidators[key][index] = '未輸入';
                }
                if (errorKey.pattern) {
                    ErrorValidators[key][index] = '格式錯';
                }
            }
            // });		
        }
    }
    // }
    return ErrorValidators[key];
};


/***/ }),

/***/ "./src/app/methods/password-Match-Validator.ts":
/*!*****************************************************!*\
  !*** ./src/app/methods/password-Match-Validator.ts ***!
  \*****************************************************/
/*! exports provided: passwordMatchValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordMatchValidator", function() { return passwordMatchValidator; });
const passwordMatchValidator = (controls) => {
    // const validator: object | null = controls.get('e_PassWord')?.validator({} as AbstractControl);
    // console.log(Object.keys(validator).length);
    if (controls.get('e_Id').value) {
        // controls.get('e_PassWord').clearValidators();
        // controls.get('e_PassWord').updateValueAndValidity();
        // controls.get('e_ConfirmPassword').clearValidators();
        // controls.get('e_ConfirmPassword').updateValueAndValidity();
        return null;
    }
    const password = controls.get('e_PassWord').value;
    const confirmPassword = controls.get('e_ConfirmPassword').value;
    return (password && confirmPassword) && (password === confirmPassword) ? null : { passWordMatch: true };
};


/***/ }),

/***/ "./src/app/pipes/splite.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/splite.pipe.ts ***!
  \**************************************/
/*! exports provided: SplitePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitePipe", function() { return SplitePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SplitePipe {
    transform(value, index) {
        const result = value.split(',');
        return result[index];
    }
}
SplitePipe.ɵfac = function SplitePipe_Factory(t) { return new (t || SplitePipe)(); };
SplitePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "splite", type: SplitePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SplitePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'splite'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/alert.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class AlertService {
    constructor(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.alerts = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    // Get Alert
    get_Alert() {
        return this.alerts.asObservable();
    }
    /*
    * Set Alert
    *
    * 11 create ok
    * 12 create ng
    * 13 create err
    *
    * 21 Read ok
    * 22 Read ng
    * 23 Read err
    *
    * 31 upddte ok
    * 32 update ng
    * 33 update err
    *
    * 41 delete ok
    * 42 delete ng
    * 43 delete err
    *
    */
    set_Alert(status) {
        switch (status) {
            case 11:
                this.alerts.next({
                    status: false,
                    type: 'success',
                    message: '載入成功'
                });
                break;
            case 12:
                this.alerts.next({
                    status: true,
                    type: 'warning',
                    message: '載入失敗'
                });
                break;
            case 13:
                this.alerts.next({
                    status: true,
                    type: 'danger',
                    message: '載入失敗，系統異常'
                });
                break;
            case 21:
                this.alerts.next({
                    status: false,
                    type: 'success',
                    message: '新增成功'
                });
                break;
            case 22:
                this.alerts.next({
                    status: true,
                    type: 'warning',
                    message: '新增失敗，是否資料重複'
                });
                break;
            case 23:
                this.alerts.next({
                    status: true,
                    type: 'danger',
                    message: '新增失敗，系統異常'
                });
                break;
            case 31:
                this.alerts.next({
                    status: false,
                    type: 'success',
                    message: '更新成功'
                });
                break;
            case 32:
                this.alerts.next({
                    status: true,
                    type: 'warning',
                    message: '更新失敗，是否資料重複'
                });
                break;
            case 33:
                this.alerts.next({
                    status: true,
                    type: 'danger',
                    message: '更新失敗，系統異常'
                });
                break;
            case 41:
                this.alerts.next({
                    status: false,
                    type: 'success',
                    message: '刪除成功'
                });
                break;
            case 42:
                this.alerts.next({
                    status: true,
                    type: 'warning',
                    message: '刪除失敗'
                });
                break;
            case 43:
                this.alerts.next({
                    status: true,
                    type: 'danger',
                    message: '刪除失敗，系統異常'
                });
                break;
            default:
                this.alerts.next({
                    status: true,
                    type: 'warning',
                    message: status
                });
                break;
        }
        // Close Alert
        setTimeout(() => {
            this.clear_Alert();
        }, 5000);
    }
    // Clear Alert
    clear_Alert() {
        this.alerts.next({
            status: false,
            type: 'light',
            message: '...'
        });
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"])); };
AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/employee.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/employee.service.ts ***!
  \**********************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _configs_url_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../configs/url.config */ "./src/app/configs/url.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class EmployeeService {
    constructor(http) {
        this.http = http;
    }
    handleError(errorResponse) {
        // catchError
        let message = '';
        if (errorResponse.error instanceof ErrorEvent) {
            message = 'Clinet Error';
        }
        else {
            message = 'Server Error';
        }
        // callback to subscribe error
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(() => message);
    }
    // Read
    read() {
        return this.http.get(_configs_url_config__WEBPACK_IMPORTED_MODULE_3__["Urls"].employee.read)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => {
            if (typeof res !== "object") {
                return [];
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // Find One
    findOne(user) {
        const jString = JSON.stringify(user);
        return this.http.get(`${_configs_url_config__WEBPACK_IMPORTED_MODULE_3__["Urls"].employee.findOne}/${jString}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // Find Like
    findLike(employee) {
        return this.http.get(`${_configs_url_config__WEBPACK_IMPORTED_MODULE_3__["Urls"].employee.findLike}/${employee}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // Create
    create(employee) {
        return this.http.post(_configs_url_config__WEBPACK_IMPORTED_MODULE_3__["Urls"].employee.create, employee)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // Update
    update(employee) {
        return this.http.put(_configs_url_config__WEBPACK_IMPORTED_MODULE_3__["Urls"].employee.update, employee)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // concat
    concat(employee) {
        return this.http.put(_configs_url_config__WEBPACK_IMPORTED_MODULE_3__["Urls"].employee.concat, employee)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // Replace
    replace(employee) {
        return this.http.put(_configs_url_config__WEBPACK_IMPORTED_MODULE_3__["Urls"].employee.replace, employee)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // Delete
    delete(id) {
        return this.http.delete(`${_configs_url_config__WEBPACK_IMPORTED_MODULE_3__["Urls"].employee.delete}/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
}
EmployeeService.ɵfac = function EmployeeService_Factory(t) { return new (t || EmployeeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
EmployeeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EmployeeService, factory: EmployeeService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/loading.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/loading.service.ts ***!
  \*********************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class LoadingService {
    constructor() {
        this.app_Loading = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.dashboard_Loading = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.is_Login = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    set_App_Loading(value) {
        if (value) {
            this.app_Loading.next(value);
        }
        else {
            setTimeout(() => {
                this.app_Loading.next(value);
            }, 600);
        }
    }
    get_App_Loading() {
        return this.app_Loading.asObservable();
    }
    set_Dashboard_Loading(value) {
        if (value) {
            this.dashboard_Loading.next(value);
        }
        else {
            setTimeout(() => {
                this.dashboard_Loading.next(value);
            }, 600);
        }
    }
    get_Dashboard_Loading() {
        return this.dashboard_Loading.asObservable();
    }
    set_Login(value) {
        setTimeout(() => {
            this.is_Login.next(value);
        }, 2000);
    }
    get_Login() {
        return this.is_Login.asObservable();
    }
    clear_Loading() {
        this.app_Loading.next();
        this.dashboard_Loading.next();
    }
}
LoadingService.ɵfac = function LoadingService_Factory(t) { return new (t || LoadingService)(); };
LoadingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoadingService, factory: LoadingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _configs_url_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configs/url.config */ "./src/app/configs/url.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading.service */ "./src/app/services/loading.service.ts");







class LoginService {
    constructor(http, loadingService) {
        this.http = http;
        this.loadingService = loadingService;
    }
    handleError(errorResponse) {
        // catchError
        const message = errorResponse.error instanceof ErrorEvent ? 'Clinet Error' : 'Server Error';
        // callback to subscribe error
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(() => message);
    }
    // Login
    login(user) {
        return this.http.post(_configs_url_config__WEBPACK_IMPORTED_MODULE_3__["Urls"].login.login, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            if (res.length) {
                this.create_User_SessionStorage(res[0]);
                return true;
            }
            return false;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // Update Password
    update(user) {
        return this.http.put(_configs_url_config__WEBPACK_IMPORTED_MODULE_3__["Urls"].login.update, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // logout
    logout() {
        this.loadingService.set_Dashboard_Loading(true);
        this.delete_User_SessionStorage();
        this.delete_Time_SessionStorage();
    }
    // Send Email For User
    send_Email(user) {
        return this.http.post(_configs_url_config__WEBPACK_IMPORTED_MODULE_3__["Urls"].login.email, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // Create Time 5 minutes sessionStorage  
    create_Time_SessionStorage() {
        const date_ = new Date();
        date_.setMinutes(date_.getMinutes() + 5);
        const time_ = date_.getTime().toString();
        sessionStorage.setItem('time', btoa(time_));
    }
    // Read Time sessionStorage
    read_Time_SessionStorage() {
        let time_ = sessionStorage.getItem('time');
        if (time_ != null) {
            const now_date = new Date().getTime();
            time_ = parseInt(atob(time_));
            if (time_ > now_date) {
                const date_ = (new Date(time_).getTime() - new Date().getTime());
                // var hours = Math.floor(diff / 1000 / 60 / 60);
                // diff -= hours * 1000 * 60 * 60;
                const minutes = Math.floor(date_ / 1000 / 60);
                // diff -= minutes * 1000 * 60;
                // var seconds = Math.floor(diff / 1000);
                return minutes;
            }
        }
        this.delete_Time_SessionStorage();
        return 0;
    }
    // Delete Time sessionStorage
    delete_Time_SessionStorage() {
        sessionStorage.removeItem('time');
    }
    // Create IP LocalStorage
    user_Ip() {
        return this.http.get(_configs_url_config__WEBPACK_IMPORTED_MODULE_3__["Urls"].ip)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
            if ('ip' in data) {
                return data.ip;
            }
            return '';
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // Create User sessionStorage
    create_User_SessionStorage(employee) {
        const new_user = {
            jNumber: employee.e_JobNumber,
            name: employee.e_Name,
            lv: employee.e_Lv
        };
        const old_User = this.read_User_SessionStorage();
        if (old_User != null) {
            if ((old_User.name != new_user.name) || (old_User.lv != new_user.lv)) {
                setTimeout(() => {
                    window.location.reload();
                }, 1500);
            }
        }
        sessionStorage.setItem('user', btoa(JSON.stringify(new_user)));
    }
    // Read User SessionStorage
    read_User_SessionStorage() {
        const user = sessionStorage.getItem('user');
        return user && JSON.parse(atob(user));
    }
    // Delete SessionStorage
    delete_User_SessionStorage() {
        sessionStorage.removeItem('user');
        setTimeout(() => {
            window.location.reload();
        }, 1500);
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/modal.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/modal.service.ts ***!
  \*******************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class ModalService {
    constructor() {
        this.modalMDForm = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.modalSM = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.formControls = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.fbGroup = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.form = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.update = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.create = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.read = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.delete = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.search = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.user_Profile = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    get_modalMDForm() {
        return this.modalMDForm.asObservable();
    }
    set_modalMDForm(value) {
        this.modalMDForm.next(value);
    }
    get_modalSM() {
        return this.modalSM.asObservable();
    }
    set_modalSM(value) {
        this.modalSM.next(value);
    }
    // Get FormControls
    get_FormControls() {
        return this.formControls.asObservable();
    }
    // Set FormControls
    set_FormControls(controls) {
        this.formControls.next(controls);
    }
    // Get FormGroup
    get_FormGroup() {
        return this.fbGroup.asObservable();
    }
    // Set FormGroup
    set_FormGroup(formGroup) {
        this.fbGroup.next(formGroup);
    }
    // Get Form
    get_Form() {
        return this.form.asObservable();
    }
    // Set Form
    set_Form(templateRef) {
        this.form.next(templateRef);
    }
    // Get Update
    get_Update() {
        return this.update.asObservable();
    }
    // Set Update
    set_Update(fg) {
        this.update.next(fg);
    }
    // Get Create
    get_Create() {
        return this.create.asObservable();
    }
    // Set Create
    set_Create(fg) {
        this.create.next(fg);
    }
    // Get Read
    get_Read() {
        return this.read.asObservable();
    }
    // Set Read
    set_Read(status) {
        this.read.next(status);
    }
    // Get Read
    get_Delete() {
        return this.delete.asObservable();
    }
    // Set Read
    set_Delete(id) {
        this.delete.next(id);
    }
    // Get Read
    get_Search() {
        return this.search.asObservable();
    }
    // Set Read
    set_Search(searchText) {
        this.search.next(searchText);
    }
    // Get Read
    get_User_Profile() {
        return this.user_Profile.asObservable();
    }
    // Set Read
    set_User_Profile(func) {
        this.user_Profile.next(func);
    }
}
ModalService.ɵfac = function ModalService_Factory(t) { return new (t || ModalService)(); };
ModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ModalService, factory: ModalService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/stand.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/stand.service.ts ***!
  \*******************************************/
/*! exports provided: StandService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandService", function() { return StandService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _configs_url_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../configs/url.config */ "./src/app/configs/url.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class StandService {
    constructor(http) {
        this.http = http;
    }
    handleError(errorResponse) {
        // catchError
        let message = '';
        if (errorResponse.error instanceof ErrorEvent) {
            message = 'Clinet Error';
        }
        else {
            message = 'Server Error';
        }
        // callback to subscribe error
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(() => message);
    }
    // Read
    read() {
        return this.http.get(_configs_url_config__WEBPACK_IMPORTED_MODULE_3__["Urls"].stand.read)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => {
            if (typeof res !== "object") {
                return [];
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // Create
    create(Stand) {
        return this.http.post(_configs_url_config__WEBPACK_IMPORTED_MODULE_3__["Urls"].stand.create, Stand)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // Update
    update(Stand) {
        return this.http.put(_configs_url_config__WEBPACK_IMPORTED_MODULE_3__["Urls"].stand.update, Stand)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // Delete
    delete(id) {
        return this.http.delete(`${_configs_url_config__WEBPACK_IMPORTED_MODULE_3__["Urls"].stand.delete}/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
}
StandService.ɵfac = function StandService_Factory(t) { return new (t || StandService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
StandService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StandService, factory: StandService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StandService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/work-hours.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/work-hours.service.ts ***!
  \************************************************/
/*! exports provided: WorkHoursService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkHoursService", function() { return WorkHoursService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _configs_url_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../configs/url.config */ "./src/app/configs/url.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class WorkHoursService {
    constructor(http) {
        this.http = http;
    }
    handleError(errorResponse) {
        // catchError
        let message = '';
        if (errorResponse.error instanceof ErrorEvent) {
            message = 'Clinet Error';
        }
        else {
            message = 'Server Error';
        }
        // callback to subscribe error
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(() => message);
    }
    // Read
    read() {
        return this.http.get(_configs_url_config__WEBPACK_IMPORTED_MODULE_3__["Urls"].workHours.read)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => {
            if (typeof res !== "object") {
                return [];
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // Find One
    findOne(user) {
        const jString = JSON.stringify(user);
        return this.http.get(`${_configs_url_config__WEBPACK_IMPORTED_MODULE_3__["Urls"].workHours.findOne}/${jString}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // Find Like
    findLike(WorkHours) {
        return this.http.get(`${_configs_url_config__WEBPACK_IMPORTED_MODULE_3__["Urls"].workHours.findLike}/${WorkHours}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // Create
    create(WorkHours) {
        return this.http.post(_configs_url_config__WEBPACK_IMPORTED_MODULE_3__["Urls"].workHours.create, WorkHours)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // Update
    update(WorkHours) {
        return this.http.put(_configs_url_config__WEBPACK_IMPORTED_MODULE_3__["Urls"].workHours.update, WorkHours)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // Delete
    delete(id) {
        return this.http.delete(`${_configs_url_config__WEBPACK_IMPORTED_MODULE_3__["Urls"].workHours.delete}/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
}
WorkHoursService.ɵfac = function WorkHoursService_Factory(t) { return new (t || WorkHoursService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
WorkHoursService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WorkHoursService, factory: WorkHoursService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkHoursService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shard/shard.module.ts":
/*!***************************************!*\
  !*** ./src/app/shard/shard.module.ts ***!
  \***************************************/
/*! exports provided: ShardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShardModule", function() { return ShardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/loading/loading.component */ "./src/app/components/loading/loading.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/alert/alert.component */ "./src/app/components/alert/alert.component.ts");
/* harmony import */ var _directives_alerts_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../directives/alerts.directive */ "./src/app/directives/alerts.directive.ts");
/* harmony import */ var _bootstrap_bootstrap_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../bootstrap/bootstrap.module */ "./src/app/bootstrap/bootstrap.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _helps_error_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helps/error.interceptor */ "./src/app/helps/error.interceptor.ts");



// import { BootstrapModule } from '../bootstrap/bootstrap.module';









class ShardModule {
}
ShardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ShardModule });
ShardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ShardModule_Factory(t) { return new (t || ShardModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helps_error_interceptor__WEBPACK_IMPORTED_MODULE_9__["ErrorInterceptor"], multi: true }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            // HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _bootstrap_bootstrap_module__WEBPACK_IMPORTED_MODULE_7__["BootstrapModule"],
        ],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _bootstrap_bootstrap_module__WEBPACK_IMPORTED_MODULE_7__["BootstrapModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShardModule, { declarations: [_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"],
        _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__["AlertComponent"],
        _directives_alerts_directive__WEBPACK_IMPORTED_MODULE_6__["AlertsDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        // HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _bootstrap_bootstrap_module__WEBPACK_IMPORTED_MODULE_7__["BootstrapModule"]], exports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _bootstrap_bootstrap_module__WEBPACK_IMPORTED_MODULE_7__["BootstrapModule"],
        _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"],
        _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__["AlertComponent"],
        _directives_alerts_directive__WEBPACK_IMPORTED_MODULE_6__["AlertsDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"],
                    _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__["AlertComponent"],
                    _directives_alerts_directive__WEBPACK_IMPORTED_MODULE_6__["AlertsDirective"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    // HttpClientModule,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _bootstrap_bootstrap_module__WEBPACK_IMPORTED_MODULE_7__["BootstrapModule"],
                ],
                exports: [
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _bootstrap_bootstrap_module__WEBPACK_IMPORTED_MODULE_7__["BootstrapModule"],
                    _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"],
                    _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__["AlertComponent"],
                    _directives_alerts_directive__WEBPACK_IMPORTED_MODULE_6__["AlertsDirective"],
                ],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helps_error_interceptor__WEBPACK_IMPORTED_MODULE_9__["ErrorInterceptor"], multi: true }
                ],
            }]
    }], null, null); })();


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

module.exports = __webpack_require__(/*! D:\Angular\Version 13\Tailyn\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map