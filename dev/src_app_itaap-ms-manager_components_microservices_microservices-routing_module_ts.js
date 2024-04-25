"use strict";
(self["webpackChunkitaap_ms_manager"] = self["webpackChunkitaap_ms_manager"] || []).push([["src_app_itaap-ms-manager_components_microservices_microservices-routing_module_ts"],{

/***/ 679:
/*!*******************************************************************************************!*\
  !*** ./src/app/itaap-ms-manager/components/microservices/microservices-routing.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MicroservicesRoutingModule": () => (/* binding */ MicroservicesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _microservices_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./microservices.component */ 3874);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: 'lists',
  component: _microservices_component__WEBPACK_IMPORTED_MODULE_0__.MicroservicesComponent
}];
class MicroservicesRoutingModule {}
MicroservicesRoutingModule.ɵfac = function MicroservicesRoutingModule_Factory(t) {
  return new (t || MicroservicesRoutingModule)();
};
MicroservicesRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: MicroservicesRoutingModule
});
MicroservicesRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MicroservicesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_itaap-ms-manager_components_microservices_microservices-routing_module_ts.js.map