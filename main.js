(self["webpackChunkpaper_kit_2_pro_angular"] = self["webpackChunkpaper_kit_2_pro_angular"] || []).push([["main"],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 1584);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 7282);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ 8290);







var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = 0;
let AppComponent = class AppComponent {
  constructor(renderer, router, element, location) {
    this.renderer = renderer;
    this.router = router;
    this.element = element;
    this.location = location;
    this.yScrollStack = [];
  }
  hasScrolled() {
    var st = window.pageYOffset;
    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta) return;
    var navbar = document.getElementsByTagName('nav')[0];
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      if (navbar.classList.contains('nav-down')) {
        navbar.classList.remove('nav-down');
        navbar.classList.add('nav-up');
      }
      // $('.navbar.nav-down').removeClass('nav-down').addClass('nav-up');
    } else {
      // Scroll Up
      //  $(window).height()
      if (st + window.innerHeight < document.body.scrollHeight) {
        // $('.navbar.nav-up').removeClass('nav-up').addClass('nav-down');
        if (navbar.classList.contains('nav-up')) {
          navbar.classList.remove('nav-up');
          navbar.classList.add('nav-down');
        }
      }
    }
    lastScrollTop = st;
  }
  ngOnInit() {
    // var navbar : HTMLElement = this.element.nativeElement.children[0].children[0];
    // if (this.location.path() !== '/sections') {
    //     this.location.subscribe((ev:PopStateEvent) => {
    //         this.lastPoppedUrl = ev.url;
    //     });
    //      this.router.events.subscribe((event:any) => {
    //         if (event instanceof NavigationStart) {
    //            if (event.url != this.lastPoppedUrl)
    //                this.yScrollStack.push(window.scrollY);
    //        } else if (event instanceof NavigationEnd) {
    //            if (event.url == this.lastPoppedUrl) {
    //                this.lastPoppedUrl = undefined;
    //                window.scrollTo(0, this.yScrollStack.pop());
    //            }
    //            else
    //                window.scrollTo(0, 0);
    //        }
    //     });
    // }
    // this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
    //     this.navbar.sidebarClose();
    //     this.renderer.listen('window', 'scroll', (event) => {
    //         const number = window.scrollY;
    //         var _locationSections = this.location.path();
    //         _locationSections = _locationSections.split('#')[0];
    //         if (_locationSections !== '/sections') {
    //           var _locationExamples = this.location.path();
    //             _locationExamples = _locationExamples.split('/')[2];
    //             if (number > 150 || window.pageYOffset > 150) {
    //                 // add logic
    //                 navbar.classList.remove('navbar-transparent');
    //             } else if (_locationExamples !== 'addproduct' && _locationExamples !== 'blogposts' && _locationExamples !== 'discover' && _locationExamples !== 'contactus' && _locationExamples !== 'login' && _locationExamples !== 'register' && _locationExamples !== 'search' && this.location.path() !== '/nucleoicons') {
    //                 // remove logic
    //                 navbar.classList.add('navbar-transparent');
    //             }
    //         }
    //     });
    // });
    // var ua = window.navigator.userAgent;
    // var trident = ua.indexOf('Trident/');
    // if (trident > 0) {
    //     // IE 11 => return version number
    //     var rv = ua.indexOf('rv:');
    //     var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    // }
    // if (version) {
    //     var body = document.getElementsByTagName('body')[0];
    //     body.classList.add('ie-background');
    // }
    // this.hasScrolled();
  }
  removeFooter() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    titlee = titlee.slice(1);
    if (titlee === 'signup' || titlee === 'nucleoicons') {
      return false;
    } else {
      return true;
    }
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location
    }];
  }
  static {
    this.propDecorators = {
      navbar: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild,
        args: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent, {
          static: false
        }]
      }],
      hasScrolled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
        args: ['window:scroll', ['$event']]
      }]
    };
  }
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AppComponent);


/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routing */ 6009);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/pages.module */ 8423);
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ 134);
/* harmony import */ var _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/fixedplugin/fixedplugin.module */ 1535);
/* harmony import */ var _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/footer/footer.module */ 2399);
/* harmony import */ var _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar/sidebar.module */ 8155);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ 4285);
/* harmony import */ var _shared_navbar_cpm_navbar_cpm_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/navbar-cpm/navbar-cpm.module */ 3403);
/* harmony import */ var _layouts_admin_layout_admin_layout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.module */ 5321);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/authentication.service */ 9214);
/* harmony import */ var _services_local_storage_manager_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/local-storage-manager.service */ 2531);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 6443);

 // this is needed!


















let AppModule = class AppModule {};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_3__.AdminLayoutComponent],
  imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_6__.SidebarModule, _shared_navbar_cpm_navbar_cpm_module__WEBPACK_IMPORTED_MODULE_7__.NavbarCPMModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_15__.ToastrModule.forRoot(), _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__.FooterModule, _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_4__.FixedPluginModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule, _app_routing__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__.PagesModule, _layouts_admin_layout_admin_layout_module__WEBPACK_IMPORTED_MODULE_8__.AdminLayoutModule],
  providers: [_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__.AuthenticationService, _services_local_storage_manager_service__WEBPACK_IMPORTED_MODULE_10__.LocalStorageManagerService],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
})], AppModule);


/***/ }),

/***/ 6009:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/login/login.component */ 7195);
/* harmony import */ var _pages_page404_page404_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/page404/page404.component */ 7915);
/* harmony import */ var _pages_page422_page422_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/page422/page422.component */ 4883);
/* harmony import */ var _pages_page500_page500_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/page500/page500.component */ 7043);
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ 134);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.guard */ 2193);











const routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}, {
  path: 'admin',
  component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__.AdminLayoutComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard],
  children: [{
    path: '',
    loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./layouts/admin-layout/admin-layout.module */ 5321)).then(m => m.AdminLayoutModule)
  }]
}, {
  path: 'login',
  component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}, {
  path: '404',
  component: _pages_page404_page404_component__WEBPACK_IMPORTED_MODULE_1__.Page404Component
}, {
  path: '4022',
  component: _pages_page422_page422_component__WEBPACK_IMPORTED_MODULE_2__.Page422Component
}, {
  path: '500',
  component: _pages_page500_page500_component__WEBPACK_IMPORTED_MODULE_3__.Page500Component
}, {
  path: '**',
  redirectTo: '404'
}];
let AppRoutingModule = class AppRoutingModule {};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: []
})], AppRoutingModule);


/***/ }),

/***/ 2193:
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_local_storage_manager_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/local-storage-manager.service */ 2531);




let AuthGuard = class AuthGuard {
  constructor(localStorageManagerService, router) {
    this.localStorageManagerService = localStorageManagerService;
    this.router = router;
  }
  canActivate(route, state) {
    const isAuthenticated = this.localStorageManagerService.isAuthenticated(); // assuming the AuthService has an isAuthenticated method
    if (isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['/login']); // redirect to login page if not authenticated
      return false;
    }
  }
  static {
    this.ctorParameters = () => [{
      type: _services_local_storage_manager_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageManagerService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router
    }];
  }
};
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], AuthGuard);


/***/ }),

/***/ 134:
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminLayoutComponent: () => (/* binding */ AdminLayoutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _admin_layout_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-layout.component.html?ngResource */ 2882);
/* harmony import */ var _admin_layout_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-layout.component.scss?ngResource */ 496);
/* harmony import */ var _admin_layout_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_admin_layout_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);




let AdminLayoutComponent = class AdminLayoutComponent {
  ngOnInit() {}
};
AdminLayoutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-admin-layout',
  template: _admin_layout_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_admin_layout_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AdminLayoutComponent);


/***/ }),

/***/ 5321:
/*!*************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminLayoutModule: () => (/* binding */ AdminLayoutModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _admin_layout_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-layout.routing */ 447);
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/dashboard/dashboard.component */ 5199);
/* harmony import */ var _pages_user_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/user/user.component */ 8191);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _maps_maps_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maps/maps.component */ 8261);
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notifications/notifications.component */ 6113);
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/icons.component */ 5241);
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./table/table.component */ 1753);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 6443);














let AdminLayoutModule = class AdminLayoutModule {};
AdminLayoutModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(_admin_layout_routing__WEBPACK_IMPORTED_MODULE_0__.AdminLayoutRoutes), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule],
  declarations: [_pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent, _pages_user_user_component__WEBPACK_IMPORTED_MODULE_2__.UserComponent, _maps_maps_component__WEBPACK_IMPORTED_MODULE_3__.MapsComponent, _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_4__.NotificationsComponent, _icons_icons_component__WEBPACK_IMPORTED_MODULE_5__.IconsComponent, _table_table_component__WEBPACK_IMPORTED_MODULE_6__.TableComponent
  // UpgradeComponent,
  // TypographyComponent
  ]
})], AdminLayoutModule);


/***/ }),

/***/ 447:
/*!**************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.routing.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminLayoutRoutes: () => (/* binding */ AdminLayoutRoutes)
/* harmony export */ });
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pages/dashboard/dashboard.component */ 5199);
/* harmony import */ var _pages_user_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/user/user.component */ 8191);
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table/table.component */ 1753);
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/icons.component */ 5241);
/* harmony import */ var _maps_maps_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./maps/maps.component */ 8261);
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notifications/notifications.component */ 6113);
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./typography/typography.component */ 8701);
/* harmony import */ var _upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./upgrade/upgrade.component */ 4681);








const AdminLayoutRoutes = [{
  path: 'dashboard',
  component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
}, {
  path: 'user',
  component: _pages_user_user_component__WEBPACK_IMPORTED_MODULE_1__.UserComponent
}, {
  path: 'plates',
  component: _table_table_component__WEBPACK_IMPORTED_MODULE_2__.TableComponent
}, {
  path: 'typography',
  component: _typography_typography_component__WEBPACK_IMPORTED_MODULE_6__.TypographyComponent
}, {
  path: 'staff',
  component: _icons_icons_component__WEBPACK_IMPORTED_MODULE_3__.IconsComponent
}, {
  path: 'stock',
  component: _maps_maps_component__WEBPACK_IMPORTED_MODULE_4__.MapsComponent
}, {
  path: 'notes',
  component: _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_5__.NotificationsComponent
}, {
  path: 'upgrade',
  component: _upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_7__.UpgradeComponent
}];

/***/ }),

/***/ 5241:
/*!***************************************************************!*\
  !*** ./src/app/layouts/admin-layout/icons/icons.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconsComponent: () => (/* binding */ IconsComponent)
/* harmony export */ });
/* harmony import */ var _Users_firasmrabet_Desktop_Firas_CookFlow_CookFlowFront_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _icons_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons.component.html?ngResource */ 4495);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var app_services_local_storage_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/local-storage-manager.service */ 2531);
/* harmony import */ var app_services_mange_staff_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/mange-staff.service */ 9713);







let IconsComponent = class IconsComponent {
  constructor(mangeStaffService, localStorageManagerService) {
    this.mangeStaffService = mangeStaffService;
    this.localStorageManagerService = localStorageManagerService;
    this.user = {};
    this.staffList = [];
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_firasmrabet_Desktop_Firas_CookFlow_CookFlowFront_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.user = _this.localStorageManagerService.getUser();
      _this.showFormStaff = false;
      _this.staffList = yield _this.mangeStaffService.getStaffByRestaurent(_this.user.restaurent);
      _this.addStaffForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormGroup({
        email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
        password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
        role: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required)
      });
    })();
  }
  addStaff() {
    var _this2 = this;
    return (0,_Users_firasmrabet_Desktop_Firas_CookFlow_CookFlowFront_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.addStaffForm.value.restaurent = _this2.user.restaurent;
      console.log(_this2.addStaffForm.value, 'this.addStaffForm.value');
      const result = yield _this2.mangeStaffService.addStaff(_this2.addStaffForm.value);
      if (result) {
        _this2.ngOnInit();
      }
    })();
  }
  static {
    this.ctorParameters = () => [{
      type: app_services_mange_staff_service__WEBPACK_IMPORTED_MODULE_3__.MangeStaffService
    }, {
      type: app_services_local_storage_manager_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageManagerService
    }];
  }
};
IconsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'icons-cmp',
  // moduleId: module.id,
  template: _icons_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__
})], IconsComponent);


/***/ }),

/***/ 8261:
/*!*************************************************************!*\
  !*** ./src/app/layouts/admin-layout/maps/maps.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapsComponent: () => (/* binding */ MapsComponent)
/* harmony export */ });
/* harmony import */ var _Users_firasmrabet_Desktop_Firas_CookFlow_CookFlowFront_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _maps_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maps.component.html?ngResource */ 8019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var app_services_local_storage_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/local-storage-manager.service */ 2531);
/* harmony import */ var app_services_manage_stock_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/manage-stock.service */ 9626);







let MapsComponent = class MapsComponent {
  constructor(manageStockService, localStorageManagerService) {
    this.manageStockService = manageStockService;
    this.localStorageManagerService = localStorageManagerService;
    this.user = {};
    this.stockList = [];
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_firasmrabet_Desktop_Firas_CookFlow_CookFlowFront_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.user = _this.localStorageManagerService.getUser();
      _this.stockList = yield _this.manageStockService.getStockByRestaurent(_this.user.restaurent);
      _this.showFormStock = false;
      _this.addStockForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormGroup({
        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
        price: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
        quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
        minimumStockLevel: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
        expiryDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
        stockCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
        restaurent: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required)
      });
    })();
  }
  addFormStock() {
    this.showFormStock = false;
  }
  addStock() {
    var _this2 = this;
    return (0,_Users_firasmrabet_Desktop_Firas_CookFlow_CookFlowFront_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.addStockForm.value.restaurent = _this2.user.restaurent;
      _this2.addStockForm.value.comments = [];
      _this2.addStockForm.value.expiryDate = new Date(_this2.addStockForm.value.expiryDate).getTime();
      const result = yield _this2.manageStockService.addStock(_this2.addStockForm.value);
      if (result) {
        _this2.ngOnInit();
      }
    })();
  }
  static {
    this.ctorParameters = () => [{
      type: app_services_manage_stock_service__WEBPACK_IMPORTED_MODULE_3__.ManageStockService
    }, {
      type: app_services_local_storage_manager_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageManagerService
    }];
  }
};
MapsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  // moduleId: module.id,
  selector: 'maps-cmp',
  template: _maps_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__
})], MapsComponent);


/***/ }),

/***/ 6113:
/*!*******************************************************************************!*\
  !*** ./src/app/layouts/admin-layout/notifications/notifications.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationsComponent: () => (/* binding */ NotificationsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _notifications_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications.component.html?ngResource */ 895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ 4285);




let NotificationsComponent = class NotificationsComponent {
  constructor(toastr) {
    this.toastr = toastr;
  }
  showNotification(from, align) {
    const color = Math.floor(Math.random() * 5 + 1);
    switch (color) {
      case 1:
        this.toastr.info('<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Welcome to <b>Paper Dashboard Angular</b> - a beautiful bootstrap dashboard for every web developer.</span>', "", {
          timeOut: 4000,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-info alert-with-icon",
          positionClass: "toast-" + from + "-" + align
        });
        break;
      case 2:
        this.toastr.success('<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Welcome to <b>Paper Dashboard Angular</b> - a beautiful bootstrap dashboard for every web developer.</span>', "", {
          timeOut: 4000,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-success alert-with-icon",
          positionClass: "toast-" + from + "-" + align
        });
        break;
      case 3:
        this.toastr.warning('<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Welcome to <b>Paper Dashboard Angular</b> - a beautiful bootstrap dashboard for every web developer.</span>', "", {
          timeOut: 4000,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-warning alert-with-icon",
          positionClass: "toast-" + from + "-" + align
        });
        break;
      case 4:
        this.toastr.error('<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Welcome to <b>Paper Dashboard Angular</b> - a beautiful bootstrap dashboard for every web developer.</span>', "", {
          timeOut: 4000,
          enableHtml: true,
          closeButton: true,
          toastClass: "alert alert-danger alert-with-icon",
          positionClass: "toast-" + from + "-" + align
        });
        break;
      case 5:
        this.toastr.show('<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Welcome to <b>Paper Dashboard Angular</b> - a beautiful bootstrap dashboard for every web developer.</span>', "", {
          timeOut: 4000,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-primary alert-with-icon",
          positionClass: "toast-" + from + "-" + align
        });
        break;
      default:
        break;
    }
  }
  static {
    this.ctorParameters = () => [{
      type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__.ToastrService
    }];
  }
};
NotificationsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'notifications-cmp',
  // moduleId: module.id,
  template: _notifications_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], NotificationsComponent);


/***/ }),

/***/ 1753:
/*!***************************************************************!*\
  !*** ./src/app/layouts/admin-layout/table/table.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TableComponent: () => (/* binding */ TableComponent)
/* harmony export */ });
/* harmony import */ var _Users_firasmrabet_Desktop_Firas_CookFlow_CookFlowFront_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _table_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table.component.html?ngResource */ 975);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var app_services_local_storage_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/local-storage-manager.service */ 2531);
/* harmony import */ var app_services_manage_technical_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/manage-technical-file.service */ 5556);







let TableComponent = class TableComponent {
  constructor(manageTechnicalFileServicefd, localStorageManagerService) {
    this.manageTechnicalFileServicefd = manageTechnicalFileServicefd;
    this.localStorageManagerService = localStorageManagerService;
    this.showFormStaff = false;
    this.showImage = false;
    this.uploadForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormGroup({
      file: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(null) // FormControl for the file input
    });
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_firasmrabet_Desktop_Firas_CookFlow_CookFlowFront_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.user = _this.localStorageManagerService.getUser();
      _this.showImage = false;
      _this.files = yield _this.manageTechnicalFileServicefd.getFilesByRestaurent(_this.user.restaurent);
      console.log(_this.files, 'files');
    })();
  }
  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('file').setValue(file);
    }
  }
  onSubmit() {
    var _this2 = this;
    return (0,_Users_firasmrabet_Desktop_Firas_CookFlow_CookFlowFront_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const formData = new FormData();
      formData.append('file', _this2.uploadForm.get('file').value);
      console.log(formData, 'fdsfsd');
      const result = yield _this2.manageTechnicalFileServicefd.uploadFile(formData);
      console.log(result, 'result');
      _this2.ngOnInit();
    })();
  }
  getFile(file) {
    this.file = file;
    this.showImage = true;
    return `https://cook-flow.onrender.com/${this.file.path}`;
  }
  static {
    this.ctorParameters = () => [{
      type: app_services_manage_technical_file_service__WEBPACK_IMPORTED_MODULE_3__.ManageTechnicalFileService
    }, {
      type: app_services_local_storage_manager_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageManagerService
    }];
  }
};
TableComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'table-cmp',
  // moduleId: module.id,
  template: _table_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__
})], TableComponent);


/***/ }),

/***/ 8701:
/*!*************************************************************************!*\
  !*** ./src/app/layouts/admin-layout/typography/typography.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TypographyComponent: () => (/* binding */ TypographyComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _typography_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typography.component.html?ngResource */ 7563);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



let TypographyComponent = class TypographyComponent {};
TypographyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'typography-cmp',
  // moduleId: module.id,
  template: _typography_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], TypographyComponent);


/***/ }),

/***/ 4681:
/*!*******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/upgrade/upgrade.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpgradeComponent: () => (/* binding */ UpgradeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _upgrade_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upgrade.component.html?ngResource */ 8663);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



let UpgradeComponent = class UpgradeComponent {
  ngOnInit() {}
};
UpgradeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'upgrade-cmp',
  // moduleId: module.id,
  template: _upgrade_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], UpgradeComponent);


/***/ }),

/***/ 5199:
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component.html?ngResource */ 2365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ 9345);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);




let DashboardComponent = class DashboardComponent {
  ngOnInit() {
    this.chartColor = "#FFFFFF";
    this.canvas = document.getElementById("chartHours");
    this.ctx = this.canvas.getContext("2d");
    this.chartHours = new (chart_js__WEBPACK_IMPORTED_MODULE_1___default())(this.ctx, {
      type: 'line',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
        datasets: [{
          borderColor: "#6bd098",
          backgroundColor: "#6bd098",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: [300, 310, 316, 322, 330, 326, 333, 345, 338, 354]
        }, {
          borderColor: "#f17e5d",
          backgroundColor: "#f17e5d",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: [320, 340, 365, 360, 370, 385, 390, 384, 408, 420]
        }, {
          borderColor: "#fcc468",
          backgroundColor: "#fcc468",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: [370, 394, 415, 409, 425, 445, 460, 450, 478, 484]
        }]
      },
      options: {
        legend: {
          display: false
        },
        tooltips: {
          enabled: false
        },
        scales: {
          yAxes: [{
            ticks: {
              fontColor: "#9f9f9f",
              beginAtZero: false,
              maxTicksLimit: 5
              //padding: 20
            },
            gridLines: {
              drawBorder: false,
              zeroLineColor: "#ccc",
              color: 'rgba(255,255,255,0.05)'
            }
          }],
          xAxes: [{
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(255,255,255,0.1)',
              zeroLineColor: "transparent",
              display: false
            },
            ticks: {
              padding: 20,
              fontColor: "#9f9f9f"
            }
          }]
        }
      }
    });
    this.canvas = document.getElementById("chartEmail");
    this.ctx = this.canvas.getContext("2d");
    this.chartEmail = new (chart_js__WEBPACK_IMPORTED_MODULE_1___default())(this.ctx, {
      type: 'pie',
      data: {
        labels: [1, 2, 3],
        datasets: [{
          label: "Emails",
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: ['#e3e3e3', '#4acccd', '#fcc468', '#ef8157'],
          borderWidth: 0,
          data: [342, 480, 530, 120]
        }]
      },
      options: {
        legend: {
          display: false
        },
        pieceLabel: {
          render: 'percentage',
          fontColor: ['white'],
          precision: 2
        },
        tooltips: {
          enabled: false
        },
        scales: {
          yAxes: [{
            ticks: {
              display: false
            },
            gridLines: {
              drawBorder: false,
              zeroLineColor: "transparent",
              color: 'rgba(255,255,255,0.05)'
            }
          }],
          xAxes: [{
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(255,255,255,0.1)',
              zeroLineColor: "transparent"
            },
            ticks: {
              display: false
            }
          }]
        }
      }
    });
    var speedCanvas = document.getElementById("speedChart");
    var dataFirst = {
      data: [0, 19, 15, 20, 30, 40, 40, 50, 25, 30, 50, 70],
      fill: false,
      borderColor: '#fbc658',
      backgroundColor: 'transparent',
      pointBorderColor: '#fbc658',
      pointRadius: 4,
      pointHoverRadius: 4,
      pointBorderWidth: 8
    };
    var dataSecond = {
      data: [0, 5, 10, 12, 20, 27, 30, 34, 42, 45, 55, 63],
      fill: false,
      borderColor: '#51CACF',
      backgroundColor: 'transparent',
      pointBorderColor: '#51CACF',
      pointRadius: 4,
      pointHoverRadius: 4,
      pointBorderWidth: 8
    };
    var speedData = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [dataFirst, dataSecond]
    };
    var chartOptions = {
      legend: {
        display: false,
        position: 'top'
      }
    };
    var lineChart = new (chart_js__WEBPACK_IMPORTED_MODULE_1___default())(speedCanvas, {
      type: 'line',
      hover: false,
      data: speedData,
      options: chartOptions
    });
  }
};
DashboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'dashboard-cmp',
  template: _dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], DashboardComponent);


/***/ }),

/***/ 7195:
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _Users_firasmrabet_Desktop_Firas_CookFlow_CookFlowFront_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.html?ngResource */ 7857);
/* harmony import */ var _login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.scss?ngResource */ 1571);
/* harmony import */ var _login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/authentication.service */ 9214);
/* harmony import */ var app_services_local_storage_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/local-storage-manager.service */ 2531);









let LoginComponent = class LoginComponent {
  constructor(authService, router, localStorageManager) {
    this.authService = authService;
    this.router = router;
    this.localStorageManager = localStorageManager;
    this.data = new Date();
  }
  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('full-screen');
    body.classList.add('login');
    var navbar = document.getElementsByTagName('nav')[0];
    // navbar.classList.add('navbar-transparent');
    // if (navbar.classList.contains('nav-up')) {
    //     navbar.classList.remove('nav-up');
    // }
    this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormGroup({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required)
    });
  }
  // ngOnDestroy(){
  //     var body = document.getElementsByTagName('body')[0];
  //     body.classList.remove('full-screen');
  //     body.classList.remove('login');
  //     var navbar = document.getElementsByTagName('nav')[0];
  //     navbar.classList.remove('navbar-transparent');
  // }
  login() {
    var _this = this;
    return (0,_Users_firasmrabet_Desktop_Firas_CookFlow_CookFlowFront_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const acces_token = yield _this.authService.login(_this.loginForm.value);
      console.log(acces_token);
      if (acces_token) {
        _this.localStorageManager.setToken(acces_token);
        _this.router.navigate(['/admin/dashboard']);
      }
    })();
  }
  static {
    this.ctorParameters = () => [{
      type: app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
    }, {
      type: app_services_local_storage_manager_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageManagerService
    }];
  }
};
LoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-login',
  template: _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], LoginComponent);


/***/ }),

/***/ 7915:
/*!****************************************************!*\
  !*** ./src/app/pages/page404/page404.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Page404Component: () => (/* binding */ Page404Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _page404_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page404.component.html?ngResource */ 1057);
/* harmony import */ var _page404_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page404.component.scss?ngResource */ 5723);
/* harmony import */ var _page404_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_page404_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);




let Page404Component = class Page404Component {
  constructor() {}
  ngOnInit() {
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }
  ngOnDestroy() {
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }
  static {
    this.ctorParameters = () => [];
  }
};
Page404Component = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-page404',
  template: _page404_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_page404_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], Page404Component);


/***/ }),

/***/ 4883:
/*!****************************************************!*\
  !*** ./src/app/pages/page422/page422.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Page422Component: () => (/* binding */ Page422Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _page422_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page422.component.html?ngResource */ 9425);
/* harmony import */ var _page422_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page422.component.scss?ngResource */ 1075);
/* harmony import */ var _page422_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_page422_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);




let Page422Component = class Page422Component {
  constructor() {}
  ngOnInit() {
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }
  ngOnDestroy() {
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }
  static {
    this.ctorParameters = () => [];
  }
};
Page422Component = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-page422',
  template: _page422_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_page422_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], Page422Component);


/***/ }),

/***/ 7043:
/*!****************************************************!*\
  !*** ./src/app/pages/page500/page500.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Page500Component: () => (/* binding */ Page500Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _page500_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page500.component.html?ngResource */ 5065);
/* harmony import */ var _page500_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page500.component.scss?ngResource */ 8467);
/* harmony import */ var _page500_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_page500_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);




let Page500Component = class Page500Component {
  constructor() {}
  ngOnInit() {
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }
  ngOnDestroy() {
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }
  static {
    this.ctorParameters = () => [];
  }
};
Page500Component = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-page500',
  template: _page500_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_page500_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], Page500Component);


/***/ }),

/***/ 8423:
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PagesModule: () => (/* binding */ PagesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-chips */ 335);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _shared_image_upload_image_upload_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/image-upload/image-upload.module */ 3979);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 7195);
/* harmony import */ var _page404_page404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page404/page404.component */ 7915);
/* harmony import */ var _page422_page422_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page422/page422.component */ 4883);
/* harmony import */ var _page500_page500_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page500/page500.component */ 7043);






// import { NouisliderModule } from 'ng2-nouislider/src/ng2-nouislider';







let PagesModule = class PagesModule {};
PagesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule, ngx_chips__WEBPACK_IMPORTED_MODULE_11__.TagInputModule,
  // NouisliderModule.forRoot(),
  // JwBootstrapSwitchNg2Module,
  // AngularMultiSelectModule,
  _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _shared_image_upload_image_upload_module__WEBPACK_IMPORTED_MODULE_0__.ImageUploadModule],
  declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent, _page404_page404_component__WEBPACK_IMPORTED_MODULE_2__.Page404Component, _page422_page422_component__WEBPACK_IMPORTED_MODULE_3__.Page422Component, _page500_page500_component__WEBPACK_IMPORTED_MODULE_4__.Page500Component]
})], PagesModule);


/***/ }),

/***/ 8191:
/*!**********************************************!*\
  !*** ./src/app/pages/user/user.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserComponent: () => (/* binding */ UserComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _user_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.component.html?ngResource */ 9293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



let UserComponent = class UserComponent {
  ngOnInit() {}
};
UserComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'user-cmp',
  template: _user_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], UserComponent);


/***/ }),

/***/ 9214:
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthenticationService: () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 6443);



let AuthenticationService = class AuthenticationService {
  constructor(http) {
    this.http = http;
    this.apiUrl = 'https://cook-flow.onrender.com'; // Replace with your actual API URL
  }
  login(credential) {
    return this.http.post(`${this.apiUrl}/auth/login`, credential).toPromise();
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
    }];
  }
};
AuthenticationService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], AuthenticationService);


/***/ }),

/***/ 2531:
/*!***********************************************************!*\
  !*** ./src/app/services/local-storage-manager.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalStorageManagerService: () => (/* binding */ LocalStorageManagerService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ 5609);



let LocalStorageManagerService = class LocalStorageManagerService {
  constructor() {
    this.TOKEN_KEY = 'token';
  }
  getToken() {
    return JSON.parse(localStorage.getItem(this.TOKEN_KEY));
  }
  setToken(token) {
    localStorage.setItem(this.TOKEN_KEY, JSON.stringify(token));
  }
  getDecodeToken() {
    if (this.getToken()) {
      const token = this.getToken();
      this.decodedToken = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_0__["default"])(token.access_token);
    }
  }
  removeToken() {
    localStorage.removeItem(this.TOKEN_KEY);
  }
  getUser() {
    this.getDecodeToken();
    return this.decodedToken ? this.decodedToken : null;
  }
  getEmail() {
    this.getDecodeToken();
    return this.decodedToken ? this.decodedToken.email : null;
  }
  getExpiryTime() {
    this.getDecodeToken();
    return this.decodedToken ? this.decodedToken.exp : null;
  }
  isTokenExpired() {
    const expiryTime = parseInt(this.getExpiryTime());
    if (expiryTime) {
      return 1000 * expiryTime - new Date().getTime() < 5000;
    } else {
      return false;
    }
  }
  isAuthenticated() {
    return this.getToken() !== null;
  }
  static {
    this.ctorParameters = () => [];
  }
};
LocalStorageManagerService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], LocalStorageManagerService);


/***/ }),

/***/ 9626:
/*!**************************************************!*\
  !*** ./src/app/services/manage-stock.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ManageStockService: () => (/* binding */ ManageStockService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



let ManageStockService = class ManageStockService {
  constructor(http) {
    this.http = http;
    this.apiUrl = 'https://cook-flow.onrender.com'; // Replace with your actual API URL
  }
  getStockByRestaurent(restaurentId) {
    return this.http.get(`${this.apiUrl}/stocks/findAllByRestaurent/${restaurentId}`).toPromise();
  }
  addStock(stock) {
    return this.http.post(`${this.apiUrl}/stocks`, stock).toPromise();
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
    }];
  }
};
ManageStockService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], ManageStockService);


/***/ }),

/***/ 5556:
/*!***********************************************************!*\
  !*** ./src/app/services/manage-technical-file.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ManageTechnicalFileService: () => (/* binding */ ManageTechnicalFileService)
/* harmony export */ });
/* harmony import */ var _Users_firasmrabet_Desktop_Firas_CookFlow_CookFlowFront_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);




let ManageTechnicalFileService = class ManageTechnicalFileService {
  constructor(http) {
    this.http = http;
    this.apiUrl = 'https://cook-flow.onrender.com'; // Replace with your actual API URL
  }
  getFilesByRestaurent(restaurentId) {
    return this.http.get(`${this.apiUrl}/technical-file/${restaurentId}`).toPromise();
  }
  uploadFile(formData) {
    var _this = this;
    return (0,_Users_firasmrabet_Desktop_Firas_CookFlow_CookFlowFront_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this.http.post(`${_this.apiUrl}/technical-file/upload`, formData).toPromise();
    })();
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
    }];
  }
};
ManageTechnicalFileService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], ManageTechnicalFileService);


/***/ }),

/***/ 9713:
/*!*************************************************!*\
  !*** ./src/app/services/mange-staff.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MangeStaffService: () => (/* binding */ MangeStaffService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



let MangeStaffService = class MangeStaffService {
  constructor(http) {
    this.http = http;
    this.apiUrl = 'https://cook-flow.onrender.com'; // Replace with your actual API URL
  }
  getStaffByRestaurent(restaurentId) {
    console.log(`${this.apiUrl}auth/findAllByRestaurent/${restaurentId}`, 'fsdfsdfsdfsdf');
    return this.http.get(`${this.apiUrl}/auth/findAllByRestaurent/${restaurentId}`).toPromise();
  }
  addStaff(staff) {
    console.log(`${this.apiUrl}/auth/addStaff`);
    return this.http.post(`${this.apiUrl}/auth/addStuff`, staff).toPromise();
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
    }];
  }
};
MangeStaffService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], MangeStaffService);


/***/ }),

/***/ 8384:
/*!*************************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FixedPluginComponent: () => (/* binding */ FixedPluginComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _fixedplugin_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fixedplugin.component.html?ngResource */ 7368);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



let FixedPluginComponent = class FixedPluginComponent {
  constructor() {
    this.sidebarColor = "white";
    this.sidebarActiveColor = "danger";
    this.state = true;
  }
  changeSidebarColor(color) {
    var sidebar = document.querySelector('.sidebar');
    this.sidebarColor = color;
    if (sidebar != undefined) {
      sidebar.setAttribute('data-color', color);
    }
  }
  changeSidebarActiveColor(color) {
    var sidebar = document.querySelector('.sidebar');
    this.sidebarActiveColor = color;
    if (sidebar != undefined) {
      sidebar.setAttribute('data-active-color', color);
    }
  }
  ngOnInit() {}
};
FixedPluginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'fixedplugin-cmp',
  template: _fixedplugin_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], FixedPluginComponent);


/***/ }),

/***/ 1535:
/*!**********************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FixedPluginModule: () => (/* binding */ FixedPluginModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _fixedplugin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fixedplugin.component */ 8384);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);






let FixedPluginModule = class FixedPluginModule {};
FixedPluginModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule],
  declarations: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_0__.FixedPluginComponent],
  exports: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_0__.FixedPluginComponent]
})], FixedPluginModule);


/***/ }),

/***/ 3568:
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component.html?ngResource */ 208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



let FooterComponent = class FooterComponent {
  constructor() {
    this.test = new Date();
  }
};
FooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'footer-cmp',
  template: _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], FooterComponent);


/***/ }),

/***/ 2399:
/*!************************************************!*\
  !*** ./src/app/shared/footer/footer.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterModule: () => (/* binding */ FooterModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component */ 3568);





let FooterModule = class FooterModule {};
FooterModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
  declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent],
  exports: [_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent]
})], FooterModule);


/***/ }),

/***/ 5260:
/*!***************************************************************!*\
  !*** ./src/app/shared/image-upload/image-upload.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageUploadComponent: () => (/* binding */ ImageUploadComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _image_upload_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-upload.component.html?ngResource */ 820);
/* harmony import */ var _image_upload_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-upload.component.scss?ngResource */ 8128);
/* harmony import */ var _image_upload_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_image_upload_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);




let ImageUploadComponent = class ImageUploadComponent {
  constructor() {
    this.isRound = false;
    this.state = {};
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  ngOnInit() {
    this.state = {
      file: null,
      imagePreviewUrl: this.image !== undefined ? this.image : this.isRound ? './assets/img/placeholder.jpg' : './assets/img/image_placeholder.jpg'
    };
  }
  handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.state.file = file;
      this.state.imagePreviewUrl = reader.result;
      // this.state.imagePreviewUrl1 = reader.result;
    };
    reader.readAsDataURL(file);
  }
  handleSubmit(e) {
    e.preventDefault();
    // this.state.file is the file/image uploaded
    // in this function you can save the image (this.state.file) on form submit
    // you have to call it yourself
  }
  handleClick() {
    var input = document.createElement("input");
    input.type = "file";
    input.onchange = this.handleImageChange;
    input.click();
  }
  handleRemove() {
    this.state.file = null;
    this.state.imagePreviewUrl = this.image !== undefined ? this.image : this.isRound ? './assets/img/placeholder.jpg' : './assets/img/image_placeholder.jpg';
  }
  static {
    this.ctorParameters = () => [];
  }
  static {
    this.propDecorators = {
      isRound: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
      }],
      image: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
      }]
    };
  }
};
ImageUploadComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-image-upload',
  template: _image_upload_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_image_upload_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ImageUploadComponent);


/***/ }),

/***/ 3979:
/*!************************************************************!*\
  !*** ./src/app/shared/image-upload/image-upload.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageUploadModule: () => (/* binding */ ImageUploadModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _image_upload_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-upload.component */ 5260);




let ImageUploadModule = class ImageUploadModule {};
ImageUploadModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
  declarations: [_image_upload_component__WEBPACK_IMPORTED_MODULE_0__.ImageUploadComponent],
  exports: [_image_upload_component__WEBPACK_IMPORTED_MODULE_0__.ImageUploadComponent]
})], ImageUploadModule);


/***/ }),

/***/ 3403:
/*!********************************************************!*\
  !*** ./src/app/shared/navbar-cpm/navbar-cpm.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarCPMModule: () => (/* binding */ NavbarCPMModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.component */ 6883);






let NavbarCPMModule = class NavbarCPMModule {};
NavbarCPMModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule],
  declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarCPMComponent],
  exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarCPMComponent]
})], NavbarCPMModule);


/***/ }),

/***/ 6883:
/*!*******************************************************!*\
  !*** ./src/app/shared/navbar-cpm/navbar.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarCPMComponent: () => (/* binding */ NavbarCPMComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _navbar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.component.html?ngResource */ 1441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sidebar/sidebar.component */ 7244);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);






let NavbarCPMComponent = class NavbarCPMComponent {
  constructor(location, renderer, element, router) {
    this.renderer = renderer;
    this.element = element;
    this.router = router;
    this.isCollapsed = true;
    this.location = location;
    this.nativeElement = element.nativeElement;
    this.sidebarVisible = false;
  }
  ngOnInit() {
    this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.ROUTES.filter(listTitle => listTitle);
    var navbar = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    this.router.events.subscribe(event => {
      this.sidebarClose();
    });
  }
  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(1);
    }
    for (var item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return 'Dashboard';
  }
  sidebarToggle() {
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  }
  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const html = document.getElementsByTagName('html')[0];
    const mainPanel = document.getElementsByClassName('main-panel')[0];
    setTimeout(function () {
      toggleButton.classList.add('toggled');
    }, 500);
    html.classList.add('nav-open');
    if (window.innerWidth < 991) {
      mainPanel.style.position = 'fixed';
    }
    this.sidebarVisible = true;
  }
  sidebarClose() {
    const html = document.getElementsByTagName('html')[0];
    const mainPanel = document.getElementsByClassName('main-panel')[0];
    if (window.innerWidth < 991) {
      setTimeout(function () {
        mainPanel.style.position = '';
      }, 500);
    }
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    html.classList.remove('nav-open');
  }
  collapse() {
    this.isCollapsed = !this.isCollapsed;
    const navbar = document.getElementsByTagName('nav')[0];
    console.log(navbar);
    if (!this.isCollapsed) {
      navbar.classList.remove('navbar-transparent');
      navbar.classList.add('bg-white');
    } else {
      navbar.classList.add('navbar-transparent');
      navbar.classList.remove('bg-white');
    }
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
    }];
  }
  static {
    this.propDecorators = {
      button: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild,
        args: ["navbar-cmp", {
          static: false
        }]
      }]
    };
  }
};
NavbarCPMComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'navbar-cmp',
  template: _navbar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], NavbarCPMComponent);


/***/ }),

/***/ 8290:
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarComponent: () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _navbar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.component.html?ngResource */ 5994);
/* harmony import */ var _navbar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.component.scss?ngResource */ 9746);
/* harmony import */ var _navbar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_navbar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);





let NavbarComponent = class NavbarComponent {
  constructor(location, element) {
    this.location = location;
    this.element = element;
    this.sidebarVisible = false;
  }
  ngOnInit() {
    const navbar = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
  }
  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const html = document.getElementsByTagName('html')[0];
    setTimeout(function () {
      toggleButton.classList.add('toggled');
    }, 500);
    html.classList.add('nav-open');
    this.sidebarVisible = true;
  }
  sidebarClose() {
    const html = document.getElementsByTagName('html')[0];
    // console.log(html);
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    html.classList.remove('nav-open');
  }
  sidebarToggle() {
    // const toggleButton = this.toggleButton;
    // const body = document.getElementsByTagName('body')[0];
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  }
  isHome() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee === '/home') {
      return true;
    } else {
      return false;
    }
  }
  isDocumentation() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee === '/documentation') {
      return true;
    } else {
      return false;
    }
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
    }];
  }
};
NavbarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-navbar',
  template: _navbar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_navbar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], NavbarComponent);


/***/ }),

/***/ 7244:
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUTES: () => (/* binding */ ROUTES),
/* harmony export */   SidebarComponent: () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _sidebar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar.component.html?ngResource */ 9292);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



const ROUTES = [
// { path: '/admin/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
{
  path: '/admin/staff',
  title: 'Staff',
  icon: 'nc-diamond',
  class: ''
}, {
  path: '/admin/stock',
  title: 'Stock',
  icon: 'nc-pin-3',
  class: ''
}, {
  path: '/admin/notes',
  title: 'Notes',
  icon: 'nc-bell-55',
  class: ''
},
// { path: '/admin/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
{
  path: '/admin/plates',
  title: 'Fiches Techniques',
  icon: 'nc-tile-56',
  class: ''
}
// { path: '/admin/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
// { path: '/admin/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' },
];
let SidebarComponent = class SidebarComponent {
  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
};
SidebarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'sidebar-cmp',
  template: _sidebar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], SidebarComponent);


/***/ }),

/***/ 8155:
/*!*******************************************!*\
  !*** ./src/app/sidebar/sidebar.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidebarModule: () => (/* binding */ SidebarModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar.component */ 7244);





let SidebarModule = class SidebarModule {};
SidebarModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
  declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent],
  exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent]
})], SidebarModule);


/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
  production: false
};

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 2476);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5312);
/*! =========================================================
 *
 * Paper Kit 2 PRO Angular - v1.4.0
 *
 =========================================================

 * Product Page: https://www.creative-tim.com/product/paper-kit-2-pro-angular
 * Copyright 2019 Creative Tim (https://www.creative-tim.com)

 * Coded by Creative Tim

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);

/***/ }),

/***/ 7282:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 496:
/*!*****************************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1571:
/*!*************************************************************!*\
  !*** ./src/app/pages/login/login.component.scss?ngResource ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 5723:
/*!*****************************************************************!*\
  !*** ./src/app/pages/page404/page404.component.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1075:
/*!*****************************************************************!*\
  !*** ./src/app/pages/page422/page422.component.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 8467:
/*!*****************************************************************!*\
  !*** ./src/app/pages/page500/page500.component.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 8128:
/*!****************************************************************************!*\
  !*** ./src/app/shared/image-upload/image-upload.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 9746:
/*!****************************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss?ngResource ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 5358:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 5637,
	"./af.js": 5637,
	"./ar": 6777,
	"./ar-dz": 4508,
	"./ar-dz.js": 4508,
	"./ar-kw": 7504,
	"./ar-kw.js": 7504,
	"./ar-ly": 5373,
	"./ar-ly.js": 5373,
	"./ar-ma": 2412,
	"./ar-ma.js": 2412,
	"./ar-ps": 8823,
	"./ar-ps.js": 8823,
	"./ar-sa": 6670,
	"./ar-sa.js": 6670,
	"./ar-tn": 6448,
	"./ar-tn.js": 6448,
	"./ar.js": 6777,
	"./az": 3009,
	"./az.js": 3009,
	"./be": 8299,
	"./be.js": 8299,
	"./bg": 4685,
	"./bg.js": 4685,
	"./bm": 1171,
	"./bm.js": 1171,
	"./bn": 3590,
	"./bn-bd": 5841,
	"./bn-bd.js": 5841,
	"./bn.js": 3590,
	"./bo": 4309,
	"./bo.js": 4309,
	"./br": 4130,
	"./br.js": 4130,
	"./bs": 8033,
	"./bs.js": 8033,
	"./ca": 5294,
	"./ca.js": 5294,
	"./cs": 3028,
	"./cs.js": 3028,
	"./cv": 5807,
	"./cv.js": 5807,
	"./cy": 342,
	"./cy.js": 342,
	"./da": 8269,
	"./da.js": 8269,
	"./de": 1489,
	"./de-at": 2123,
	"./de-at.js": 2123,
	"./de-ch": 7757,
	"./de-ch.js": 7757,
	"./de.js": 1489,
	"./dv": 8152,
	"./dv.js": 8152,
	"./el": 7687,
	"./el.js": 7687,
	"./en-au": 6668,
	"./en-au.js": 6668,
	"./en-ca": 6798,
	"./en-ca.js": 6798,
	"./en-gb": 3615,
	"./en-gb.js": 3615,
	"./en-ie": 1364,
	"./en-ie.js": 1364,
	"./en-il": 9907,
	"./en-il.js": 9907,
	"./en-in": 533,
	"./en-in.js": 533,
	"./en-nz": 3190,
	"./en-nz.js": 3190,
	"./en-sg": 1096,
	"./en-sg.js": 1096,
	"./eo": 3962,
	"./eo.js": 3962,
	"./es": 7726,
	"./es-do": 5010,
	"./es-do.js": 5010,
	"./es-mx": 3654,
	"./es-mx.js": 3654,
	"./es-us": 9043,
	"./es-us.js": 9043,
	"./es.js": 7726,
	"./et": 5343,
	"./et.js": 5343,
	"./eu": 728,
	"./eu.js": 728,
	"./fa": 787,
	"./fa.js": 787,
	"./fi": 1771,
	"./fi.js": 1771,
	"./fil": 5335,
	"./fil.js": 5335,
	"./fo": 9761,
	"./fo.js": 9761,
	"./fr": 1670,
	"./fr-ca": 8991,
	"./fr-ca.js": 8991,
	"./fr-ch": 7280,
	"./fr-ch.js": 7280,
	"./fr.js": 1670,
	"./fy": 4203,
	"./fy.js": 4203,
	"./ga": 9858,
	"./ga.js": 9858,
	"./gd": 8605,
	"./gd.js": 8605,
	"./gl": 7365,
	"./gl.js": 7365,
	"./gom-deva": 3896,
	"./gom-deva.js": 3896,
	"./gom-latn": 5587,
	"./gom-latn.js": 5587,
	"./gu": 7950,
	"./gu.js": 7950,
	"./he": 2029,
	"./he.js": 2029,
	"./hi": 1897,
	"./hi.js": 1897,
	"./hr": 9816,
	"./hr.js": 9816,
	"./hu": 2253,
	"./hu.js": 2253,
	"./hy-am": 8196,
	"./hy-am.js": 8196,
	"./id": 1307,
	"./id.js": 1307,
	"./is": 3093,
	"./is.js": 3093,
	"./it": 3099,
	"./it-ch": 8188,
	"./it-ch.js": 8188,
	"./it.js": 3099,
	"./ja": 9127,
	"./ja.js": 9127,
	"./jv": 182,
	"./jv.js": 182,
	"./ka": 758,
	"./ka.js": 758,
	"./kk": 3444,
	"./kk.js": 3444,
	"./km": 2034,
	"./km.js": 2034,
	"./kn": 6223,
	"./kn.js": 6223,
	"./ko": 3064,
	"./ko.js": 3064,
	"./ku": 8714,
	"./ku-kmr": 961,
	"./ku-kmr.js": 961,
	"./ku.js": 8714,
	"./ky": 2062,
	"./ky.js": 2062,
	"./lb": 4796,
	"./lb.js": 4796,
	"./lo": 9279,
	"./lo.js": 9279,
	"./lt": 106,
	"./lt.js": 106,
	"./lv": 1840,
	"./lv.js": 1840,
	"./me": 2240,
	"./me.js": 2240,
	"./mi": 3588,
	"./mi.js": 3588,
	"./mk": 5518,
	"./mk.js": 5518,
	"./ml": 7823,
	"./ml.js": 7823,
	"./mn": 8657,
	"./mn.js": 8657,
	"./mr": 1285,
	"./mr.js": 1285,
	"./ms": 3014,
	"./ms-my": 6253,
	"./ms-my.js": 6253,
	"./ms.js": 3014,
	"./mt": 167,
	"./mt.js": 167,
	"./my": 7940,
	"./my.js": 7940,
	"./nb": 14,
	"./nb.js": 14,
	"./ne": 9023,
	"./ne.js": 9023,
	"./nl": 4208,
	"./nl-be": 1412,
	"./nl-be.js": 1412,
	"./nl.js": 4208,
	"./nn": 1354,
	"./nn.js": 1354,
	"./oc-lnc": 870,
	"./oc-lnc.js": 870,
	"./pa-in": 389,
	"./pa-in.js": 389,
	"./pl": 7342,
	"./pl.js": 7342,
	"./pt": 4774,
	"./pt-br": 3003,
	"./pt-br.js": 3003,
	"./pt.js": 4774,
	"./ro": 5333,
	"./ro.js": 5333,
	"./ru": 3451,
	"./ru.js": 3451,
	"./sd": 3921,
	"./sd.js": 3921,
	"./se": 9682,
	"./se.js": 9682,
	"./si": 582,
	"./si.js": 582,
	"./sk": 4348,
	"./sk.js": 4348,
	"./sl": 5337,
	"./sl.js": 5337,
	"./sq": 9358,
	"./sq.js": 9358,
	"./sr": 683,
	"./sr-cyrl": 9382,
	"./sr-cyrl.js": 9382,
	"./sr.js": 683,
	"./ss": 1156,
	"./ss.js": 1156,
	"./sv": 9855,
	"./sv.js": 9855,
	"./sw": 8536,
	"./sw.js": 8536,
	"./ta": 7754,
	"./ta.js": 7754,
	"./te": 7809,
	"./te.js": 7809,
	"./tet": 1297,
	"./tet.js": 1297,
	"./tg": 2527,
	"./tg.js": 2527,
	"./th": 5862,
	"./th.js": 5862,
	"./tk": 9331,
	"./tk.js": 9331,
	"./tl-ph": 4387,
	"./tl-ph.js": 4387,
	"./tlh": 3592,
	"./tlh.js": 3592,
	"./tr": 9732,
	"./tr.js": 9732,
	"./tzl": 9570,
	"./tzl.js": 9570,
	"./tzm": 3553,
	"./tzm-latn": 7699,
	"./tzm-latn.js": 7699,
	"./tzm.js": 3553,
	"./ug-cn": 5674,
	"./ug-cn.js": 5674,
	"./uk": 9974,
	"./uk.js": 9974,
	"./ur": 5773,
	"./ur.js": 5773,
	"./uz": 357,
	"./uz-latn": 7135,
	"./uz-latn.js": 7135,
	"./uz.js": 357,
	"./vi": 43,
	"./vi.js": 43,
	"./x-pseudo": 767,
	"./x-pseudo.js": 767,
	"./yo": 150,
	"./yo.js": 150,
	"./zh-cn": 1828,
	"./zh-cn.js": 1828,
	"./zh-hk": 6644,
	"./zh-hk.js": 6644,
	"./zh-mo": 9305,
	"./zh-mo.js": 9305,
	"./zh-tw": 1860,
	"./zh-tw.js": 1860
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 5358;

/***/ }),

/***/ 1584:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- <app-navbar></app-navbar> -->\n<router-outlet></router-outlet>\n";

/***/ }),

/***/ 2882:
/*!*****************************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color=\"white\" data-active-color=\"danger\">\n        <sidebar-cmp></sidebar-cmp>\n    </div>\n    <div class=\"main-panel\">\n        <navbar-cmp></navbar-cmp>\n        <div class=\"content\">\n            <router-outlet></router-outlet>\n        </div>\n        <footer-cmp></footer-cmp>\n    </div>\n</div>\n<fixedplugin-cmp></fixedplugin-cmp>\n";

/***/ }),

/***/ 4495:
/*!****************************************************************************!*\
  !*** ./src/app/layouts/admin-layout/icons/icons.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n      <!-- <div class=\"card-header\">\n        <h5 class=\"card-title\">Staff</h5>\n        <p class=\"card-category\">\n        </p>\n      </div> -->\n      <div class=\"col-md-8\" *ngIf=\"showFormStaff\">\n        <div class=\"card card-user\">\n          <div class=\"card-header\">\n            <h5 class=\"card-title\">Ajout Staff</h5>\n          </div>\n          <div class=\"card-body\">\n            <form [formGroup]=\"addStaffForm\" (ngSubmit)=\"addStaff()\" >\n              <div class=\"row\">\n              \n                <div class=\"col-md-12 pl-1\">\n                  <div class=\"form-group\">\n                    <label for=\"exampleInputEmail1\">Email </label>\n                    <input formControlName=\"email\" type=\"email\" class=\"form-control\" placeholder=\"Email\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n                    <label>Mot de Passe</label>\n                    <input formControlName=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Mot de passe\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n                    <label>Role</label>\n                    <select formControlName=\"role\"  class=\"form-control\" >\n                      <option value=\"Sous-Chef\">Sous-Chef</option>\n                      <option value=\"Chef\">Chef</option>\n                      <option value=\"Cook\">Cook</option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"update ml-auto mr-auto\">\n                  <button type=\"submit\" class=\"btn btn-primary btn-round\">Ajouter Profile</button>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n    </div>\n    <div class=\"card\">\n\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <button type=\"button\" class=\"btn btn-primary float-right\" data-toggle=\"modal\" data-target=\"#exampleModal\"\n              (click)=\"showFormStaff = true\">\n              Ajouter Staff\n            </button>\n            <div class=\"table-responsive\">\n              <table class=\"table\">\n                <thead class=\" text-primary\">\n                  <!-- <th>\n                    Nom\n                  </th> -->\n                  <th>\n                    Email\n                  </th>\n                  <th>\n                    Role\n                  </th>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let staff of staffList\">\n                    <td>\n                      {{staff.email}}\n                    </td>\n                    <td>\n                      {{staff.role}}\n                    </td>\n                  </tr>\n                </tbody>\n\n              </table>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>";

/***/ }),

/***/ 8019:
/*!**************************************************************************!*\
  !*** ./src/app/layouts/admin-layout/maps/maps.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"col-md-8\" *ngIf=\"showFormStock\">\n      <div class=\"card card-user\">\n        <div class=\"card-header\">\n          <h5 class=\"card-title\">Ajout Stock</h5>\n        </div>\n        <div class=\"card-body\">\n          <form [formGroup]=\"addStockForm\" (ngSubmit)=\"addStock()\">\n            <div class=\"row\">\n\n              <div class=\"col-md-12 pl-1\">\n                <div class=\"form-group\">\n                  <label for=\"exampleInputName\">Nom </label>\n                  <input formControlName=\"name\" type=\"text\" class=\"form-control\" placeholder=\"nom\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label>Prix</label>\n                  <input formControlName=\"price\" type=\"number\" class=\"form-control\" placeholder=\"prix\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label>Quantité</label>\n                  <input formControlName=\"quantity\" type=\"number\" class=\"form-control\" placeholder=\"Quantité\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label>Niveau Minimum du stock</label>\n                  <input formControlName=\"minimumStockLevel\" type=\"number\" class=\"form-control\"\n                    placeholder=\"Niveau Minimum du stock\">\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label>Date d'expiration</label>\n                  <input formControlName=\"expiryDate\" type=\"date\" class=\"form-control\" placeholder=\"Date d'expiration\">\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label>Categorie</label>\n                  <select formControlName=\"stockCategory\" class=\"form-control\">\n                    <option value=\"Food\">food</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"update ml-auto mr-auto\">\n                <button type=\"submit\" class=\"btn btn-primary btn-round\">Ajouter Produit</button>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h5 class=\"card-title\">Stock</h5>\n        <p class=\"card-category\">\n        </p>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <button type=\"button\" class=\"btn btn-primary float-right\" data-toggle=\"modal\" data-target=\"#exampleModal\"\n              (click)=\"showFormStock = true\">\n              Ajouter un produit\n            </button>\n\n            <div class=\"table-responsive\">\n              <table class=\"table\">\n                <thead class=\" text-primary\">\n                  <th>\n                    Nom\n                  </th>\n                  <th>\n                    Quantité\n                  </th>\n                  <th>\n                    Categorie\n                  </th>\n                  <th>\n                    Prix\n                  </th>\n                  <th>\n                    Fournisseur\n                  </th>\n                  <th>\n                    Date d'expiration\n                  </th>\n                  <th>\n                    Niveau minimum Stock\n                  </th>\n                </thead>\n\n                <tbody>\n                  <tr *ngFor=\"let stock of stockList\">\n                    <td>\n                      {{stock.name}}\n                    </td>\n                    <td>\n                      {{stock.quantity}}\n                    </td>\n                    <td>\n                      {{stock.stockCategory}}\n                    </td>\n                    <td>\n                      {{stock.price}}\n                    </td>\n                    <td>\n                      Fournisseur A\n                    </td>\n                    <td>\n                      {{stock.expiryDate | date:'mediumDate'}}\n                    </td>\n                    <td>\n                      {{stock.minimumStockLevel}}\n                    </td>\n\n                  </tr>\n\n                </tbody>\n\n\n              </table>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>";

/***/ }),

/***/ 895:
/*!********************************************************************************************!*\
  !*** ./src/app/layouts/admin-layout/notifications/notifications.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h5 class=\"card-title\">Notes</h5>\n        <p class=\"card-category\">\n        </p>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"table-responsive\">\n              <table class=\"table\">\n                <thead class=\" text-primary\">\n                  <th>\n                    Name\n                  </th>\n                  <th>\n                    Country\n                  </th>\n                  <th>\n                    City\n                  </th>\n                  <th class=\"text-right\">\n                    Salary\n                  </th>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>\n                      Dakota Rice\n                    </td>\n                    <td>\n                      Niger\n                    </td>\n                    <td>\n                      Oud-Turnhout\n                    </td>\n                    <td class=\"text-right\">\n                      $36,738\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      Minerva Hooper\n                    </td>\n                    <td>\n                      Curaçao\n                    </td>\n                    <td>\n                      Sinaai-Waas\n                    </td>\n                    <td class=\"text-right\">\n                      $23,789\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      Sage Rodriguez\n                    </td>\n                    <td>\n                      Netherlands\n                    </td>\n                    <td>\n                      Baileux\n                    </td>\n                    <td class=\"text-right\">\n                      $56,142\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      Philip Chaney\n                    </td>\n                    <td>\n                      Korea, South\n                    </td>\n                    <td>\n                      Overland Park\n                    </td>\n                    <td class=\"text-right\">\n                      $38,735\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      Doris Greene\n                    </td>\n                    <td>\n                      Malawi\n                    </td>\n                    <td>\n                      Feldkirchen in Kärnten\n                    </td>\n                    <td class=\"text-right\">\n                      $63,542\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      Mason Porter\n                    </td>\n                    <td>\n                      Chile\n                    </td>\n                    <td>\n                      Gloucester\n                    </td>\n                    <td class=\"text-right\">\n                      $78,615\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      Jon Porter\n                    </td>\n                    <td>\n                      Portugal\n                    </td>\n                    <td>\n                      Gloucester\n                    </td>\n                    <td class=\"text-right\">\n                      $98,615\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        \n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ }),

/***/ 975:
/*!****************************************************************************!*\
  !*** ./src/app/layouts/admin-layout/table/table.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n\n    <div class=\"col-md-8\" *ngIf=\"showImage\">\n      <div class=\"card card-user\">\n        <div class=\"card-header\">\n          <h5 class=\"card-title\">Display</h5>\n        </div>\n        <div class=\"card-body\">\n\n\n          <img  src=\"https://cook-flow.onrender.com/{{ file.path }}\" alt=\"\" height=\"auto\" width=\"auto\"\n            style=\"border: 1px solid red\" />\n\n\n\n\n\n\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-8\" *ngIf=\"showFormStaff\">\n      <div class=\"card card-user\">\n        <div class=\"card-header\">\n          <h5 class=\"card-title\">Ajout Staff</h5>\n        </div>\n        <div class=\"card-body\">\n\n\n          <form [formGroup]=\"uploadForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"row\">\n              <div class=\"col-md-12 pl-1\">\n                <div>\n                  <!-- <label for=\"file\">fiche technique </label> -->\n                  <input (change)=\"onFileSelect($event)\" type=\"file\">\n                </div>\n              </div>\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary btn-round\">Upload</button>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"card\">\n\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <button type=\"button\" class=\"btn btn-primary float-right\" data-toggle=\"modal\" data-target=\"#exampleModal\"\n              (click)=\"showFormStaff = true\">\n              Ajouter Staff\n            </button>\n            <div class=\"table-responsive\">\n              <table class=\"table\">\n                <thead class=\" text-primary\">\n                  <!-- <th>\n                    Nom\n                  </th> -->\n                  <th>\n                    Nom\n                  </th>\n                  <th>\n                    Type\n                  </th>\n                  <th>\n                    Action\n                  </th>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let file of files\">\n                    <td>\n                      {{file.originalname}}\n                    </td>\n                    <td>\n                      {{file.type}}\n                    </td>\n                    <!-- <td>\n                      <img class=\"image\" src=\"https://cook-flow.onrender.com/{{ file.path }}\" alt=\"\" height=\"400px\" width=\"250px\"\n                        style=\"border: 1px solid red\" />\n                    </td> -->\n                    <td (click)=\"getFile(file)\">\n                      <i class=\"nc-icon nc-tile-56\"></i>\n                    </td>\n                  </tr>\n                </tbody>\n\n              </table>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>";

/***/ }),

/***/ 7563:
/*!**************************************************************************************!*\
  !*** ./src/app/layouts/admin-layout/typography/typography.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h5 class=\"title\">Paper Table Heading</h5>\n        <p class=\"category\">Created using Montserrat Font Family</p>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"typography-line\">\n          <h1>\n            <span>Header 1</span>The Life of Paper Dashboard </h1>\n        </div>\n        <div class=\"typography-line\">\n          <h2>\n            <span>Header 2</span>The Life of Paper Dashboard </h2>\n        </div>\n        <div class=\"typography-line\">\n          <h3>\n            <span>Header 3</span>The Life of Paper Dashboard </h3>\n        </div>\n        <div class=\"typography-line\">\n          <h4>\n            <span>Header 4</span>The Life of Paper Dashboard </h4>\n        </div>\n        <div class=\"typography-line\">\n          <h5>\n            <span>Header 5</span>The Life of Paper Dashboard </h5>\n        </div>\n        <div class=\"typography-line\">\n          <h6>\n            <span>Header 6</span>The Life of Paper Dashboard </h6>\n        </div>\n        <div class=\"typography-line\">\n          <p>\n            <span>Paragraph</span>\n            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\n          </p>\n        </div>\n        <div class=\"typography-line\">\n          <span>Quote</span>\n          <blockquote>\n            <p class=\"blockquote blockquote-primary\">\n              \"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\"\n              <br>\n              <br>\n              <small>\n                - Noaa\n              </small>\n            </p>\n          </blockquote>\n        </div>\n        <div class=\"typography-line\">\n          <span>Muted Text</span>\n          <p class=\"text-muted\">\n            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n          </p>\n        </div>\n        <div class=\"typography-line\">\n          <span>Primary Text</span>\n          <p class=\"text-primary\">\n            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\n        </div>\n        <div class=\"typography-line\">\n          <span>Info Text</span>\n          <p class=\"text-info\">\n            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n        </div>\n        <div class=\"typography-line\">\n          <span>Success Text</span>\n          <p class=\"text-success\">\n            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n        </div>\n        <div class=\"typography-line\">\n          <span>Warning Text</span>\n          <p class=\"text-warning\">\n            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n          </p>\n        </div>\n        <div class=\"typography-line\">\n          <span>Danger Text</span>\n          <p class=\"text-danger\">\n            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n        </div>\n        <div class=\"typography-line\">\n          <h2>\n            <span>Small Tag</span>\n            Header with small subtitle\n            <br>\n            <small>Use \"small\" tag for the headers</small>\n          </h2>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ }),

/***/ 8663:
/*!********************************************************************************!*\
  !*** ./src/app/layouts/admin-layout/upgrade/upgrade.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"row\">\n  <div class=\"col-md-8 ml-auto mr-auto\">\n    <div class=\"card card-upgrade\">\n      <div class=\"card-header text-center\">\n        <h4 class=\"card-title\">Paper Dashboard PRO Angular</h4>\n          <p class=\"card-category\">Are you looking for more components? Please check our Premium Version of Paper Dashboard PRO.</p>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"table-responsive table-upgrade\">\n          <table class=\"table\">\n            <thead>\n              <th></th>\n              <th class=\"text-center\">Free</th>\n              <th class=\"text-center\">PRO</th>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Components</td>\n                <td class=\"text-center\">16</td>\n                <td class=\"text-center\">160</td>\n              </tr>\n              <tr>\n                <td>Plugins</td>\n                <td class=\"text-center\">4</td>\n                <td class=\"text-center\">15</td>\n              </tr>\n              <tr>\n                <td>Example Pages</td>\n                <td class=\"text-center\">7</td>\n                <td class=\"text-center\">27</td>\n              </tr>\n              <tr>\n                <td>Login, Register, Pricing, Lock Pages</td>\n                <td class=\"text-center\"><i class=\"nc-icon nc-simple-remove text-danger\"></i></td>\n                <td class=\"text-center\"><i class=\"nc-icon nc-check-2 text-success\"></i></td>\n              </tr>\n              <tr>\n                <td>DataTables, VectorMap, SweetAlert, Wizard, FullCalendar etc...</td>\n                <td class=\"text-center\"><i class=\"nc-icon nc-simple-remove text-danger\"></i></td>\n                <td class=\"text-center\"><i class=\"nc-icon nc-check-2 text-success\"></i></td>\n              </tr>\n              <tr>\n                <td>Mini Sidebar</td>\n                <td class=\"text-center\"><i class=\"nc-icon nc-simple-remove text-danger\"></i></td>\n                <td class=\"text-center\"><i class=\"nc-icon nc-check-2 text-success\"></i></td>\n              </tr>\n              <tr>\n                <td>Premium Support</td>\n                <td class=\"text-center\"><i class=\"nc-icon nc-simple-remove text-danger\"></i></td>\n                <td class=\"text-center\"><i class=\"nc-icon nc-check-2 text-success\"></i></td>\n              </tr>\n              <tr>\n                <td></td>\n                <td class=\"text-center\">Free</td>\n                <td class=\"text-center\">Just $49</td>\n              </tr>\n              <tr>\n                <td class=\"text-center\"></td>\n                <td class=\"text-center\">\n                  <a href=\"#\" class=\"btn btn-round btn-default disabled\">Current Version</a>\n                </td>\n                <td class=\"text-center\">\n                  <a target=\"_blank\" href=\"https://www.creative-tim.com/product/paper-dashboard-pro-angular?ref=pd-free-angular-upgrade-live\" class=\"btn btn-round btn-primary\">Upgrade to PRO</a>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ }),

/***/ 2365:
/*!*********************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"row\">\n  <div class=\"col-lg-3 col-md-6 col-sm-6\">\n    <div class=\"card card-stats\">\n      <div class=\"card-body \">\n        <div class=\"row\">\n          <div class=\"col-5 col-md-4\">\n            <div class=\"icon-big text-center icon-warning\">\n              <i class=\"nc-icon nc-globe text-warning\"></i>\n            </div>\n          </div>\n          <div class=\"col-7 col-md-8\">\n            <div class=\"numbers\">\n              <p class=\"card-category\">Capacity</p>\n              <p class=\"card-title\">150GB\n                <p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-footer \">\n        <hr>\n        <div class=\"stats\">\n          <i class=\"fa fa-refresh\"></i> Update Now\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-3 col-md-6 col-sm-6\">\n    <div class=\"card card-stats\">\n      <div class=\"card-body \">\n        <div class=\"row\">\n          <div class=\"col-5 col-md-4\">\n            <div class=\"icon-big text-center icon-warning\">\n              <i class=\"nc-icon nc-money-coins text-success\"></i>\n            </div>\n          </div>\n          <div class=\"col-7 col-md-8\">\n            <div class=\"numbers\">\n              <p class=\"card-category\">Revenue</p>\n              <p class=\"card-title\">$ 1,345\n                <p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-footer \">\n        <hr>\n        <div class=\"stats\">\n          <i class=\"fa fa-calendar-o\"></i> Last day\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-3 col-md-6 col-sm-6\">\n    <div class=\"card card-stats\">\n      <div class=\"card-body \">\n        <div class=\"row\">\n          <div class=\"col-5 col-md-4\">\n            <div class=\"icon-big text-center icon-warning\">\n              <i class=\"nc-icon nc-vector text-danger\"></i>\n            </div>\n          </div>\n          <div class=\"col-7 col-md-8\">\n            <div class=\"numbers\">\n              <p class=\"card-category\">Errors</p>\n              <p class=\"card-title\">23\n                <p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-footer \">\n        <hr>\n        <div class=\"stats\">\n          <i class=\"fa fa-clock-o\"></i> In the last hour\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-3 col-md-6 col-sm-6\">\n    <div class=\"card card-stats\">\n      <div class=\"card-body \">\n        <div class=\"row\">\n          <div class=\"col-5 col-md-4\">\n            <div class=\"icon-big text-center icon-warning\">\n              <i class=\"nc-icon nc-favourite-28 text-primary\"></i>\n            </div>\n          </div>\n          <div class=\"col-7 col-md-8\">\n            <div class=\"numbers\">\n              <p class=\"card-category\">Followers</p>\n              <p class=\"card-title\">+45K\n                <p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-footer \">\n        <hr>\n        <div class=\"stats\">\n          <i class=\"fa fa-refresh\"></i> Update now\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card \">\n      <div class=\"card-header \">\n        <h5 class=\"card-title\">Users Behavior</h5>\n        <p class=\"card-category\">24 Hours performance</p>\n      </div>\n      <div class=\"card-body \">\n        <canvas id=chartHours width=\"400\" height=\"100\"></canvas>\n      </div>\n      <div class=\"card-footer \">\n        <hr>\n        <div class=\"stats\">\n          <i class=\"fa fa-history\"></i> Updated 3 minutes ago\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <div class=\"card \">\n      <div class=\"card-header \">\n        <h5 class=\"card-title\">Email Statistics</h5>\n        <p class=\"card-category\">Last Campaign Performance</p>\n      </div>\n      <div class=\"card-body \">\n        <canvas id=\"chartEmail\"></canvas>\n      </div>\n      <div class=\"card-footer \">\n        <div class=\"legend\">\n          <i class=\"fa fa-circle text-primary\"></i> Opened\n          <i class=\"fa fa-circle text-warning\"></i> Read\n          <i class=\"fa fa-circle text-danger\"></i> Deleted\n          <i class=\"fa fa-circle text-gray\"></i> Unopened\n        </div>\n        <hr>\n        <div class=\"stats\">\n          <i class=\"fa fa-calendar\"></i> Number of emails sent\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-8\">\n    <div class=\"card card-chart\">\n      <div class=\"card-header\">\n        <h5 class=\"card-title\">NASDAQ: AAPL</h5>\n        <p class=\"card-category\">Line Chart with Points</p>\n      </div>\n      <div class=\"card-body\">\n        <canvas id=\"speedChart\" width=\"400\" height=\"100\"></canvas>\n      </div>\n      <div class=\"card-footer\">\n        <div class=\"chart-legend\">\n          <i class=\"fa fa-circle text-info\"></i> Tesla Model S\n          <i class=\"fa fa-circle text-warning\"></i> BMW 5 Series\n        </div>\n        <hr/>\n        <div class=\"card-stats\">\n          <i class=\"fa fa-check\"></i> Data information certified\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ }),

/***/ 7857:
/*!*************************************************************!*\
  !*** ./src/app/pages/login/login.component.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header\" style=\"background-image: url('./assets/img/sections/bruno-abatti.jpg');\">\n        <div class=\"filter\"></div>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-4 col-sm-6 ml-auto mr-auto\">\n                    <div class=\"card card-register\">\n                        <h3 class=\"card-title\">Welcome</h3>\n                        <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\" class=\"register-form\">\n                            <label for=\"email\">Email:</label>\n                            <input type=\"email\" id=\"email\" formControlName=\"email\" class=\"form-control no-border\"\n                                placeholder=\"Email\">\n\n                            <label for=\"password\">Password:</label>\n                            <input id=\"password\" type=\"password\" formControlName=\"password\"\n                                class=\"form-control no-border\" placeholder=\"Password\">\n                            <button type=\"submit\" class=\"btn btn-danger btn-block btn-round\">Login</button>\n                        </form>\n                        <div class=\"forgot\">\n                            <a href=\"javascript:void(0)\" class=\"btn btn-link btn-danger\">Forgot password?</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"demo-footer text-center\">\n                <h6>&copy; {{data | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by Creative Tim</h6>\n            </div>\n        </div>\n    </div>\n</div>";

/***/ }),

/***/ 1057:
/*!*****************************************************************!*\
  !*** ./src/app/pages/page404/page404.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"background-img\" style=\"background-image: url('./assets/img/sections/martin-knize.jpg')\">\n    <div class=\"filter\"></div>\n    <div class=\"container\">\n        <div class=\"row\">\n            <h1 class=\"title\"> &nbsp;404 <br/>\n                <p class=\"error-msg\">The page you requested could not be found</p>\n            </h1>\n\n\n        </div>\n        <div class=\"container-cards\">\n            <div class=\"row\">\n                <h5 class=\"discover-pages text-center\">You can discover:</h5>\n                <br/><br/><br/>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-md-3\">\n                            <div class=\"card card-just-text\">\n                                <div class=\"card-body text-center\">\n                                    <div class=\"card-icon\"><a href=\"#paperkit\"><i class=\"fa fa-desktop\" aria-hidden=\"true\"></i></a></div>\n                                    <p class=\"card-description\">Admin & Dashboards</p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <div class=\"card card-hover-effect card-just-text\">\n                                <div class=\"card-body text-center\">\n                                    <h4 class=\"card-icon\"><a href=\"#paperkit\"><i class=\"fa fa-scissors\" aria-hidden=\"true\"></i></a></h4>\n                                    <p class=\"card-description\">UI Kits</p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <div class=\"card card-hover-effect card-just-text\">\n                                <div class=\"card-body text-center\">\n                                    <h4 class=\"card-icon\"><a href=\"#paperkit\"><i class=\"fa fa-gift\" aria-hidden=\"true\"></i></a></h4>\n                                    <p class=\"card-description\">Free Themes</p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <div class=\"card card-hover-effect card-just-text\">\n                                <div class=\"card-body text-center\">\n                                    <h4 class=\"card-icon\"><a href=\"#paperkit\"><i class=\"fa fa-puzzle-piece\" aria-hidden=\"true\"></i></a></h4>\n                                    <p class=\"card-description\">Bootstrap components</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 9425:
/*!*****************************************************************!*\
  !*** ./src/app/pages/page422/page422.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"background-img\" style=\"background-image: url('./assets/img/sections/jan-sendereks.jpg')\">\n    <div class=\"filter\"></div>\n    <div class=\"container\">\n        <div class=\"row\">\n            <h1 class=\"title\"> &nbsp;422 <br/>\n                <p class=\"error-msg\">The changes you wanted was rejected</p>\n            </h1>\n\n\n        </div>\n\n        <div class=\"container-cards\">\n            <div class=\"row\">\n                <h5 class=\"discover-pages text-center\">You can discover:</h5>\n                <br/><br/><br/>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-md-3\">\n                            <div class=\"card card-hover-effect card-just-text\">\n                                <div class=\"card-body text-center\">\n                                    <div class=\"card-icon\"><a href=\"#paperkit\"><i class=\"fa fa-desktop\" aria-hidden=\"true\"></i></a></div>\n                                    <p class=\"card-description\">Admin & Dashboards</p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <div class=\"card card-hover-effect card-just-text\">\n                                <div class=\"card-body text-center\">\n                                    <h4 class=\"card-icon\"><a href=\"#paperkit\"><i class=\"fa fa-scissors\" aria-hidden=\"true\"></i></a></h4>\n                                    <p class=\"card-description\">UI Kits</p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <div class=\"card card-hover-effect card-just-text\">\n                                <div class=\"card-body text-center\">\n                                    <h4 class=\"card-icon\"><a href=\"#paperkit\"><i class=\"fa fa-gift\" aria-hidden=\"true\"></i></a></h4>\n                                    <p class=\"card-description\">Free Themes</p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <div class=\"card card-hover-effect card-just-text\">\n                                <div class=\"card-body text-center\">\n                                    <h4 class=\"card-icon\"><a href=\"#paperkit\"><i class=\"fa fa-puzzle-piece\" aria-hidden=\"true\"></i></a></h4>\n                                    <p class=\"card-description\">Bootstrap components</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 5065:
/*!*****************************************************************!*\
  !*** ./src/app/pages/page500/page500.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"background-img\" style=\"background-image: url('./assets/img/sections/the-how-photographer.jpg')\">\n    <div class=\"filter\"></div>\n    <div class=\"container\">\n        <div class=\"row\">\n            <h1 class=\"title\"> &nbsp;500 <br/>\n                <p class=\"error-msg\">We're sorry, but something went wrong. We are working an fixing this. <br/> Please refresh the page in a couple of seconds.</p>\n            </h1>\n        </div>\n        <div class=\"container-cards space-top\">\n            <div class=\"row\">\n                <h5 class=\"discover-pages text-center\">Meanwhie, you can check our social pages...</h5>\n            </div>\n            <div class=\"offset-md-5 social-buttons\">\n                <a class=\"btn btn-just-icon btn-lg btn-facebook\" href=\"https://www.facebook.com/CreativeTim\" target=\"_blank\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a>\n                <a class=\"btn btn-just-icon btn-lg btn-twitter\" href=\"https://twitter.com/CreativeTim\" target=\"_blank\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\n                <a class=\"btn btn-just-icon btn-lg btn-linkedin\" href=\"https://www.instagram.com/creativetimofficial/\" target=\"_blank\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></a>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 9293:
/*!***********************************************************!*\
  !*** ./src/app/pages/user/user.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"row\">\n  <div class=\"col-md-4\">\n    <div class=\"card card-user\">\n      <div class=\"image\">\n        <img src=\"assets/img/damir-bosnjak.jpg\" alt=\"...\">\n      </div>\n      <div class=\"card-body\">\n        <div class=\"author\">\n          <a href=\"#\">\n            <img class=\"avatar border-gray\" src=\"assets/img/mike.jpg\" alt=\"...\">\n            <h5 class=\"title\">Chet Faker</h5>\n          </a>\n          <p class=\"description\">\n            &#64;chetfaker\n          </p>\n        </div>\n        <p class=\"description text-center\">\n          \"I like the way you work it\n          <br> No diggity\n          <br> I wanna bag it up\"\n        </p>\n      </div>\n      <div class=\"card-footer\">\n        <hr>\n        <div class=\"button-container\">\n          <div class=\"row\">\n            <div class=\"col-lg-3 col-md-6 col-6 ml-auto\">\n              <h5>12\n                <br>\n                <small>Files</small>\n              </h5>\n            </div>\n            <div class=\"col-lg-4 col-md-6 col-6 ml-auto mr-auto\">\n              <h5>2GB\n                <br>\n                <small>Used</small>\n              </h5>\n            </div>\n            <div class=\"col-lg-3 mr-auto\">\n              <h5>24,6$\n                <br>\n                <small>Spent</small>\n              </h5>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h4 class=\"card-title\">Team Members</h4>\n      </div>\n      <div class=\"card-body\">\n        <ul class=\"list-unstyled team-members\">\n          <li>\n            <div class=\"row\">\n              <div class=\"col-md-2 col-2\">\n                <div class=\"avatar\">\n                  <img src=\"assets/img/faces/ayo-ogunseinde-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                </div>\n              </div>\n              <div class=\"col-md-7 col-7\">\n                DJ Khaled\n                <br />\n                <span class=\"text-muted\">\n                  <small>Offline</small>\n                </span>\n              </div>\n              <div class=\"col-md-3 col-3 text-right\">\n                <button class=\"btn btn-sm btn-outline-success btn-round btn-icon\"><i class=\"fa fa-envelope\"></i></button>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row\">\n              <div class=\"col-md-2 col-2\">\n                <div class=\"avatar\">\n                  <img src=\"assets/img/faces/joe-gardner-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                </div>\n              </div>\n              <div class=\"col-md-7 col-7\">\n                Creative Tim\n                <br />\n                <span class=\"text-success\">\n                  <small>Available</small>\n                </span>\n              </div>\n              <div class=\"col-md-3 col-3 text-right\">\n                <button class=\"btn btn-sm btn-outline-success btn-round btn-icon\"><i class=\"fa fa-envelope\"></i></button>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row\">\n              <div class=\"col-md-2 col-2\">\n                <div class=\"avatar\">\n                  <img src=\"assets/img/faces/clem-onojeghuo-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                </div>\n              </div>\n              <div class=\"col-ms-7 col-7\">\n                Flume\n                <br />\n                <span class=\"text-danger\">\n                  <small>Busy</small>\n                </span>\n              </div>\n              <div class=\"col-md-3 col-3 text-right\">\n                <button class=\"btn btn-sm btn-outline-success btn-round btn-icon\"><i class=\"fa fa-envelope\"></i></button>\n              </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-8\">\n    <div class=\"card card-user\">\n      <div class=\"card-header\">\n        <h5 class=\"card-title\">Edit Profile</h5>\n      </div>\n      <div class=\"card-body\">\n        <form>\n          <div class=\"row\">\n            <div class=\"col-md-5 pr-1\">\n              <div class=\"form-group\">\n                <label>Company (disabled)</label>\n                <input type=\"text\" class=\"form-control\" disabled=\"\" placeholder=\"Company\" value=\"Creative Code Inc.\">\n              </div>\n            </div>\n            <div class=\"col-md-3 px-1\">\n              <div class=\"form-group\">\n                <label>Username</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Username\" value=\"michael23\">\n              </div>\n            </div>\n            <div class=\"col-md-4 pl-1\">\n              <div class=\"form-group\">\n                <label for=\"exampleInputEmail1\">Email address</label>\n                <input type=\"email\" class=\"form-control\" placeholder=\"Email\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6 pr-1\">\n              <div class=\"form-group\">\n                <label>First Name</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Company\" value=\"Chet\">\n              </div>\n            </div>\n            <div class=\"col-md-6 pl-1\">\n              <div class=\"form-group\">\n                <label>Last Name</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\" value=\"Faker\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Address</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Home Address\" value=\"Melbourne, Australia\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-4 pr-1\">\n              <div class=\"form-group\">\n                <label>City</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"City\" value=\"Melbourne\">\n              </div>\n            </div>\n            <div class=\"col-md-4 px-1\">\n              <div class=\"form-group\">\n                <label>Country</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Country\" value=\"Australia\">\n              </div>\n            </div>\n            <div class=\"col-md-4 pl-1\">\n              <div class=\"form-group\">\n                <label>Postal Code</label>\n                <input type=\"number\" class=\"form-control\" placeholder=\"ZIP Code\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>About Me</label>\n                <textarea class=\"form-control textarea\">Oh so, your weak rhyme You doubt I'll bother, reading into it</textarea>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"update ml-auto mr-auto\">\n              <button type=\"submit\" class=\"btn btn-primary btn-round\">Update Profile</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ }),

/***/ 7368:
/*!**************************************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"fixed-plugin\">\n    <div class=\"show-dropdown\" ngbDropdown>\n        <a href=\"javascript:void(0)\" ngbDropdownToggle id=\"dropdownConfig\">\n          <i class=\"fa fa-cog fa-2x\"> </i>\n        </a>\n        <ul class=\"\" ngbDropdownMenu aria-labelledby=\"dropdownConfig\">\n            <li class=\"header-title\">Sidebar Background</li>\n            <li class=\"adjustments-line text-center\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger background-color\">\n                    <span class=\"badge filter badge-light active\" [ngClass]=\"{'active':sidebarColor==='white'}\" (click)=\"changeSidebarColor('white')\"></span>\n                    <span class=\"badge filter badge-dark\" [ngClass]=\"{'active':sidebarColor==='black'}\" (click)=\"changeSidebarColor('black')\"></span>\n                </a>\n            </li>\n\n\t          <li class=\"header-title\">Sidebar Active Color</li>\n            <li class=\"adjustments-line text-center\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\n                    <span class=\"badge filter badge-primary\" [ngClass]=\"{'active':sidebarActiveColor==='primary'}\" (click)=\"changeSidebarActiveColor('primary')\"></span>\n                    <span class=\"badge filter badge-info\" [ngClass]=\"{'active':sidebarActiveColor==='info'}\" (click)=\"changeSidebarActiveColor('info')\"></span>\n                    <span class=\"badge filter badge-success\" [ngClass]=\"{'active':sidebarActiveColor==='success'}\" (click)=\"changeSidebarActiveColor('success')\"></span>\n                    <span class=\"badge filter badge-warning\" [ngClass]=\"{'active':sidebarActiveColor==='warning'}\" (click)=\"changeSidebarActiveColor('warning')\"></span>\n                    <span class=\"badge filter badge-danger active\" [ngClass]=\"{'active':sidebarActiveColor==='danger'}\" (click)=\"changeSidebarActiveColor('danger')\"></span>\n                </a>\n            </li>\n\n        </ul>\n    </div>\n</div>\n";

/***/ }),

/***/ 208:
/*!****************************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<footer class=\"footer\">\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n\n                <li>\n                    <a href=\"https://www.creative-tim.com\">\n                        Creative Tim\n                    </a>\n                </li>\n                <li>\n                    <a href=\"http://blog.creative-tim.com\">\n                       Blog\n                    </a>\n                </li>\n                <li>\n                    <a href=\"https://www.creative-tim.com/license\">\n                        Licenses\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <div class=\"copyright pull-right\">\n            &copy; {{test | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by <a href=\"https://www.creative-tim.com\">Creative Tim</a>\n        </div>\n    </div>\n</footer>\n";

/***/ }),

/***/ 820:
/*!****************************************************************************!*\
  !*** ./src/app/shared/image-upload/image-upload.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"fileinput fileinput-new text-center\" >\n    <div [ngClass]=\"{'img-circle':isRound}\" class=\"thumbnail img-no-padding\">\n        <img src={{state.imagePreviewUrl}} alt=\"...\" />\n    </div>\n    <div>\n        <button class=\"btn btn-outline-default btn-file btn-round\" (click)=\"handleClick()\" *ngIf=\"!this.state.file\">Select image</button>\n        <button class=\"btn btn-outline-default btn-file btn-round\" (click)=\"handleClick()\" *ngIf=\"this.state.file\">Change</button>\n        <button class=\"btn btn-link btn-danger\" (click)=\"handleRemove()\" *ngIf=\"this.state.file\"><i class=\"fa fa-times\"></i> Remove</button>\n    </div>\n</div>\n";

/***/ }),

/***/ 1441:
/*!********************************************************************!*\
  !*** ./src/app/shared/navbar-cpm/navbar.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-wrapper\">\n      <div class=\"navbar-toggle\">\n        <button type=\"button\" class=\"navbar-toggler\" (click)=\"sidebarToggle()\">\n          <span class=\"navbar-toggler-bar bar1\"></span>\n          <span class=\"navbar-toggler-bar bar2\"></span>\n          <span class=\"navbar-toggler-bar bar3\"></span>\n        </button>\n      </div>\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{getTitle()}}</a>\n    </div>\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"collapse()\"\n      [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\n      <form>\n        <div class=\"input-group no-border\">\n          <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n          <div class=\"input-group-append\">\n            <div class=\"input-group-text\">\n              <i class=\"nc-icon nc-zoom-split\"></i>\n            </div>\n          </div>\n        </div>\n      </form>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link btn-magnify\" href=\"javascript:void(0)\">\n            <i class=\"nc-icon nc-layout-11\"></i>\n            <p>\n              <span class=\"d-lg-none d-md-block\">Stats</span>\n            </p>\n          </a>\n        </li>\n\n        <li class=\"nav-item btn-rotate\" ngbDropdown placement=\"bottom-left\">\n          <a class=\"nav-link\" ngbDropdownToggle id=\"navbarDropdownMenuLink\" >\n            <i class=\"nc-icon nc-bell-55\"></i>\n            <p>\n              <span class=\"d-lg-none d-md-block\">Some Actions</span>\n            </p>\n          </a>\n          <div ngbDropdownMenu aria-labelledby=\"navbarDropdownMenuLink\" class=\"dropdown-menu dropdown-menu-right\">\n            <a ngbDropdownItem href=\"javascript:void(0)\">Action</a>\n            <a ngbDropdownItem href=\"javascript:void(0)\">Another action</a>\n            <a ngbDropdownItem href=\"javascript:void(0)\">Something else here</a>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link btn-rotate\" href=\"javascript:void(0)\">\n            <i class=\"nc-icon nc-settings-gear-65\"></i>\n            <p>\n              <span class=\"d-lg-none d-md-block\">Account</span>\n            </p>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n";

/***/ }),

/***/ 5994:
/*!****************************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top nav-down\" color-on-scroll=\"500\">\n    <div class=\"container\">\n        <div class=\"navbar-translate\">\n            <div class=\"navbar-header\">\n                <a class=\"navbar-brand\" [routerLink]=\"['/presentation']\">Paper Kit 2 PRO Angular</a>\n            </div>\n            <button class=\"navbar-toggler navbar-burger\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"sidebarToggle()\">\n                <span class=\"navbar-toggler-bar bar1\"></span>\n                <span class=\"navbar-toggler-bar bar2\"></span>\n                <span class=\"navbar-toggler-bar bar3\"></span>\n            </button>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"navbar-nav ml-auto\">\n                <div ngbDropdown class=\"nav-item dropdown\">\n                    <div class=\"nav-link dropdown-toggle\" ngbDropdownToggle>Components</div>\n                    <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right dropdown-danger\">\n                        <a ngbDropdownItem [routerLink]=\"['/components']\"><i class=\"nc-icon nc-tile-56\"></i>All Components</a>\n                        <a ngbDropdownItem [routerLink]=\"['/presentation']\"><i class=\"nc-icon nc-settings\"></i>Presentation</a>\n                        <a ngbDropdownItem href=\"https://demos.creative-tim.com/paper-kit-2-pro-angular/#/documentation/tutorial\"><i class=\"nc-icon nc-bullet-list-67\"></i>Documentation</a>\n                    </div>\n                </div>\n                <div ngbDropdown class=\"nav-item dropdown\">\n                    <div class=\"nav-link dropdown-toggle\" ngbDropdownToggle>Sections</div>\n                    <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right dropdown-danger\">\n                        <a class=\"dropdown-item\" [routerLink]=\"['/sections']\" fragment=\"headers\"><i class=\"nc-icon nc-tile-56\"></i>&nbsp; Headers</a>\n                        <a class=\"dropdown-item\" [routerLink]=\"['/sections']\" fragment=\"features\"><i class=\"nc-icon nc-settings\"></i>&nbsp; Features</a>\n                        <a class=\"dropdown-item\" [routerLink]=\"['/sections']\" fragment=\"blogs\"><i class=\"nc-icon nc-bullet-list-67\"></i>&nbsp; Blogs</a>\n                        <a class=\"dropdown-item\" [routerLink]=\"['/sections']\" fragment=\"teams\"><i class=\"nc-icon nc-single-02\"></i>&nbsp; Teams</a>\n                        <a class=\"dropdown-item\" [routerLink]=\"['/sections']\" fragment=\"projects\"><i class=\"nc-icon nc-calendar-60\"></i>&nbsp; Projects</a>\n                        <a class=\"dropdown-item\" [routerLink]=\"['/sections']\" fragment=\"pricing\"><i class=\"nc-icon nc-money-coins\"></i>&nbsp; Pricing</a>\n                        <a class=\"dropdown-item\" [routerLink]=\"['/sections']\" fragment=\"testimonials\"><i class=\"nc-icon nc-badge\"></i>&nbsp; Testimonials</a>\n                        <a class=\"dropdown-item\" [routerLink]=\"['/sections']\" fragment=\"contact-us\"><i class=\"nc-icon nc-mobile\"></i>&nbsp; Contacts</a>\n                    </div>\n                </div>\n                <div ngbDropdown class=\"nav-item dropdown\">\n                    <div class=\"nav-link dropdown-toggle\" ngbDropdownToggle>Examples</div>\n                    <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right dropdown-danger\">\n                        <a class=\"dropdown-item\" [routerLink]=\"['/examples/aboutus']\"><i class=\"nc-icon nc-bank\"></i>&nbsp; About Us</a>\n                        <a class=\"dropdown-item\" [routerLink]=\"['/examples/addproduct']\"><i class=\"nc-icon nc-basket\"></i>&nbsp; Add Product</a>\n                        <a class=\"dropdown-item\" [routerLink]=\"['/examples/blogpost']\"><i class=\"nc-icon nc-badge\"></i>&nbsp; Blog Post</a>\n                        <a class=\"dropdown-item\" [routerLink]=\"['/examples/blogposts']\"><i class=\"nc-icon nc-bullet-list-67\"></i>&nbsp; Blog Posts</a>\n                        <a class=\"dropdown-item\" [routerLink]=\"['/examples/contactus']\"><i class=\"nc-icon nc-mobile\"></i>&nbsp; Contact Us</a>\n                        <a class=\"dropdown-item\" [routerLink]=\"['/examples/discover']\"><i class=\"nc-icon nc-world-2\"></i>&nbsp; Discover</a>\n                        <a class=\"dropdown-item\" [routerLink]=\"['/examples/ecommerce']\"><i class=\"nc-icon nc-send\"></i>&nbsp; Ecommerce</a>\n                        <a class=\"dropdown-item\" [routerLink]=\"['/examples/landing']\"><i class=\"nc-icon nc-spaceship\"></i>&nbsp; Landing Page</a>\n                        <a class=\"dropdown-item\" [routerLink]=\"['/examples/login']\"><i class=\"nc-icon nc-lock-circle-open\"></i>&nbsp; Login Page</a>\n                        <a class=\"dropdown-item\" [routerLink]=\"['/examples/productpage']\"><i class=\"nc-icon nc-album-2\"></i>&nbsp; Product Page</a>\n                        <a class=\"dropdown-item\" [routerLink]=\"['/examples/profile']\"><i class=\"nc-icon nc-single-02\"></i>&nbsp; Profile Page</a>\n                        <a class=\"dropdown-item\" [routerLink]=\"['/examples/register']\"><i class=\"nc-icon nc-bookmark-2\"></i>&nbsp; Register Page</a>\n                        <a class=\"dropdown-item\" [routerLink]=\"['/examples/search']\"><i class=\"nc-icon nc-zoom-split\"></i>&nbsp; Search Page</a>\n                        <a class=\"dropdown-item\" [routerLink]=\"['/examples/settings']\"><i class=\"nc-icon nc-settings-gear-65\"></i>&nbsp; Settings Page</a>\n                        <a class=\"dropdown-item\" [routerLink]=\"['/examples/twitter']\"><i class=\"nc-icon nc-tie-bow\"></i>&nbsp; Twitter</a>\n                    </div>\n                </div>\n                <li class=\"nav-item\">\n                    <a class=\"btn btn-round btn-danger\" href=\"https://www.creative-tim.com/product/paper-kit-2-pro-angular\">\n                        <i class=\"nc-icon nc-cart-simple\"></i> Buy now\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n";

/***/ }),

/***/ 9292:
/*!***********************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<div class=\"sidebar-wrapper\">\n  <div class=\"logo\">\n    <a href=\"http://www.creative-tim.com\" class=\"simple-text logo-mini\">\n      <div class=\"logo-image-small\">\n        <img src=\"assets/img/angular2-logo.png\">\n      </div>\n    </a>\n    <a href=\"https://www.creative-tim.com\" class=\"simple-text logo-normal\">\n      Creative Tim\n    </a>\n  </div>\n    <ul class=\"nav\">\n        <li *ngFor=\"let menuItem of menuItems\" routerLinkActive=\"active\" class=\"{{menuItem.class}}\">\n            <a [routerLink]=\"[menuItem.path]\">\n                <i class=\"nc-icon {{menuItem.icon}}\"></i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n    </ul>\n</div>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map