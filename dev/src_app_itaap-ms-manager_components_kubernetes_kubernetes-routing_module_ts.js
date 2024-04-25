"use strict";
(self["webpackChunkitaap_ms_manager"] = self["webpackChunkitaap_ms_manager"] || []).push([["src_app_itaap-ms-manager_components_kubernetes_kubernetes-routing_module_ts"],{

/***/ 6590:
/*!*************************************************************************************!*\
  !*** ./src/app/itaap-ms-manager/components/kubernetes/kubernetes-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KubernetesRoutingModule": () => (/* binding */ KubernetesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [{
  path: 'history',
  data: {
    breadcrumb: 'Connection'
  },
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_itaap-ms-manager_components_kubernetes_connectivity-history_connectivity-routing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./connectivity-history/connectivity-routing.module */ 9678)).then(m => m.ConnectivityRoutingModule)
}, {
  path: 'test',
  data: {
    breadcrumb: 'Test'
  },
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_itaap-ms-manager_components_kubernetes_test-connectivity_test-connectivity-routing_mo-cb441f").then(__webpack_require__.bind(__webpack_require__, /*! ./test-connectivity/test-connectivity-routing.module */ 9334)).then(m => m.TestConnectivityRoutingModule)
}];
class KubernetesRoutingModule {}
KubernetesRoutingModule.ɵfac = function KubernetesRoutingModule_Factory(t) {
  return new (t || KubernetesRoutingModule)();
};
KubernetesRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: KubernetesRoutingModule
});
KubernetesRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](KubernetesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_itaap-ms-manager_components_kubernetes_kubernetes-routing_module_ts.js.map