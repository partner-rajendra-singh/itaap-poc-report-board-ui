"use strict";
(self["webpackChunkitaap_ms_manager"] = self["webpackChunkitaap_ms_manager"] || []).push([["src_app_itaap-ms-manager_components_deployment_deployment-routing_module_ts"],{

/***/ 4717:
/*!*************************************************************************************!*\
  !*** ./src/app/itaap-ms-manager/components/deployment/deployment-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeploymentRoutingModule": () => (/* binding */ DeploymentRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [{
  path: 'builds',
  data: {
    breadcrumb: 'Builds'
  },
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_itaap-ms-manager_components_deployment_builds_builds-routing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./builds/builds-routing.module */ 4872)).then(m => m.BuildsRoutingModule)
}];
class DeploymentRoutingModule {}
DeploymentRoutingModule.ɵfac = function DeploymentRoutingModule_Factory(t) {
  return new (t || DeploymentRoutingModule)();
};
DeploymentRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: DeploymentRoutingModule
});
DeploymentRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DeploymentRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_itaap-ms-manager_components_deployment_deployment-routing_module_ts.js.map