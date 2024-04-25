"use strict";
(self["webpackChunkitaap_ms_manager"] = self["webpackChunkitaap_ms_manager"] || []).push([["src_app_itaap-ms-manager_components_auth_auth-routing_module_ts"],{

/***/ 5553:
/*!*************************************************************************!*\
  !*** ./src/app/itaap-ms-manager/components/auth/auth-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRoutingModule": () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



class AuthRoutingModule {}
AuthRoutingModule.ɵfac = function AuthRoutingModule_Factory(t) {
  return new (t || AuthRoutingModule)();
};
AuthRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: AuthRoutingModule
});
AuthRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild([{
    path: 'error',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_itaap-ms-manager_components_auth_error_error-routing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./error/error-routing.module */ 3973)).then(m => m.ErrorRoutingModule)
  }, {
    path: 'access',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_itaap-ms-manager_components_auth_access_access-routing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./access/access-routing.module */ 8844)).then(m => m.AccessRoutingModule)
  }, {
    path: 'login',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_itaap-ms-manager_components_auth_login_login-routing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login-routing.module */ 1615)).then(m => m.LoginRoutingModule)
  }, {
    path: 'signout',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_itaap-ms-manager_components_auth_signout_signout-routing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./signout/signout-routing.module */ 5155)).then(m => m.SignOutRoutingModule)
  }, {
    path: '**',
    redirectTo: '/notfound'
  }]), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_itaap-ms-manager_components_auth_auth-routing_module_ts.js.map