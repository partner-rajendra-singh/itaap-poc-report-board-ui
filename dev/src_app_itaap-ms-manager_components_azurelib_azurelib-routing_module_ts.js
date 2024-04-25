"use strict";
(self["webpackChunkitaap_ms_manager"] = self["webpackChunkitaap_ms_manager"] || []).push([["src_app_itaap-ms-manager_components_azurelib_azurelib-routing_module_ts"],{

/***/ 2591:
/*!*********************************************************************************!*\
  !*** ./src/app/itaap-ms-manager/components/azurelib/azurelib-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AzurelibRoutingModule": () => (/* binding */ AzurelibRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [{
  path: 'variable',
  data: {
    breadcrumb: 'Library'
  },
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_itaap-ms-manager_components_azurelib_azure-variable_azure-variable-routing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./azure-variable/azure-variable-routing.module */ 8282)).then(m => m.AzureVariableRoutingModule)
}, {
  path: 'admin',
  data: {
    breadcrumb: 'Library'
  },
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_itaap-ms-manager_components_azurelib_azure-admin_admin-routing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./azure-admin/admin-routing.module */ 6191)).then(m => m.AdminRoutingModule)
}, {
  path: 'compare',
  data: {
    breadcrumb: 'Library'
  },
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_itaap-ms-manager_components_azurelib_compare_compare-routing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./compare/compare-routing.module */ 8064)).then(m => m.CompareRoutingModule)
}];
class AzurelibRoutingModule {}
AzurelibRoutingModule.ɵfac = function AzurelibRoutingModule_Factory(t) {
  return new (t || AzurelibRoutingModule)();
};
AzurelibRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: AzurelibRoutingModule
});
AzurelibRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AzurelibRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_itaap-ms-manager_components_azurelib_azurelib-routing_module_ts.js.map