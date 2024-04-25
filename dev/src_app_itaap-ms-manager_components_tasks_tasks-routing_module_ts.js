"use strict";
(self["webpackChunkitaap_ms_manager"] = self["webpackChunkitaap_ms_manager"] || []).push([["src_app_itaap-ms-manager_components_tasks_tasks-routing_module_ts"],{

/***/ 4909:
/*!***************************************************************************!*\
  !*** ./src/app/itaap-ms-manager/components/tasks/tasks-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TasksRoutingModule": () => (/* binding */ TasksRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [{
  path: 'lists',
  data: {
    breadcrumb: 'Tasks'
  },
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_itaap-ms-manager_components_tasks_todo_todo-routing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./todo/todo-routing.module */ 4132)).then(m => m.TodoRoutingModule)
}];
class TasksRoutingModule {}
TasksRoutingModule.ɵfac = function TasksRoutingModule_Factory(t) {
  return new (t || TasksRoutingModule)();
};
TasksRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: TasksRoutingModule
});
TasksRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TasksRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_itaap-ms-manager_components_tasks_tasks-routing_module_ts.js.map