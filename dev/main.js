"use strict";
(self["webpackChunkitaap_ms_manager"] = self["webpackChunkitaap_ms_manager"] || []).push([["main"],{

/***/ 809:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _layout_main_app_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/main.app.layout.component */ 6580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _layout_main_app_layout_component__WEBPACK_IMPORTED_MODULE_0__.MainAppLayoutComponent,
  children: [{
    path: '',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_itaap-ms-manager_components_dashboard_dashboard-routing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./itaap-ms-manager/components/dashboard/dashboard-routing.module */ 1693)).then(m => m.DashboardRoutingModule)
  }, {
    path: 'home',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_itaap-ms-manager_components_dashboard_dashboard-routing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./itaap-ms-manager/components/dashboard/dashboard-routing.module */ 1693)).then(m => m.DashboardRoutingModule)
  }, {
    path: 'home',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_itaap-ms-manager_components_my-requests_my-requests-routing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./itaap-ms-manager/components/my-requests/my-requests-routing.module */ 2085)).then(m => m.MyRequestsRoutingModule)
  }, {
    path: 'add',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_itaap-ms-manager_components_add-data_add-data-routing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./itaap-ms-manager/components/add-data/add-data-routing.module */ 2717)).then(m => m.AddDataRoutingModule)
  }, {
    path: 'library',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_itaap-ms-manager_components_azurelib_azurelib-routing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./itaap-ms-manager/components/azurelib/azurelib-routing.module */ 2591)).then(m => m.AzurelibRoutingModule)
  }, {
    path: 'microservices',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_itaap-ms-manager_components_microservices_microservices-routing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./itaap-ms-manager/components/microservices/microservices-routing.module */ 679)).then(m => m.MicroservicesRoutingModule)
  }, {
    path: 'tasks',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_itaap-ms-manager_components_tasks_tasks-routing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./itaap-ms-manager/components/tasks/tasks-routing.module */ 4909)).then(m => m.TasksRoutingModule)
  }, {
    path: 'deployment',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_itaap-ms-manager_components_deployment_deployment-routing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./itaap-ms-manager/components/deployment/deployment-routing.module */ 4717)).then(m => m.DeploymentRoutingModule)
  }, {
    path: 'connectivity',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_itaap-ms-manager_components_kubernetes_kubernetes-routing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./itaap-ms-manager/components/kubernetes/kubernetes-routing.module */ 6590)).then(m => m.KubernetesRoutingModule)
  }]
}, {
  path: 'auth',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_itaap-ms-manager_components_auth_auth-routing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./itaap-ms-manager/components/auth/auth-routing.module */ 5553)).then(m => m.AuthRoutingModule)
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload'
  }), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 721:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class AppComponent {
  constructor(primengConfig) {
    this.primengConfig = primengConfig;
    this.title = 'itaap-ms-manager';
  }
  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeNGConfig));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
  encapsulation: 2
});

/***/ }),

/***/ 23:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 809);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 721);
/* harmony import */ var _itaap_ms_manager_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./itaap-ms-manager/components/components.module */ 683);
/* harmony import */ var _layout_main_app_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/main.app.layout.module */ 3693);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__.LocationStrategy,
    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__.HashLocationStrategy
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _layout_main_app_layout_module__WEBPACK_IMPORTED_MODULE_3__.MainAppLayoutModule, _itaap_ms_manager_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _layout_main_app_layout_module__WEBPACK_IMPORTED_MODULE_3__.MainAppLayoutModule, _itaap_ms_manager_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule]
  });
})();

/***/ }),

/***/ 9633:
/*!***********************************************!*\
  !*** ./src/app/itaap-ms-manager/api/enums.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Priority": () => (/* binding */ Priority),
/* harmony export */   "Role": () => (/* binding */ Role),
/* harmony export */   "Status": () => (/* binding */ Status)
/* harmony export */ });
var Status;
(function (Status) {
  Status["N"] = "new";
  Status["A"] = "accepted";
  Status["R"] = "rejected";
  Status["P"] = "inprogress";
  Status["C"] = "completed";
  Status["O"] = "overdue";
  Status["B"] = "blocked";
})(Status || (Status = {}));
var Role;
(function (Role) {
  Role["A"] = "Admin";
  Role["T"] = "Tech Lead";
  Role["D"] = "Developer";
  Role["M"] = "Scrum Master";
  Role["R"] = "Read";
  Role["C"] = "Client";
})(Role || (Role = {}));
var Priority;
(function (Priority) {
  Priority["C"] = "Critical";
  Priority["H"] = "High";
  Priority["M"] = "Medium";
  Priority["L"] = "Low";
})(Priority || (Priority = {}));

/***/ }),

/***/ 5488:
/*!****************************************************************************!*\
  !*** ./src/app/itaap-ms-manager/components/add-data/add-data.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddDataComponent": () => (/* binding */ AddDataComponent)
/* harmony export */ });
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _api_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/enums */ 9633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _add_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-data.service */ 5340);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/toast */ 9129);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/fileupload */ 6193);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dropdown */ 8992);








class AddDataComponent {
  constructor(addDataService, messageService) {
    this.addDataService = addDataService;
    this.messageService = messageService;
    this.todayDate = new Date();
    this.allRoles = [];
    this.newUser = {};
    this.newMicroservice = {};
    this.usersubmitted = false;
    this.mssubmitted = false;
    this.allRoles = Object.values(_api_enums__WEBPACK_IMPORTED_MODULE_0__.Role);
    this.populateAllDropdowns();
  }
  populateAllDropdowns() {
    this.addDataService.fetchAllClients().subscribe(response => this.allClients = response, error => console.log(error));
    this.addDataService.fetchAllDevelopers().subscribe(response => this.allDevelopers = response, error => console.log(error));
    this.addDataService.fetchAllScrumMasters().subscribe(response => this.allScrumMasters = response, error => console.log(error));
    this.addDataService.fetchAllTechLeads().subscribe(response => this.allTechLeads = response, error => console.log(error));
  }
  saveMicroservice() {
    this.mssubmitted = true;
    if (this.newMicroservice.name != undefined) {
      this.newMicroservice.techLeadID = this.techLead.id;
      this.newMicroservice.scrumMasterID = this.scrumMaster.id;
      this.newMicroservice.developerID = this.developer.id;
      this.newMicroservice.backupID = this.backup.id;
      this.newMicroservice.pocID = this.poc.id;
      this.newMicroservice.targetCompletionDate = this.targetDate;
      this.addDataService.addMicroservice(this.newMicroservice).subscribe(response => {
        this.mssubmitted = false;
        this.newMicroservice = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: "Successfully Added Microservice [" + response.name + "]."
        });
      }, error => {
        this.messageService.add({
          severity: 'error',
          summary: 'Failure : ' + error.error.errorCode,
          detail: "Failed : " + error.error.errorDesc
        });
      });
    }
  }
  saveUser() {
    this.usersubmitted = true;
    if (this.newUser.name != undefined && this.newUser.email != undefined) {
      const role = Object.values(_api_enums__WEBPACK_IMPORTED_MODULE_0__.Role).indexOf(this.selRole);
      this.newUser.role = Object.keys(_api_enums__WEBPACK_IMPORTED_MODULE_0__.Role)[role];
      this.addDataService.addUser(this.newUser).subscribe(response => {
        this.usersubmitted = false;
        this.newUser = {};
        this.populateAllDropdowns();
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: "Successfully Added User [" + response.name + "]."
        });
      }, error => {
        this.messageService.add({
          severity: 'error',
          summary: 'Failure : ' + error.error.errorCode,
          detail: "Failed : " + error.error.errorDesc
        });
      });
    }
  }
}
AddDataComponent.ɵfac = function AddDataComponent_Factory(t) {
  return new (t || AddDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_add_data_service__WEBPACK_IMPORTED_MODULE_1__.AddDataService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.MessageService));
};
AddDataComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AddDataComponent,
  selectors: [["app-add-data"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_3__.MessageService, primeng_api__WEBPACK_IMPORTED_MODULE_3__.ConfirmationService])],
  decls: 34,
  vars: 0,
  consts: [[1, "card"], [1, "text-900", "text-xl", "font-bold", "mb-4", "block"], [1, "grid"], [1, "col-12", "lg:col-2"], [1, "text-900", "font-medium", "text-xl", "mb-3"], [1, "m-0", "p-0", "text-600", "line-height-3", "mr-3"], [1, "col-12", "lg:col-10"], [1, "grid", "formgrid", "p-fluid"], [1, "field", "mb-4", "col-12"], ["for", "nickname", 1, "font-medium", "text-900"], ["id", "nickname", "type", "text", "pinputtext", "", 1, "p-inputtext", "p-component", "p-element"], ["for", "avatar", 1, "font-medium", "text-900"], ["mode", "basic", "name", "avatar", "url", "./upload.php", "accept", "image/*", "styleclass", "p-button-outlined p-button-plain", "chooselabel", "Upload Image", 1, "p-element"], [1, "field", "mb-4", "col-12", "md:col-6"], ["for", "email", 1, "font-medium", "text-900"], ["id", "email", "type", "text", "pinputtext", "", 1, "p-inputtext", "p-component", "p-element"], ["for", "country", 1, "font-medium", "text-900"], ["inputid", "country", "optionlabel", "name", "filterby", "name", "placeholder", "Select a Country", 1, "p-element", "p-inputwrapper"], [1, "p-dropdown", "p-component", "p-dropdown-clearable"], [1, "col-12"], ["pbutton", "", "pripple", "", "label", "Create User", 1, "p-element", "p-ripple", "w-auto", "mt-3", "p-button", "p-component"], [1, "p-button-label"], [1, "p-ink"]],
  template: function AddDataComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "p-toast");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0)(2, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Create User");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Odio euismod lacinia at quis risus sed vulputate odio.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 8)(17, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Avatar");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "p-fileUpload", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 13)(21, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 13)(25, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Country");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "p-dropdown", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 19)(30, "button", 20)(31, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Create User");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
  },
  dependencies: [primeng_toast__WEBPACK_IMPORTED_MODULE_4__.Toast, primeng_fileupload__WEBPACK_IMPORTED_MODULE_5__.FileUpload, primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__.Dropdown],
  encapsulation: 2
});

/***/ }),

/***/ 5340:
/*!**************************************************************************!*\
  !*** ./src/app/itaap-ms-manager/components/add-data/add-data.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddDataService": () => (/* binding */ AddDataService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _service_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/constants */ 2543);



class AddDataService {
  constructor(httpClient, constants) {
    this.httpClient = httpClient;
    this.constants = constants;
  }
  addUser(request) {
    let url = this.constants.hostname + 'create/user';
    return this.httpClient.post(url, request, this.constants.headerOptions);
  }
  addMicroservice(request) {
    let url = this.constants.hostname + 'create/microservice';
    return this.httpClient.post(url, request, this.constants.headerOptions);
  }
  addDeploymentDocuments(request) {
    let url = this.constants.hostname + 'update/documents';
    return this.httpClient.post(url, request, this.constants.headerOptions);
  }
  fetchAllTechLeads() {
    let url = this.constants.hostname + 'fetch/tech-leads';
    return this.httpClient.get(url, this.constants.headerOptions);
  }
  fetchAllDevelopers() {
    let url = this.constants.hostname + 'fetch/developers';
    return this.httpClient.get(url, this.constants.headerOptions);
  }
  fetchAllScrumMasters() {
    let url = this.constants.hostname + 'fetch/scrum-masters';
    return this.httpClient.get(url, this.constants.headerOptions);
  }
  fetchAllClients() {
    let url = this.constants.hostname + 'fetch/clients';
    return this.httpClient.get(url, this.constants.headerOptions);
  }
}
AddDataService.ɵfac = function AddDataService_Factory(t) {
  return new (t || AddDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service_constants__WEBPACK_IMPORTED_MODULE_0__.Constants));
};
AddDataService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AddDataService,
  factory: AddDataService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8577:
/*!*****************************************************************************!*\
  !*** ./src/app/itaap-ms-manager/components/auth/access/access.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessComponent": () => (/* binding */ AccessComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/ripple */ 4538);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




const _c0 = function () {
  return ["/"];
};
class AccessComponent {}
AccessComponent.ɵfac = function AccessComponent_Factory(t) {
  return new (t || AccessComponent)();
};
AccessComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AccessComponent,
  selectors: [["app-access"]],
  decls: 13,
  vars: 2,
  consts: [[1, "surface-ground", "flex", "align-items-center", "justify-content-center", "min-h-screen", "min-w-screen", "overflow-hidden"], [1, "flex", "flex-column", "align-items-center", "justify-content-center"], [2, "border-radius", "56px", "padding", "0.3rem", "background", "linear-gradient(180deg, rgba(247, 149, 48, 0.4) 10%, rgba(247, 149, 48, 0) 30%)"], [1, "w-full", "surface-card", "py-8", "px-5", "sm:px-8", "flex", "flex-column", "align-items-center", 2, "border-radius", "53px"], [1, "grid", "flex", "flex-column", "align-items-center"], [1, "flex", "justify-content-center", "align-items-center", "bg-orange-500", "border-circle", 2, "width", "3.2rem", "height", "3.2rem"], [1, "text-50", "pi", "pi-fw", "pi-lock", "text-2xl"], [1, "text-900", "font-bold", "text-4xl", "lg:text-5xl", "mb-2"], [1, "text-600", "mb-5"], ["src", "assets/itaap-ms-manager/images/access/asset-access.svg", "alt", "Access denied", "width", "80%", 1, "mb-5"], ["pButton", "", "pRipple", "", "icon", "pi pi-arrow-left", "label", "Go to Dashboard", 1, "p-button-text", 3, "routerLink"]],
  template: function AccessComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Access Denied");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "You do not have the necessary permisions. Please contact admins.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9)(12, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    }
  },
  dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_1__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_2__.Ripple, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
  encapsulation: 2
});

/***/ }),

/***/ 5313:
/*!******************************************************************!*\
  !*** ./src/app/itaap-ms-manager/components/auth/auth.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @azure/msal-angular */ 4084);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class AuthService {
  constructor(msalAuthService, router) {
    this.msalAuthService = msalAuthService;
    this.router = router;
    this.userName = "";
    this.userEmail = "";
    this.visibility = "hidden";
  }
  login() {
    /*this.aut9hService.loginRedirect()*/
    sessionStorage.clear();
    this.msalAuthService.loginPopup().subscribe({
      next: result => {
        console.log(result);
        this.setUserDisplay(result);
        this.router.navigateByUrl('/home/dashboard');
      },
      error: error => {
        console.log(error);
        this.router.navigateByUrl('/auth/access');
      }
    });
  }
  logout(event) {
    this.msalAuthService.logoutPopup({
      mainWindowRedirectUri: "/"
    }).subscribe({
      complete() {
        sessionStorage.clear();
        event.currentTarget.style.visibility = 'hidden';
      }
    });
  }
  setUserDisplay(authority) {
    if (authority.account.name) {
      this.userName = authority.account.name;
    } else {
      this.userName = authority.account.username;
    }
    this.userEmail = authority.account.username;
    sessionStorage.setItem("userName", this.userName);
    sessionStorage.setItem("userEmail", this.userEmail);
    sessionStorage.setItem("loggedIn", "true");
  }
}
AuthService.ɵfac = function AuthService_Factory(t) {
  return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_azure_msal_angular__WEBPACK_IMPORTED_MODULE_1__.MsalService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: AuthService,
  factory: AuthService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9450:
/*!***************************************************************************!*\
  !*** ./src/app/itaap-ms-manager/components/auth/error/error.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorComponent": () => (/* binding */ ErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/ripple */ 4538);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




const _c0 = function () {
  return ["/"];
};
class ErrorComponent {}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) {
  return new (t || ErrorComponent)();
};
ErrorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ErrorComponent,
  selectors: [["app-error"]],
  decls: 13,
  vars: 2,
  consts: [[1, "surface-ground", "flex", "align-items-center", "justify-content-center", "min-h-screen", "min-w-screen", "overflow-hidden"], [1, "flex", "flex-column", "align-items-center", "justify-content-center"], [2, "border-radius", "56px", "padding", "0.3rem", "background", "linear-gradient(180deg, rgba(233, 30, 99, 0.4) 10%, rgba(33, 150, 243, 0) 30%)"], [1, "w-full", "surface-card", "py-8", "px-5", "sm:px-8", "flex", "flex-column", "align-items-center", 2, "border-radius", "53px"], [1, "grid", "flex", "flex-column", "align-items-center"], [1, "flex", "justify-content-center", "align-items-center", "bg-pink-500", "border-circle", 2, "height", "3.2rem", "width", "3.2rem"], [1, "pi", "pi-fw", "pi-exclamation-circle", "text-2xl", "text-white"], [1, "text-900", "font-bold", "text-5xl", "mb-2"], [1, "text-600", "mb-5"], ["src", "assets/itaap-ms-manager/images/error/asset-error.svg", "alt", "Error", "width", "80%", 1, "mb-5"], ["pButton", "", "pRipple", "", "icon", "pi pi-arrow-left", "label", "Go to Dashboard", 1, "p-button-text", 3, "routerLink"]],
  template: function ErrorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Error Occured");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Requested resource is not available.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9)(12, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    }
  },
  dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_1__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_2__.Ripple, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
  encapsulation: 2
});

/***/ }),

/***/ 4336:
/*!***************************************************************************!*\
  !*** ./src/app/itaap-ms-manager/components/auth/login/login.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth.service */ 5313);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/ripple */ 4538);




class LoginComponent {
  constructor(authService) {
    this.authService = authService;
    this.valCheck = ['remember'];
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 17,
  vars: 0,
  consts: [[1, "surface-ground", "flex", "align-items-center", "justify-content-center", "min-h-screen", "min-w-screen", "overflow-hidden", "mt-2"], [1, "flex", "flex-column", "align-items-center", "justify-content-center"], [2, "border-radius", "56px", "padding", "0.3rem", "background", "linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)"], [1, "w-full", "surface-card", "py-8", "px-5", "sm:px-8", 2, "border-radius", "53px"], [1, "text-center", "mb-5"], ["src", "assets/itaap-ms-manager/images/login.svg", "alt", "Image", "height", "100", 1, "mb-3"], [1, "text-600", "text-2xl", "font-medium", "mb-3"], [1, "text-900", "text-3xl", "font-medium", "mb-3"], [1, "text-600", "font-medium"], ["pButton", "", "pRipple", "", "label", "Sign In", 1, "w-full", "p-3", "text-xl", 3, "click"], [1, "flex", "align-items-center", "justify-content-between", "mb-5", "gap-5"], ["href", "/", 1, "font-medium", "no-underline", "mt-2", "ml-2", "text-right", "cursor-pointer", 2, "color", "var(--primary-color)"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Welcome!");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Itaap Microservice Manager");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Sign in to continue");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div")(13, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_13_listener() {
        return ctx.authService.login();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10)(15, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Continue without signin");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    }
  },
  dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_2__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_3__.Ripple],
  styles: ["[_nghost-%COMP%]     .pi-eye, [_nghost-%COMP%]     .pi-eye-slash {\n  transform: scale(1.6);\n  margin-right: 1rem;\n  color: var(--primary-color) !important;\n}\n/*# sourceURL=webpack://./src/app/itaap-ms-manager/components/auth/login/login.component.ts */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaXRhYXAtbXMtbWFuYWdlci9jb21wb25lbnRzL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNROztFQUVJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtBQUFaIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5waS1leWUsXG46aG9zdCA6Om5nLWRlZXAgLnBpLWV5ZS1zbGFzaCB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS42KTtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 7515:
/*!*******************************************************************************!*\
  !*** ./src/app/itaap-ms-manager/components/auth/signout/signout.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignOutComponent": () => (/* binding */ SignOutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth.service */ 5313);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/ripple */ 4538);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);





const _c0 = function () {
  return ["/"];
};
class SignOutComponent {
  constructor(authService) {
    this.authService = authService;
    this.valCheck = ['remember'];
  }
}
SignOutComponent.ɵfac = function SignOutComponent_Factory(t) {
  return new (t || SignOutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
};
SignOutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SignOutComponent,
  selectors: [["app-signout"]],
  decls: 11,
  vars: 2,
  consts: [[1, "surface-ground", "flex", "align-items-center", "justify-content-center", "min-h-screen", "min-w-screen", "overflow-hidden"], [1, "flex", "flex-column", "align-items-center", "justify-content-center"], [2, "border-radius", "56px", "padding", "0.3rem", "background", "linear-gradient(180deg, rgba(14, 217, 48, 0.4) 10%, rgba(33, 150, 243, 0) 30%)"], [1, "w-full", "surface-card", "py-8", "px-5", "sm:px-8", "flex", "flex-column", "align-items-center", 2, "border-radius", "53px"], [1, "grid", "flex", "flex-column", "align-items-center"], ["src", "assets/itaap-ms-manager/images/login.svg", "alt", "Error", "width", "60%", 1, "mb-5"], [1, "text-900", "font-bold", "text-3xl", "mb-2"], [1, "text-600", "mb-5"], ["pButton", "", "pRipple", "", "icon", "pi pi-arrow-left", "label", "Go to Dashboard", 1, "p-button-text", 3, "routerLink"]],
  template: function SignOutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Itaap Microservice Manager");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Successfully Signed Out!");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
    }
  },
  dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_2__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_3__.Ripple, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
  styles: ["[_nghost-%COMP%]     .pi-eye, [_nghost-%COMP%]     .pi-eye-slash {\n  transform: scale(1.6);\n  margin-right: 1rem;\n  color: var(--primary-color) !important;\n}\n/*# sourceURL=webpack://./src/app/itaap-ms-manager/components/auth/signout/signout.component.ts */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaXRhYXAtbXMtbWFuYWdlci9jb21wb25lbnRzL2F1dGgvc2lnbm91dC9zaWdub3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUTs7RUFFSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7QUFBWiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAucGktZXllLFxuOmhvc3QgOjpuZy1kZWVwIC5waS1leWUtc2xhc2gge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuNik7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpICFpbXBvcnRhbnQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8406:
/*!*******************************************************************************************!*\
  !*** ./src/app/itaap-ms-manager/components/azurelib/azure-admin/azure-admin.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AzureAdminComponent": () => (/* binding */ AzureAdminComponent)
/* harmony export */ });
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _azure_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../azure.service */ 9608);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/card */ 4357);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/checkbox */ 749);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */ 9129);











function AzureAdminComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 9)(8, "div", 10)(9, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AzureAdminComponent_ng_template_3_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.onRetry());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const message_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r2.summary);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r2.detail);
  }
}
function AzureAdminComponent_div_8_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "p-tableHeaderCheckbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "p-columnFilter", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Secret");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function AzureAdminComponent_div_8_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "p-tableCheckbox", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "p-checkbox", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const variable_r10 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", variable_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](variable_r10.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](variable_r10.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("binary", true)("ngModel", ctx_r8.fetchValues(variable_r10, "secret"))("disabled", true);
  }
}
const _c0 = function () {
  return {
    "margin-left": ".5em"
  };
};
function AzureAdminComponent_div_8_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27)(1, "div")(2, "p-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AzureAdminComponent_div_8_ng_template_7_Template_p_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const request_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.approveRequest(request_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AzureAdminComponent_div_8_ng_template_7_Template_p_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const request_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r15.rejectRequest(request_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 30)(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const request_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](request_r5.requestDate);
  }
}
const _c1 = function () {
  return {
    width: "1510px"
  };
};
const _c2 = function () {
  return {
    "table-layout": "fixed",
    "min-width": "75rem"
  };
};
const _c3 = function () {
  return ["key"];
};
function AzureAdminComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "p-card", 12)(2, "div")(3, "p-table", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function AzureAdminComponent_div_8_Template_p_table_selectionChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r18.selectedVariables = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AzureAdminComponent_div_8_ng_template_5_Template, 10, 0, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AzureAdminComponent_div_8_ng_template_6_Template, 10, 6, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AzureAdminComponent_div_8_ng_template_7_Template, 7, 4, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const request_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("header", request_r5.requester)("subheader", request_r5.azureGroupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", request_r5.modifiedVariables)("selection", ctx_r1.selectedVariables)("rowHover", true)("scrollable", true)("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c2))("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c3));
  }
}
class AzureAdminComponent {
  constructor(azureService, messageService) {
    this.azureService = azureService;
    this.messageService = messageService;
    this.modifiedVariables = [];
    this.allRequests = [];
    this.approver = "Pankajkumar Patel";
    this.base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
  }
  ngOnInit() {
    this.getRequests();
  }
  getRequests() {
    this.azureService.getRequests(this.approver).subscribe(response => {
      console.log("response : " + response);
      this.handleSuccessfulResponse(response);
      this.messageService.add({
        key: 'success',
        severity: 'success',
        summary: 'Success',
        detail: "Successfully Fetched " + this.allRequests.length + " Requests"
      });
    }, error => {
      console.log("error : " + error);
      this.httpError = error;
      this.messageService.add({
        key: 'retry',
        severity: 'error',
        sticky: true,
        summary: error.statusText,
        detail: error.message
      });
    });
  }
  onRetry() {
    this.getRequests();
    this.messageService.clear('retry');
  }
  handleSuccessfulResponse(response) {
    this.allRequests = response;
    if (response.length > 0) {
      this.allRequests = response;
      for (let i = 0; i < this.allRequests.length; i++) {
        this.allRequests[i].modifiedVariables = JSON.parse(this.allRequests[i].modifiedVariables);
        this.allRequests[i].updatedAllVariables = JSON.parse(this.allRequests[i].updatedAllVariables);
      }
      console.log(this.modifiedVariables);
    }
  }
  toggleEncryptedVariable(event, variableValue, variable) {
    if (variable.secret && variable.encrypted) {
      if (this.base64regex.test(variableValue.textContent)) {
        event.currentTarget.children[0].classList.value = "p-button-icon pi pi-eye-slash";
        variableValue.textContent = atob(variableValue.textContent);
      } else {
        event.currentTarget.children[0].classList.value = "p-button-icon pi pi-eye";
        variableValue.textContent = btoa(variableValue.textContent);
      }
    }
  }
  fetchValues(variable, keyName) {
    return variable[keyName];
  }
  approveRequest(request) {
    this.azureService.approveRequest(request).subscribe(response => {
      this.messageService.add({
        key: 'success',
        severity: 'success',
        summary: 'Success',
        detail: "Successfully approved request"
      });
      this.getRequests();
    }, error => {
      console.log("error : " + error);
      this.httpError = error;
      this.messageService.add({
        key: 'retry',
        severity: 'error',
        sticky: true,
        summary: error.statusText,
        detail: error.message
      });
    });
  }
  rejectRequest(request) {
    this.azureService.rejectRequest(request).subscribe(response => {
      this.messageService.add({
        key: 'success',
        severity: 'success',
        summary: 'Success',
        detail: "Successfully rejected request"
      });
      this.getRequests();
    }, error => {
      console.log("error : " + error);
      this.httpError = error;
      this.messageService.add({
        key: 'retry',
        severity: 'error',
        sticky: true,
        summary: error.statusText,
        detail: error.message
      });
    });
  }
}
AzureAdminComponent.ɵfac = function AzureAdminComponent_Factory(t) {
  return new (t || AzureAdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_azure_service__WEBPACK_IMPORTED_MODULE_0__.AzureService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__.MessageService));
};
AzureAdminComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AzureAdminComponent,
  selectors: [["app-azure-admin"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_2__.MessageService])],
  decls: 12,
  vars: 2,
  consts: [["key", "success"], ["key", "retry"], ["pTemplate", "message"], [1, "text-900", "font-medium", "text-3xl", "textOverflow"], [4, "ngFor", "ngForOf"], [1, "block", "text-500", "font-medium", "text-xl", "mb-3"], [1, "flex", "flex-column", 2, "flex", "1"], [1, "text-center"], [1, "pi", "pi-exclamation-triangle", 2, "font-size", "3rem"], [1, "grid", "p-fluid"], [1, "col-12"], ["type", "button", "icon", "pi pi-refresh", "pButton", "", "label", "Retry", 1, "p-button-danger", 3, "click"], ["styleClass", "p-card-shadow", 3, "header", "subheader"], ["scrollHeight", "45vh", "styleClass", "p-datatable-sm", 3, "value", "selection", "rowHover", "scrollable", "tableStyle", "globalFilterFields", "selectionChange"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "footer"], [2, "width", "5%"], [2, "width", "40%"], ["type", "text", "field", "key", "display", "menu"], [2, "width", "70%"], [2, "width", "20%"], [3, "value"], [1, "textOverflow"], ["variableValue", ""], [3, "binary", "ngModel", "disabled"], [1, "flex"], ["label", "Approve", "icon", "pi pi-check", 3, "click"], ["label", "Reject", "icon", "pi pi-times", "styleClass", "p-button-secondary", 3, "click"], [1, "ml-auto"]],
  template: function AzureAdminComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-toast")(1, "p-toast", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p-toast", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AzureAdminComponent_ng_template_3_Template, 10, 2, "ng-template", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Azure Admin Portal");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br")(7, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AzureAdminComponent_div_8_Template, 9, 13, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div")(10, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.allRequests);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.allRequests.length === 0 ? "No Requests Found." : "");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, primeng_card__WEBPACK_IMPORTED_MODULE_5__.Card, primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_6__.Button, primeng_checkbox__WEBPACK_IMPORTED_MODULE_7__.Checkbox, primeng_table__WEBPACK_IMPORTED_MODULE_8__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_8__.TableCheckbox, primeng_table__WEBPACK_IMPORTED_MODULE_8__.TableHeaderCheckbox, primeng_table__WEBPACK_IMPORTED_MODULE_8__.ColumnFilter, primeng_toast__WEBPACK_IMPORTED_MODULE_9__.Toast],
  encapsulation: 2
});

/***/ }),

/***/ 8067:
/*!*************************************************************************************************!*\
  !*** ./src/app/itaap-ms-manager/components/azurelib/azure-variable/azure-variable.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AzureVariableComponent": () => (/* binding */ AzureVariableComponent)
/* harmony export */ });
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ 5226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _azure_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../azure.service */ 9608);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_listbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/listbox */ 2210);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/ripple */ 4538);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/tooltip */ 4329);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/divider */ 1154);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/checkbox */ 749);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dialog */ 1837);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputtextarea */ 1102);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/toast */ 9129);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/badge */ 2381);
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/overlaypanel */ 6664);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/fileupload */ 6193);
/* harmony import */ var primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/confirmpopup */ 2919);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/tag */ 3042);























function AzureVariableComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 43)(1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 46)(8, "div", 47)(9, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AzureVariableComponent_ng_template_4_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r14.onRetry());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const message_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](message_r13.summary);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](message_r13.detail);
  }
}
function AzureVariableComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Total records : ", ctx_r1.allVariableGrpsList.length, "");
  }
}
function AzureVariableComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 50)(1, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AzureVariableComponent_div_40_Template_span_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](46);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r16.overlayToggle($event, _r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " manage_history ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "View Changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r2.modifiedVariables.length.toString());
  }
}
function AzureVariableComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28)(1, "div", 53)(2, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " task_alt ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "No Changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function AzureVariableComponent_ng_template_47_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Field");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function AzureVariableComponent_ng_template_47_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Key");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "tr")(6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "tr")(11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Secret");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const mVariable_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](mVariable_r20.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](mVariable_r20.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](mVariable_r20.secret);
  }
}
function AzureVariableComponent_ng_template_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-table", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AzureVariableComponent_ng_template_47_ng_template_1_Template, 5, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AzureVariableComponent_ng_template_47_ng_template_2_Template, 15, 3, "ng-template", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r5.modifiedVariables);
  }
}
function AzureVariableComponent_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 56)(1, "div", 57)(2, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AzureVariableComponent_ng_template_52_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r21.createNew());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AzureVariableComponent_ng_template_52_Template_button_click_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r23.deleteSelectedVariables($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "p-confirmPopup", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 61)(6, "p-fileUpload", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AzureVariableComponent_ng_template_52_Template_p_fileUpload_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r24.importExcel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AzureVariableComponent_ng_template_52_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r25.exportExcel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r7.groupSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r7.selectedVariables || !ctx_r7.selectedVariables.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r7.groupSelected)("maxFileSize", 1000000);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r7.groupSelected);
  }
}
function AzureVariableComponent_ng_template_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "p-tableHeaderCheckbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "p-columnFilter", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "th", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "th", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Secret");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "th", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AzureVariableComponent_ng_template_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "p-tableCheckbox", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 71, 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td")(9, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AzureVariableComponent_ng_template_54_Template_button_click_9_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29);
      const variable_r26 = restoredCtx.$implicit;
      const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r28.toggleEncryptedVariable($event, _r27, variable_r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "p-checkbox", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td", 75)(13, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AzureVariableComponent_ng_template_54_Template_button_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29);
      const variable_r26 = restoredCtx.$implicit;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r30.editVariable(variable_r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AzureVariableComponent_ng_template_54_Template_button_click_14_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29);
      const variable_r26 = restoredCtx.$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r31.deleteVariable($event, variable_r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const variable_r26 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", variable_r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", variable_r26.key, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](variable_r26.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r9.fetchValues(variable_r26, "secret"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("binary", true)("ngModel", ctx_r9.fetchValues(variable_r26, "secret"))("disabled", true);
  }
}
function AzureVariableComponent_ng_template_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "No variables found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function AzureVariableComponent_ng_template_57_small_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AzureVariableComponent_ng_template_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 79)(1, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AzureVariableComponent_ng_template_57_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r33.selectedVariable.key = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AzureVariableComponent_ng_template_57_small_4_Template, 2, 0, "small", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 79)(6, "label", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "textarea", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AzureVariableComponent_ng_template_57_Template_textarea_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r35.selectedVariable.value = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 79)(10, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Severity");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 86)(13, "div", 87)(14, "p-checkbox", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AzureVariableComponent_ng_template_57_Template_p_checkbox_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r36.selectedVariable.secret = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Secret");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r11.selectedVariable.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r11.submitted && !ctx_r11.selectedVariable.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r11.selectedVariable.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("binary", true)("ngModel", ctx_r11.selectedVariable.secret);
  }
}
function AzureVariableComponent_ng_template_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AzureVariableComponent_ng_template_58_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r37.hideDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AzureVariableComponent_ng_template_58_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r38);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r39.saveVariable());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return {
    "max-height": "calc(100vh - 20rem)",
    "font-size": "12px"
  };
};
const _c1 = function () {
  return {
    width: "450px"
  };
};
const _c2 = function () {
  return {
    "table-layout": "fixed",
    "min-width": "75rem"
  };
};
const _c3 = function () {
  return ["key"];
};
class AzureVariableComponent {
  constructor(azureService, messageService, confirmationService) {
    this.azureService = azureService;
    this.messageService = messageService;
    this.confirmationService = confirmationService;
    this.userName = "";
    this.userEmail = "";
    this.userOverlayVisible = false;
    this.loggedIn = false;
    this.modifiedGroup = {
      azureGroupName: '',
      updatedAllVariables: [],
      modifiedVariables: [],
      requester: '',
      approver: ''
    };
    this.items = [];
    this.base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
    this.variables = [];
    this.variablesRef = [];
    this.modifiedVariables = [];
    this.response = {
      name: '',
      secrets: 0,
      variableValues: []
    };
    this.isNewVariable = false;
    this.loginDialog = false;
    this.groupSelected = false;
    this.selectedGrpName = 'Select a Variable Group';
    this.oldGrpName = '';
    this.allVariableGrpsList = [];
    this.tabItems = [];
    this.displayModal = false;
  }
  ngOnInit() {
    this.getVariableGroups();
  }
  getVariableGroups() {
    this.azureService.getVariableGroups().subscribe(response => {
      this.handleSuccessfulResponse(response);
      this.messageService.add({
        key: 'success',
        severity: 'success',
        summary: 'Success',
        detail: "Successfully Fetched " + this.allVariableGrpsList.length + " Variable Groups"
      });
    }, error => {
      this.httpError = error;
      this.messageService.add({
        key: 'retry',
        severity: 'error',
        sticky: true,
        summary: error.statusText,
        detail: error.message
      });
    });
  }
  toggle() {
    this.userOverlayVisible = !this.userOverlayVisible;
  }
  onRetry() {
    this.getVariableGroups();
    this.messageService.clear('retry');
  }
  handleSuccessfulResponse(response) {
    if (this.loggedIn) {
      this.messageService.add({
        key: 'success',
        severity: 'success',
        summary: 'Login Success!',
        detail: this.userName + ' (' + this.userEmail + ')' + ' logged in successfully'
      });
    }
    this.allVarGrp = response.value;
    let arr = [];
    for (let i = 0; i < response.value.length; i++) {
      arr.push({
        name: response.value[i].name,
        id: response.value[i].id
      });
    }
    this.allVariableGrpsList = arr;
  }
  onSelectGrp() {
    if (this.modifiedVariables.length == 0) {
      for (let i = 0; i < this.allVarGrp.length; i++) {
        if (this.allVarGrp[i].name == this.selectedGrpName) {
          this.selectedGrp = this.allVarGrp[i];
          break;
        }
      }
      this.oldGrpName = this.selectedGrpName;
      this.groupSelected = true;
      this.azureService.fetchVariablesFromGroup(this.selectedGrpName).subscribe(response => this.receivedVariables(response), error => {
        this.httpError = error;
        /*this.receivedVariables(null);*/
        this.messageService.add({
          key: 'retry',
          severity: 'error',
          summary: error.statusText,
          detail: error.message
        });
      });
    } else {
      this.selectedGrpName = this.oldGrpName;
      this.messageService.add({
        severity: 'error',
        summary: 'Failure',
        detail: 'There are unsaved changes for the selected variable group',
        life: 3000
      });
    }
  }
  receivedVariables(response) {
    this.variables = response.variableValues;
    this.response = response;
    /*this.variables = JSON.parse(res).variableValues;
    this.variablesRef = JSON.parse(res).variableValues;*/
  }

  showGrpInfo() {
    this.displayModal = true;
  }
  fetchValues(variable, keyName) {
    return variable[keyName];
  }
  getGrpDetails(key, childKey) {
    if (this.selectedGrp !== undefined) {
      if (childKey == '' || childKey == "") {
        return this.selectedGrp[key];
      } else {
        return this.selectedGrp[key][childKey];
      }
    } else {
      return key;
    }
  }
  hideDialog() {
    this.selectedVariable = undefined;
    this.variableDialog = false;
    this.submitted = false;
  }
  saveVariable() {
    this.submitted = true;
    this.selectedVariable.encrypted = this.selectedVariable.secret;
    if (this.selectedVariable.key.trim()) {
      if (this.selectedVariable.key && !this.isNewVariable) {
        if (JSON.stringify(this.variables[this.findIndexByID(this.selectedVariable.index)]) === JSON.stringify(this.selectedVariable)) {
          this.messageService.add({
            severity: 'warn',
            summary: 'Warning!',
            detail: 'Not changes detected, variable not updated.',
            life: 3000
          });
        } else {
          this.variables[this.findIndexByID(this.selectedVariable.index)] = this.selectedVariable;
          this.modifiedVariables.push(this.selectedVariable);
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Variable Updated',
            life: 3000
          });
        }
      } else {
        this.selectedVariable.index = this.variables.length + 1;
        if (this.findIndexByID(this.selectedVariable.index) == -1) {
          this.variables.push(this.selectedVariable);
          this.modifiedVariables.push(this.selectedVariable);
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Variable Created',
            life: 3000
          });
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Failure',
            detail: this.selectedVariable.key + ' already exists',
            life: 3000
          });
        }
        this.isNewVariable = false;
      }
      this.variables = [...this.variables];
      this.variableDialog = false;
      this.selectedVariable = {
        key: '',
        value: '',
        secret: false,
        encrypted: false
      };
    }
  }
  findIndexByID(id) {
    let index = -1;
    for (let i = 0; i < this.variables.length; i++) {
      if (this.variables[i].index === id) {
        index = i;
        break;
      }
    }
    return index;
  }
  createNew() {
    this.selectedVariable = {
      key: '',
      value: '',
      secret: false,
      encrypted: false
    };
    this.submitted = false;
    this.variableDialog = true;
    this.isNewVariable = true;
  }
  editVariable(variable) {
    this.selectedVariable = {
      ...variable
    };
    this.variableDialog = true;
  }
  encryptVariable() {
    this.selectedVariable.value = btoa(this.selectedVariable.value);
  }
  toggleEncryptedVariable(event, variableValue, variable) {
    if (variable.secret && variable.encrypted) {
      if (this.base64regex.test(variableValue.textContent)) {
        event.currentTarget.children[0].classList.value = "p-button-icon pi pi-eye-slash";
        variableValue.textContent = atob(variableValue.textContent);
      } else {
        event.currentTarget.children[0].classList.value = "p-button-icon pi pi-eye";
        variableValue.textContent = btoa(variableValue.textContent);
      }
    }
  }
  clearModifiedVariable() {
    this.modifiedVariables = [];
    this.variables = this.response.variableValues;
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Discarded all changes!',
      life: 3000
    });
  }
  deleteVariable(event, variable) {
    this.confirmationService.confirm({
      key: 'confirm_selected_variables',
      target: event.target || new EventTarget(),
      message: 'Are you sure you want to delete ' + variable.key + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.variables = this.variables.filter(val => val.key !== variable.key);
        this.selectedVariable = {
          key: '',
          value: '',
          secret: false
        };
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Variable Deleted',
          life: 3000
        });
      }
    });
  }
  deleteSelectedVariables(event) {
    this.confirmationService.confirm({
      key: 'confirm_selected_variables',
      target: event.target || new EventTarget(),
      message: 'Are you sure you want to delete the selected variables ?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.variables = this.variables.filter(val => !this.selectedVariables.includes(val));
        this.selectedVariables = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Variables Deleted',
          life: 3000
        });
      }
    });
  }
  overlayToggle(event, op) {
    op.toggle(event);
  }
  exportExcel() {
    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! xlsx */ 4126)).then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.variables);
      const workbook = {
        Sheets: {
          'data': worksheet
        },
        SheetNames: ['data']
      };
      const excelBuffer = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array'
      });
      this.saveAsExcelFile(excelBuffer, this.selectedGrpName);
    });
  }
  importExcel() {}
  saveAsExcelFile(buffer, fileName) {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    file_saver__WEBPACK_IMPORTED_MODULE_0__.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }
  routeForApproval() {
    this.modifiedGroup.azureGroupName = this.selectedGrpName;
    this.modifiedGroup.updatedAllVariables = this.variables;
    this.modifiedGroup.modifiedVariables = this.modifiedVariables;
    this.modifiedGroup.requester = "Soumendu";
    this.modifiedGroup.approver = this.getGrpDetails('createdBy', 'displayName');
    this.azureService.sendVarGrpForApproval(this.modifiedGroup).subscribe(response => {
      this.clearModifiedVariable();
      this.messageService.add({
        severity: 'success',
        summary: response.status,
        detail: response.message
      });
    }, error => {
      console.log(error);
      this.httpError = error;
      this.messageService.add({
        severity: 'error',
        summary: error.statusText,
        detail: error.message
      });
    });
  }
}
AzureVariableComponent.ɵfac = function AzureVariableComponent_Factory(t) {
  return new (t || AzureVariableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_azure_service__WEBPACK_IMPORTED_MODULE_1__.AzureService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.ConfirmationService));
};
AzureVariableComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AzureVariableComponent,
  selectors: [["ng-component"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_3__.MessageService, primeng_api__WEBPACK_IMPORTED_MODULE_3__.ConfirmationService])],
  decls: 59,
  vars: 39,
  consts: [[1, "grid"], ["key", "success"], ["key", "retry"], ["pTemplate", "message"], [1, "col-12", "lg:col-4", "xl:col-3"], ["optionLabel", "name", "optionValue", "name", 3, "options", "ngModel", "listStyle", "filter", "click", "ngModelChange"], ["pTemplate", "header"], [1, "col-12", "lg:col-8", "xl:col-9"], [1, "col-12", "lg:col-12", "xl:col-6"], [1, "card", 2, "min-height", "180px"], [1, "block", "text-500", "font-medium", "mb-3"], [1, "flex", "justify-content-between", "mb-3"], [1, "text-900", "font-medium", "text-xl", "textOverflow"], ["icon", "pi pi-hashtag", "pTooltip", "Group ID", "tooltipPosition", "bottom", "styleClass", "mr-2", "severity", "info", 3, "rounded", "value"], ["icon", "pi pi-book", "pTooltip", "Description", "tooltipPosition", "bottom", "styleClass", "mt-2 mr-2", "severity", "success", 3, "rounded", "value"], ["icon", "pi pi-user", "pTooltip", "Administrator", "tooltipPosition", "bottom", "styleClass", "mt-2 mr-2", "severity", "warning", 3, "rounded", "value"], ["icon", "pi pi-user", "pTooltip", "Last Modified By", "tooltipPosition", "bottom", "styleClass", "mt-2 mr-2", 3, "rounded", "value"], [1, "col-12", "xs:col-3", "sm:col-3", "lg:col-3", "xl:col-3"], [1, "justify-content-between", "mb-2"], [1, "text-green-500", "font-medium", "text-xl"], [1, "text-750", "font-medium", "text-xl"], [1, "text-500"], [1, "col-12", "xs:col-1", "sm:col-1", "lg:col-1", "xl:col-1"], ["layout", "vertical"], [1, "col-12", "xs:col-4", "sm:col-8", "lg:col-8", "xl:col-8"], [1, "block", "text-500", "font-medium", "mb-2"], ["class", "p-link col-6", "style", "align-self: end; text-align: center", 4, "ngIf"], ["class", "col-6", 4, "ngIf"], [1, "col-6"], ["pButton", "", "pRipple", "", "type", "button", "label", "Discard Changes", 1, "p-button-sm", "mb-2", "p-button-outlined", 2, "width", "-webkit-fill-available", 3, "disabled", "click"], ["pButton", "", "pRipple", "", "type", "button", "label", "Route for Approval", 1, "p-button-sm", 2, "width", "-webkit-fill-available", 3, "disabled", "click"], ["op", ""], ["pTemplate", ""], [1, "col-12", "lg:col-12", "xl:col-12"], [1, "card"], ["scrollHeight", "45vh", "styleClass", "p-datatable-sm", 3, "value", "resizableColumns", "selection", "rowHover", "scrollable", "tableStyle", "globalFilterFields", "selectionChange"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["header", "Variable Details", "styleClass", "p-fluid", 3, "visible", "modal", "draggable", "resizable", "visibleChange"], ["pTemplate", "content"], ["pTemplate", "footer"], [1, "flex", "flex-column", 2, "flex", "1"], [1, "text-center"], [1, "pi", "pi-exclamation-triangle", 2, "font-size", "3rem"], [1, "grid", "p-fluid"], [1, "col-12"], ["type", "button", "icon", "pi pi-refresh", "pButton", "", "label", "Retry", 1, "p-button-danger", 3, "click"], [1, "text-600", "font-medium", "text-sm"], [1, "p-link", "col-6", 2, "align-self", "end", "text-align", "center"], ["pBadge", "", "severity", "danger", 1, "material-symbols-outlined", "p-text-secondary", "ml-auto", 2, "font-size", "2rem", 3, "value", "click"], [1, "text-900", "font-medium", "text-xl"], [1, "p-link", 2, "align-self", "end", "text-align", "center"], [1, "material-symbols-outlined", "p-text-secondary", "ml-auto", 2, "font-size", "2rem"], ["responsiveLayout", "scroll", 3, "value"], [1, "flex"], [1, "mr-2"], ["pButton", "", "pRipple", "", "icon", "pi pi-plus", "pTooltip", "Add a variable", "tooltipPosition", "bottom", 1, "p-button-success", "mr-2", 3, "disabled", "click"], ["pButton", "", "pRipple", "", "icon", "pi pi-trash", "pTooltip", "Delete selected variables", "tooltipPosition", "bottom", 1, "p-button-danger", 3, "disabled", "click"], ["key", "confirm_selected_variables"], [1, "ml-auto"], ["mode", "basic", "accept", ".csv,.excel,.xlsx", "pTooltip", "Import", "tooltipPosition", "bottom", "label", "Import", "chooseLabel", "Import", 1, "mr-2", "p-button-sm", "inline-block", 3, "disabled", "maxFileSize", "click"], ["type", "button", "label", "Export", "pButton", "", "pRipple", "", "icon", "pi pi-file-excel", "pTooltip", "XLS", "tooltipPosition", "bottom", 1, "p-button-success", 3, "disabled", "click"], [2, "width", "5%"], ["pResizableColumn", "", 2, "width", "30%"], ["type", "text", "field", "key", "display", "menu"], ["pResizableColumn", "", 2, "width", "90%"], [2, "width", "10%"], [2, "width", "15%"], [3, "value"], [1, "textOverflow"], ["variableValue", ""], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-eye", 1, "p-button-rounded", "p-button-success", "p-button-text", 3, "disabled", "click"], [3, "binary", "ngModel", "disabled"], [1, "justify-content-between"], ["pButton", "", "pRipple", "", "icon", "pi pi-pencil", 1, "p-button-rounded", "p-button-sm", "p-button-success", "mr-2", 3, "click"], ["pButton", "", "pRipple", "", "icon", "pi pi-trash", 1, "p-button-rounded", "p-button-sm", "p-button-warning", 3, "click"], ["colspan", "6"], [1, "field"], ["for", "name"], ["type", "text", "pInputText", "", "id", "name", "required", "", "autofocus", "", 3, "ngModel", "ngModelChange"], ["class", "p-error", 4, "ngIf"], ["for", "description"], ["id", "description", "pInputTextarea", "", "required", "", "rows", "3", "cols", "20", 3, "ngModel", "ngModelChange"], [1, "mb-3"], [1, "formgrid", "grid"], [1, "field-radiobutton", "col-6"], ["id", "secret", 3, "binary", "ngModel", "ngModelChange"], ["for", "secret"], [1, "p-error"], ["pButton", "", "pRipple", "", "label", "Cancel", "icon", "pi pi-times", 1, "p-button-text", 3, "click"], ["pButton", "", "pRipple", "", "label", "Save", "icon", "pi pi-check", 1, "p-button-text", 3, "click"]],
  template: function AzureVariableComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "p-toast")(2, "p-toast", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p-toast", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AzureVariableComponent_ng_template_4_Template, 10, 2, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "p-listbox", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AzureVariableComponent_Template_p_listbox_click_6_listener() {
        return ctx.onSelectGrp();
      })("ngModelChange", function AzureVariableComponent_Template_p_listbox_ngModelChange_6_listener($event) {
        return ctx.selectedGrpName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AzureVariableComponent_ng_template_7_Template, 2, 1, "ng-template", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7)(9, "div", 0)(10, "div", 8)(11, "div", 9)(12, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Variable Group Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 11)(15, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "p-tag", 13)(18, "p-tag", 14)(19, "p-tag", 15)(20, "p-tag", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 8)(22, "div", 9)(23, "div", 0)(24, "div", 17)(25, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Statistics");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 18)(28, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Total");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "p-divider", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 24)(37, "span", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Changes");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, AzureVariableComponent_div_40_Template, 5, 1, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, AzureVariableComponent_div_41_Template, 6, 0, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 28)(43, "button", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AzureVariableComponent_Template_button_click_43_listener() {
        return ctx.clearModifiedVariable();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "button", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AzureVariableComponent_Template_button_click_44_listener() {
        return ctx.routeForApproval();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "p-overlayPanel", null, 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, AzureVariableComponent_ng_template_47_Template, 3, 1, "ng-template", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 33)(49, "div", 34)(50, "p-table", 35, 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function AzureVariableComponent_Template_p_table_selectionChange_50_listener($event) {
        return ctx.selectedVariables = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, AzureVariableComponent_ng_template_52_Template, 8, 5, "ng-template", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](53, AzureVariableComponent_ng_template_53_Template, 13, 0, "ng-template", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, AzureVariableComponent_ng_template_54_Template, 15, 7, "ng-template", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, AzureVariableComponent_ng_template_55_Template, 3, 0, "ng-template", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "p-dialog", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("visibleChange", function AzureVariableComponent_Template_p_dialog_visibleChange_56_listener($event) {
        return ctx.variableDialog = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](57, AzureVariableComponent_ng_template_57_Template, 17, 5, "ng-template", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](58, AzureVariableComponent_ng_template_58_Template, 2, 0, "ng-template", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.allVariableGrpsList)("ngModel", ctx.selectedGrpName)("listStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](34, _c0))("filter", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.selectedGrpName);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rounded", true)("value", ctx.getGrpDetails("id", ""));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rounded", true)("value", ctx.getGrpDetails("description", ""));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rounded", true)("value", ctx.getGrpDetails("createdBy", "displayName"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rounded", true)("value", ctx.getGrpDetails("modifiedBy", "displayName"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.variables ? ctx.variables.length : 0, " variables");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.response.secrets, " Secrets");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.modifiedVariables.length != 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.modifiedVariables.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.groupSelected || ctx.modifiedVariables.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.groupSelected || ctx.modifiedVariables.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](35, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.variables)("resizableColumns", true)("selection", ctx.selectedVariables)("rowHover", true)("scrollable", true)("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](36, _c2))("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](37, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](38, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", ctx.variableDialog)("modal", true)("draggable", false)("resizable", false);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_listbox__WEBPACK_IMPORTED_MODULE_7__.Listbox, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.Ripple, primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__.Tooltip, primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__.InputText, primeng_divider__WEBPACK_IMPORTED_MODULE_11__.Divider, primeng_checkbox__WEBPACK_IMPORTED_MODULE_12__.Checkbox, primeng_table__WEBPACK_IMPORTED_MODULE_13__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_13__.ResizableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_13__.TableCheckbox, primeng_table__WEBPACK_IMPORTED_MODULE_13__.TableHeaderCheckbox, primeng_table__WEBPACK_IMPORTED_MODULE_13__.ColumnFilter, primeng_dialog__WEBPACK_IMPORTED_MODULE_14__.Dialog, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_15__.InputTextarea, primeng_toast__WEBPACK_IMPORTED_MODULE_16__.Toast, primeng_badge__WEBPACK_IMPORTED_MODULE_17__.BadgeDirective, primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_18__.OverlayPanel, primeng_fileupload__WEBPACK_IMPORTED_MODULE_19__.FileUpload, primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_20__.ConfirmPopup, primeng_tag__WEBPACK_IMPORTED_MODULE_21__.Tag],
  encapsulation: 2
});

/***/ }),

/***/ 9608:
/*!***********************************************************************!*\
  !*** ./src/app/itaap-ms-manager/components/azurelib/azure.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AzureService": () => (/* binding */ AzureService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _service_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/constants */ 2543);



class AzureService {
  constructor(httpClient, constants) {
    this.httpClient = httpClient;
    this.constants = constants;
  }
  getVariableGroups() {
    let url = this.constants.hostname + 'getAllVariableGroups?organization=' + this.constants.org + '&api-version=' + this.constants.apiV;
    return this.httpClient.get(url, this.constants.headerOptions);
  }
  fetchVariablesFromGroup(groupName) {
    let url = this.constants.hostname + 'getVariableUsingGroupName?groupName=' + groupName + '&organization=' + this.constants.org + '&api-version=' + this.constants.apiV;
    console.log("url : " + url);
    return this.httpClient.get(url, this.constants.headerOptions);
  }
  sendVarGrpForApproval(request) {
    let url = this.constants.hostname + 'routeToApproval';
    return this.httpClient.post(url, request, this.constants.headerOptions);
  }
  getRequests(approver) {
    let url = this.constants.hostname + 'fetchRequests' + "/" + approver;
    return this.httpClient.get(url, this.constants.headerOptions);
  }
  approveRequest(request) {
    let url = this.constants.hostname + 'approveRequest';
    return this.httpClient.post(url, request, this.constants.headerOptions);
  }
  rejectRequest(request) {
    let url = this.constants.hostname + 'rejectRequest';
    return this.httpClient.post(url, request, this.constants.headerOptions);
  }
  getTasksAssignedToSelf(userId) {
    let url = this.constants.hostname + 'user/tasks/userId?userId=' + userId;
    return this.httpClient.get(url, this.constants.headerOptions);
  }
  getMyRequests(requester) {
    let url = this.constants.hostname + 'my-requests' + "/" + requester;
    return this.httpClient.get(url, this.constants.headerOptions);
  }
}
AzureService.ɵfac = function AzureService_Factory(t) {
  return new (t || AzureService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service_constants__WEBPACK_IMPORTED_MODULE_0__.Constants));
};
AzureService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AzureService,
  factory: AzureService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 376:
/*!***********************************************************************************!*\
  !*** ./src/app/itaap-ms-manager/components/azurelib/compare/compare.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompareComponent": () => (/* binding */ CompareComponent)
/* harmony export */ });
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _azure_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../azure.service */ 9608);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_splitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/splitter */ 330);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/autocomplete */ 5630);
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/scrollpanel */ 4250);









function CompareComponent_ng_template_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "p-columnFilter", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function CompareComponent_ng_template_8_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const variable_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](variable_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", variable_r5.key, " ");
  }
}
function CompareComponent_ng_template_8_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No variables found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
const _c0 = function () {
  return {
    "table-layout": "fixed"
  };
};
const _c1 = function () {
  return ["key"];
};
function CompareComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "p-table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CompareComponent_ng_template_8_ng_template_2_Template, 6, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CompareComponent_ng_template_8_ng_template_3_Template, 6, 2, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CompareComponent_ng_template_8_ng_template_4_Template, 3, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r0.firstVariables)("resizableColumns", true)("rowHover", true)("scrollable", true)("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0))("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c1));
  }
}
function CompareComponent_ng_template_9_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "p-columnFilter", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function CompareComponent_ng_template_9_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const variable_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", variable_r11.key, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](variable_r11.value);
  }
}
function CompareComponent_ng_template_9_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No variables found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function CompareComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "p-table", 7, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CompareComponent_ng_template_9_ng_template_3_Template, 6, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CompareComponent_ng_template_9_ng_template_4_Template, 6, 2, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CompareComponent_ng_template_9_ng_template_5_Template, 3, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r1.secondVariables)("resizableColumns", true)("rowHover", true)("scrollable", true)("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0))("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c1));
  }
}
const _c2 = function () {
  return {
    "height": "80vh"
  };
};
class CompareComponent {
  constructor(azureService, messageService) {
    this.azureService = azureService;
    this.messageService = messageService;
    this.allVariableGrpsList = [];
    this.firstVariables = [];
    this.secondVariables = [];
    this.response = {
      name: '',
      secrets: 0,
      variableValues: []
    };
  }
  ngOnInit() {
    this.getVariableGroups();
  }
  getVariableGroups() {
    this.azureService.getVariableGroups().subscribe(response => {
      this.handleSuccessfulResponse(response);
      this.messageService.add({
        key: 'success',
        severity: 'success',
        summary: 'Success',
        detail: "Successfully Fetched " + this.allVariableGrpsList.length + " Variable Groups"
      });
    }, error => {
      this.messageService.add({
        key: 'retry',
        severity: 'error',
        sticky: true,
        summary: error.statusText,
        detail: error.message
      });
    });
  }
  handleSuccessfulResponse(response) {
    this.allVarGrp = response.value;
    let arr = [];
    for (let i = 0; i < response.value.length; i++) {
      arr.push({
        name: response.value[i].name,
        id: response.value[i].id
      });
    }
    this.allVariableGrpsList = arr;
  }
  filterGroups(event, grp) {
    const filtered = [];
    const query = event.query;
    for (let i = 0; i < this.allVariableGrpsList.length; i++) {
      const group = this.allVariableGrpsList[i];
      if (group.name.toLowerCase().indexOf(query.toLowerCase()) != -1) {
        filtered.push(group);
      }
    }
    if (grp == 1) {
      this.filteredFirstGroup = filtered;
    } else {
      this.filteredSecondGroup = filtered;
    }
  }
  onSelectGrp(grp) {
    let name;
    if (grp == 1) {
      name = this.firstGroup.name;
    } else {
      name = this.secondGroup.name;
    }
    this.azureService.fetchVariablesFromGroup(name).subscribe(response => this.receivedVariables(response, grp), error => {
      this.messageService.add({
        key: 'retry',
        severity: 'error',
        summary: error.statusText,
        detail: error.message
      });
    });
  }
  receivedVariables(response, grp) {
    if (grp == 1) {
      this.firstVariables = response.variableValues;
    } else {
      this.secondVariables = response.variableValues;
    }
  }
}
CompareComponent.ɵfac = function CompareComponent_Factory(t) {
  return new (t || CompareComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_azure_service__WEBPACK_IMPORTED_MODULE_0__.AzureService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__.MessageService));
};
CompareComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CompareComponent,
  selectors: [["app-compare"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_2__.MessageService, primeng_api__WEBPACK_IMPORTED_MODULE_2__.ConfirmationService])],
  decls: 10,
  vars: 11,
  consts: [[1, "grid", "p-fluid"], [1, "col-6"], ["field", "name", 3, "ngModel", "suggestions", "dropdown", "showEmptyMessage", "ngModelChange", "completeMethod", "onSelect"], [1, "col-12"], ["styleClass", "mb-5"], ["pTemplate", ""], [1, "col", "flex"], ["styleClass", "p-datatable-sm", 3, "value", "resizableColumns", "rowHover", "scrollable", "tableStyle", "globalFilterFields"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pResizableColumn", "", 2, "width", "90%"], ["pResizableColumn", "", 2, "width", "40%"], ["type", "text", "field", "key", "display", "menu"], [1, "textOverflow"], ["variableValue", ""], ["colspan", "2"], ["dt", ""]],
  template: function CompareComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p-autoComplete", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CompareComponent_Template_p_autoComplete_ngModelChange_2_listener($event) {
        return ctx.firstGroup = $event;
      })("completeMethod", function CompareComponent_Template_p_autoComplete_completeMethod_2_listener($event) {
        return ctx.filterGroups($event, 1);
      })("onSelect", function CompareComponent_Template_p_autoComplete_onSelect_2_listener() {
        return ctx.onSelectGrp(1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1)(4, "p-autoComplete", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CompareComponent_Template_p_autoComplete_ngModelChange_4_listener($event) {
        return ctx.secondGroup = $event;
      })("completeMethod", function CompareComponent_Template_p_autoComplete_completeMethod_4_listener($event) {
        return ctx.filterGroups($event, 2);
      })("onSelect", function CompareComponent_Template_p_autoComplete_onSelect_4_listener() {
        return ctx.onSelectGrp(2);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "p-scrollPanel")(7, "p-splitter", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CompareComponent_ng_template_8_Template, 5, 8, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CompareComponent_ng_template_9_Template, 6, 8, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.firstGroup)("suggestions", ctx.filteredFirstGroup)("dropdown", true)("showEmptyMessage", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.secondGroup)("suggestions", ctx.filteredSecondGroup)("dropdown", true)("showEmptyMessage", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c2));
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeTemplate, primeng_splitter__WEBPACK_IMPORTED_MODULE_4__.Splitter, primeng_table__WEBPACK_IMPORTED_MODULE_5__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_5__.ResizableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_5__.ColumnFilter, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_6__.AutoComplete, primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_7__.ScrollPanel],
  encapsulation: 2
});

/***/ }),

/***/ 683:
/*!******************************************************************!*\
  !*** ./src/app/itaap-ms-manager/components/components.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _add_data_add_data_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-data/add-data.component */ 5488);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! primeng/confirmpopup */ 2919);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/card */ 4357);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/calendar */ 2547);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_listbox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/listbox */ 2210);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/ripple */ 4538);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/menubar */ 552);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/tabview */ 9504);
/* harmony import */ var primeng_splitter__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/splitter */ 330);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/divider */ 1154);
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/splitbutton */ 3650);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/checkbox */ 749);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! primeng/toolbar */ 4575);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! primeng/dialog */ 1837);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! primeng/inputtextarea */ 1102);
/* harmony import */ var primeng_autofocus__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! primeng/autofocus */ 174);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! primeng/toast */ 9129);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! primeng/messages */ 8547);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! primeng/message */ 3589);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! primeng/radiobutton */ 9902);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! primeng/badge */ 2381);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! primeng/avatar */ 7063);
/* harmony import */ var primeng_blockui__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! primeng/blockui */ 81);
/* harmony import */ var primeng_overlay__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! primeng/overlay */ 9053);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! primeng/confirmdialog */ 97);
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! primeng/overlaypanel */ 6664);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! primeng/fileupload */ 6193);
/* harmony import */ var primeng_timeline__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! primeng/timeline */ 6687);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! primeng/tag */ 3042);
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! primeng/tree */ 3449);
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! primeng/breadcrumb */ 7298);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! primeng/accordion */ 9854);
/* harmony import */ var primeng_editor__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! primeng/editor */ 253);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! primeng/autocomplete */ 5630);
/* harmony import */ var primeng_inplace__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! primeng/inplace */ 2116);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! primeng/chart */ 2348);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @fullcalendar/angular */ 8245);
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! primeng/scrollpanel */ 4250);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! primeng/progressbar */ 8395);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! primeng/inputnumber */ 7990);
/* harmony import */ var primeng_avatargroup__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! primeng/avatargroup */ 1385);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! primeng/selectbutton */ 205);
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! primeng/chip */ 287);
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! primeng/tabmenu */ 7077);
/* harmony import */ var _azurelib_azure_variable_azure_variable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./azurelib/azure-variable/azure-variable.component */ 8067);
/* harmony import */ var _azurelib_azure_admin_azure_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./azurelib/azure-admin/azure-admin.component */ 8406);
/* harmony import */ var _dashboard_ms_tracker_ms_tracker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/ms-tracker/ms-tracker.component */ 879);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 3623);
/* harmony import */ var _kubernetes_test_connectivity_test_connectivity_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kubernetes/test-connectivity/test-connectivity.component */ 9748);
/* harmony import */ var _kubernetes_connectivity_history_connectivity_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kubernetes/connectivity-history/connectivity-history.component */ 9219);
/* harmony import */ var _my_requests_my_requests_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-requests/my-requests.component */ 5373);
/* harmony import */ var _tasks_todo_todo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tasks/todo/todo.component */ 7804);
/* harmony import */ var _auth_access_access_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/access/access.component */ 8577);
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/login/login.component */ 4336);
/* harmony import */ var _auth_error_error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/error/error.component */ 9450);
/* harmony import */ var _auth_signout_signout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/signout/signout.component */ 7515);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var _deployment_builds_builds_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./deployment/builds/builds.component */ 6044);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! primeng/sidebar */ 4179);
/* harmony import */ var _azurelib_compare_compare_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./azurelib/compare/compare.component */ 376);
/* harmony import */ var _microservices_microservices_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./microservices/microservices.component */ 3874);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! primeng/progressspinner */ 2901);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 2560);





































































class ComponentsModule {}
ComponentsModule.ɵfac = function ComponentsModule_Factory(t) {
  return new (t || ComponentsModule)();
};
ComponentsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
  type: ComponentsModule
});
ComponentsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule, primeng_card__WEBPACK_IMPORTED_MODULE_20__.CardModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_21__.CalendarModule, primeng_button__WEBPACK_IMPORTED_MODULE_22__.ButtonModule, primeng_listbox__WEBPACK_IMPORTED_MODULE_23__.ListboxModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_24__.RippleModule, primeng_menubar__WEBPACK_IMPORTED_MODULE_25__.MenubarModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_26__.InputTextModule, primeng_tabview__WEBPACK_IMPORTED_MODULE_27__.TabViewModule, primeng_splitter__WEBPACK_IMPORTED_MODULE_28__.SplitterModule, primeng_divider__WEBPACK_IMPORTED_MODULE_29__.DividerModule, primeng_splitbutton__WEBPACK_IMPORTED_MODULE_30__.SplitButtonModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_31__.CheckboxModule, primeng_table__WEBPACK_IMPORTED_MODULE_32__.TableModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_33__.ToolbarModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_34__.DialogModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_35__.InputTextareaModule, primeng_autofocus__WEBPACK_IMPORTED_MODULE_36__.AutoFocusModule, primeng_toast__WEBPACK_IMPORTED_MODULE_37__.ToastModule, primeng_messages__WEBPACK_IMPORTED_MODULE_38__.MessagesModule, primeng_message__WEBPACK_IMPORTED_MODULE_39__.MessageModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_40__.RadioButtonModule, primeng_badge__WEBPACK_IMPORTED_MODULE_41__.BadgeModule, primeng_avatar__WEBPACK_IMPORTED_MODULE_42__.AvatarModule, primeng_blockui__WEBPACK_IMPORTED_MODULE_43__.BlockUIModule, primeng_overlay__WEBPACK_IMPORTED_MODULE_44__.OverlayModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_45__.ConfirmDialogModule, primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_46__.OverlayPanelModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_47__.FileUploadModule, primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_48__.ConfirmPopupModule, primeng_tag__WEBPACK_IMPORTED_MODULE_49__.TagModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_50__.DropdownModule, primeng_timeline__WEBPACK_IMPORTED_MODULE_51__.TimelineModule, primeng_tree__WEBPACK_IMPORTED_MODULE_52__.TreeModule, primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_53__.BreadcrumbModule, primeng_accordion__WEBPACK_IMPORTED_MODULE_54__.AccordionModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_55__.SidebarModule, primeng_editor__WEBPACK_IMPORTED_MODULE_56__.EditorModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_57__.AutoCompleteModule, primeng_inplace__WEBPACK_IMPORTED_MODULE_58__.InplaceModule, primeng_chart__WEBPACK_IMPORTED_MODULE_59__.ChartModule, _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_60__.FullCalendarModule, primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_61__.ScrollPanelModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_62__.ProgressBarModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_63__.ProgressSpinnerModule, primeng_tabmenu__WEBPACK_IMPORTED_MODULE_64__.TabMenuModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_65__.InputNumberModule, primeng_avatargroup__WEBPACK_IMPORTED_MODULE_66__.AvatarGroupModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_67__.SelectButtonModule, primeng_chip__WEBPACK_IMPORTED_MODULE_68__.ChipModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](ComponentsModule, {
    declarations: [_add_data_add_data_component__WEBPACK_IMPORTED_MODULE_0__.AddDataComponent, _azurelib_azure_variable_azure_variable_component__WEBPACK_IMPORTED_MODULE_1__.AzureVariableComponent, _azurelib_azure_admin_azure_admin_component__WEBPACK_IMPORTED_MODULE_2__.AzureAdminComponent, _dashboard_ms_tracker_ms_tracker_component__WEBPACK_IMPORTED_MODULE_3__.MsTrackerComponent, _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__.DashboardComponent, _kubernetes_test_connectivity_test_connectivity_component__WEBPACK_IMPORTED_MODULE_5__.TestConnectivityComponent, _kubernetes_connectivity_history_connectivity_history_component__WEBPACK_IMPORTED_MODULE_6__.ConnectivityHistoryComponent, _my_requests_my_requests_component__WEBPACK_IMPORTED_MODULE_7__.MyRequestsComponent, _tasks_todo_todo_component__WEBPACK_IMPORTED_MODULE_8__.TodoComponent, _auth_access_access_component__WEBPACK_IMPORTED_MODULE_9__.AccessComponent, _auth_login_login_component__WEBPACK_IMPORTED_MODULE_10__.LoginComponent, _auth_error_error_component__WEBPACK_IMPORTED_MODULE_11__.ErrorComponent, _auth_signout_signout_component__WEBPACK_IMPORTED_MODULE_12__.SignOutComponent, _deployment_builds_builds_component__WEBPACK_IMPORTED_MODULE_13__.BuildsComponent, _azurelib_compare_compare_component__WEBPACK_IMPORTED_MODULE_14__.CompareComponent, _microservices_microservices_component__WEBPACK_IMPORTED_MODULE_15__.MicroservicesComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule, primeng_card__WEBPACK_IMPORTED_MODULE_20__.CardModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_21__.CalendarModule, primeng_button__WEBPACK_IMPORTED_MODULE_22__.ButtonModule, primeng_listbox__WEBPACK_IMPORTED_MODULE_23__.ListboxModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_24__.RippleModule, primeng_menubar__WEBPACK_IMPORTED_MODULE_25__.MenubarModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_26__.InputTextModule, primeng_tabview__WEBPACK_IMPORTED_MODULE_27__.TabViewModule, primeng_splitter__WEBPACK_IMPORTED_MODULE_28__.SplitterModule, primeng_divider__WEBPACK_IMPORTED_MODULE_29__.DividerModule, primeng_splitbutton__WEBPACK_IMPORTED_MODULE_30__.SplitButtonModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_31__.CheckboxModule, primeng_table__WEBPACK_IMPORTED_MODULE_32__.TableModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_33__.ToolbarModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_34__.DialogModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_35__.InputTextareaModule, primeng_autofocus__WEBPACK_IMPORTED_MODULE_36__.AutoFocusModule, primeng_toast__WEBPACK_IMPORTED_MODULE_37__.ToastModule, primeng_messages__WEBPACK_IMPORTED_MODULE_38__.MessagesModule, primeng_message__WEBPACK_IMPORTED_MODULE_39__.MessageModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_40__.RadioButtonModule, primeng_badge__WEBPACK_IMPORTED_MODULE_41__.BadgeModule, primeng_avatar__WEBPACK_IMPORTED_MODULE_42__.AvatarModule, primeng_blockui__WEBPACK_IMPORTED_MODULE_43__.BlockUIModule, primeng_overlay__WEBPACK_IMPORTED_MODULE_44__.OverlayModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_45__.ConfirmDialogModule, primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_46__.OverlayPanelModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_47__.FileUploadModule, primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_48__.ConfirmPopupModule, primeng_tag__WEBPACK_IMPORTED_MODULE_49__.TagModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_50__.DropdownModule, primeng_timeline__WEBPACK_IMPORTED_MODULE_51__.TimelineModule, primeng_tree__WEBPACK_IMPORTED_MODULE_52__.TreeModule, primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_53__.BreadcrumbModule, primeng_accordion__WEBPACK_IMPORTED_MODULE_54__.AccordionModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_55__.SidebarModule, primeng_editor__WEBPACK_IMPORTED_MODULE_56__.EditorModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_57__.AutoCompleteModule, primeng_inplace__WEBPACK_IMPORTED_MODULE_58__.InplaceModule, primeng_chart__WEBPACK_IMPORTED_MODULE_59__.ChartModule, _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_60__.FullCalendarModule, primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_61__.ScrollPanelModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_62__.ProgressBarModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_63__.ProgressSpinnerModule, primeng_tabmenu__WEBPACK_IMPORTED_MODULE_64__.TabMenuModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_65__.InputNumberModule, primeng_avatargroup__WEBPACK_IMPORTED_MODULE_66__.AvatarGroupModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_67__.SelectButtonModule, primeng_chip__WEBPACK_IMPORTED_MODULE_68__.ChipModule]
  });
})();

/***/ }),

/***/ 3623:
/*!******************************************************************************!*\
  !*** ./src/app/itaap-ms-manager/components/dashboard/dashboard.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _tasks_tasks_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tasks/tasks.service */ 9846);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/avatar */ 7063);





class DashboardComponent {
  constructor(tasksService, messageService) {
    this.tasksService = tasksService;
    this.messageService = messageService;
    this.allCompletedTasks = [];
    this.allInProgressTasks = [];
    this.allOverDueTasks = [];
    this.allBlockedTasks = [];
  }
  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    this.lineData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: documentStyle.getPropertyValue('--primary-500'),
        borderColor: documentStyle.getPropertyValue('--primary-500'),
        tension: .4
      }, {
        label: 'Second Dataset',
        data: [28, 48, 40, 19, 86, 27, 1090],
        fill: false,
        backgroundColor: documentStyle.getPropertyValue('--primary-200'),
        borderColor: documentStyle.getPropertyValue('--primary-200'),
        tension: .4
      }]
    };
    this.lineOptions = {
      plugins: {
        legend: {
          labels: {
            fontColor: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };
    this.polarData = {
      datasets: [{
        data: [11, 16, 7, 13],
        backgroundColor: [documentStyle.getPropertyValue('--indigo-500'), documentStyle.getPropertyValue('--purple-500'), documentStyle.getPropertyValue('--teal-500'), documentStyle.getPropertyValue('--orange-500')],
        label: 'My dataset'
      }],
      labels: ['Indigo', 'Purple', 'Teal', 'Orange']
    };
    this.polarOptions = {
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        r: {
          grid: {
            color: surfaceBorder
          }
        }
      }
    };
    this.PlatformReportData = [{
      'slNo': '1',
      "platform": "itaap-supplychainit",
      "DEV_TEST": "1",
      "ACC": "1",
      "PROD": "1"
    }, {
      'slNo': '2',
      "platform": "itaap-solutionsit",
      "DEV_TEST": "3",
      "ACC": "2",
      "PROD": "1"
    }];
    this.trackingData = [{
      'slNo': '1',
      "issue": "Ingress issue",
      "desc": "Test Desc",
      "blocker": "No",
      "pending_with": "Pankaj",
      "eta": new Date()
    }, {
      'slNo': '2',
      "issue": "CD pipeline issue",
      "desc": "Test Desc",
      "blocker": "No",
      "pending_with": "MS Support",
      "eta": new Date()
    }];
    this.populateTasks();
    this.populateMicroservices();
  }
  populateTasks() {
    this.tasksService.getTasksByStatus('C').subscribe(response => {
      this.allCompletedTasks = response;
    }, error => {
      console.log(error);
    });
    this.tasksService.getTasksByStatus('O').subscribe(response => {
      this.allOverDueTasks = response;
    }, error => {
      console.log(error);
    });
    this.tasksService.getTasksByStatus('B').subscribe(response => {
      this.allBlockedTasks = response;
    }, error => {
      console.log(error);
    });
    this.tasksService.getTasksByStatus('P').subscribe(response => {
      this.allInProgressTasks = response;
    }, error => {
      console.log(error);
    });
  }
  populateMicroservices() {}
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
  return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tasks_tasks_service__WEBPACK_IMPORTED_MODULE_0__.TasksService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__.MessageService));
};
DashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: DashboardComponent,
  selectors: [["app-dashboard"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_2__.MessageService, primeng_api__WEBPACK_IMPORTED_MODULE_2__.ConfirmationService])],
  decls: 51,
  vars: 4,
  consts: [[1, "grid"], [1, "col-12"], [1, "card", "p-0", "grid", "grid-nogutter"], [1, "col-12", "md:col-6", "lg:col-3", "py-5", "px-6", "border-none", "md:border-right-1", "surface-border", 2, "background", "linear-gradient(226.42deg, #0F5F4B 8.93%, #09152F 110.98%)", "border-top-left-radius", "inherit", "border-bottom-left-radius", "inherit"], [1, "flex", "align-items-center", "justify-content-between"], [1, "flex", "align-items-center"], ["size", "large", "shape", "circle", "styleclass", "tasks-badge status-completed", 1, "p-element"], [1, "tasks-badge", "status-completed", "p-avatar", "p-component", "p-avatar-circle", "p-avatar-lg"], [1, "material-symbols-outlined", "p-avatar-icon"], [1, "text-white", "text-xl", "ml-2"], [1, "block", "text-white", "font-bold", "text-6xl"], [1, "col-12", "md:col-6", "lg:col-3", "py-5", "px-6", "border-none", "md:border-right-1", "surface-border", 2, "background", "linear-gradient(226.42deg, #1B4963 8.93%, #09152F 110.98%)"], ["size", "large", "shape", "circle", "styleclass", "tasks-badge status-inprogress", 1, "p-element"], [1, "tasks-badge", "status-inprogress", "p-avatar", "p-component", "p-avatar-circle", "p-avatar-lg"], [1, "text", "text-white", "text-white-xl", "ml-2"], [1, "col-12", "md:col-6", "lg:col-3", "py-5", "px-6", "border-none", "md:border-right-1", "surface-border", 2, "background", "linear-gradient(226.42deg, #7c4913 8.93%, #2f1b09 110.98%)"], ["size", "large", "shape", "circle", "styleclass", "tasks-badge status-overdue", 1, "p-element"], [1, "tasks-badge", "status-overdue", "p-avatar", "p-component", "p-avatar-circle", "p-avatar-lg"], [1, "text-xl", "text-white", "ml-2"], [1, "col-12", "md:col-6", "lg:col-3", "py-5", "px-6", 2, "background", "linear-gradient(226.42deg, #801515 8.93%, #2F0909 110.98%)", "border-bottom-right-radius", "inherit", "border-top-right-radius", "inherit"], ["size", "large", "shape", "circle", "styleclass", "tasks-badge status-blocked", 1, "p-element"], [1, "tasks-badge", "status-blocked", "p-avatar", "p-component", "p-avatar-circle", "p-avatar-lg"]],
  template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "p-avatar", 6)(7, "div", 7)(8, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " task_alt ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Completed");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5)(13, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11)(16, "div", 4)(17, "div", 5)(18, "p-avatar", 12)(19, "div", 13)(20, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " rotate_right ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "In Progress");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 4)(25, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 15)(28, "div", 4)(29, "div", 5)(30, "p-avatar", 16)(31, "div", 17)(32, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " running_with_errors ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Overdue");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 4)(37, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 19)(40, "div", 4)(41, "div", 5)(42, "p-avatar", 20)(43, "div", 21)(44, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " block ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Blocked");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 4)(49, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.allCompletedTasks.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.allInProgressTasks.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.allOverDueTasks.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.allBlockedTasks.length);
    }
  },
  dependencies: [primeng_avatar__WEBPACK_IMPORTED_MODULE_3__.Avatar],
  encapsulation: 2
});

/***/ }),

/***/ 879:
/*!******************************************************************************************!*\
  !*** ./src/app/itaap-ms-manager/components/dashboard/ms-tracker/ms-tracker.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MsTrackerComponent": () => (/* binding */ MsTrackerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/card */ 4357);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/table */ 7485);






function MsTrackerComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Microservice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "DEV");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "SIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "UAT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ACC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "TGL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "BGL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "KT-Signoff");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Postman Collection");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "ITD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "ISA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Scrum Master");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Tech Lead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Devloper-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Devloper-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function MsTrackerComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td")(24, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MsTrackerComponent_ng_template_3_Template_a_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.goToLink("https://dev.azure.com/PhilipsAgile/56.0%20GIS%20Integration/_wiki/wikis/56.0-GIS-Integration.wiki/10864/ISAD-ZCQR"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td")(35, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MsTrackerComponent_ng_template_3_Template_i_click_35_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.enableEdit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.slNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.ms);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.dev);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.sit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.uat);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.acc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.tgl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.bgl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.kt_signoff);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", data_r2.sm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.isDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.tl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.d1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.d2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.isEdit ? "pi pi-save" : "pi pi-pencil");
  }
}
class MsTrackerComponent {
  constructor() {
    this.isDisabled = true;
    this.isEdit = false;
  }
  ngOnInit() {
    this.msData = [{
      'slNo': '1',
      'ms': 'itaap-solutionsit-rms-event-mgmt',
      'dev': '1/11/2022',
      'sit': '1/11/2022',
      'uat': '1/11/2022',
      'acc': '1/11/2022',
      'tgl': '1/11/2022',
      'bgl': '1/11/2022',
      'kt_signoff': '1/11/2022',
      'postmancollection': 'view',
      'itd': 'view',
      'isad': 'view',
      'sm': 'Bharatesh',
      'tl': 'Pankaj',
      'd1': 'Soumendu',
      'd2': 'Rajendra'
    }, {
      'slNo': '2',
      'ms': 'itaap-supplychainit-sofilecreation',
      'dev': '1/11/2022',
      'sit': '1/11/2022',
      'uat': '1/11/2022',
      'acc': '1/11/2022',
      'tgl': '1/11/2022',
      'bgl': '1/11/2022',
      'kt_signoff': '1/11/2022',
      'postmancollection': 'view',
      'itd': 'view',
      'isad': 'view',
      'sm': 'Bharatesh',
      'tl': 'Pankaj',
      'd1': 'Helen',
      'd2': 'Pradnya'
    }];
  }
  goToLink(url) {
    window.open(url, "_blank");
  }
  enableEdit(event) {
    this.isDisabled = !this.isDisabled;
    this.isEdit = !this.isEdit;
    console.log(event);
    // console.log(this.msData)
  }
}

MsTrackerComponent.ɵfac = function MsTrackerComponent_Factory(t) {
  return new (t || MsTrackerComponent)();
};
MsTrackerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MsTrackerComponent,
  selectors: [["app-ms-tracker"]],
  decls: 4,
  vars: 3,
  consts: [["header", "Microsevice Details"], ["styleClass", "p-datatable-gridlines", "selectionMode", "single", 3, "value", "paginator", "rows"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "pi", "pi-eye"], [3, "click"], ["pInputText", "", "type", "text", 3, "disabled", "value"], [3, "ngClass", "click"]],
  template: function MsTrackerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-card", 0)(1, "p-table", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MsTrackerComponent_ng_template_2_Template, 35, 0, "ng-template", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MsTrackerComponent_ng_template_3_Template, 36, 15, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.msData)("paginator", true)("rows", 10);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, primeng_card__WEBPACK_IMPORTED_MODULE_2__.Card, primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeTemplate, primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__.InputText, primeng_table__WEBPACK_IMPORTED_MODULE_5__.Table],
  encapsulation: 2
});

/***/ }),

/***/ 6044:
/*!***********************************************************************************!*\
  !*** ./src/app/itaap-ms-manager/components/deployment/builds/builds.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuildsComponent": () => (/* binding */ BuildsComponent)
/* harmony export */ });
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _add_data_add_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../add-data/add-data.service */ 5340);
/* harmony import */ var _tasks_tasks_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tasks/tasks.service */ 9846);
/* harmony import */ var _deployment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../deployment.service */ 7656);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/card */ 4357);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/calendar */ 2547);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/tooltip */ 4329);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/divider */ 1154);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/toast */ 9129);
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/overlaypanel */ 6664);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/progressbar */ 8395);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/tag */ 3042);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var primeng_timeline__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/timeline */ 6687);
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/tree */ 3449);
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/breadcrumb */ 7298);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/accordion */ 9854);
/* harmony import */ var primeng_inplace__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/inplace */ 2116);
























function BuildsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20)(1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BuildsComponent_div_16_Template_button_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](20);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.overlayToggle($event, _r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function BuildsComponent_p_accordionTab_18_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const timeline_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background-color", timeline_r10.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("pTooltip", timeline_r10.result);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", timeline_r10.icon);
  }
}
function BuildsComponent_p_accordionTab_18_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const timeline_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](timeline_r11.name);
  }
}
function BuildsComponent_p_accordionTab_18_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "p-tag", 26);
  }
  if (rf & 2) {
    const timeline_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", timeline_r12.identifier);
  }
}
function BuildsComponent_p_accordionTab_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-accordionTab", 22)(1, "div", 23)(2, "div", 24)(3, "div", 25)(4, "p-timeline", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, BuildsComponent_p_accordionTab_18_ng_template_5_Template, 2, 4, "ng-template", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, BuildsComponent_p_accordionTab_18_ng_template_6_Template, 2, 1, "ng-template", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, BuildsComponent_p_accordionTab_18_ng_template_7_Template, 1, 1, "ng-template", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "p-divider", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 31)(10, "div", 0)(11, "div", 32)(12, "div", 33)(13, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Generate Documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 25)(16, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BuildsComponent_p_accordionTab_18_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r13.generateDocument("IQ"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BuildsComponent_p_accordionTab_18_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r15.generateDocument("IQ_verify"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 25)(19, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BuildsComponent_p_accordionTab_18_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r16.generateDocument("PIQ"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BuildsComponent_p_accordionTab_18_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r17.generateDocument("PIQ_verify"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const stage_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("header", stage_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r1.selectedRunTimeline);
  }
}
const _c0 = function () {
  return {
    "height": "6px"
  };
};
function BuildsComponent_ng_template_21_p_progressBar_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "p-progressBar", 63);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c0));
  }
}
function BuildsComponent_ng_template_21_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r19.fetchedMicroservice.name, " ");
  }
}
function BuildsComponent_ng_template_21_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function BuildsComponent_ng_template_21_ng_template_9_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r33.fetchedMicroservice.name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r20.fetchedMicroservice.name);
  }
}
function BuildsComponent_ng_template_21_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r21.fetchedMicroservice.techLead.name);
  }
}
function BuildsComponent_ng_template_21_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-dropdown", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function BuildsComponent_ng_template_21_ng_template_15_Template_p_dropdown_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r35.fetchedMicroservice.techLead = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r22.allTechLeads)("ngModel", ctx_r22.fetchedMicroservice.techLead);
  }
}
function BuildsComponent_ng_template_21_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r23.fetchedMicroservice.scrumMaster.name);
  }
}
function BuildsComponent_ng_template_21_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-dropdown", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function BuildsComponent_ng_template_21_ng_template_21_Template_p_dropdown_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r37.fetchedMicroservice.scrumMaster = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r24.allScrumMasters)("ngModel", ctx_r24.fetchedMicroservice.scrumMaster);
  }
}
function BuildsComponent_ng_template_21_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r25.fetchedMicroservice.developer.name);
  }
}
function BuildsComponent_ng_template_21_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-dropdown", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function BuildsComponent_ng_template_21_ng_template_27_Template_p_dropdown_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r40);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r39.fetchedMicroservice.developer = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r26.allDevelopers)("ngModel", ctx_r26.fetchedMicroservice.developer);
  }
}
function BuildsComponent_ng_template_21_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r27.fetchedMicroservice.backup.name);
  }
}
function BuildsComponent_ng_template_21_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-dropdown", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function BuildsComponent_ng_template_21_ng_template_33_Template_p_dropdown_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r42);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r41.fetchedMicroservice.backup = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r28.allDevelopers)("ngModel", ctx_r28.fetchedMicroservice.backup);
  }
}
function BuildsComponent_ng_template_21_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r29.fetchedMicroservice.poc.name);
  }
}
function BuildsComponent_ng_template_21_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-dropdown", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function BuildsComponent_ng_template_21_ng_template_39_Template_p_dropdown_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r43.fetchedMicroservice.poc = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r30.allClients)("ngModel", ctx_r30.fetchedMicroservice.poc);
  }
}
function BuildsComponent_ng_template_21_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r31.getConvertedDate(ctx_r31.fetchedMicroservice.targetCompletionDate));
  }
}
function BuildsComponent_ng_template_21_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-calendar", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function BuildsComponent_ng_template_21_ng_template_45_Template_p_calendar_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r46);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r45.fetchedMicroservice.targetCompletionDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("minDate", ctx_r32.todayDate)("showIcon", true)("ngModel", ctx_r32.fetchedMicroservice.targetCompletionDate);
  }
}
function BuildsComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, BuildsComponent_ng_template_21_p_progressBar_0_Template, 1, 3, "p-progressBar", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Microservice Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 43)(4, "div", 44)(5, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Microservice Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p-inplace", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, BuildsComponent_ng_template_21_ng_template_8_Template, 1, 1, "ng-template", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, BuildsComponent_ng_template_21_ng_template_9_Template, 1, 1, "ng-template", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 48)(11, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Tech Lead");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p-inplace", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, BuildsComponent_ng_template_21_ng_template_14_Template, 2, 1, "ng-template", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, BuildsComponent_ng_template_21_ng_template_15_Template, 1, 2, "ng-template", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 48)(17, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Scrum Master");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "p-inplace", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, BuildsComponent_ng_template_21_ng_template_20_Template, 2, 1, "ng-template", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, BuildsComponent_ng_template_21_ng_template_21_Template, 1, 2, "ng-template", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 48)(23, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Primary Developer");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "p-inplace", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, BuildsComponent_ng_template_21_ng_template_26_Template, 2, 1, "ng-template", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, BuildsComponent_ng_template_21_ng_template_27_Template, 1, 2, "ng-template", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 48)(29, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Backup Resource");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "p-inplace", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, BuildsComponent_ng_template_21_ng_template_32_Template, 2, 1, "ng-template", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, BuildsComponent_ng_template_21_ng_template_33_Template, 1, 2, "ng-template", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 48)(35, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Point of Contact (Philips)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "p-inplace", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, BuildsComponent_ng_template_21_ng_template_38_Template, 2, 1, "ng-template", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, BuildsComponent_ng_template_21_ng_template_39_Template, 1, 2, "ng-template", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 48)(41, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Target Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "p-inplace", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, BuildsComponent_ng_template_21_ng_template_44_Template, 2, 1, "ng-template", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, BuildsComponent_ng_template_21_ng_template_45_Template, 1, 3, "ng-template", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 61)(47, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BuildsComponent_ng_template_21_Template_button_click_47_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](20);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r47.insertMsDB($event, _r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.visibleProgressBar);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("closable", true)("active", ctx_r3.fetchedMicroservice.name == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("active", ctx_r3.fetchedMicroservice.techLead == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("active", ctx_r3.fetchedMicroservice.scrumMaster == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("active", ctx_r3.fetchedMicroservice.developer == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("active", ctx_r3.fetchedMicroservice.backup == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("active", ctx_r3.fetchedMicroservice.poc == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("active", ctx_r3.fetchedMicroservice.targetCompletionDate == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", ctx_r3.saveButtonText);
  }
}
const _c1 = function () {
  return {
    "font-size": "14px",
    "height": "calc(100vh - 10rem)",
    "overflow": "auto"
  };
};
const _c2 = function () {
  return {
    "font-size": "14px",
    "height": "60vh",
    "overflow": "auto"
  };
};
const _c3 = function () {
  return {
    width: "40rem"
  };
};
class BuildsComponent {
  constructor(addDataService, taskService, deploymentService, messageService) {
    this.addDataService = addDataService;
    this.taskService = taskService;
    this.deploymentService = deploymentService;
    this.messageService = messageService;
    this.todayDate = new Date();
    this.mssubmitted = false;
    this.msDialog = true;
    this.saveButtonText = "Save";
    this.visibleProgressBar = false;
    this.fetchedMicroservice = {};
    this.files = [];
    this.selectedPipeline = "Select a pipeline";
    this.runs = [];
    this.selectedRunTimeline = [];
    this.items = [];
    this.populateAllDropdowns();
  }
  ngOnInit() {
    this.selectedPipelineDetails = {
      _links: {
        web: {
          href: ""
        }
      },
      configuration: {
        path: "",
        repository: {
          fullName: "Github Repository",
          connection: {
            id: "Connection ID",
            url: "URL"
          }
        }
      },
      id: 'Pipeline ID'
    };
    this.home = {
      icon: 'pi pi-home',
      routerLink: '/deployment/builds'
    };
    this.deploymentService.getBuildFolders().subscribe(response => this.handleResponse(response));
  }
  getConvertedDate(date) {
    return new Date(date).toDateString();
  }
  handleResponse(response) {
    this.files = response;
  }
  populateAllDropdowns() {
    this.addDataService.fetchAllClients().subscribe(response => this.allClients = response, error => console.log(error));
    this.addDataService.fetchAllDevelopers().subscribe(response => this.allDevelopers = response, error => console.log(error));
    this.addDataService.fetchAllScrumMasters().subscribe(response => this.allScrumMasters = response, error => console.log(error));
    this.addDataService.fetchAllTechLeads().subscribe(response => this.allTechLeads = response, error => console.log(error));
  }
  nodeSelect(event) {
    let arr = [];
    if (Number.isInteger(parseInt(event.node.data))) {
      for (let i = 0; i < event.node.path.length; i++) {
        let s = {
          label: event.node.path[i]
        };
        arr.push(s);
      }
      this.selectedPipeline = event.node.label;
      arr.push({
        label: this.selectedPipeline
      });
      this.items = arr;
      this.deploymentService.getRunsFromPipelineID(event.node.data).subscribe(response => this.runs = response);
      this.deploymentService.getPipelineDetails(event.node.data).subscribe(response => {
        response.configuration.repository.connection.url = "https://github.com/" + response.configuration.repository.fullName;
        this.selectedPipelineDetails = response;
      });
      /*this.httpClientService.getTimelineFromBuildID(event.node.id).subscribe((response) => this.stages = response);*/
    }
  }

  onTabClose(event) {}
  onTabOpen(event) {
    this.selectedRun = this.runs[event.index];
    /*this.messageService.add({ severity: 'info', summary: 'Tab Expanded', detail: 'ID: ' + this.selectedRun.id });*/
    this.deploymentService.getTimelineFromBuildID(this.selectedRun.id, this.selectedRun.name).subscribe(response => {
      console.log(response);
      this.selectedRunTimeline = response;
    });
  }
  setSeverity(run) {
    if (run.result == "succeeded") {
      return "success";
    } else {
      return "danger";
    }
  }
  openRun(run) {
    window.open(run.url, '_blank');
  }
  insertMsDB(event, op) {
    this.visibleProgressBar = true;
    this.fetchedMicroservice.techLeadID = this.fetchedMicroservice.techLead.id;
    this.fetchedMicroservice.scrumMasterID = this.fetchedMicroservice.scrumMaster.id;
    this.fetchedMicroservice.developerID = this.fetchedMicroservice.developer.id;
    this.fetchedMicroservice.backupID = this.fetchedMicroservice.backup.id;
    this.fetchedMicroservice.pocID = this.fetchedMicroservice.poc.id;
    this.fetchedMicroservice.targetCompletionDate = this.fetchedMicroservice.targetCompletionDate;
    this.deploymentService.addMicroserviceInDB(this.fetchedMicroservice, this.selectedPipelineDetails.id).subscribe(response => {
      console.log(response);
      this.overlayToggle(event, op);
      this.visibleProgressBar = false;
      this.messageService.add({
        severity: 'success',
        summary: 'Updated',
        detail: 'Record updated for microservice ' + response.name
      });
    }, error => {
      console.log(error);
      this.overlayToggle(event, op);
      this.visibleProgressBar = false;
      this.messageService.add({
        severity: 'error',
        summary: error.statusText,
        detail: error.message
      });
    });
  }
  fetchMS() {
    let name = this.selectedPipelineDetails.name;
    name = name.toLowerCase().replace("-cd", "");
    this.msDialog = true;
    this.mssubmitted = true;
    this.taskService.getMicroservicesByName(name).subscribe(response => {
      console.log(response);
      if (response && response != null) {
        this.saveButtonText = "Update";
        this.fetchedMicroservice = response;
      } else {
        this.saveButtonText = "Save";
        this.fetchedMicroservice = {};
        this.fetchedMicroservice.name = name;
      }
    }, error => {});
  }
  overlayToggle(event, op) {
    op.toggle(event);
    this.fetchMS();
  }
  generateDocument(type) {
    let path = 'assets/itaap-ms-manager/templates/' + type + '.xlsx';
    let cdName = this.selectedPipelineDetails.name;
    let msName = this.selectedPipelineDetails.name.toLowerCase().replace("-cd", "");
    let platform = this.selectedPipelineDetails.name.split("-")[1];
    let details = {
      TYPE: type,
      MICROSERVICE_CD_NAME: cdName,
      MICROSERVICE_NAME: msName,
      BUILD_NUMBER: this.selectedRun.name,
      PLATFORM_NAME: platform
    };
    this.deploymentService.readExcel(path, details);
  }
}
BuildsComponent.ɵfac = function BuildsComponent_Factory(t) {
  return new (t || BuildsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_add_data_add_data_service__WEBPACK_IMPORTED_MODULE_0__.AddDataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_tasks_tasks_service__WEBPACK_IMPORTED_MODULE_1__.TasksService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_deployment_service__WEBPACK_IMPORTED_MODULE_2__.DeploymentService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.MessageService));
};
BuildsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: BuildsComponent,
  selectors: [["ng-component"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_4__.MessageService])],
  decls: 22,
  vars: 23,
  consts: [[1, "grid"], [1, "col-12", "lg:col-6", "xl:col-3"], ["filterMode", "lenient", "selectionMode", "single", 3, "selection", "filter", "value", "selectionChange", "onNodeSelect"], [1, "col-12", "lg:col-6", "xl:col-9"], ["styleClass", "mb-3", 3, "model", "home"], [1, "col-md-12"], ["styleClass", "mb-3", 3, "header"], [1, "flex", "justify-content-between", "align-items-center"], [1, "container-fluid"], ["icon", "pi pi-hashtag", "pTooltip", "Pipeline ID", "tooltipPosition", "bottom", "styleClass", "mr-2 mb-2", "severity", "info", 3, "value"], ["icon", "pi pi-link", "pTooltip", "Connection ID", "tooltipPosition", "bottom", "styleClass", "mr-2 mb-2", "severity", "warning", 3, "value"], ["target", "_blank", 2, "text-decoration", "none", 3, "href"], ["icon", "pi pi-github", "pTooltip", "GitHub Repository", "tooltipPosition", "bottom", "styleClass", "mr-2 mb-2", "severity", "success", 3, "value"], ["icon", "pi pi-external-link", "pTooltip", "GitHub Repository", "tooltipPosition", "bottom", "value", "Go to Pipeline", "severity", "danger"], ["class", "align-items-center", 4, "ngIf"], [3, "onClose", "onOpen"], [3, "header", 4, "ngFor", "ngForOf"], [3, "showCloseIcon"], ["op", ""], ["pTemplate", ""], [1, "align-items-center"], ["type", "button", "icon", "pi pi-refresh", "pButton", "", "label", "Update Record", 1, "p-button-sm", 3, "click"], [3, "header"], [1, "grid", "p-fluid"], [1, "col-6"], [1, "flex", "justify-content-between"], [3, "value"], ["pTemplate", "marker"], ["pTemplate", "content"], ["pTemplate", "opposite"], ["layout", "vertical"], [1, "col-6", "card", "p-5", 2, "border-style", "dashed", "align-self", "center"], [1, "col"], [1, "mb-5", 2, "text-align-last", "center"], [1, "text-2xl", "font-semibold"], ["pButton", "", "label", "IQ", 1, "mb-2", "mr-2", 3, "click"], ["pButton", "", "label", "IQ Verify", 1, "mb-2", 3, "click"], ["pButton", "", "label", "PIQ", 1, "mb-2", "mr-2", 3, "click"], ["pButton", "", "label", "PIQ verify", 1, "mb-2", 3, "click"], [1, "custom-marker", "shadow-2"], ["tooltipPosition", "bottom", 3, "ngClass", "pTooltip"], [2, "font-size", "small"], ["mode", "indeterminate", 3, "style", 4, "ngIf"], [1, "mt-2", "grid", "p-fluid", "formgrid"], [1, "col-12", "field"], ["htmlFor", "msname"], ["id", "msname", "closeIcon", "pi pi-check", "pTooltip", "Click to edit", "tooltipPosition", "top", 3, "closable", "active"], ["pTemplate", "display"], [1, "col-12", "md:col-6", "field"], ["htmlFor", "techlead"], ["id", "techlead", "closeIcon", "pi pi-check", "pTooltip", "Click to edit", "tooltipPosition", "top", 3, "active"], ["htmlFor", "scrum"], ["id", "scrum", "closeIcon", "pi pi-check", "pTooltip", "Click to edit", "tooltipPosition", "top", 3, "active"], ["htmlFor", "dev"], ["id", "dev", "closeIcon", "pi pi-check", "pTooltip", "Click to edit", "tooltipPosition", "top", 3, "active"], ["htmlFor", "backup"], ["id", "backup", "closeIcon", "pi pi-check", "pTooltip", "Click to edit", "tooltipPosition", "top", 3, "active"], ["htmlFor", "poc"], ["id", "poc", "closeIcon", "pi pi-check", "pTooltip", "Click to edit", "tooltipPosition", "top", 3, "active"], ["htmlFor", "targetDate"], ["id", "targetDate", "closeIcon", "pi pi-check", "pTooltip", "Click to edit", "tooltipPosition", "top", 3, "active"], [2, "text-align", "right"], ["type", "button", "icon", "pi pi-save", "pButton", "", 1, "p-button-success", 3, "label", "click"], ["mode", "indeterminate"], ["pInputText", "", "type", "text", "placeholder", "Microservice Name", 3, "ngModel", "ngModelChange"], ["optionLabel", "name", "type", "text", "placeholder", "Tech Lead", 3, "options", "ngModel", "ngModelChange"], ["optionLabel", "name", "type", "text", "placeholder", "Scrum Master", 3, "options", "ngModel", "ngModelChange"], ["optionLabel", "name", "type", "text", "placeholder", "Primary Developer", 3, "options", "ngModel", "ngModelChange"], ["optionLabel", "name", "type", "text", "placeholder", "Backup Resource", 3, "options", "ngModel", "ngModelChange"], ["optionLabel", "name", "type", "text", "placeholder", "Point of Contact", 3, "options", "ngModel", "ngModelChange"], ["dateFormat", "M dd, yy", "placeholder", "Target Date", "inputId", "dateformat", 3, "minDate", "showIcon", "ngModel", "ngModelChange"]],
  template: function BuildsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "p-toast");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1)(3, "p-tree", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function BuildsComponent_Template_p_tree_selectionChange_3_listener($event) {
        return ctx.selectedNode = $event;
      })("onNodeSelect", function BuildsComponent_Template_p_tree_onNodeSelect_3_listener($event) {
        return ctx.nodeSelect($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "p-breadcrumb", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5)(7, "p-card", 6)(8, "div", 7)(9, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "p-tag", 9)(11, "p-tag", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "p-tag", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "p-tag", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, BuildsComponent_div_16_Template, 2, 0, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "p-accordion", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClose", function BuildsComponent_Template_p_accordion_onClose_17_listener($event) {
        return ctx.onTabClose($event);
      })("onOpen", function BuildsComponent_Template_p_accordion_onOpen_17_listener($event) {
        return ctx.onTabOpen($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, BuildsComponent_p_accordionTab_18_Template, 21, 2, "p-accordionTab", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "p-overlayPanel", 17, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, BuildsComponent_ng_template_21_Template, 48, 10, "ng-template", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](20, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("selection", ctx.selectedNode)("filter", true)("value", ctx.files);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("model", ctx.items)("home", ctx.home);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("header", ctx.selectedPipeline);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", ctx.selectedPipelineDetails.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", ctx.selectedPipelineDetails.configuration.repository.connection.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", ctx.selectedPipelineDetails.configuration.repository.connection.url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", ctx.selectedPipelineDetails.configuration.repository.fullName);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", ctx.selectedPipelineDetails._links.web.href, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.runs.length > 0 && ctx.selectedPipelineDetails.configuration.path.includes("-CD"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](21, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.runs);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](22, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showCloseIcon", true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, primeng_card__WEBPACK_IMPORTED_MODULE_7__.Card, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, primeng_calendar__WEBPACK_IMPORTED_MODULE_8__.Calendar, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonDirective, primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__.Tooltip, primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__.InputText, primeng_divider__WEBPACK_IMPORTED_MODULE_12__.Divider, primeng_toast__WEBPACK_IMPORTED_MODULE_13__.Toast, primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_14__.OverlayPanel, primeng_progressbar__WEBPACK_IMPORTED_MODULE_15__.ProgressBar, primeng_tag__WEBPACK_IMPORTED_MODULE_16__.Tag, primeng_dropdown__WEBPACK_IMPORTED_MODULE_17__.Dropdown, primeng_timeline__WEBPACK_IMPORTED_MODULE_18__.Timeline, primeng_tree__WEBPACK_IMPORTED_MODULE_19__.Tree, primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_20__.Breadcrumb, primeng_accordion__WEBPACK_IMPORTED_MODULE_21__.Accordion, primeng_accordion__WEBPACK_IMPORTED_MODULE_21__.AccordionTab, primeng_inplace__WEBPACK_IMPORTED_MODULE_22__.Inplace],
  encapsulation: 2
});

/***/ }),

/***/ 7656:
/*!******************************************************************************!*\
  !*** ./src/app/itaap-ms-manager/components/deployment/deployment.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeploymentService": () => (/* binding */ DeploymentService)
/* harmony export */ });
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ 4126);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ 5226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _service_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/constants */ 2543);





class DeploymentService {
  constructor(httpClient, constants) {
    this.httpClient = httpClient;
    this.constants = constants;
  }
  readExcel(path, details) {
    this.httpClient.get(path, {
      responseType: 'blob'
    }).subscribe(data => {
      const reader = new FileReader();
      reader.readAsBinaryString(data);
      reader.onload = e => {
        const binarystr = e.target.result;
        const wb = xlsx__WEBPACK_IMPORTED_MODULE_2__.read(binarystr, {
          type: 'binary'
        });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = xlsx__WEBPACK_IMPORTED_MODULE_2__.utils.sheet_to_json(ws);
        this.replaceData(data, details);
      };
    });
  }
  replaceData(data, details) {
    this.replaceScripts(data, details).subscribe(response => {
      console.log(response);
      this.writeExcel(response, details);
    }, error => {
      console.log(error);
    });
  }
  writeExcel(data, details) {
    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! xlsx */ 4126)).then(xlsx => {
      console.log(data);
      const worksheet = xlsx.utils.json_to_sheet(data);
      const workbook = {
        Sheets: {
          'data': worksheet
        },
        SheetNames: ['data']
      };
      const excelBuffer = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array'
      });
      this.saveAsExcelFile(excelBuffer, details.MICROSERVICE_NAME + '_' + details.TYPE);
    });
  }
  saveAsExcelFile(buffer, fileName) {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    file_saver__WEBPACK_IMPORTED_MODULE_0__.saveAs(data, fileName + EXCEL_EXTENSION);
  }
  getBuildFolders() {
    let url = this.constants.hostname + 'build/folders?organization=' + this.constants.org;
    return this.httpClient.get(url, this.constants.headerOptions);
  }
  getRunsFromPipelineID(pipelineID) {
    let url = this.constants.hostname + 'pipeline/runs?organization=' + this.constants.org + '&pipelineID=' + pipelineID;
    return this.httpClient.get(url, this.constants.headerOptions);
  }
  getTimelineFromBuildID(buildId, buildNumber) {
    let url = this.constants.hostname + 'build/timeline?organization=' + this.constants.org + '&buildID=' + buildId + '&buildNumber=' + buildNumber;
    return this.httpClient.get(url, this.constants.headerOptions);
  }
  getPipelineDetails(pipelineID) {
    let url = this.constants.azureHostname + 'pipelines/' + pipelineID;
    return this.httpClient.get(url, this.constants.azureHeaderOptions);
  }
  addMicroserviceInDB(request, pipelineID) {
    let url = this.constants.hostname + 'update/database/microservice?organization=' + this.constants.org + '&pipelineID=' + pipelineID;
    return this.httpClient.post(url, request, this.constants.headerOptions);
  }
  replaceScripts(data, details) {
    let url = this.constants.hostname + 'replace/scripts?MICROSERVICE_CD_NAME=' + details.MICROSERVICE_CD_NAME + '&MICROSERVICE_NAME=' + details.MICROSERVICE_NAME + '&BUILD_NUMBER=' + details.BUILD_NUMBER + '&PLATFORM_NAME=' + details.PLATFORM_NAME;
    return this.httpClient.post(url, data, this.constants.headerOptions);
  }
}
DeploymentService.ɵfac = function DeploymentService_Factory(t) {
  return new (t || DeploymentService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_service_constants__WEBPACK_IMPORTED_MODULE_1__.Constants));
};
DeploymentService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: DeploymentService,
  factory: DeploymentService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9219:
/*!***************************************************************************************************************!*\
  !*** ./src/app/itaap-ms-manager/components/kubernetes/connectivity-history/connectivity-history.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectivityHistoryComponent": () => (/* binding */ ConnectivityHistoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _kubernetes_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../kubernetes.service */ 7901);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/scrollpanel */ 4250);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);







function ConnectivityHistoryComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Host");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Port");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Triggered By");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Triggered At ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "p-sortIcon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pSortableColumn", ctx_r0.sortField);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("field", ctx_r0.sortField);
  }
}
function ConnectivityHistoryComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 10)(1, "td")(2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td")(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const history_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pSelectableRow", history_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](history_r2.host);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](history_r2.port);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](history_r2.triggeredByUser.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](10, 8, history_r2.triggeredAt, "MMM dd, yyyy h:mm a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("connect-badge status-" + history_r2.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](history_r2.status);
  }
}
const _c0 = function () {
  return {
    "height": "calc(100vh - 34rem)",
    "min-height": "200px"
  };
};
class ConnectivityHistoryComponent {
  constructor(connectivityService) {
    this.connectivityService = connectivityService;
    this.display = false;
    this.sortField = "port";
    this.selectedRow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  ngOnInit() {
    this.getAllHistory();
  }
  onRowSelect(event) {
    this.showResults(event.data.id);
  }
  getAllHistory() {
    this.connectivityService.getAllHistory().subscribe(response => {
      this.history = response;
      console.log(this.history);
    });
  }
  showResults(historyItemID) {
    this.display = !this.display;
    console.log(historyItemID);
    this.getHistoryById(historyItemID);
  }
  getHistoryById(historyItemID) {
    this.connectivityService.getHistoryById(historyItemID).subscribe(response => {
      this.selectedRow.emit(response);
      this.viewResults = response;
      console.log(this.viewResults);
    });
  }
}
ConnectivityHistoryComponent.ɵfac = function ConnectivityHistoryComponent_Factory(t) {
  return new (t || ConnectivityHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_kubernetes_service__WEBPACK_IMPORTED_MODULE_0__.ConnectivityService));
};
ConnectivityHistoryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ConnectivityHistoryComponent,
  selectors: [["app-connectivity-history"]],
  outputs: {
    selectedRow: "selectedRow"
  },
  decls: 11,
  vars: 4,
  consts: [[1, "grid"], [1, "col-12", "pb-0"], [1, "card"], [3, "click"], [1, "p-link", "pi", "pi-refresh"], ["selectionMode", "single", 3, "value", "onRowSelect"], ["pTemplate", "header"], ["pTemplate", "body"], [3, "pSortableColumn"], [3, "field"], [3, "pSelectableRow"], [1, "textOverflow"]],
  template: function ConnectivityHistoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "History ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConnectivityHistoryComponent_Template_label_click_5_listener() {
        return ctx.getAllHistory();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p-scrollPanel")(8, "p-table", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onRowSelect", function ConnectivityHistoryComponent_Template_p_table_onRowSelect_8_listener($event) {
        return ctx.onRowSelect($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ConnectivityHistoryComponent_ng_template_9_Template, 12, 2, "ng-template", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ConnectivityHistoryComponent_ng_template_10_Template, 14, 11, "ng-template", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.history);
    }
  },
  dependencies: [primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_3__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_3__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_3__.SelectableRow, primeng_table__WEBPACK_IMPORTED_MODULE_3__.SortIcon, primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_4__.ScrollPanel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
  encapsulation: 2
});

/***/ }),

/***/ 7901:
/*!******************************************************************************!*\
  !*** ./src/app/itaap-ms-manager/components/kubernetes/kubernetes.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectivityService": () => (/* binding */ ConnectivityService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _service_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/constants */ 2543);



class ConnectivityService {
  constructor(http, constants) {
    this.http = http;
    this.constants = constants;
  }
  testConnection(data) {
    let loggedInUserDetails = sessionStorage.getItem("loggedInUserDetails");
    const userId = JSON.parse(loggedInUserDetails).id;
    let url = this.constants.hostname + 'connectivity-check/?userID=' + userId;
    return this.http.post(url, data, this.constants.headerOptions);
  }
  getAllHistory() {
    let url = this.constants.hostname + 'connectivity-check/history';
    return this.http.get(url, this.constants.headerOptions);
  }
  getHistoryById(id) {
    let url = this.constants.hostname + 'connectivity-check/history/' + id;
    return this.http.get(url, this.constants.headerOptions);
  }
}
ConnectivityService.ɵfac = function ConnectivityService_Factory(t) {
  return new (t || ConnectivityService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service_constants__WEBPACK_IMPORTED_MODULE_0__.Constants));
};
ConnectivityService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ConnectivityService,
  factory: ConnectivityService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9748:
/*!*********************************************************************************************************!*\
  !*** ./src/app/itaap-ms-manager/components/kubernetes/test-connectivity/test-connectivity.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestConnectivityComponent": () => (/* binding */ TestConnectivityComponent)
/* harmony export */ });
/* harmony import */ var _connectivity_history_connectivity_history_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../connectivity-history/connectivity-history.component */ 9219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _kubernetes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kubernetes.service */ 7901);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/divider */ 1154);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dialog */ 1837);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtextarea */ 1102);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/progressbar */ 8395);
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/scrollpanel */ 4250);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputnumber */ 7990);














const _c0 = function () {
  return {
    "height": "6px"
  };
};
function TestConnectivityComponent_p_progressBar_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "p-progressBar", 15);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c0));
  }
}
function TestConnectivityComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16)(1, "div", 17)(2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 19)(7, "textarea", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const result_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](result_r2.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("connect-badge status-" + result_r2.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](result_r2.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("autoResize", true)("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](result_r2.response);
  }
}
const _c1 = function () {
  return {
    "height": "calc(100vh - 20rem)",
    "min-height": "200px"
  };
};
class TestConnectivityComponent {
  constructor(connectivityService, history) {
    this.connectivityService = connectivityService;
    this.history = history;
    this.host = "";
    this.port = "";
    this.isError = false;
    this.visibleProgressBar = false;
  }
  ngOnInit() {}
  testConnection() {
    this.visibleProgressBar = true;
    if (this.host === "" || this.port === "") {
      this.isError = !this.isError;
      return;
    }
    let data = {
      "host": this.host,
      "port": this.port
    };
    this.connectivityService.testConnection(data).subscribe(response => {
      this.visibleProgressBar = false;
      this.connectionResult = response;
      console.log(this.connectionResult);
      this.host = "";
      this.port = "";
      this.history.getAllHistory();
    }, error => {
      console.log(error);
      this.visibleProgressBar = false;
    });
  }
  populateResults(row) {
    this.connectionResult = row;
  }
}
TestConnectivityComponent.ɵfac = function TestConnectivityComponent_Factory(t) {
  return new (t || TestConnectivityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_kubernetes_service__WEBPACK_IMPORTED_MODULE_1__.ConnectivityService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_connectivity_history_connectivity_history_component__WEBPACK_IMPORTED_MODULE_0__.ConnectivityHistoryComponent));
};
TestConnectivityComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: TestConnectivityComponent,
  selectors: [["app-test-connectivity"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_connectivity_history_connectivity_history_component__WEBPACK_IMPORTED_MODULE_0__.ConnectivityHistoryComponent])],
  decls: 29,
  vars: 11,
  consts: [[1, "grid"], [1, "col-12", "lg:col-12", "xl:col-6"], [1, "col-12"], [1, "card"], [1, "p-inputgroup"], [1, "p-inputgroup-addon"], [1, "material-symbols-outlined"], ["placeholder", "Host", "type", "text", "pInputText", "", 3, "ngModel", "ngModelChange"], [1, "font-bold", "text-xl", "align-text-center"], ["placeholder", "Port", "mode", "decimal", "inputId", "withoutgrouping", 3, "ngModel", "allowEmpty", "max", "useGrouping", "ngModelChange"], ["pButton", "", "type", "button", "icon", "pi pi-check", 3, "click"], [3, "selectedRow"], ["mode", "indeterminate", 3, "style", 4, "ngIf"], ["class", "grid p-fluid mb-3", 4, "ngFor", "ngForOf"], ["position", "center", "header", "Error", 3, "visible", "visibleChange"], ["mode", "indeterminate"], [1, "grid", "p-fluid", "mb-3"], [1, "col-12", "flex", "justify-content-between"], [1, "text-900", "font-semibold", "text-lg"], [1, "col-12", "pt-0", "pb-0"], ["pInputTextarea", "", 2, "background", "none", "border-style", "dashed", 3, "autoResize", "disabled"]],
  template: function TestConnectivityComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 0)(3, "div", 2)(4, "div", 3)(5, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Connectivity Check");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4)(8, "span", 5)(9, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "device_hub");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TestConnectivityComponent_Template_input_ngModelChange_11_listener($event) {
        return ctx.host = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 5)(13, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, ":");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p-inputNumber", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TestConnectivityComponent_Template_p_inputNumber_ngModelChange_15_listener($event) {
        return ctx.port = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TestConnectivityComponent_Template_button_click_16_listener() {
        return ctx.testConnection();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 2)(18, "app-connectivity-history", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectedRow", function TestConnectivityComponent_Template_app_connectivity_history_selectedRow_18_listener($event) {
        return ctx.populateResults($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 1)(20, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, TestConnectivityComponent_p_progressBar_21_Template, 1, 3, "p-progressBar", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Results");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "p-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p-scrollPanel");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, TestConnectivityComponent_div_26_Template, 9, 7, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "p-dialog", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("visibleChange", function TestConnectivityComponent_Template_p_dialog_visibleChange_27_listener($event) {
        return ctx.isError = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Please provide valid details\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.host);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.port)("allowEmpty", true)("max", 65535)("useGrouping", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.visibleProgressBar);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](10, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.connectionResult);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", ctx.isError);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputText, primeng_divider__WEBPACK_IMPORTED_MODULE_7__.Divider, primeng_dialog__WEBPACK_IMPORTED_MODULE_8__.Dialog, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_9__.InputTextarea, primeng_progressbar__WEBPACK_IMPORTED_MODULE_10__.ProgressBar, primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_11__.ScrollPanel, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_12__.InputNumber, _connectivity_history_connectivity_history_component__WEBPACK_IMPORTED_MODULE_0__.ConnectivityHistoryComponent],
  encapsulation: 2
});

/***/ }),

/***/ 3874:
/*!**************************************************************************************!*\
  !*** ./src/app/itaap-ms-manager/components/microservices/microservices.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MicroservicesComponent": () => (/* binding */ MicroservicesComponent)
/* harmony export */ });
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _azurelib_azure_variable_azure_variable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../azurelib/azure-variable/azure-variable.component */ 8067);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _tasks_tasks_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tasks/tasks.service */ 9846);
/* harmony import */ var _add_data_add_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../add-data/add-data.service */ 5340);
/* harmony import */ var _deployment_deployment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../deployment/deployment.service */ 7656);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/calendar */ 2547);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/ripple */ 4538);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/tooltip */ 4329);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/divider */ 1154);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dialog */ 1837);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/toast */ 9129);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/avatar */ 7063);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/fileupload */ 6193);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/accordion */ 9854);
/* harmony import */ var primeng_inplace__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/inplace */ 2116);
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/scrollpanel */ 4250);























function MicroservicesComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 12)(8, "div", 13)(9, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MicroservicesComponent_ng_template_3_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.onRetry());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const message_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](message_r9.summary);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](message_r9.detail);
  }
}
function MicroservicesComponent_div_4_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MicroservicesComponent_div_4_div_5_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21);
      const ms_r19 = restoredCtx.$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r20.populateMicroservice(ms_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 56)(2, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "p-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 58)(6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "p-avatar", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 22)(11, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " schedule ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 22)(16, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " admin_panel_settings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ms_r19 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ms_r19.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ms_r19.developer.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r12.getConvertedDate(ms_r19.targetCompletionDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ms_r19.status);
  }
}
function MicroservicesComponent_div_4_div_109_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 64)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "No Runs");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function MicroservicesComponent_div_4_div_110__svg_path_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "path", 72);
  }
}
function MicroservicesComponent_div_4_div_110__svg_path_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "path", 73);
  }
}
function MicroservicesComponent_div_4_div_110_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 65)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "svg", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MicroservicesComponent_div_4_div_110__svg_path_3_Template, 1, 0, "path", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MicroservicesComponent_div_4_div_110__svg_path_4_Template, 1, 0, "path", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div")(6, "div", 22)(7, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "tag");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 22)(12, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"]("mr-2 bolt bolt-status " + ctx_r14.selectedMs.deployment.deploymentDev.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r14.selectedMs.deployment.deploymentDev.state == "failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r14.selectedMs.deployment.deploymentDev.state == "succeeded");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r14.selectedMs.deployment.deploymentDev.buildNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r14.getConvertedDate(ctx_r14.selectedMs.deployment.deploymentDev.deploymentDate));
  }
}
function MicroservicesComponent_div_4_div_114_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 64)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "No Runs");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function MicroservicesComponent_div_4_div_115__svg_path_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "path", 72);
  }
}
function MicroservicesComponent_div_4_div_115__svg_path_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "path", 73);
  }
}
function MicroservicesComponent_div_4_div_115_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 65)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "svg", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MicroservicesComponent_div_4_div_115__svg_path_3_Template, 1, 0, "path", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MicroservicesComponent_div_4_div_115__svg_path_4_Template, 1, 0, "path", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div")(6, "div", 22)(7, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "tag");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 22)(12, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"]("mr-2 bolt bolt-status " + ctx_r16.selectedMs.deployment.deploymentTest.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r16.selectedMs.deployment.deploymentTest.state == "failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r16.selectedMs.deployment.deploymentTest.state == "succeeded");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r16.selectedMs.deployment.deploymentTest.buildNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r16.getConvertedDate(ctx_r16.selectedMs.deployment.deploymentTest.deploymentDate));
  }
}
function MicroservicesComponent_div_4_ng_template_126_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 64)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "No Runs");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function MicroservicesComponent_div_4_ng_template_126_div_3_p_accordionTab_2_ng_template_1__svg_path_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "path", 72);
  }
}
function MicroservicesComponent_div_4_ng_template_126_div_3_p_accordionTab_2_ng_template_1__svg_path_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "path", 73);
  }
}
function MicroservicesComponent_div_4_ng_template_126_div_3_p_accordionTab_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 64)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "svg", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MicroservicesComponent_div_4_ng_template_126_div_3_p_accordionTab_2_ng_template_1__svg_path_3_Template, 1, 0, "path", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MicroservicesComponent_div_4_ng_template_126_div_3_p_accordionTab_2_ng_template_1__svg_path_4_Template, 1, 0, "path", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div")(6, "div", 22)(7, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "tag");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 22)(12, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const acc_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"]("mr-2 bolt bolt-status " + acc_r29.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", acc_r29.state == "failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", acc_r29.state == "succeeded");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](acc_r29.buildNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r30.getConvertedDate(acc_r29.deploymentDate));
  }
}
function MicroservicesComponent_div_4_ng_template_126_div_3_p_accordionTab_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 77)(1, "div", 12)(2, "div", 78)(3, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "KT SignOff");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 78)(8, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "SIT SignOff");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 78)(13, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "UAT SignOff");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 78)(18, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "PT SignOff");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 78)(23, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "ST SignOff");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "p-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 77)(29, "div", 81)(30, "div", 82)(31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "IQ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div")(34, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 82)(37, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Variables");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div")(40, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](41, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const acc_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r31.getConvertedDate(acc_r29.documents.signOffKt));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r31.getConvertedDate(acc_r29.documents.signOffSit));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r31.getConvertedDate(acc_r29.documents.signOffUat));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r31.getConvertedDate(acc_r29.documents.signOffPt));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r31.getConvertedDate(acc_r29.documents.signOffSt));
  }
}
function MicroservicesComponent_div_4_ng_template_126_div_3_p_accordionTab_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-accordionTab");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MicroservicesComponent_div_4_ng_template_126_div_3_p_accordionTab_2_ng_template_1_Template, 16, 6, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MicroservicesComponent_div_4_ng_template_126_div_3_p_accordionTab_2_ng_template_2_Template, 42, 5, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MicroservicesComponent_div_4_ng_template_126_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "p-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MicroservicesComponent_div_4_ng_template_126_div_3_p_accordionTab_2_Template, 3, 0, "p-accordionTab", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r27.selectedMs.deployment.deploymentAcc);
  }
}
function MicroservicesComponent_div_4_ng_template_126_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 74)(1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MicroservicesComponent_div_4_ng_template_126_div_2_Template, 3, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MicroservicesComponent_div_4_ng_template_126_div_3_Template, 3, 1, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r17.selectedMs.deployment.deploymentAcc.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r17.selectedMs.deployment.deploymentAcc.length != 0);
  }
}
function MicroservicesComponent_div_4_ng_template_129_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 64)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "No Runs");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function MicroservicesComponent_div_4_ng_template_129_div_3_p_accordionTab_2_ng_template_1__svg_path_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "path", 72);
  }
}
function MicroservicesComponent_div_4_ng_template_129_div_3_p_accordionTab_2_ng_template_1__svg_path_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "path", 73);
  }
}
function MicroservicesComponent_div_4_ng_template_129_div_3_p_accordionTab_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 64)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "svg", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MicroservicesComponent_div_4_ng_template_129_div_3_p_accordionTab_2_ng_template_1__svg_path_3_Template, 1, 0, "path", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MicroservicesComponent_div_4_ng_template_129_div_3_p_accordionTab_2_ng_template_1__svg_path_4_Template, 1, 0, "path", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div")(6, "div", 22)(7, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "tag");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 22)(12, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const prod_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"]("mr-2 bolt bolt-status " + prod_r39.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", prod_r39.state == "failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", prod_r39.state == "succeeded");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](prod_r39.buildNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r40.getConvertedDate(prod_r39.deploymentDate));
  }
}
function MicroservicesComponent_div_4_ng_template_129_div_3_p_accordionTab_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 77)(1, "div", 12)(2, "div", 78)(3, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "KT SignOff");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 78)(8, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "SIT SignOff");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 78)(13, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "UAT SignOff");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 78)(18, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "PT SignOff");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 78)(23, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "ST SignOff");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "p-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 77)(29, "div", 81)(30, "div", 82)(31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "PIQ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div")(34, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 82)(37, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Variables");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div")(40, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](41, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const prod_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r41.getConvertedDate(prod_r39.documents.signOffKt));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r41.getConvertedDate(prod_r39.documents.signOffSit));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r41.getConvertedDate(prod_r39.documents.signOffUat));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r41.getConvertedDate(prod_r39.documents.signOffPt));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r41.getConvertedDate(prod_r39.documents.signOffSt));
  }
}
function MicroservicesComponent_div_4_ng_template_129_div_3_p_accordionTab_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-accordionTab");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MicroservicesComponent_div_4_ng_template_129_div_3_p_accordionTab_2_ng_template_1_Template, 16, 6, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MicroservicesComponent_div_4_ng_template_129_div_3_p_accordionTab_2_ng_template_2_Template, 42, 5, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MicroservicesComponent_div_4_ng_template_129_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "p-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MicroservicesComponent_div_4_ng_template_129_div_3_p_accordionTab_2_Template, 3, 0, "p-accordionTab", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r37.selectedMs.deployment.deploymentProd);
  }
}
function MicroservicesComponent_div_4_ng_template_129_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 74)(1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MicroservicesComponent_div_4_ng_template_129_div_2_Template, 3, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MicroservicesComponent_div_4_ng_template_129_div_3_Template, 3, 1, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r18.selectedMs.deployment.deploymentProd.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r18.selectedMs.deployment.deploymentProd.length != 0);
  }
}
const _c0 = function () {
  return {
    "height": "calc(100vh - 15rem)"
  };
};
const _c1 = function () {
  return {
    "height": "calc(100vh - 35rem)",
    "min-height": "200px"
  };
};
function MicroservicesComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12)(1, "div", 15)(2, "p-scrollPanel")(3, "div", 16)(4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, MicroservicesComponent_div_4_div_5_Template, 20, 4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 18)(7, "div", 16)(8, "div", 19)(9, "div", 20)(10, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 22)(13, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MicroservicesComponent_div_4_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r47);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r46.refresh());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MicroservicesComponent_div_4_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r47);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r48.openUploadDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MicroservicesComponent_div_4_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r47);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r49.openEditDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "p-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 26)(18, "div", 16)(19, "div", 27)(20, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "p-avatar", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div")(23, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Scrum Master");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "p-avatar", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div")(30, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Point of contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 28)(35, "p-avatar", 32)(36, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, " calendar_month ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 34)(39, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Target delivery date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 27)(44, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](45, "p-avatar", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div")(47, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Tech Lead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](52, "p-avatar", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div")(54, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "Developer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](59, "p-avatar", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div")(61, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "div", 35)(66, "div", 20)(67, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "Download documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "div", 37)(70, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MicroservicesComponent_div_4_Template_button_click_70_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r47);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r50.downloadDocuments("ITD"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](71, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](72, "p-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "div", 16)(74, "div", 40)(75, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, "Events");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "div", 27)(78, "div", 28)(79, "p-avatar", 32)(80, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81, " calendar_month ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "div", 34)(83, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84, "Technical Go Live");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "div", 27)(88, "div", 28)(89, "p-avatar", 32)(90, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91, " calendar_month ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "div", 34)(93, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](94, "Business Go Live");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](96);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "div", 42)(98, "div", 43)(99, "div", 44)(100, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](101, "Development");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "div", 46)(103, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](104, "Test");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "div", 47)(106, "div", 48)(107, "div", 16)(108, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](109, MicroservicesComponent_div_4_div_109_Template, 3, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](110, MicroservicesComponent_div_4_div_110_Template, 16, 6, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "div", 48)(112, "div", 16)(113, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](114, MicroservicesComponent_div_4_div_114_Template, 3, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](115, MicroservicesComponent_div_4_div_115_Template, 16, 6, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "div", 52)(117, "div", 44)(118, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](119, "Acceptance");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "div", 46)(121, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](122, "Production");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](123, "div", 53)(124, "div", 54)(125, "p-scrollPanel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](126, MicroservicesComponent_div_4_ng_template_126_Template, 4, 2, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](127, "div", 54)(128, "p-scrollPanel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](129, MicroservicesComponent_div_4_ng_template_129_Template, 4, 2, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](25, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.allMicroservicesList);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.selectedMs.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.allMicroservicesList.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.allMicroservicesList.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.allMicroservicesList.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.selectedMs.scrumMaster.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.selectedMs.poc.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getConvertedDate(ctx_r1.selectedMs.targetCompletionDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.selectedMs.techLead.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.selectedMs.developer.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.selectedMs.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.allMicroservicesList.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.allMicroservicesList.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getConvertedDate(ctx_r1.selectedMs.deployment.tgl));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getConvertedDate(ctx_r1.selectedMs.deployment.bgl));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.selectedMs.deployment.deploymentDev == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.selectedMs.deployment.deploymentDev != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.selectedMs.deployment.deploymentTest == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.selectedMs.deployment.deploymentTest != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](26, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](27, _c1));
  }
}
function MicroservicesComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "No Records");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function MicroservicesComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Edit Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function MicroservicesComponent_ng_template_9_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r51.selectedMs.name, " ");
  }
}
function MicroservicesComponent_ng_template_9_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "input", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MicroservicesComponent_ng_template_9_ng_template_6_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r70);
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r69.selectedMs.name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r52.selectedMs.name);
  }
}
function MicroservicesComponent_ng_template_9_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r53.selectedMs.techLead.name);
  }
}
function MicroservicesComponent_ng_template_9_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-dropdown", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MicroservicesComponent_ng_template_9_ng_template_12_Template_p_dropdown_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r72);
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r71.selectedMs.techLead = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx_r54.allTechLeads)("ngModel", ctx_r54.selectedMs.techLead);
  }
}
function MicroservicesComponent_ng_template_9_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r55.selectedMs.scrumMaster.name);
  }
}
function MicroservicesComponent_ng_template_9_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-dropdown", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MicroservicesComponent_ng_template_9_ng_template_18_Template_p_dropdown_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r74);
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r73.selectedMs.scrumMaster = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx_r56.allScrumMasters)("ngModel", ctx_r56.selectedMs.scrumMaster);
  }
}
function MicroservicesComponent_ng_template_9_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r57.selectedMs.developer.name);
  }
}
function MicroservicesComponent_ng_template_9_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-dropdown", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MicroservicesComponent_ng_template_9_ng_template_24_Template_p_dropdown_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r76);
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r75.selectedMs.developer = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx_r58.allDevelopers)("ngModel", ctx_r58.selectedMs.developer);
  }
}
function MicroservicesComponent_ng_template_9_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r59.selectedMs.backup.name);
  }
}
function MicroservicesComponent_ng_template_9_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-dropdown", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MicroservicesComponent_ng_template_9_ng_template_30_Template_p_dropdown_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r78);
      const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r77.selectedMs.backup = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx_r60.allDevelopers)("ngModel", ctx_r60.selectedMs.backup);
  }
}
function MicroservicesComponent_ng_template_9_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r61.selectedMs.poc.name);
  }
}
function MicroservicesComponent_ng_template_9_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-dropdown", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MicroservicesComponent_ng_template_9_ng_template_36_Template_p_dropdown_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r80);
      const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r79.selectedMs.poc = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx_r62.allClients)("ngModel", ctx_r62.selectedMs.poc);
  }
}
function MicroservicesComponent_ng_template_9_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r63.getConvertedDate(ctx_r63.selectedMs.targetCompletionDate));
  }
}
function MicroservicesComponent_ng_template_9_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-calendar", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MicroservicesComponent_ng_template_9_ng_template_42_Template_p_calendar_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r82);
      const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r81.selectedMs.targetCompletionDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("minDate", ctx_r64.todayDate)("showIcon", true)("ngModel", ctx_r64.selectedMs.targetCompletionDate);
  }
}
function MicroservicesComponent_ng_template_9_ng_template_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r65.getConvertedDate(ctx_r65.selectedMs.deployment.tgl));
  }
}
function MicroservicesComponent_ng_template_9_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-calendar", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MicroservicesComponent_ng_template_9_ng_template_48_Template_p_calendar_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r84);
      const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r83.selectedMs.deployment.tgl = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("minDate", ctx_r66.todayDate)("showIcon", true)("ngModel", ctx_r66.selectedMs.deployment.tgl);
  }
}
function MicroservicesComponent_ng_template_9_ng_template_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r67.getConvertedDate(ctx_r67.selectedMs.deployment.bgl));
  }
}
function MicroservicesComponent_ng_template_9_ng_template_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-calendar", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MicroservicesComponent_ng_template_9_ng_template_54_Template_p_calendar_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r86);
      const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r85.selectedMs.deployment.bgl = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("minDate", ctx_r68.todayDate)("showIcon", true)("ngModel", ctx_r68.selectedMs.deployment.bgl);
  }
}
function MicroservicesComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 87)(1, "div", 88)(2, "label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Microservice Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p-inplace", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, MicroservicesComponent_ng_template_9_ng_template_5_Template, 1, 1, "ng-template", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, MicroservicesComponent_ng_template_9_ng_template_6_Template, 3, 1, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 92)(8, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Tech Lead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "p-inplace", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, MicroservicesComponent_ng_template_9_ng_template_11_Template, 2, 1, "ng-template", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, MicroservicesComponent_ng_template_9_ng_template_12_Template, 1, 2, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 92)(14, "label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Scrum Master");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "p-inplace", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, MicroservicesComponent_ng_template_9_ng_template_17_Template, 2, 1, "ng-template", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, MicroservicesComponent_ng_template_9_ng_template_18_Template, 1, 2, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 92)(20, "label", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Primary Developer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "p-inplace", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, MicroservicesComponent_ng_template_9_ng_template_23_Template, 2, 1, "ng-template", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, MicroservicesComponent_ng_template_9_ng_template_24_Template, 1, 2, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 92)(26, "label", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Backup Resource");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "p-inplace", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, MicroservicesComponent_ng_template_9_ng_template_29_Template, 2, 1, "ng-template", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, MicroservicesComponent_ng_template_9_ng_template_30_Template, 1, 2, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 92)(32, "label", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Point of Contact (Philips)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "p-inplace", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, MicroservicesComponent_ng_template_9_ng_template_35_Template, 2, 1, "ng-template", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, MicroservicesComponent_ng_template_9_ng_template_36_Template, 1, 2, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 92)(38, "label", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Target Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "p-inplace", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, MicroservicesComponent_ng_template_9_ng_template_41_Template, 2, 1, "ng-template", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, MicroservicesComponent_ng_template_9_ng_template_42_Template, 1, 3, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 92)(44, "label", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Technical Go Live");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "p-inplace", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](47, MicroservicesComponent_ng_template_9_ng_template_47_Template, 2, 1, "ng-template", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](48, MicroservicesComponent_ng_template_9_ng_template_48_Template, 1, 3, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 92)(50, "label", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "Business Go Live");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "p-inplace", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](53, MicroservicesComponent_ng_template_9_ng_template_53_Template, 2, 1, "ng-template", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](54, MicroservicesComponent_ng_template_9_ng_template_54_Template, 1, 3, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("active", ctx_r5.selectedMs.name == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("active", ctx_r5.selectedMs.techLead == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("active", ctx_r5.selectedMs.scrumMaster == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("active", ctx_r5.selectedMs.developer == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("active", ctx_r5.selectedMs.backup == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("active", ctx_r5.selectedMs.poc == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("active", ctx_r5.selectedMs.targetCompletionDate == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("active", ctx_r5.selectedMs.deployment.tgl == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("active", ctx_r5.selectedMs.deployment.bgl == null);
  }
}
function MicroservicesComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-button", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MicroservicesComponent_ng_template_10_Template_p_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r88);
      const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r87.onSaveEditDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MicroservicesComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Upload Documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MicroservicesComponent_ng_template_13_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-dropdown", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MicroservicesComponent_ng_template_13_ng_template_10_Template_p_dropdown_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r100);
      const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r99.deploymentAcc = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx_r91.selectedMs.deployment.deploymentAcc)("ngModel", ctx_r91.deploymentAcc);
  }
}
function MicroservicesComponent_ng_template_13_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 129)(1, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pToolTip", function MicroservicesComponent_ng_template_13_ng_template_11_Template_div_pToolTip_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r103);
      const file_r101 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](file_r101.name);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p-dropdown", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onChange", function MicroservicesComponent_ng_template_13_ng_template_11_Template_p_dropdown_onChange_5_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r103);
      const file_r101 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](file_r101.tag = $event.value);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MicroservicesComponent_ng_template_13_ng_template_11_Template_button_click_6_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r103);
      const file_r101 = restoredCtx.$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](9);
      const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r105.removeFile($event, file_r101, _r90));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const file_r101 = ctx.$implicit;
    const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", file_r101.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r92.formatBytes(file_r101.size));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx_r92.documentTag);
  }
}
function MicroservicesComponent_ng_template_13_ng_template_12_Template(rf, ctx) {}
function MicroservicesComponent_ng_template_13_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-dropdown", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MicroservicesComponent_ng_template_13_ng_template_22_Template_p_dropdown_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r107);
      const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r106.deploymentProd = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx_r96.selectedMs.deployment.deploymentProd)("ngModel", ctx_r96.deploymentProd);
  }
}
function MicroservicesComponent_ng_template_13_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 129)(1, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pToolTip", function MicroservicesComponent_ng_template_13_ng_template_23_Template_div_pToolTip_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r110);
      const file_r108 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](file_r108.name);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p-dropdown", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onChange", function MicroservicesComponent_ng_template_13_ng_template_23_Template_p_dropdown_onChange_5_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r110);
      const file_r108 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](file_r108.tag = $event.value);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MicroservicesComponent_ng_template_13_ng_template_23_Template_button_click_6_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r110);
      const file_r108 = restoredCtx.$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](21);
      const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r112.removeFile($event, file_r108, _r95));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const file_r108 = ctx.$implicit;
    const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", file_r108.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r97.formatBytes(file_r108.size));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx_r97.documentTag);
  }
}
function MicroservicesComponent_ng_template_13_ng_template_24_Template(rf, ctx) {}
function MicroservicesComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16)(1, "div", 117)(2, "div", null, 118)(4, "div", 119)(5, "span", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Acceptance");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MicroservicesComponent_ng_template_13_Template_button_click_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r114);
      const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
      const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r113.addNewRow($event, _r89, 3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p-fileUpload", 122, 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("uploadHandler", function MicroservicesComponent_ng_template_13_Template_p_fileUpload_uploadHandler_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r114);
      const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r115.onUpload($event, 3));
    })("onSelect", function MicroservicesComponent_ng_template_13_Template_p_fileUpload_onSelect_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r114);
      const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r116.onSelectFiles($event, 3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, MicroservicesComponent_ng_template_13_ng_template_10_Template, 1, 2, "ng-template", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, MicroservicesComponent_ng_template_13_ng_template_11_Template, 7, 3, "ng-template", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, MicroservicesComponent_ng_template_13_ng_template_12_Template, 0, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 117)(14, "div", null, 126)(16, "div", 119)(17, "span", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Production");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MicroservicesComponent_ng_template_13_Template_button_click_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r114);
      const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](15);
      const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r117.addNewRow($event, _r94, 4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "p-fileUpload", 122, 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("uploadHandler", function MicroservicesComponent_ng_template_13_Template_p_fileUpload_uploadHandler_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r114);
      const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r118.onUpload($event, 3));
    })("onSelect", function MicroservicesComponent_ng_template_13_Template_p_fileUpload_onSelect_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r114);
      const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r119.onSelectFiles($event, 4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, MicroservicesComponent_ng_template_13_ng_template_22_Template, 1, 2, "ng-template", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, MicroservicesComponent_ng_template_13_ng_template_23_Template, 7, 3, "ng-template", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, MicroservicesComponent_ng_template_13_ng_template_24_Template, 0, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r8.deploymentAcc == undefined ? true : false)("fileLimit", 6)("showCancelButton", false)("customUpload", true)("multiple", true)("maxFileSize", 1000000);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r8.deploymentProd == undefined ? true : false)("fileLimit", 6)("showCancelButton", false)("customUpload", true)("multiple", true)("maxFileSize", 1000000);
  }
}
const _c2 = function () {
  return {
    width: "40rem"
  };
};
const _c3 = function () {
  return {
    "overflow": "visible"
  };
};
const _c4 = function () {
  return {
    "width": "70rem"
  };
};
class MicroservicesComponent {
  constructor(tasksService, addDataService, deploymentService, messageService) {
    this.tasksService = tasksService;
    this.addDataService = addDataService;
    this.deploymentService = deploymentService;
    this.messageService = messageService;
    this.allMicroservicesList = [];
    this.selectedMs = {};
    this.editModal = false;
    this.visibleProgressBar = true;
    this.blockedDialog = false;
    this.uploadModal = false;
    this.uploadedAcc = [];
    this.uploadedProd = [];
    this.documentTag = [{
      id: 0,
      name: 'ITD'
    }, {
      id: 0,
      name: 'IQ'
    }, {
      id: 0,
      name: 'PIQ'
    }, {
      id: 0,
      name: 'Azure Var'
    }, {
      id: 0,
      name: 'Postman Coll.'
    }];
    this.accDocModal = [];
    this.prodDocModal = [];
    this.todayDate = new Date();
  }
  ngOnInit() {
    this.selectedMs = {
      name: "Select a microservice",
      status: "Select a microservice",
      pipelineID: 2472,
      techLead: {
        name: "Tech Lead"
      },
      developer: {
        name: "Developer"
      },
      scrumMaster: {
        name: "Scrum Master"
      },
      poc: {
        name: "Point of Contact"
      },
      "deployment": {
        "deploymentDev": null,
        "deploymentTest": null,
        "deploymentAcc": [],
        "deploymentProd": []
      }
    };
    this.getAllMicroservices();
  }
  getAllMicroservices() {
    this.tasksService.getAllMicroservices().subscribe(response => {
      if (response.length != 0) {
        this.allMicroservicesList = response;
        this.selectedMs = this.allMicroservicesList[0];
      }
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: "Connection established successfully."
      });
    }, error => {
      this.messageService.add({
        key: 'retry',
        severity: 'error',
        sticky: true,
        summary: error.statusText,
        detail: error.message
      });
    });
  }
  onRetry() {
    this.getAllMicroservices();
    this.messageService.clear('retry');
  }
  populateMicroservice(ms) {
    this.selectedMs = ms;
    this.uploadedAcc = [];
    this.uploadedProd = [];
    this.deploymentAcc = undefined;
    this.deploymentProd = undefined;
  }
  getConvertedDate(date) {
    if (date != null) {
      date = new Date(date);
      var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      var day = date.getDate();
      var monthIndex = date.getMonth();
      var year = date.getFullYear();
      return monthNames[monthIndex] + " " + day + ", " + year;
    } else {
      return "No data";
    }
  }
  refresh() {
    this.selectedMs;
    this.deploymentService.addMicroserviceInDB(this.selectedMs, this.selectedMs.pipelineID).subscribe(response => {
      console.log(response);
      this.messageService.add({
        severity: 'success',
        summary: 'Updated',
        detail: 'Successfully refreshed for microservice ' + response.name
      });
    }, error => {
      console.log(error);
      this.messageService.add({
        severity: 'error',
        summary: error.statusText,
        detail: error.message
      });
    });
  }
  openEditDialog() {
    this.editModal = true;
    this.populateAllDropdowns();
  }
  onSaveEditDialog() {
    this.blockedDialog = true;
    this.selectedMs.tgl = this.selectedMs.deployment.tgl;
    this.selectedMs.bgl = this.selectedMs.deployment.bgl;
    this.deploymentService.addMicroserviceInDB(this.selectedMs, this.selectedMs.pipelineID).subscribe(response => {
      this.editModal = false;
      this.blockedDialog = false;
      this.messageService.add({
        severity: 'success',
        summary: 'Updated',
        detail: 'Successfully Updated the microservice ' + response.name
      });
    }, error => {
      this.blockedDialog = false;
      this.messageService.add({
        severity: 'error',
        summary: error.statusText,
        detail: error.message
      });
    });
  }
  openUploadDialog() {
    this.uploadModal = true;
    this.populateAllDropdowns();
  }
  onUploadDialog() {
    this.uploadModal = false;
  }
  populateAllDropdowns() {
    this.addDataService.fetchAllClients().subscribe(response => this.allClients = response, error => console.log(error));
    this.addDataService.fetchAllDevelopers().subscribe(response => this.allDevelopers = response, error => console.log(error));
    this.addDataService.fetchAllScrumMasters().subscribe(response => this.allScrumMasters = response, error => console.log(error));
    this.addDataService.fetchAllTechLeads().subscribe(response => this.allTechLeads = response, error => console.log(error));
  }
  formatBytes(bytes, decimals = 2) {
    let units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
    let i = 0;
    for (i; bytes > 1024; i++) {
      bytes /= 1024;
    }
    return parseFloat(bytes.toFixed(decimals)) + ' ' + units[i];
  }
  onUpload(event, stage) {
    for (let file of event.files) {
      if (file.tag != undefined) {
        // this.microservicesService.readExcel(file);
        this.getBase64(file).then(data => {
          this.populateDocuments(file, data, stage);
        });
      } else {
        this.uploadedAcc = [];
        this.messageService.add({
          severity: 'error',
          summary: 'Not Uploaded',
          detail: 'Please select document type for all files.',
          life: 5000
        });
        break;
      }
    }
    console.log(this.uploadedAcc);
  }
  populateDocuments(file, data, stage) {
    if (stage == 3) {
      for (let i = 0; i < this.selectedMs.deployment.deploymentAcc.length; i++) {
        if (this.selectedMs.deployment.deploymentAcc[i].buildNumber == this.deploymentAcc.buildNumber) {
          this.deploymentAcc.fileName = file.name;
          this.deploymentAcc.fileTag = file.tag.name;
          this.deploymentAcc.fileData = data;
          this.deploymentAcc.pipelineID = this.selectedMs.pipelineID;
          this.selectedMs.deployment.deploymentAcc[i] = this.deploymentAcc;
          this.addDataService.addDeploymentDocuments(this.selectedMs.deployment.deploymentAcc[i]).subscribe(response => {
            this.messageService.add({
              severity: 'success',
              summary: 'Uploaded',
              detail: 'Successfully uploaded file : ' + file.name
            });
          }, error => {
            this.messageService.add({
              severity: 'error',
              summary: error.statusText,
              detail: error.message
            });
          });
        }
      }
    } else if (stage == 4) {}
  }
  getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
  removeFile(event, file, uploader) {
    const index = uploader.files.indexOf(file);
    uploader.remove(event, index);
  }
  addNewRow(event, prodDiv, stage) {}
  onSelectFiles(event, stage) {
    for (let file of event.currentFiles) {
      file.buildNumber = this.deploymentAcc.buildNumber;
      file.stage = stage;
    }
    if (this.deploymentAcc == undefined) {
      this.messageService.add({
        severity: 'error',
        summary: '',
        detail: 'Please select a build version.',
        life: 5000
      });
    }
  }
  downloadDocuments(type) {
    let itd = this.selectedMs.deployment.itd;
    let buffer = itd.split("base64,")[1];
    // this.microservicesService.readExcel('assets/itaap-ms-manager/templates/IQ.xlsx');
    // this.azureVarComponent.saveAsExcelFile(buffer, this.selectedMs.name + "_ITD");
  }
}

MicroservicesComponent.ɵfac = function MicroservicesComponent_Factory(t) {
  return new (t || MicroservicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_tasks_tasks_service__WEBPACK_IMPORTED_MODULE_1__.TasksService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_add_data_add_data_service__WEBPACK_IMPORTED_MODULE_2__.AddDataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_deployment_deployment_service__WEBPACK_IMPORTED_MODULE_3__.DeploymentService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.MessageService));
};
MicroservicesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: MicroservicesComponent,
  selectors: [["app-microservices"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_5__.MessageService, primeng_api__WEBPACK_IMPORTED_MODULE_5__.ConfirmationService, _azurelib_azure_variable_azure_variable_component__WEBPACK_IMPORTED_MODULE_0__.AzureVariableComponent])],
  decls: 14,
  vars: 20,
  consts: [["key", "success"], ["key", "retry"], ["pTemplate", "message"], ["class", "grid p-fluid", 4, "ngIf"], [3, "visible", "contentStyle", "modal", "draggable", "resizable", "visibleChange"], ["editMsDialog", ""], ["pTemplate", "header"], ["pTemplate", "content"], ["pTemplate", "footer"], [1, "flex", "flex-column", 2, "flex", "1"], [1, "text-center"], [1, "pi", "pi-exclamation-triangle", 2, "font-size", "3rem"], [1, "grid", "p-fluid"], [1, "col-12"], ["type", "button", "icon", "pi pi-refresh", "pButton", "", "label", "Retry", 1, "p-button-danger", 3, "click"], [1, "col-12", "lg:col-6", "xl:col-3"], [1, "grid"], ["class", "p-link task-card mb-3 p-3", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-12", "lg:col-9", "xl:col-9"], [1, "col-12", "lg:col-12", "xl:col-12", "pb-0"], [1, "flex", "justify-content-between", "align-items-center"], [1, "text-green-500", "ml-2", "text-3xl", 2, "font-weight", "normal"], [1, "flex", "align-items-center"], ["pButton", "", "pRipple", "", "icon", "pi pi-refresh", 1, "p-button-text", "mr-2", 3, "disabled", "click"], ["pButton", "", "pRipple", "", "icon", "pi pi-upload", 1, "p-button-info", "mr-2", 3, "disabled", "click"], ["pButton", "", "pRipple", "", "icon", "pi pi-pencil", 1, "p-button-info", 3, "disabled", "click"], [1, "col-12", "lg:col-5", "xl:col-5"], [1, "col-6"], [1, "flex", "align-items-center", "mb-2"], ["size", "large", "icon", "pi pi-user", "styleClass", "mr-2", "shape", "circle"], [1, "text-500"], [1, "block", "font-medium", "text-xl", 2, "align-self", "center"], ["size", "large", "shape", "circle", "styleclass", "tasks-badge status-completed", 1, "p-element"], [1, "material-symbols-outlined", "p-avatar-icon"], [1, "ml-2"], [1, "card", "p-3", 2, "border-style", "dashed"], [1, "text-xl", "font-semibold"], [1, "flex"], ["pButton", "", "pRipple", "", "icon", "pi pi-download", "label", "ITD", 1, "p-button-info", "p-button-text", "p-button-sm", "mr-2", 3, "disabled", "click"], ["pButton", "", "pRipple", "", "icon", "pi pi-download", "label", "Postman Collection", 1, "p-button-info", "p-button-text", "p-button-sm", 3, "disabled"], [1, "col-12", "pb-0"], [1, "block", "font-medium", "text-xl", "text-purple-500", 2, "align-self", "center"], [1, "col-12", "lg:col-7", "xl:col-7"], [1, "card", "p-0", "grid", "grid-nogutter"], [1, "col-6", "py-2", "px-3", "border-none", "md:border-right-1", "align-text-center", "surface-border"], [1, "text-l", "ml-2"], [1, "col-6", "py-2", "px-3", "border-none", "align-text-center", "surface-border"], [1, "p-0", "grid", "grid-nogutter", "mb-3"], [1, "col-6", "py-2", "px-3"], [1, "col-12", "py-2", "px-3"], ["class", "flex justify-content-center align-items-center", 4, "ngIf"], ["class", "flex align-items-center justify-content-center", 4, "ngIf"], [1, "card", "p-0", "grid", "grid-nogutter", "mb-0"], [1, "p-0", "grid", "grid-nogutter"], [1, "col-6", "px-2"], [1, "p-link", "task-card", "mb-3", "p-3", 3, "click"], [1, "mb-2"], [1, "text-800", "text-lg", "textOverflow"], [1, "flex", "justify-content-between"], ["icon", "pi pi-user", "styleClass", "mr-2", "shape", "circle"], [1, "font-medium", "textOverflow", 2, "align-self", "center"], [1, "material-symbols-outlined", "text-700", "mr-2"], [1, "textOverflow", 2, "align-self", "center"], [1, "block", 2, "align-self", "center"], [1, "flex", "justify-content-center", "align-items-center"], [1, "flex", "align-items-center", "justify-content-center"], ["height", "16", "role", "img", "viewBox", "0 0 16 16", "width", "16", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M10.984 5.004a.9.9 0 0 1 0 1.272L9.27 7.99l1.74 1.741a.9.9 0 1 1-1.272 1.273l-1.74-1.741-1.742 1.74a.9.9 0 1 1-1.272-1.272l1.74-1.74-1.713-1.714a.9.9 0 0 1 1.273-1.273l1.713 1.713 1.714-1.713a.9.9 0 0 1 1.273 0z", "fill", "#fff", 4, "ngIf"], ["d", "M6.062 11.144l-.003-.002-1.784-1.785A.937.937 0 1 1 5.6 8.031l1.125 1.124 3.88-3.88A.937.937 0 1 1 11.931 6.6l-4.54 4.54-.004.004a.938.938 0 0 1-1.325 0z", "fill", "#fff", 4, "ngIf"], [1, "text-xl", "font-semibold", "material-symbols-outlined", "mr-2"], [1, "text-sm", "text-600", "material-symbols-outlined", "mr-2"], [1, "text-sm", "text-600"], ["d", "M10.984 5.004a.9.9 0 0 1 0 1.272L9.27 7.99l1.74 1.741a.9.9 0 1 1-1.272 1.273l-1.74-1.741-1.742 1.74a.9.9 0 1 1-1.272-1.272l1.74-1.74-1.713-1.714a.9.9 0 0 1 1.273-1.273l1.713 1.713 1.714-1.713a.9.9 0 0 1 1.273 0z", "fill", "#fff"], ["d", "M6.062 11.144l-.003-.002-1.784-1.785A.937.937 0 1 1 5.6 8.031l1.125 1.124 3.88-3.88A.937.937 0 1 1 11.931 6.6l-4.54 4.54-.004.004a.938.938 0 0 1-1.325 0z", "fill", "#fff"], [1, "grid", "mt-2"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "col-12", "p-2"], [1, "col-12", "xs:col-12", "xl:col-6", "p-2"], [1, "font-medium", "text-500", "text-sm"], [1, "block", "font-medium"], [1, "grid", "p-fluid", "mb-2"], [1, "col-12", "xs:col-12", "p-2", "xl:col-6", "flex", "justify-content-between", "align-items-center"], [1, "p-buttonset"], ["pButton", "", "pRipple", "", "icon", "pi pi-download", 1, "p-button-text"], [1, "ml-2", "font-medium", "text-xl", 2, "font-weight", "normal"], [1, "text-900", "font-semibold", "text-xl"], [1, "mt-2", "grid", "p-fluid", "formgrid"], [1, "col-12", "field"], ["htmlFor", "msname", 1, "text-900", "font-semibold"], ["id", "msname", "closeIcon", "pi pi-check", "pTooltip", "Click to edit", "tooltipPosition", "top", 3, "active"], ["pTemplate", "display"], [1, "col-12", "md:col-6", "field"], ["htmlFor", "techlead", 1, "text-900", "font-semibold"], ["id", "techlead", "closeIcon", "pi pi-check", "pTooltip", "Click to edit", "tooltipPosition", "top", 3, "active"], ["htmlFor", "scrum", 1, "text-900", "font-semibold"], ["id", "scrum", "closeIcon", "pi pi-check", "pTooltip", "Click to edit", "tooltipPosition", "top", 3, "active"], ["htmlFor", "dev", 1, "text-900", "font-semibold"], ["id", "dev", "closeIcon", "pi pi-check", "pTooltip", "Click to edit", "tooltipPosition", "top", 3, "active"], ["htmlFor", "backup", 1, "text-900", "font-semibold"], ["id", "backup", "closeIcon", "pi pi-check", "pTooltip", "Click to edit", "tooltipPosition", "top", 3, "active"], ["htmlFor", "poc", 1, "text-900", "font-semibold"], ["id", "poc", "closeIcon", "pi pi-check", "pTooltip", "Click to edit", "tooltipPosition", "top", 3, "active"], ["htmlFor", "targetDate", 1, "text-900", "font-semibold"], ["id", "targetDate", "closeIcon", "pi pi-check", "pTooltip", "Click to edit", "tooltipPosition", "top", 3, "active"], [1, "p-input-icon-left"], [1, "pi", "pi-pencil"], ["pInputText", "", "type", "text", "placeholder", "Microservice Name", 3, "ngModel", "ngModelChange"], ["optionLabel", "name", "type", "text", "placeholder", "Tech Lead", 3, "options", "ngModel", "ngModelChange"], ["optionLabel", "name", "type", "text", "placeholder", "Scrum Master", 3, "options", "ngModel", "ngModelChange"], ["optionLabel", "name", "type", "text", "placeholder", "Primary Developer", 3, "options", "ngModel", "ngModelChange"], ["optionLabel", "name", "type", "text", "placeholder", "Backup Resource", 3, "options", "ngModel", "ngModelChange"], ["optionLabel", "name", "type", "text", "placeholder", "Point of Contact", 3, "options", "ngModel", "ngModelChange"], ["dateFormat", "M dd, yy", "placeholder", "Target Date", "inputId", "dateformat", 3, "minDate", "showIcon", "ngModel", "ngModelChange"], ["dateFormat", "M dd, yy", "placeholder", "Technical Go Live", "inputId", "dateformat", 3, "minDate", "showIcon", "ngModel", "ngModelChange"], ["dateFormat", "M dd, yy", "placeholder", "Business Go Live", "inputId", "dateformat", 3, "minDate", "showIcon", "ngModel", "ngModelChange"], ["icon", "pi pi-save", "label", "Save", 3, "click"], [1, "col-12", "xl:col-6", "field"], ["accDiv", ""], [1, "mb-3", "flex", "align-items-center", "justify-content-between"], [1, "block", "font-semibold"], ["pButton", "", "icon", "pi pi-plus", "pToolTip", "Add new row", 1, "p-button-sm", 3, "click"], ["name", "demo[]", "uploadIcon", "pi pi-cloud-upload", "accept", ".csv,.excel,.xlsx,.doc,.docx", 3, "disabled", "fileLimit", "showCancelButton", "customUpload", "multiple", "maxFileSize", "uploadHandler", "onSelect"], ["fileUploaderAcc", ""], ["pTemplate", "toolbar"], ["pTemplate", "file"], ["prodDiv", ""], ["fileUploaderProd", ""], ["optionLabel", "buildNumber", "type", "text", 3, "options", "ngModel", "ngModelChange"], [1, "flex", "mb-2", "gap-3", "align-items-center", "justify-content-between"], [1, "textOverflow", 2, "width", "150px", 3, "pToolTip"], ["type", "text", "placeholder", "Type", "optionLabel", "name", 3, "options", "onChange"], ["pButton", "", "icon", "pi pi-times", 1, "p-button-text", 3, "click"]],
  template: function MicroservicesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p-toast")(1, "p-toast", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p-toast", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MicroservicesComponent_ng_template_3_Template, 10, 2, "ng-template", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MicroservicesComponent_div_4_Template, 130, 28, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, MicroservicesComponent_div_5_Template, 4, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p-dialog", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("visibleChange", function MicroservicesComponent_Template_p_dialog_visibleChange_6_listener($event) {
        return ctx.editModal = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, MicroservicesComponent_ng_template_8_Template, 3, 0, "ng-template", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, MicroservicesComponent_ng_template_9_Template, 55, 9, "ng-template", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, MicroservicesComponent_ng_template_10_Template, 1, 0, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "p-dialog", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("visibleChange", function MicroservicesComponent_Template_p_dialog_visibleChange_11_listener($event) {
        return ctx.uploadModal = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, MicroservicesComponent_ng_template_12_Template, 2, 0, "ng-template", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, MicroservicesComponent_ng_template_13_Template, 25, 12, "ng-template", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.allMicroservicesList.length != 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.allMicroservicesList.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](16, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("visible", ctx.editModal)("contentStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](17, _c3))("modal", true)("draggable", true)("resizable", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](18, _c4));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("visible", ctx.uploadModal)("contentStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](19, _c3))("modal", true)("draggable", true)("resizable", false);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, primeng_calendar__WEBPACK_IMPORTED_MODULE_8__.Calendar, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_9__.Button, primeng_ripple__WEBPACK_IMPORTED_MODULE_10__.Ripple, primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__.Tooltip, primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__.InputText, primeng_divider__WEBPACK_IMPORTED_MODULE_13__.Divider, primeng_dialog__WEBPACK_IMPORTED_MODULE_14__.Dialog, primeng_toast__WEBPACK_IMPORTED_MODULE_15__.Toast, primeng_avatar__WEBPACK_IMPORTED_MODULE_16__.Avatar, primeng_fileupload__WEBPACK_IMPORTED_MODULE_17__.FileUpload, primeng_dropdown__WEBPACK_IMPORTED_MODULE_18__.Dropdown, primeng_accordion__WEBPACK_IMPORTED_MODULE_19__.Accordion, primeng_accordion__WEBPACK_IMPORTED_MODULE_19__.AccordionTab, primeng_inplace__WEBPACK_IMPORTED_MODULE_20__.Inplace, primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_21__.ScrollPanel],
  encapsulation: 2
});

/***/ }),

/***/ 5373:
/*!**********************************************************************************!*\
  !*** ./src/app/itaap-ms-manager/components/my-requests/my-requests.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyRequestsComponent": () => (/* binding */ MyRequestsComponent)
/* harmony export */ });
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _azurelib_azure_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../azurelib/azure.service */ 9608);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/card */ 4357);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/checkbox */ 749);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */ 9129);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/tag */ 3042);












function MyRequestsComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 9)(8, "div", 10)(9, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyRequestsComponent_ng_template_3_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.onRetry());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const message_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r2.summary);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r2.detail);
  }
}
function MyRequestsComponent_div_8_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "p-columnFilter", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Secret");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MyRequestsComponent_div_8_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "p-checkbox", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const variable_r10 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](variable_r10.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](variable_r10.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("binary", true)("ngModel", ctx_r8.fetchValues(variable_r10, "secret"))("disabled", true);
  }
}
function MyRequestsComponent_div_8_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26)(1, "div", 27)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const request_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](request_r5.requestDate);
  }
}
const _c0 = function () {
  return {
    width: "1510px"
  };
};
const _c1 = function () {
  return {
    "table-layout": "fixed",
    "min-width": "75rem"
  };
};
const _c2 = function () {
  return ["key"];
};
function MyRequestsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "p-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "p-tag", 13)(3, "br")(4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div")(8, "p-table", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, MyRequestsComponent_div_8_ng_template_10_Template, 8, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, MyRequestsComponent_div_8_ng_template_11_Template, 8, 5, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, MyRequestsComponent_div_8_ng_template_12_Template, 4, 1, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const request_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", request_r5.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("severity", ctx_r1.getSeverity(request_r5))("icon", ctx_r1.getSeverityIcon(request_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](request_r5.azureGroupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", request_r5.modifiedVariables)("rowHover", true)("scrollable", true)("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c1))("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c2));
  }
}
class MyRequestsComponent {
  constructor(azureService, messageService) {
    this.azureService = azureService;
    this.messageService = messageService;
    this.requester = "Soumendu";
    this.allRequests = [];
  }
  ngOnInit() {
    console.log("in init");
    this.getMyRequests();
  }
  getMyRequests() {
    this.azureService.getMyRequests(this.requester).subscribe(response => {
      console.log("response : " + response);
      this.handleSuccessfulResponse(response);
      this.messageService.add({
        key: 'success',
        severity: 'success',
        summary: 'Success',
        detail: "Successfully Fetched " + this.allRequests.length + " Requests"
      });
    }, error => {
      console.log("error : " + error);
      this.httpError = error;
      this.messageService.add({
        key: 'retry',
        severity: 'error',
        sticky: true,
        summary: error.statusText,
        detail: error.message
      });
    });
  }
  handleSuccessfulResponse(response) {
    this.allRequests = response;
    if (response.length > 0) {
      for (let i = 0; i < this.allRequests.length; i++) {
        this.allRequests[i].modifiedVariables = JSON.parse(this.allRequests[i].modifiedVariables);
        this.allRequests[i].updatedAllVariables = JSON.parse(this.allRequests[i].updatedAllVariables);
        this.allRequests[i].isApproved = this.allRequests[i].status === "Approved" ? true : false;
        this.allRequests[i].isRejected = this.allRequests[i].status === "Rejected" ? true : false;
        this.allRequests[i].isInitiated = this.allRequests[i].status === "Initiated" ? true : false;
      }
    }
  }
  getSeverity(request) {
    if (request.isApproved) {
      return "success";
    } else if (request.isInitiated) {
      return "info";
    } else {
      return "danger";
    }
  }
  getSeverityIcon(request) {
    if (request.isApproved) {
      return "pi pi-check-circle";
    } else if (request.isInitiated) {
      return "pi pi-clock";
    } else {
      return "pi pi-times-circle";
    }
  }
  onRetry() {
    this.getMyRequests();
    this.messageService.clear('retry');
  }
  fetchValues(variable, keyName) {
    return variable[keyName];
  }
}
MyRequestsComponent.ɵfac = function MyRequestsComponent_Factory(t) {
  return new (t || MyRequestsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_azurelib_azure_service__WEBPACK_IMPORTED_MODULE_0__.AzureService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__.MessageService));
};
MyRequestsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: MyRequestsComponent,
  selectors: [["app-my-requests"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_2__.MessageService])],
  decls: 12,
  vars: 2,
  consts: [["key", "success"], ["key", "retry"], ["pTemplate", "message"], [1, "text-900", "font-medium", "text-2xl", "textOverflow"], [4, "ngFor", "ngForOf"], [1, "block", "text-500", "font-medium", "text-xl", "mb-3"], [1, "flex", "flex-column", 2, "flex", "1"], [1, "text-center"], [1, "pi", "pi-exclamation-triangle", 2, "font-size", "3rem"], [1, "grid", "p-fluid"], [1, "col-12"], ["type", "button", "icon", "pi pi-refresh", "pButton", "", "label", "Retry", 1, "p-button-danger", 3, "click"], ["styleClass", "p-card-shadow"], [3, "value", "severity", "icon"], ["scrollHeight", "45vh", "styleClass", "p-datatable-sm", 3, "value", "rowHover", "scrollable", "tableStyle", "globalFilterFields"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "footer"], [2, "width", "40%"], ["type", "text", "field", "key", "display", "menu"], [2, "width", "70%"], [2, "width", "20%"], [1, "textOverflow"], ["variableValue", ""], [3, "binary", "ngModel", "disabled"], [1, "flex"], [1, "ml-auto"]],
  template: function MyRequestsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-toast")(1, "p-toast", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p-toast", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MyRequestsComponent_ng_template_3_Template, 10, 2, "ng-template", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "My Requests");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br")(7, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, MyRequestsComponent_div_8_Template, 14, 14, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div")(10, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.allRequests);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.allRequests.length === 0 ? "No Requests Found." : "");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, primeng_card__WEBPACK_IMPORTED_MODULE_5__.Card, primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_checkbox__WEBPACK_IMPORTED_MODULE_7__.Checkbox, primeng_table__WEBPACK_IMPORTED_MODULE_8__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_8__.ColumnFilter, primeng_toast__WEBPACK_IMPORTED_MODULE_9__.Toast, primeng_tag__WEBPACK_IMPORTED_MODULE_10__.Tag],
  encapsulation: 2
});

/***/ }),

/***/ 9846:
/*!********************************************************************!*\
  !*** ./src/app/itaap-ms-manager/components/tasks/tasks.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TasksService": () => (/* binding */ TasksService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _service_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/constants */ 2543);



class TasksService {
  constructor(httpClient, constants) {
    this.httpClient = httpClient;
    this.constants = constants;
  }
  getTasksAssignedToSelf(userId) {
    return this.getTasksAssignedToUser(userId);
  }
  getTasksAssignedToUser(userId) {
    let url = this.constants.hostname + 'fetch/tasks/user?userId=' + userId;
    return this.httpClient.get(url, this.constants.headerOptions);
  }
  getTasksByStatus(status) {
    let url = this.constants.hostname + 'fetch/tasks/status?status=' + status;
    return this.httpClient.get(url, this.constants.headerOptions);
  }
  getTasksCreatedByUser(userId) {
    let url = this.constants.hostname + 'fetch/tasks/created-by?userId=' + userId;
    return this.httpClient.get(url, this.constants.headerOptions);
  }
  getTasksByMicroservice(microserviceId) {
    let url = this.constants.hostname + 'fetch/tasks/microservice?microserviceId=' + microserviceId;
    return this.httpClient.get(url, this.constants.headerOptions);
  }
  createTask(request) {
    let url = this.constants.hostname + 'create/task';
    return this.httpClient.post(url, request, this.constants.headerOptions);
  }
  getAllMicroservices() {
    let url = this.constants.hostname + 'fetch/microservices/all';
    return this.httpClient.get(url, this.constants.headerOptions);
  }
  getMicroservicesByName(name) {
    let url = this.constants.hostname + 'fetch/microservices/name?microserviceName=' + name;
    return this.httpClient.get(url, this.constants.headerOptions);
  }
  getAllUsers() {
    let url = this.constants.hostname + 'fetch/users/all';
    return this.httpClient.get(url, this.constants.headerOptions);
  }
  getAllTasks() {
    let url = this.constants.hostname + 'fetch/tasks/all';
    return this.httpClient.get(url, this.constants.headerOptions);
  }
  updateTask(modifiedTask) {
    let url = this.constants.hostname + 'update/task';
    return this.httpClient.put(url, modifiedTask, this.constants.headerOptions);
  }
}
TasksService.ɵfac = function TasksService_Factory(t) {
  return new (t || TasksService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service_constants__WEBPACK_IMPORTED_MODULE_0__.Constants));
};
TasksService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: TasksService,
  factory: TasksService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7804:
/*!**************************************************************************!*\
  !*** ./src/app/itaap-ms-manager/components/tasks/todo/todo.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoComponent": () => (/* binding */ TodoComponent)
/* harmony export */ });
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _api_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../api/enums */ 9633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _tasks_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tasks.service */ 9846);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/calendar */ 2547);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/ripple */ 4538);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/tooltip */ 4329);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/checkbox */ 749);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputtextarea */ 1102);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/toast */ 9129);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/avatar */ 7063);
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/overlaypanel */ 6664);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/progressbar */ 8395);
/* harmony import */ var primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/confirmpopup */ 2919);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/sidebar */ 4179);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/autocomplete */ 5630);
/* harmony import */ var primeng_inplace__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/inplace */ 2116);
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/scrollpanel */ 4250);
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/tabmenu */ 7077);
/* harmony import */ var primeng_avatargroup__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/avatargroup */ 1385);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/selectbutton */ 205);
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/chip */ 287);




























function TodoComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5)(8, "div", 20)(9, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_ng_template_3_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.onRetry());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const message_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](message_r6.summary);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](message_r6.detail);
  }
}
function TodoComponent_div_16_p_avatarGroup_16_p_avatar_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "p-avatar", 38);
  }
}
function TodoComponent_div_16_p_avatarGroup_16_p_avatar_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "p-avatar", 39);
  }
  if (rf & 2) {
    const task_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("label", "+", task_r9.assignees.length - 3, "");
  }
}
function TodoComponent_div_16_p_avatarGroup_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-avatarGroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TodoComponent_div_16_p_avatarGroup_16_p_avatar_1_Template, 1, 0, "p-avatar", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TodoComponent_div_16_p_avatarGroup_16_p_avatar_3_Template, 1, 1, "p-avatar", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const task_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](2, 2, task_r9.assignees, 0, 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", task_r9.assignees.length > 3);
  }
}
function TodoComponent_div_16_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const task_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](task_r9.attachments.length);
  }
}
function TodoComponent_div_16_div_19_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const task_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", task_r9.completedTasks ? task_r9.completedTasks : 0, " / ", task_r9.taskLists.length, "");
  }
}
function TodoComponent_div_16_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TodoComponent_div_16_div_19_span_1_Template, 4, 2, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const task_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", task_r9.taskLists.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 2, task_r9.dueDate, "MMM dd, yyyy"));
  }
}
function TodoComponent_div_16_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const task_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("block tasks-badge status-completed align-text-center");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](5, 3, task_r9.completedDate, "MMM dd, yyyy"));
  }
}
const _c0 = function () {
  return {
    "height": "6px"
  };
};
function TodoComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6)(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_div_16_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25);
      const task_r9 = restoredCtx.$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r24.populateSelectedTask(task_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 23)(3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 28)(12, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "p-progressBar", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, TodoComponent_div_16_p_avatarGroup_16_Template, 4, 6, "p-avatarGroup", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, TodoComponent_div_16_span_18_Template, 4, 1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, TodoComponent_div_16_div_19_Template, 7, 5, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, TodoComponent_div_16_div_20_Template, 6, 6, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const task_r9 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](task_r9.taskTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "assets/itaap-ms-manager/images/priority/", ctx_r1.getTaskPriorityImg(task_r9.priority), ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("align-self-center tasks-badge status-" + ctx_r1.getStatusValue(task_r9.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.getStatusValue(task_r9.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](task_r9.taskDesc);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](task_r9.microservices.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](15, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showValue", false)("value", task_r9.progress);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", task_r9.assignees.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", task_r9.attachments.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", task_r9.status != "C");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", task_r9.status == "C");
  }
}
function TodoComponent_ng_template_18_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_ng_template_18_button_5_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](22);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r37.overlayToggle($event, _r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TodoComponent_ng_template_18_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_ng_template_18_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r40);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r39.updateTaskStatus("accepted"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TodoComponent_ng_template_18_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_ng_template_18_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r41.onDiscard());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TodoComponent_ng_template_18_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_ng_template_18_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r43.updateTaskStatus(ctx_r43.modifiedStatus));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TodoComponent_ng_template_18_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("inline-flex tasks-badge status-" + ctx_r30.getStatusValue(ctx_r30.selectedTask.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r30.getStatusValue(ctx_r30.selectedTask.status), "");
  }
}
function TodoComponent_ng_template_18_ng_template_17_ng_template_1_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tasks-badge status-" + ctx_r47.modifiedStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r47.modifiedStatus);
  }
}
function TodoComponent_ng_template_18_ng_template_17_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TodoComponent_ng_template_18_ng_template_17_ng_template_1_span_0_Template, 3, 3, "span", 32);
  }
  if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r45.selectedTask.status);
  }
}
function TodoComponent_ng_template_18_ng_template_17_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const status_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tasks-badge status-" + status_r48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](status_r48);
  }
}
function TodoComponent_ng_template_18_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-dropdown", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TodoComponent_ng_template_18_ng_template_17_Template_p_dropdown_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r50);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r49.modifiedStatus = $event);
    })("onChange", function TodoComponent_ng_template_18_ng_template_17_Template_p_dropdown_onChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r50);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r51.enableSave());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TodoComponent_ng_template_18_ng_template_17_ng_template_1_Template, 1, 1, "ng-template", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TodoComponent_ng_template_18_ng_template_17_ng_template_2_Template, 3, 3, "ng-template", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r31.allSelectedTaskStatus)("ngModel", ctx_r31.modifiedStatus);
  }
}
function TodoComponent_ng_template_18_ng_template_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](4, 1, ctx_r32.selectedTask.dueDate, "MMM dd, yyyy"));
  }
}
const _c1 = function () {
  return [0, 6];
};
function TodoComponent_ng_template_18_ng_template_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-calendar", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TodoComponent_ng_template_18_ng_template_55_Template_p_calendar_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r53);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r52.selectedTask.dueDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("minDate", ctx_r33.todayDate)("disabledDays", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c1))("ngModel", ctx_r33.selectedTask.dueDate);
  }
}
const _c2 = function (a0) {
  return {
    "text-decoration": a0
  };
};
function TodoComponent_ng_template_18_div_64_li_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 91)(1, "p-checkbox", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("value", function TodoComponent_ng_template_18_div_64_li_4_Template_p_checkbox_value_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r57);
      const item_r55 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](item_r55.taskDetails);
    })("ngModelChange", function TodoComponent_ng_template_18_div_64_li_4_Template_p_checkbox_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r57);
      const item_r55 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](item_r55.isCompleted = $event);
    })("onChange", function TodoComponent_ng_template_18_div_64_li_4_Template_p_checkbox_onChange_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r57);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r59.completeTaskListItem(ctx_r59.selectedTask));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 93)(3, "div", 94)(4, "label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", false)("inputId", item_r55.taskDetails)("ngModel", item_r55.isCompleted)("binary", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", item_r55.taskDetails)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c2, item_r55.isCompleted ? "line-through" : "none"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r55.taskDetails);
  }
}
function TodoComponent_ng_template_18_div_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 66)(1, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Task List");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, TodoComponent_ng_template_18_div_64_li_4_Template, 6, 9, "li", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r34.selectedTask.taskLists);
  }
}
function TodoComponent_ng_template_18_p_chip_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "p-chip", 60);
  }
  if (rf & 2) {
    const assignee_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("label", assignee_r60.name);
  }
}
function TodoComponent_ng_template_18_div_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "p-avatar", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 93)(3, "div", 97)(4, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const comment_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](comment_r61.givenBy.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](8, 3, comment_r61.timestamp, "MMM dd, yyyy h:mm:ss a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](comment_r61.comments);
  }
}
function TodoComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 45)(1, "div", 46)(2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, TodoComponent_ng_template_18_button_5_Template, 1, 0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, TodoComponent_ng_template_18_button_6_Template, 1, 0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, TodoComponent_ng_template_18_button_7_Template, 1, 0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, TodoComponent_ng_template_18_button_8_Template, 1, 0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 52)(10, "div", 53)(11, "div", 54)(12, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div")(15, "p-inplace", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onActivate", function TodoComponent_ng_template_18_Template_p_inplace_onActivate_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r63);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r62.onActivateTaskStatus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, TodoComponent_ng_template_18_ng_template_16_Template, 2, 3, "ng-template", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, TodoComponent_ng_template_18_ng_template_17_Template, 3, 2, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 58)(19, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Created By");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "p-chip", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 58)(23, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 61)(26, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 64)(31, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Microservice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 66)(36, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 53)(41, "div", 54)(42, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](48, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 54)(50, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Target End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 65)(53, "p-inplace", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, TodoComponent_ng_template_18_ng_template_54_Template, 5, 4, "ng-template", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, TodoComponent_ng_template_18_ng_template_55_Template, 1, 4, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 66)(57, "div", 68)(58, "div", 69)(59, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "p-progressBar", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](64, TodoComponent_ng_template_18_div_64_Template, 5, 1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 72)(66, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Assignees");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "span", 73)(69, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](70, TodoComponent_ng_template_18_p_chip_70_Template, 1, 1, "p-chip", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 76)(72, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "p-avatar", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "textarea", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TodoComponent_ng_template_18_Template_textarea_ngModelChange_76_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r63);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r64.newComment = $event);
    })("keydown.enter", function TodoComponent_ng_template_18_Template_textarea_keydown_enter_76_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r63);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r65.onKeydown($event));
    })("keyup.enter", function TodoComponent_ng_template_18_Template_textarea_keyup_enter_76_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r63);
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r66.addComment($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](77, TodoComponent_ng_template_18_div_77_Template, 11, 6, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.selectedTask.taskTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.enableRejectButton());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.enableAcceptButton(ctx_r2.selectedTask.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.isSaveEnable);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.isSaveEnable || ctx_r2.saveQualified());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("preventClick", ctx_r2.selectedTask.status == "C" || ctx_r2.selectedTask.status == "R" || ctx_r2.selectedTask.status == "N");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("label", ctx_r2.selectedTask.createdBy.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "assets/itaap-ms-manager/images/priority/", ctx_r2.getTaskPriorityImg(ctx_r2.selectedTask.priority), ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.getTaskPriorityName(ctx_r2.selectedTask.priority));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.selectedTask.microservices.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.selectedTask.taskDesc);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](48, 22, ctx_r2.selectedTask.startDate, "MMM dd, yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("preventClick", ctx_r2.selectedTask.status == "N")("closable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r2.selectedTask.progress, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r2.selectedTask.progress)("showValue", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.selectedTask.taskLists.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.selectedTask.assignees);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("autoResize", true)("ngModel", ctx_r2.newComment);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.selectedTask.comments);
  }
}
function TodoComponent_ng_template_20_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r67.createdTask.taskTitle);
  }
}
function TodoComponent_ng_template_20_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TodoComponent_ng_template_20_ng_template_4_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r80);
      const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r79.createdTask.taskTitle = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r68.createdTask.taskTitle);
  }
}
function TodoComponent_ng_template_20_small_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Change the task name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TodoComponent_ng_template_20_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r81 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "assets/itaap-ms-manager/images/priority/", item_r81.type.toLowerCase(), ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r81.type);
  }
}
function TodoComponent_ng_template_20_small_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Select severity of the task");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TodoComponent_ng_template_20_small_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Add description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TodoComponent_ng_template_20_small_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Select start date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TodoComponent_ng_template_20_small_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Select target date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TodoComponent_ng_template_20_small_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Add atleast one subtask");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TodoComponent_ng_template_20_ul_38_li_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "button", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_ng_template_20_ul_38_li_1_div_6_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r87);
      const item_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r85.deleteTaskList(item_r83));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "p-confirmPopup", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TodoComponent_ng_template_20_ul_38_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 91)(1, "p-checkbox", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("value", function TodoComponent_ng_template_20_ul_38_li_1_Template_p_checkbox_value_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r89);
      const item_r83 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](item_r83.taskDetails);
    })("ngModelChange", function TodoComponent_ng_template_20_ul_38_li_1_Template_p_checkbox_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r89);
      const item_r83 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](item_r83.isCompleted = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 93)(3, "div", 94)(4, "label", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, TodoComponent_ng_template_20_ul_38_li_1_div_6_Template, 3, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r83 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", true)("ngModel", item_r83.isCompleted)("binary", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c2, item_r83.isCompleted ? "line-through" : "none"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r83.taskDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", true);
  }
}
function TodoComponent_ng_template_20_ul_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TodoComponent_ng_template_20_ul_38_li_1_Template, 7, 8, "li", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r76.createdTask.taskLists);
  }
}
function TodoComponent_ng_template_20_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "p-avatar", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const assignee_r91 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](assignee_r91.name);
  }
}
function TodoComponent_ng_template_20_small_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Choose atleast one assignee for the task");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TodoComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 45)(1, "div", 101)(2, "p-inplace", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TodoComponent_ng_template_20_ng_template_3_Template, 2, 1, "ng-template", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, TodoComponent_ng_template_20_ng_template_4_Template, 1, 1, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, TodoComponent_ng_template_20_small_5_Template, 2, 0, "small", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 104)(7, "div", 66)(8, "div", 105)(9, "div", 93)(10, "p-selectButton", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TodoComponent_ng_template_20_Template_p_selectButton_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r93);
      const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r92.createdTask.priority = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, TodoComponent_ng_template_20_ng_template_11_Template, 4, 2, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, TodoComponent_ng_template_20_small_12_Template, 2, 0, "small", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 66)(14, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Microservice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p-dropdown", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TodoComponent_ng_template_20_Template_p_dropdown_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r93);
      const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r94.selectedMicroservice = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 66)(18, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "textarea", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TodoComponent_ng_template_20_Template_textarea_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r93);
      const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r95.createdTask.taskDesc = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, TodoComponent_ng_template_20_small_21_Template, 2, 0, "small", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 109)(23, "div", 54)(24, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "p-calendar", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TodoComponent_ng_template_20_Template_p_calendar_ngModelChange_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r93);
      const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r96.createdTask.startDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, TodoComponent_ng_template_20_small_27_Template, 2, 0, "small", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 54)(29, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Target End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "p-calendar", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TodoComponent_ng_template_20_Template_p_calendar_ngModelChange_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r93);
      const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r97.createdTask.dueDate = $event);
    })("ngModelChange", function TodoComponent_ng_template_20_Template_p_calendar_ngModelChange_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r93);
      const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r98.createdTask.dueDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, TodoComponent_ng_template_20_small_32_Template, 2, 0, "small", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 66)(34, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Task List");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "textarea", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TodoComponent_ng_template_20_Template_textarea_ngModelChange_36_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r93);
      const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r99.newItemTaskListDetails = $event);
    })("keydown.enter", function TodoComponent_ng_template_20_Template_textarea_keydown_enter_36_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r93);
      const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r100.onKeydown($event));
    })("keyup.enter", function TodoComponent_ng_template_20_Template_textarea_keyup_enter_36_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r93);
      const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r101.addTaskList($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, TodoComponent_ng_template_20_small_37_Template, 2, 0, "small", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, TodoComponent_ng_template_20_ul_38_Template, 2, 1, "ul", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 72)(40, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Assignees");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "span", 73)(43, "p-autoComplete", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TodoComponent_ng_template_20_Template_p_autoComplete_ngModelChange_43_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r93);
      const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r102.createdTask.assignees = $event);
    })("completeMethod", function TodoComponent_ng_template_20_Template_p_autoComplete_completeMethod_43_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r93);
      const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r103.filterAssignees($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, TodoComponent_ng_template_20_ng_template_44_Template, 4, 1, "ng-template", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, TodoComponent_ng_template_20_small_45_Template, 2, 0, "small", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "button", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "button", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_ng_template_20_Template_button_click_48_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r93);
      const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r104.createTask());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("closable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.isSubmitted && ctx_r3.createdTask.taskTitle === "Untitled task");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r3.priorityOptions)("ngModel", ctx_r3.createdTask.priority);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.isSubmitted && ctx_r3.createdTask.priority === undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r3.allMicroservices)("ngModel", ctx_r3.selectedMicroservice);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("autoResize", true)("ngModel", ctx_r3.createdTask.taskDesc);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.isSubmitted && ctx_r3.createdTask.taskDesc === undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showIcon", true)("disabledDays", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](31, _c1))("ngModel", ctx_r3.createdTask.startDate)("minDate", ctx_r3.todayDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.isSubmitted && ctx_r3.createdTask.startDate === undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showIcon", true)("disabledDays", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](32, _c1))("disabled", ctx_r3.createdTask.startDate == undefined)("ngModel", ctx_r3.createdTask.dueDate)("ngModel", ctx_r3.createdTask.dueDate)("minDate", ctx_r3.createdTask.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.isSubmitted && ctx_r3.createdTask.dueDate === undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("autoResize", true)("ngModel", ctx_r3.newItemTaskListDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.isSubmitted && ctx_r3.createdTask.taskLists.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.createdTask.taskLists.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r3.createdTask.assignees)("suggestions", ctx_r3.filteredAssignees)("multiple", true)("styleClass", "h-4rem");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.isSubmitted && ctx_r3.createdTask.assignees.length == 0);
  }
}
function TodoComponent_ng_template_23_small_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Reason for rejection is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TodoComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 128)(1, "div", 20)(2, "div", 129)(3, "label", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Rejection Reason");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "textarea", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TodoComponent_ng_template_23_Template_textarea_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r107);
      const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r106.selectedTask.rejectionReason = $event);
    })("keypress", function TodoComponent_ng_template_23_Template_textarea_keypress_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r107);
      const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r108.addComment($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, TodoComponent_ng_template_23_small_6_Template, 2, 0, "small", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 132)(8, "button", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_ng_template_23_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r107);
      const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r109.updateTaskStatus("rejected"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("autoResize", true)("ngModel", ctx_r5.selectedTask.rejectionReason);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.submitted && !ctx_r5.selectedTask.rejectionReason);
  }
}
const _c3 = function () {
  return {
    width: "100%",
    height: "70vh"
  };
};
const _c4 = function () {
  return {
    "width": "50vw",
    "overflow": "visible"
  };
};
const _c5 = function () {
  return {
    "width": "40vw",
    "overflow": "visible"
  };
};
class TodoComponent {
  constructor(tasksService, messageService, confirmationService) {
    this.tasksService = tasksService;
    this.messageService = messageService;
    this.confirmationService = confirmationService;
    this.isHidden = false;
    this.todayDate = new Date();
    this.selectedMicroservice = {
      id: 0
    };
    this.selectedTask = {};
    this.isSaveEnable = false;
    this.visibleSidebar = false;
    this.visibleAddSidebar = false;
    this.isSubmitted = false;
    this.createdTask = {
      taskTitle: "Untitled task",
      taskLists: [],
      comments: [],
      assignedUsers: [],
      assignees: []
    };
    this.newItemTaskList = {};
    this.newTaskComment = {};
    this.newItemTaskListDetails = "";
    this.newComment = "";
    this.filteredAssignees = [];
    this.progressBarValue = 0;
    // this.allStatus = Object.values(Status).map((name, index) => {return {name, inactive: true}})
    this.allStatus = Object.values(_api_enums__WEBPACK_IMPORTED_MODULE_0__.Status);
    this.allSelectedTaskStatus = Object.values(_api_enums__WEBPACK_IMPORTED_MODULE_0__.Status);
    this.userId = Number.parseInt(sessionStorage.getItem("loggedInUser"));
    this.currentUser = JSON.parse(sessionStorage.getItem("loggedInUserDetails"));
    this.priorityOptions = Object.values(_api_enums__WEBPACK_IMPORTED_MODULE_0__.Priority).map((name, index) => {
      return {
        type: name,
        code: Object.keys(_api_enums__WEBPACK_IMPORTED_MODULE_0__.Priority)[index]
      };
    });
  }
  ngOnInit() {
    this.items = [{
      label: 'Home',
      icon: 'pi pi-fw pi-home'
    }, {
      label: 'Calendar',
      icon: 'pi pi-fw pi-calendar'
    }, {
      label: 'Edit',
      icon: 'pi pi-fw pi-pencil'
    }, {
      label: 'Documentation',
      icon: 'pi pi-fw pi-file'
    }, {
      label: 'Settings',
      icon: 'pi pi-fw pi-cog'
    }];
    this.activeItem = this.items[0];
    this.populateUsers();
    this.populateMicroservice();
    this.getTasksAssignedToSelf();
  }
  populateUsers() {
    this.tasksService.getAllUsers().subscribe(response => {
      this.allDevelopers = response;
      this.allDevelopers.unshift({
        id: 0,
        name: 'All'
      });
    }, error => {
      console.log(error);
    });
  }
  createTask() {
    this.isSubmitted = true;
    if (this.isValidTask()) {
      this.createdTask.microserviceID = this.selectedMicroservice.id;
      for (let i = 0; i < this.createdTask.assignees.length; i++) {
        this.createdTask.assignedUsers.push(this.createdTask.assignees[i].id);
      }
      this.createdTask.createdByUserID = this.currentUser.id;
      this.tasksService.createTask(this.createdTask).subscribe(response => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: "Successfully Created Task [" + response.id + "]"
        });
        this.getTasksAssignedToSelf();
        this.createdTask = {};
        this.visibleAddSidebar = false;
      }, error => {
        this.messageService.add({
          severity: 'error',
          summary: 'Failure : ' + error.error.errorCode,
          detail: "Failed : " + error.error.errorDesc
        });
      });
    }
  }
  isValidTask() {
    return this.createdTask.taskTitle !== undefined && this.createdTask.taskTitle !== 'Untitled task' && this.createdTask.taskDesc !== undefined && this.createdTask.priority !== undefined && this.createdTask.startDate !== undefined && this.createdTask.dueDate !== undefined && this.createdTask.taskLists.length !== 0 && this.createdTask.assignees.length !== 0;
  }
  populateMicroservice() {
    this.tasksService.getAllMicroservices().subscribe(response => {
      this.allMicroservices = response;
    }, error => {
      console.log(error);
    });
  }
  getTasksAssignedToSelf() {
    this.tasksService.getAllTasks().subscribe(response => {
      this.currentUserTasks = response;
      /*this.messageService.add({ severity: 'success', summary: 'Success', detail: "Successfully fetched all tasks" });*/
    }, error => {
      console.log(error);
      this.messageService.add({
        key: 'retry',
        severity: 'error',
        sticky: true,
        summary: error.statusText,
        detail: error.message
      });
    });
  }
  getConvertedDate(date) {
    if (date != null) {
      date = new Date(date);
      var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      var day = date.getDate();
      var monthIndex = date.getMonth();
      var year = date.getFullYear();
      return monthNames[monthIndex] + " " + day + ", " + year;
    } else {
      return "TBD";
    }
  }
  overlayToggle(event, op) {
    op.toggle(event);
  }
  onRetry() {
    this.getTasksAssignedToSelf();
    this.messageService.clear('retry');
  }
  filterByUser() {
    if (this.filterUser.id == 0) {
      this.tasksService.getAllTasks().subscribe(response => {
        this.currentUserTasks = response;
      }, error => {
        console.log(error);
      });
    } else {
      this.tasksService.getTasksAssignedToUser(this.filterUser.id).subscribe(response => {
        this.currentUserTasks = response;
      }, error => {
        console.log(error);
      });
    }
  }
  filterByMicroservice() {
    if (this.filterMicroservice != undefined) {
      this.tasksService.getTasksByMicroservice(this.filterMicroservice.id).subscribe(response => {
        console.log(response);
        this.currentUserTasks = response;
      }, error => {
        console.log(error);
      });
    } else {}
  }
  filterByStatus() {
    const index = Object.values(_api_enums__WEBPACK_IMPORTED_MODULE_0__.Status).indexOf(this.filterStatus);
    let status = Object.keys(_api_enums__WEBPACK_IMPORTED_MODULE_0__.Status)[index];
    if (this.filterByStatus != undefined) {
      this.tasksService.getTasksByStatus(status).subscribe(response => {
        this.currentUserTasks = response;
      }, error => {
        console.log(error);
      });
    }
  }
  clearFilters() {
    this.filterMicroservice = {};
    this.filterUser = {};
    this.getTasksAssignedToSelf();
  }
  populateSelectedTask(task) {
    this.selectedTask = task;
    this.visibleSidebar = true;
    this.assignModifiedTasks();
  }
  onActivateTaskStatus() {
    this.allSelectedTaskStatus = Object.values(_api_enums__WEBPACK_IMPORTED_MODULE_0__.Status);
    ;
    this.changeStatusDropdown();
  }
  changeStatusDropdown() {
    this.allSelectedTaskStatus.splice(this.allSelectedTaskStatus.indexOf(_api_enums__WEBPACK_IMPORTED_MODULE_0__.Status.N), 1);
    this.allSelectedTaskStatus.splice(this.allSelectedTaskStatus.indexOf(_api_enums__WEBPACK_IMPORTED_MODULE_0__.Status.O), 1);
    this.allSelectedTaskStatus.splice(this.allSelectedTaskStatus.indexOf(_api_enums__WEBPACK_IMPORTED_MODULE_0__.Status.R), 1);
    if (this.getStatusValue(this.selectedTask.status) == _api_enums__WEBPACK_IMPORTED_MODULE_0__.Status.P || this.getStatusValue(this.selectedTask.status) == _api_enums__WEBPACK_IMPORTED_MODULE_0__.Status.O || this.getStatusValue(this.selectedTask.status) == _api_enums__WEBPACK_IMPORTED_MODULE_0__.Status.B) {
      this.allSelectedTaskStatus.splice(this.allSelectedTaskStatus.indexOf(_api_enums__WEBPACK_IMPORTED_MODULE_0__.Status.A), 1);
    }
  }
  assignModifiedTasks() {
    // this.modifiedComments = this.selectedTask.comments;
    this.modifiedImpediments = this.selectedTask.impediments;
    this.modifiedNotes = this.selectedTask.notes;
    this.modifiedStatus = this.getStatusValue(this.selectedTask.status);
  }
  getStatusKey(value) {
    const index = Object.values(_api_enums__WEBPACK_IMPORTED_MODULE_0__.Status).indexOf(value);
    return Object.keys(_api_enums__WEBPACK_IMPORTED_MODULE_0__.Status)[index];
  }
  getStatusValue(key) {
    const status = Object.keys(_api_enums__WEBPACK_IMPORTED_MODULE_0__.Status).indexOf(key);
    let s = Object.values(_api_enums__WEBPACK_IMPORTED_MODULE_0__.Status)[status];
    return s;
  }
  updateTaskStatus(status) {
    const user = this.getUserFromArray();
    let id;
    if (user !== undefined) {
      id = user.id;
    }
    let newComment = {};
    this.selectedTask.status = this.getStatusKey(status);
    this.selectedTask.acceptedByUserID = this.currentUser.id;
    newComment.givenByUserId = this.currentUser.id;
    newComment.givenBy = this.currentUser;
    newComment.timestamp = new Date();
    if (status == _api_enums__WEBPACK_IMPORTED_MODULE_0__.Status.A) {
      if (id === undefined || id !== this.currentUser.id) {
        this.selectedTask.assignedUsers = [];
        this.selectedTask.assignedUsers.push(this.currentUser.id);
        let assignees = [];
        this.selectedTask.assignees.forEach(el => assignees.push(el.name));
        let userUpdComment = {};
        userUpdComment.givenByUserId = this.currentUser.id;
        userUpdComment.givenBy = this.currentUser;
        userUpdComment.timestamp = new Date();
        userUpdComment.comments = "Assignee Changed :: Previous : [" + assignees + "], Current : [" + this.currentUser.name + "].";
        this.selectedTask.comments.push(userUpdComment);
      }
      newComment.comments = this.currentUser.name + " accepted the task.";
      this.selectedTask.comments.push(newComment);
      this.callUpdateTask();
    } else if (status == _api_enums__WEBPACK_IMPORTED_MODULE_0__.Status.P) {
      newComment.comments = this.currentUser.name + " changed the status to in progress";
      this.selectedTask.comments.push(newComment);
      this.callUpdateTask();
    } else if (status == _api_enums__WEBPACK_IMPORTED_MODULE_0__.Status.C && !this.isEmpty(this.modifiedComments)) {
      newComment.comments = this.currentUser.name + " marked the task as complete.";
      this.selectedTask.comments.push(newComment);
      this.selectedTask.notes = this.modifiedNotes;
      this.selectedTask.impediments = this.modifiedImpediments;
      this.callUpdateTask();
    } else if (status == _api_enums__WEBPACK_IMPORTED_MODULE_0__.Status.B) {
      newComment.comments = this.currentUser.name + " changed the status as blocked.";
      this.selectedTask.comments.push(newComment);
      this.selectedTask.notes = this.modifiedNotes;
      this.selectedTask.impediments = this.modifiedImpediments;
      this.callUpdateTask();
    } else if (status == _api_enums__WEBPACK_IMPORTED_MODULE_0__.Status.R) {
      newComment.comments = this.currentUser.name + " rejected the task.";
      this.selectedTask.comments.push(newComment);
      this.callUpdateTask();
    }
  }
  callUpdateTask() {
    this.tasksService.updateTask(this.selectedTask).subscribe(response => {
      this.onActivateTaskStatus();
      if (this.selectedTask.status == this.getStatusKey(_api_enums__WEBPACK_IMPORTED_MODULE_0__.Status.C)) {
        this.onDiscard();
      }
      this.isSubmitted = false;
      this.visibleAddSidebar = false;
      this.isSaveEnable = false;
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: "Successfully " + status + " task [" + response.taskTitle + "]"
      });
    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: 'Update Task Failed : ' + error.error.errorCode,
        detail: "Failed : " + error.error.errorDesc
      });
    });
  }
  enableSave() {
    if (this.getStatusValue(this.selectedTask.status) != this.modifiedStatus) {
      this.isSaveEnable = true;
    } else {
      this.isSaveEnable = false;
    }
  }
  saveQualified() {
    if (this.isSaveEnable) {
      return this.selectedTask.status != 'C' && this.selectedTask.status != 'R';
    }
    return false;
  }
  onDiscard() {
    this.visibleSidebar = false;
    this.isSaveEnable = false;
    this.assignModifiedTasks();
  }
  onTextChange() {
    if (this.modifiedNotes != this.selectedTask.notes) {
      this.isSaveEnable = true;
    }
    if (this.modifiedImpediments != this.selectedTask.impediments) {
      this.isSaveEnable = true;
    }
  }
  isEmpty(str) {
    return !str || str.trim() === '';
  }
  filterAssignees(event) {
    const filtered = [];
    const query = event.query;
    for (let i = 0; i < this.allDevelopers.length; i++) {
      const user = this.allDevelopers[i];
      if (user.name.toLowerCase().indexOf(query.toLowerCase()) != -1) {
        filtered.push(user);
      }
    }
    this.filteredAssignees = filtered;
  }
  addTaskList(event) {
    if (this.newItemTaskListDetails == "" || this.newItemTaskListDetails == undefined) {
      return;
    }
    this.newItemTaskList.taskDetails = this.newItemTaskListDetails;
    this.newItemTaskList.completedByUserId = this.userId;
    this.newItemTaskList.addedOn = new Date();
    this.newItemTaskList.isCompleted = false;
    if (event.keyCode == 13) {
      this.createdTask.taskLists.push(this.newItemTaskList);
      this.newItemTaskListDetails = undefined;
      this.newItemTaskList = {};
    }
  }
  addComment(event) {
    if (this.newComment == "" || this.newComment == undefined) {
      return;
    }
    this.newTaskComment.comments = this.newComment;
    this.newTaskComment.givenByUserId = this.userId;
    this.newTaskComment.givenBy = this.currentUser;
    this.newTaskComment.timestamp = new Date();
    if (event.keyCode == 13) {
      this.selectedTask.comments.splice(0, 0, this.newTaskComment);
      this.newComment = undefined;
      this.newTaskComment = {};
    }
  }
  onKeydown(event) {
    event.preventDefault();
  }
  completeTaskListItem(task) {
    task.completedTasks = task.taskLists.filter(item => item.isCompleted).length;
    task.progress = Math.round(task.completedTasks / task.taskLists.length * 100);
  }
  deleteTaskList(item) {
    this.confirmationService.confirm({
      key: 'confirm_selected_variables',
      target: event.target || new EventTarget(),
      message: 'Are you sure you want to delete ?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.createdTask.taskLists = this.createdTask.taskLists.filter(val => val.taskDetails !== item.taskDetails);
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Task Deleted',
          life: 3000
        });
      }
    });
  }
  getTaskPriorityImg(priority) {
    const pri = Object.keys(_api_enums__WEBPACK_IMPORTED_MODULE_0__.Priority).indexOf(priority);
    let s = Object.values(_api_enums__WEBPACK_IMPORTED_MODULE_0__.Priority)[pri];
    return s.toLowerCase();
  }
  getTaskPriorityName(priority) {
    const pri = Object.keys(_api_enums__WEBPACK_IMPORTED_MODULE_0__.Priority).indexOf(priority);
    let s = Object.values(_api_enums__WEBPACK_IMPORTED_MODULE_0__.Priority)[pri];
    return s;
  }
  enableRejectButton() {
    const user = this.getUserFromArray();
    let id;
    if (user !== undefined) {
      id = user.id;
    }
    if (id === this.currentUser.id && (this.selectedTask.status == 'N' || this.selectedTask.status == 'A')) return true;else {
      return false;
    }
  }
  enableAcceptButton(status) {
    const user = this.getUserFromArray();
    let id;
    if (user !== undefined) {
      id = user.id;
    }
    // if (id === this.currentUser.id && !user.accepted &&
    if (this.getStatusValue(status) !== _api_enums__WEBPACK_IMPORTED_MODULE_0__.Status.A) {
      if (this.getStatusValue(status) == _api_enums__WEBPACK_IMPORTED_MODULE_0__.Status.N || this.getStatusValue(status) == _api_enums__WEBPACK_IMPORTED_MODULE_0__.Status.O) {
        return true;
      }
    } else {
      if (id === this.currentUser.id && !user.accepted) {
        return true;
      }
    }
    return false;
  }
  getUserFromArray() {
    return this.selectedTask.assignees.find(user => {
      return user.id === this.currentUser.id;
    });
  }
  onStatusTabChange(event) {
    this.activeItem = event;
  }
}
TodoComponent.ɵfac = function TodoComponent_Factory(t) {
  return new (t || TodoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_tasks_service__WEBPACK_IMPORTED_MODULE_1__.TasksService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.ConfirmationService));
};
TodoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: TodoComponent,
  selectors: [["app-todo"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_3__.MessageService, primeng_api__WEBPACK_IMPORTED_MODULE_3__.ConfirmationService])],
  decls: 24,
  vars: 22,
  consts: [["key", "success"], ["key", "retry"], ["pTemplate", "message"], [1, "mb-3"], [3, "model", "activeItem", "activeItemChange"], [1, "grid", "p-fluid"], [1, "col-12", "sm:col-6", "lg:col-6", "xl:col-3"], [1, "p-link", "card", "h-full", 2, "border-style", "dashed", "background", "none", 3, "click"], [1, "flex", "align-items-center", "justify-content-center", "h-full"], [1, "align-text-center"], [1, "text-300", "font-bold", "text-3xl"], [1, "text-300", "font-bold", "text-2xl"], ["class", "col-12 sm:col-6 lg:col-6 xl:col-3", 4, "ngFor", "ngForOf"], ["position", "right", 3, "visible", "showCloseIcon", "dismissible", "blockScroll", "baseZIndex", "visibleChange"], ["pTemplate", "content"], ["op2", ""], ["pTemplate", ""], [1, "flex", "flex-column", 2, "flex", "1"], [1, "text-center"], [1, "pi", "pi-exclamation-triangle", 2, "font-size", "3rem"], [1, "col-12"], ["type", "button", "icon", "pi pi-refresh", "pButton", "", "label", "Retry", 1, "p-button-danger", 3, "click"], [1, "card", "flex", "flex-column", "w-full", "border-1", "surface-border", "px-3", "py-4", "gap-4", "hover:surface-ground", "cursor-pointer", 3, "click"], [1, "flex", "justify-content-between", "align-items-center"], [1, "text-900", "font-semibold"], [1, "flex", "gap-2"], [1, "h-2rem", "w-2rem", 3, "src"], [1, "text-700"], [1, "flex", "flex-column", "gap-3"], [1, "text-500", "text-sm"], [3, "showValue", "value"], [1, "flex", "align-items-center", "justify-content-between", "flex-column", "md:flex-row", "gap-4", "md:gap-0"], [4, "ngIf"], [1, "flex", "align-items-center", "gap-3"], ["class", "text-900 font-semibold", 4, "ngIf"], ["class", "flex align-items-center gap-3", 4, "ngIf"], ["icon", "pi pi-user", "shape", "circle", "styleClass", "border-2 surface-border", 4, "ngFor", "ngForOf"], ["shape", "circle", "styleClass", "border-2 surface-border", 3, "label", 4, "ngIf"], ["icon", "pi pi-user", "shape", "circle", "styleClass", "border-2 surface-border"], ["shape", "circle", "styleClass", "border-2 surface-border", 3, "label"], [1, "pi", "pi-paperclip", "text-700", "mr-2"], [1, "pi", "pi-clock", "text-700", "mr-2"], [1, "pi", "pi-check-square", "text-700", "mr-2"], [1, "pi", "pi-check", "text-green-700", "mr-2"], [1, "text-green-700"], [1, "flex", "h-full", "w-full", "flex-wrap", "justify-items-stretch"], [1, "px-4", "py-6", "border-bottom-1", "surface-border", "flex", "w-full", "align-items-center", "justify-content-between", "h-4rem"], [1, "text-900", "font-semibold", "text-lg"], ["pButton", "", "label", "Reject", "icon", "pi pi-times", "class", "p-button-danger p-button-outlined p-button-danger", 3, "click", 4, "ngIf"], ["pButton", "", "label", "Accept", "icon", "pi pi-check", "class", "ml-2", 3, "click", 4, "ngIf"], ["pButton", "", "label", "Discard", "icon", "pi pi-delete-left", "class", "p-button-warning ml-2", 3, "click", 4, "ngIf"], ["pButton", "", "label", "Save", "icon", "pi pi-save", "class", "p-button-success ml-2", 3, "click", 4, "ngIf"], [1, "grid", "grid-nogutter", "gap-3", "pt-5"], [1, "col-12", "field", "px-5", "flex", "gap-5"], [1, "flex", "flex-column", "field", "w-full"], [1, "block", "text-900", "font-semibold"], [3, "preventClick", "onActivate"], ["pTemplate", "display"], [1, "flex", "flex-column", "w-full"], [1, "block", "text-900", "font-semibold", "mb-2"], ["icon", "pi pi-user", "styleClass", "mr-2", 3, "label"], [1, "border-round", "border-1", "p-2", "surface-border"], [1, "flex", "gap-2", "align-items-center"], [1, "pl-2", "h-2rem", "w-2rem", 3, "src"], [1, "col-12", "field", "px-5", "w-full"], [1, "border-round", "border-1", "p-3", "surface-border"], [1, "col-12", "field", "px-5"], ["pTooltip", "Click to edit", "tooltipPosition", "right", "closeIcon", "pi pi-check", 3, "preventClick", "closable"], [1, "flex", "flex-column"], [1, "flex", "justify-content-between", "mb-3"], [3, "value", "showValue"], ["class", "col-12 field  px-5", 4, "ngIf"], [1, "col-12", "flex", "flex-column", "field", "px-5"], [1, "p-fluid"], [1, "flex", "align-items-center"], ["icon", "pi pi-user", "styleClass", "mr-2", 3, "label", 4, "ngFor", "ngForOf"], [1, "col-12", "flex", "flex-column", "w-full", "row-gap-4", "px-5", "mb-6"], ["icon", "pi pi-user", "styleClass", "mr-3", "size", "large", "shape", "circle"], ["placeholder", "Write a comment...", "pInputTextarea", "", 1, "w-full", 3, "autoResize", "ngModel", "ngModelChange", "keydown.enter", "keyup.enter"], ["class", "flex align-items-center border-round mb-2", 4, "ngFor", "ngForOf"], ["pButton", "", "label", "Reject", "icon", "pi pi-times", 1, "p-button-danger", "p-button-outlined", "p-button-danger", 3, "click"], ["pButton", "", "label", "Accept", "icon", "pi pi-check", 1, "ml-2", 3, "click"], ["pButton", "", "label", "Discard", "icon", "pi pi-delete-left", 1, "p-button-warning", "ml-2", 3, "click"], ["pButton", "", "label", "Save", "icon", "pi pi-save", 1, "p-button-success", "ml-2", 3, "click"], [3, "options", "ngModel", "ngModelChange", "onChange"], ["pTemplate", "selectedItem"], ["pTemplate", "item"], [1, "inline-flex", "w-full"], ["dateFormat", "M dd, yy", "appendTo", "body", 3, "minDate", "disabledDays", "ngModel", "ngModelChange"], [1, "list-none", "p-4", "flex", "gap-2", "flex-column", "surface-ground", "surface-border", "border-1", "border-round"], ["class", "flex align-items-start", 4, "ngFor", "ngForOf"], [1, "flex", "align-items-start"], ["name", "group", 1, "mr-2", 3, "disabled", "inputId", "ngModel", "binary", "value", "ngModelChange", "onChange"], [1, "w-full"], [1, "flex", "justify-content-between"], [3, "for", "ngStyle"], [1, "flex", "align-items-center", "border-round", "mb-2"], [1, "flex", "justify-content-between", "mb-2"], [1, "block", "text-900"], [1, "block", "text-700"], [1, "block", "text-900", "border-1", "surface-border", "surface-ground", "p-2", "border-round"], [1, "px-4", "py-6", "border-bottom-1", "surface-border", "flex", "w-full", "align-items-center", "h-4rem"], ["pTooltip", "Click to edit", "tooltipPosition", "right", "closeIcon", "pi pi-check", 3, "closable"], ["class", "p-error", 4, "ngIf"], [1, "grid", "grid-nogutter", "p-fluid", "gap-5", "pt-5"], [1, "flex", "gap-5", "align-items-center"], ["optionLabel", "type", "optionValue", "code", 3, "options", "ngModel", "ngModelChange"], ["id", "msDropdown", "placeholder", "Select Microservice", "optionLabel", "name", 3, "options", "ngModel", "ngModelChange"], ["rows", "5", "cols", "30", "pInputTextarea", "", 3, "autoResize", "ngModel", "ngModelChange"], [1, "col-12", "px-5", "flex", "gap-5"], ["dateFormat", "M dd, yy", "appendTo", "body", 3, "showIcon", "disabledDays", "ngModel", "minDate", "ngModelChange"], ["dateFormat", "M dd, yy", "appendTo", "body", 3, "showIcon", "disabledDays", "disabled", "ngModel", "minDate", "ngModelChange"], ["placeholder", "Add a task", "pInputTextarea", "", 3, "autoResize", "ngModel", "ngModelChange", "keydown.enter", "keyup.enter"], ["class", "list-none p-4 flex gap-2 flex-column surface-ground surface-border border-1 border-round", 4, "ngIf"], ["field", "name", "placeholder", "Choose assignees", 3, "ngModel", "suggestions", "multiple", "styleClass", "ngModelChange", "completeMethod"], [1, "flex", "w-full", "justify-content-end", "border-top-1", "surface-border", "py-5", "px-5", "gap-3"], ["pButton", "", "pRipple", "", "icon", "pi pi-paperclip", "type", "button", 1, "surface-border", "p-button-outlined", "p-button-secondary", "text-900", "w-3rem", "h-3rem"], ["pButton", "", "pRipple", "", "icon", "pi pi-save", "label", "Create", "type", "button", 1, "p-button-success", "text-black-900", "h-3rem", 3, "click"], [1, "inline-flex", "text-900", "font-semibold", "text-lg"], ["type", "text", "pInputText", "", 3, "ngModel", "ngModelChange"], [1, "p-error"], [1, "flex", "gap-1", "align-items-center", "justify-content-center", "w-full"], ["name", "group", "inputId", "ch", 1, "mr-2", 3, "disabled", "ngModel", "binary", "value", "ngModelChange"], ["for", "ch", 3, "ngStyle"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-trash", 1, "p-button-rounded", "p-button-danger", "p-button-text", "p-button-sm", 3, "click"], ["key", "confirm_selected_variables"], [1, "flex", "align-items-center", "gap-3", "border-round"], ["icon", "pi pi-user", "styleClass", "mr-2", "shape", "circle"], [1, "grid", "-fluid"], [1, "field"], ["htmlFor", "taskDesc"], ["rows", "5", "cols", "30", "placeholder", "Reason", "pInputTextarea", "", 1, "w-full", 3, "autoResize", "ngModel", "ngModelChange", "keypress"], [2, "text-align", "right"], ["type", "button", "icon", "pi pi-save", "pButton", "", "label", "Save", 3, "click"]],
  template: function TodoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "p-toast")(1, "p-toast", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p-toast", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TodoComponent_ng_template_3_Template, 10, 2, "ng-template", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "p-tabMenu", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("activeItemChange", function TodoComponent_Template_p_tabMenu_activeItemChange_5_listener($event) {
        return ctx.onStatusTabChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p-scrollPanel")(7, "div", 5)(8, "div", 6)(9, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoComponent_Template_div_click_9_listener() {
        return ctx.visibleAddSidebar = true;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8)(11, "div", 9)(12, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "+");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Add task");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, TodoComponent_div_16_Template, 21, 16, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p-sidebar", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("visibleChange", function TodoComponent_Template_p_sidebar_visibleChange_17_listener($event) {
        return ctx.visibleSidebar = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, TodoComponent_ng_template_18_Template, 78, 25, "ng-template", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p-sidebar", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("visibleChange", function TodoComponent_Template_p_sidebar_visibleChange_19_listener($event) {
        return ctx.visibleAddSidebar = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, TodoComponent_ng_template_20_Template, 49, 33, "ng-template", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p-overlayPanel", null, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, TodoComponent_ng_template_23_Template, 9, 3, "ng-template", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("model", ctx.items)("activeItem", ctx.activeItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](19, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.currentUserTasks);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](20, _c4));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", ctx.visibleSidebar)("showCloseIcon", false)("dismissible", true)("blockScroll", true)("baseZIndex", 10000);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](21, _c5));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", ctx.visibleAddSidebar)("showCloseIcon", false)("dismissible", true)("blockScroll", true)("baseZIndex", 10000);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeTemplate, primeng_calendar__WEBPACK_IMPORTED_MODULE_6__.Calendar, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.Ripple, primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__.Tooltip, primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__.InputText, primeng_checkbox__WEBPACK_IMPORTED_MODULE_11__.Checkbox, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_12__.InputTextarea, primeng_toast__WEBPACK_IMPORTED_MODULE_13__.Toast, primeng_avatar__WEBPACK_IMPORTED_MODULE_14__.Avatar, primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_15__.OverlayPanel, primeng_progressbar__WEBPACK_IMPORTED_MODULE_16__.ProgressBar, primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_17__.ConfirmPopup, primeng_dropdown__WEBPACK_IMPORTED_MODULE_18__.Dropdown, primeng_sidebar__WEBPACK_IMPORTED_MODULE_19__.Sidebar, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_20__.AutoComplete, primeng_inplace__WEBPACK_IMPORTED_MODULE_21__.Inplace, primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_22__.ScrollPanel, primeng_tabmenu__WEBPACK_IMPORTED_MODULE_23__.TabMenu, primeng_avatargroup__WEBPACK_IMPORTED_MODULE_24__.AvatarGroup, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_25__.SelectButton, primeng_chip__WEBPACK_IMPORTED_MODULE_26__.Chip, _angular_common__WEBPACK_IMPORTED_MODULE_4__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
  encapsulation: 2
});

/***/ }),

/***/ 2543:
/*!*******************************************************!*\
  !*** ./src/app/itaap-ms-manager/service/constants.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Constants": () => (/* binding */ Constants)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class Constants {
  constructor() {
    this.hostname = 'http://localhost:9083/poc/';
    this.org = 'PhilipsAgile/56.0 EADI';
    this.apiV = '6.0-preview.1';
    this.authorizationData = 'Basic ' + btoa("AZURE_POC_USERNAME" + ':' + "AZURE_POC_PASSWORD");
    this.headerOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.authorizationData
      })
    };
    this.azureHostname = 'https://dev.azure.com/' + this.org + '/_apis/';
    this.azureAuthorizationData = 'Basic ' + btoa("" + ':' + "vljrfdnoawhe64oe6537fistlyv562w6nz5dtlvts6mbc7okrxba");
    this.azureHeaderOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.azureAuthorizationData
      })
    };
  }
}
Constants.ɵfac = function Constants_Factory(t) {
  return new (t || Constants)();
};
Constants.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: Constants,
  factory: Constants.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6343:
/*!***********************************************************!*\
  !*** ./src/app/layout/components/app.footer.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppFooterComponent": () => (/* binding */ AppFooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/app.layout.service */ 1758);


class AppFooterComponent {
  constructor(layoutService) {
    this.layoutService = layoutService;
  }
}
AppFooterComponent.ɵfac = function AppFooterComponent_Factory(t) {
  return new (t || AppFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService));
};
AppFooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppFooterComponent,
  selectors: [["app-footer"]],
  decls: 7,
  vars: 0,
  consts: [[1, "layout-footer"], [1, "flex", "align-items-center"], ["src", "assets/itaap-ms-manager/images/login.svg", "alt", "Logo", "height", "20", 1, "mr-2"], [1, "font-medium", "ml-2"], ["src", "assets/itaap-ms-manager/images/LTIMindtree.png", "alt", "Logo", "height", "20", 1, "mr-2"]],
  template: function AppFooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " by ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Itaap Integration Team ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 8372:
/*!*********************************************************!*\
  !*** ./src/app/layout/components/app.menu.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppMenuComponent": () => (/* binding */ AppMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/app.layout.service */ 1758);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _app_menuitem_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.menuitem.component */ 2853);




function AppMenuComponent_ng_container_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "li", 5);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const item_r1 = ctx_r5.$implicit;
    const i_r2 = ctx_r5.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", item_r1)("index", i_r2)("root", true);
  }
}
function AppMenuComponent_ng_container_1_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "li", 6);
  }
}
function AppMenuComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppMenuComponent_ng_container_1_li_1_Template, 1, 3, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AppMenuComponent_ng_container_1_li_2_Template, 1, 0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !item_r1.separator);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.separator);
  }
}
class AppMenuComponent {
  constructor(layoutService) {
    this.layoutService = layoutService;
    this.model = [];
  }
  ngOnInit() {
    this.model = [{
      label: 'Home',
      items: [{
        label: 'Dashboard',
        icon: 'pi pi-fw pi-home',
        routerLink: ['/home/dashboard']
      }, {
        label: 'My Requests',
        icon: 'pi pi-fw pi-file-edit',
        routerLink: ['/home/my-requests']
      }, {
        label: 'Insert',
        icon: 'pi pi-fw pi-plus',
        routerLink: ['/add/properties']
      }]
    }, {
      label: 'Management',
      items: [{
        label: 'Microservices',
        icon: 'pi pi-fw pi-server',
        routerLink: ['/microservices/lists']
      }, {
        label: 'Tasks',
        icon: 'pi pi-fw pi-list',
        routerLink: ['/tasks/lists']
      }, {
        label: 'Azure Library',
        icon: 'pi pi-fw pi-briefcase',
        items: [{
          label: 'Library',
          icon: 'pi pi-fw pi-check',
          routerLink: ['/library/variable']
        }, {
          label: 'Admin',
          icon: 'pi pi-fw pi-clock',
          routerLink: ['/library/admin']
        }, {
          label: 'Comparison',
          icon: 'pi pi-fw pi-book',
          routerLink: ['/library/compare']
        }]
      }, {
        label: 'Pipelines',
        icon: 'pi pi-fw pi-id-card',
        routerLink: ['/deployment/builds']
      }, {
        label: 'Connectivity',
        icon: 'pi pi-fw pi-link',
        items: [{
          label: 'Test',
          icon: 'pi pi-fw pi-check',
          routerLink: ['/connectivity/test']
        }
        // {
        //   label: 'History',
        //   icon: 'pi pi-fw pi-clock',
        //   routerLink: ['/connectivity/history']
        // }
        ]
      }]
    }
    /*,
      {
          label: 'UI Components',
          items: [
              { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
              { label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
              { label: 'Float Label', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel'] },
              { label: 'Invalid State', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/uikit/invalidstate'] },
              { label: 'Button', icon: 'pi pi-fw pi-box', routerLink: ['/uikit/button'] },
              { label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table'] },
              { label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list'] },
              { label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree'] },
              { label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel'] },
              { label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay'] },
              { label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media'] },
              { label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu'], routerLinkActiveOptions: { paths: 'subset', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' } },
              { label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message'] },
              { label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file'] },
              { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts'] },
              { label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/misc'] }
          ]
      }*/];
  }
}

AppMenuComponent.ɵfac = function AppMenuComponent_Factory(t) {
  return new (t || AppMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService));
};
AppMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppMenuComponent,
  selectors: [["app-menu"]],
  decls: 4,
  vars: 1,
  consts: [[1, "layout-menu"], [4, "ngFor", "ngForOf"], ["href", "https://www.primefaces.org/primeblocks-ng/#/"], ["app-menuitem", "", 3, "item", "index", "root", 4, "ngIf"], ["class", "menu-separator", 4, "ngIf"], ["app-menuitem", "", 3, "item", "index", "root"], [1, "menu-separator"]],
  template: function AppMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppMenuComponent_ng_container_1_Template, 3, 2, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.model);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _app_menuitem_component__WEBPACK_IMPORTED_MODULE_1__.AppMenuitemComponent],
  encapsulation: 2
});

/***/ }),

/***/ 2853:
/*!*************************************************************!*\
  !*** ./src/app/layout/components/app.menuitem.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppMenuitemComponent": () => (/* binding */ AppMenuitemComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/app.layout.service */ 1758);
/* harmony import */ var _service_app_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/app.menu.service */ 3084);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/ripple */ 4538);









const _c0 = ["app-menuitem", ""];
function AppMenuitemComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.item.label);
  }
}
function AppMenuitemComponent_a_2_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 9);
  }
}
function AppMenuitemComponent_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppMenuitemComponent_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.itemClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AppMenuitemComponent_a_2_i_4_Template, 1, 0, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r1.item.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("href", ctx_r1.item.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("target", ctx_r1.item.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r1.item.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.item.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.item.items);
  }
}
function AppMenuitemComponent_a_3_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 9);
  }
}
const _c1 = function () {
  return {
    paths: "exact",
    queryParams: "ignored",
    matrixParams: "ignored",
    fragment: "ignored"
  };
};
function AppMenuitemComponent_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppMenuitemComponent_a_3_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.itemClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AppMenuitemComponent_a_3_i_4_Template, 1, 0, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r2.item.class)("routerLink", ctx_r2.item.routerLink)("routerLinkActiveOptions", ctx_r2.item.routerLinkActiveOptions || _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](14, _c1))("fragment", ctx_r2.item.fragment)("queryParamsHandling", ctx_r2.item.queryParamsHandling)("preserveFragment", ctx_r2.item.preserveFragment)("skipLocationChange", ctx_r2.item.skipLocationChange)("replaceUrl", ctx_r2.item.replaceUrl)("state", ctx_r2.item.state)("queryParams", ctx_r2.item.queryParams);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("target", ctx_r2.item.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r2.item.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.item.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.item.items);
  }
}
function AppMenuitemComponent_ul_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "li", 12);
  }
  if (rf & 2) {
    const child_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](child_r11.badgeClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", child_r11)("index", i_r12)("parentKey", ctx_r10.key);
  }
}
function AppMenuitemComponent_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppMenuitemComponent_ul_4_ng_template_1_Template, 1, 5, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@children", ctx_r3.submenuAnimation);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.item.items);
  }
}
class AppMenuitemComponent {
  constructor(layoutService, cd, router, menuService) {
    this.layoutService = layoutService;
    this.cd = cd;
    this.router = router;
    this.menuService = menuService;
    this.active = false;
    this.key = "";
    this.menuSourceSubscription = this.menuService.menuSource$.subscribe(value => {
      Promise.resolve(null).then(() => {
        if (value.routeEvent) {
          this.active = value.key === this.key || value.key.startsWith(this.key + '-') ? true : false;
        } else {
          if (value.key !== this.key && !value.key.startsWith(this.key + '-')) {
            this.active = false;
          }
        }
      });
    });
    this.menuResetSubscription = this.menuService.resetSource$.subscribe(() => {
      this.active = false;
    });
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd)).subscribe(params => {
      if (this.item.routerLink) {
        this.updateActiveStateFromRoute();
      }
    });
  }
  ngOnInit() {
    this.key = this.parentKey ? this.parentKey + '-' + this.index : String(this.index);
    if (this.item.routerLink) {
      this.updateActiveStateFromRoute();
    }
  }
  updateActiveStateFromRoute() {
    let activeRoute = this.router.isActive(this.item.routerLink[0], {
      paths: 'exact',
      queryParams: 'ignored',
      matrixParams: 'ignored',
      fragment: 'ignored'
    });
    if (activeRoute) {
      this.menuService.onMenuStateChange({
        key: this.key,
        routeEvent: true
      });
    }
  }
  itemClick(event) {
    // avoid processing disabled items
    if (this.item.disabled) {
      event.preventDefault();
      return;
    }
    // execute command
    if (this.item.command) {
      this.item.command({
        originalEvent: event,
        item: this.item
      });
    }
    // toggle active state
    if (this.item.items) {
      this.active = !this.active;
    }
    this.menuService.onMenuStateChange({
      key: this.key
    });
  }
  get submenuAnimation() {
    return this.root ? 'expanded' : this.active ? 'expanded' : 'collapsed';
  }
  get activeClass() {
    return this.active && !this.root;
  }
  ngOnDestroy() {
    if (this.menuSourceSubscription) {
      this.menuSourceSubscription.unsubscribe();
    }
    if (this.menuResetSubscription) {
      this.menuResetSubscription.unsubscribe();
    }
  }
}
AppMenuitemComponent.ɵfac = function AppMenuitemComponent_Factory(t) {
  return new (t || AppMenuitemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_app_menu_service__WEBPACK_IMPORTED_MODULE_1__.MenuService));
};
AppMenuitemComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppMenuitemComponent,
  selectors: [["", "app-menuitem", ""]],
  hostVars: 4,
  hostBindings: function AppMenuitemComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("layout-root-menuitem", ctx.root)("active-menuitem", ctx.activeClass);
    }
  },
  inputs: {
    item: "item",
    index: "index",
    root: "root",
    parentKey: "parentKey"
  },
  attrs: _c0,
  decls: 5,
  vars: 4,
  consts: [["class", "layout-menuitem-root-text", 4, "ngIf"], ["tabindex", "0", "pRipple", "", 3, "ngClass", "click", 4, "ngIf"], ["routerLinkActive", "active-route", "tabindex", "0", "pRipple", "", 3, "ngClass", "routerLink", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "queryParams", "click", 4, "ngIf"], [4, "ngIf"], [1, "layout-menuitem-root-text"], ["tabindex", "0", "pRipple", "", 3, "ngClass", "click"], [1, "layout-menuitem-icon", 3, "ngClass"], [1, "layout-menuitem-text"], ["class", "pi pi-fw pi-angle-down layout-submenu-toggler", 4, "ngIf"], [1, "pi", "pi-fw", "pi-angle-down", "layout-submenu-toggler"], ["routerLinkActive", "active-route", "tabindex", "0", "pRipple", "", 3, "ngClass", "routerLink", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "queryParams", "click"], ["ngFor", "", 3, "ngForOf"], ["app-menuitem", "", 3, "item", "index", "parentKey"]],
  template: function AppMenuitemComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppMenuitemComponent_div_1_Template, 2, 1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AppMenuitemComponent_a_2_Template, 5, 6, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AppMenuitemComponent_a_3_Template, 5, 15, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AppMenuitemComponent_ul_4_Template, 2, 2, "ul", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.root && ctx.item.visible !== false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (!ctx.item.routerLink || ctx.item.items) && ctx.item.visible !== false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.item.routerLink && !ctx.item.items && ctx.item.visible !== false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.item.items && ctx.item.visible !== false);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.Ripple, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, AppMenuitemComponent],
  encapsulation: 2,
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('children', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
      height: '0'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
      height: '*'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('collapsed <=> expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('400ms cubic-bezier(0.86, 0, 0.07, 1)'))])]
  }
});

/***/ }),

/***/ 9802:
/*!************************************************************!*\
  !*** ./src/app/layout/components/app.sidebar.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppSidebarComponent": () => (/* binding */ AppSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/app.layout.service */ 1758);
/* harmony import */ var _app_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.menu.component */ 8372);



class AppSidebarComponent {
  constructor(layoutService, el) {
    this.layoutService = layoutService;
    this.el = el;
  }
}
AppSidebarComponent.ɵfac = function AppSidebarComponent_Factory(t) {
  return new (t || AppSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef));
};
AppSidebarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppSidebarComponent,
  selectors: [["app-sidebar"]],
  decls: 1,
  vars: 0,
  template: function AppSidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-menu");
    }
  },
  dependencies: [_app_menu_component__WEBPACK_IMPORTED_MODULE_1__.AppMenuComponent],
  encapsulation: 2
});

/***/ }),

/***/ 4083:
/*!***********************************************************!*\
  !*** ./src/app/layout/components/app.topbar.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppTopBarComponent": () => (/* binding */ AppTopBarComponent)
/* harmony export */ });
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _itaap_ms_manager_components_tasks_todo_todo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../itaap-ms-manager/components/tasks/todo/todo.component */ 7804);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/app.layout.service */ 1758);
/* harmony import */ var _itaap_ms_manager_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../itaap-ms-manager/components/auth/auth.service */ 5313);
/* harmony import */ var _itaap_ms_manager_components_tasks_tasks_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../itaap-ms-manager/components/tasks/tasks.service */ 9846);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dropdown */ 8992);











const _c0 = ["menubutton"];
const _c1 = ["topbarmenubutton"];
const _c2 = ["topbarmenu"];
const _c3 = function (a0) {
  return {
    "layout-topbar-menu-mobile-active": a0
  };
};
class AppTopBarComponent {
  constructor(layoutService, authService, tasksService, todoComponent) {
    /*this.userName = sessionStorage.getItem("userName");
    this.userEmail = sessionStorage.getItem("userEmail");*/
    this.layoutService = layoutService;
    this.authService = authService;
    this.tasksService = tasksService;
    this.todoComponent = todoComponent;
    this.userName = "";
    this.userEmail = "";
    this.tasksService.getAllUsers().subscribe(response => {
      this.allDevelopers = response;
      for (let i = 0; i < this.allDevelopers.length; i++) {
        if (this.allDevelopers[i].id == Number.parseInt(sessionStorage.getItem("loggedInUser"))) this.userName = this.allDevelopers[i].name;
      }
    }, error => {
      console.log(error);
    });
  }
  setUserId() {
    sessionStorage.setItem("loggedInUserDetails", JSON.stringify(this.user));
    sessionStorage.setItem("loggedInUser", this.user.id.toString());
    window.location.reload();
    /*this.todoComponent.ngOnInit();*/
  }
}

AppTopBarComponent.ɵfac = function AppTopBarComponent_Factory(t) {
  return new (t || AppTopBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_app_layout_service__WEBPACK_IMPORTED_MODULE_1__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_itaap_ms_manager_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_itaap_ms_manager_components_tasks_tasks_service__WEBPACK_IMPORTED_MODULE_3__.TasksService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_itaap_ms_manager_components_tasks_todo_todo_component__WEBPACK_IMPORTED_MODULE_0__.TodoComponent));
};
AppTopBarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AppTopBarComponent,
  selectors: [["app-topbar"]],
  viewQuery: function AppTopBarComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c2, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.menuButton = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.topbarMenuButton = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.menu = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_itaap_ms_manager_components_tasks_todo_todo_component__WEBPACK_IMPORTED_MODULE_0__.TodoComponent, primeng_api__WEBPACK_IMPORTED_MODULE_5__.MessageService, primeng_api__WEBPACK_IMPORTED_MODULE_5__.ConfirmationService])],
  decls: 29,
  vars: 7,
  consts: [[1, "layout-topbar"], ["routerLink", "", 1, "layout-topbar-logo"], ["src", "assets/itaap-ms-manager/images/login.svg", "alt", "logo"], [1, "p-link", "layout-menu-button", "layout-topbar-button", 3, "click"], ["menubutton", ""], [1, "pi", "pi-bars"], [1, "p-link", "layout-topbar-menu-button", "layout-topbar-button", 3, "click"], ["topbarmenubutton", ""], [1, "pi", "pi-ellipsis-v"], [1, "layout-topbar-menu", 3, "ngClass"], ["topbarmenu", ""], [1, "flex", 2, "align-self", "center"], [1, "mr-2", 2, "align-self", "center", "text-align", "end"], [1, "font-medium", "text-xl"], ["id", "filterDeveloperDropdown", "placeholder", "User", "optionLabel", "name", 3, "options", "ngModel", "ngModelChange", "onChange"], [1, "p-link", "layout-topbar-button", 3, "click"], [1, "pi", "pi-sign-out"], [1, "p-link", "layout-topbar-button"], [1, "pi", "pi-bell"]],
  template: function AppTopBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Microservice Manager");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppTopBarComponent_Template_button_click_5_listener() {
        return ctx.layoutService.onMenuToggle();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 6, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppTopBarComponent_Template_button_click_8_listener() {
        return ctx.layoutService.showProfileSidebar();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 9, 10)(13, "div", 11)(14, "div", 12)(15, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div")(20, "p-dropdown", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AppTopBarComponent_Template_p_dropdown_ngModelChange_20_listener($event) {
        return ctx.user = $event;
      })("onChange", function AppTopBarComponent_Template_p_dropdown_onChange_20_listener() {
        return ctx.setUserId();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppTopBarComponent_Template_button_click_21_listener($event) {
        return ctx.authService.logout($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Sign Out");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Notifications");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](5, _c3, ctx.layoutService.state.profileSidebarVisible));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.userName);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.userEmail);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx.allDevelopers)("ngModel", ctx.user);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__.Dropdown],
  encapsulation: 2
});

/***/ }),

/***/ 8716:
/*!*******************************************************!*\
  !*** ./src/app/layout/config/app.config.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppConfigComponent": () => (/* binding */ AppConfigComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/app.layout.service */ 1758);
/* harmony import */ var _service_app_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/app.menu.service */ 3084);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/sidebar */ 4179);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/radiobutton */ 9902);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputswitch */ 3585);









const _c0 = function (a0) {
  return {
    "text-primary-500": a0
  };
};
function AppConfigComponent_i_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 44);
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c0, s_r3 === ctx_r0.scale));
  }
}
function AppConfigComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Menu Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 45)(4, "p-radioButton", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppConfigComponent_ng_container_10_Template_p_radioButton_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.menuMode = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Static");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 45)(8, "p-radioButton", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppConfigComponent_ng_container_10_Template_p_radioButton_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.menuMode = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Overlay");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.menuMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.menuMode);
  }
}
function AppConfigComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Input Style");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 50)(4, "div", 51)(5, "p-radioButton", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppConfigComponent_ng_container_11_Template_p_radioButton_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.inputStyle = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Outlined");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 51)(9, "p-radioButton", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppConfigComponent_ng_container_11_Template_p_radioButton_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.inputStyle = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Filled");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Ripple Effect");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p-inputSwitch", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppConfigComponent_ng_container_11_Template_p_inputSwitch_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.ripple = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.inputStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.inputStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.ripple);
  }
}
class AppConfigComponent {
  constructor(layoutService, menuService) {
    this.layoutService = layoutService;
    this.menuService = menuService;
    this.minimal = false;
    this.scales = [12, 13, 14, 15, 16];
  }
  get visible() {
    return this.layoutService.state.configSidebarVisible;
  }
  set visible(_val) {
    this.layoutService.state.configSidebarVisible = _val;
  }
  get scale() {
    return this.layoutService.config.scale;
  }
  set scale(_val) {
    this.layoutService.config.scale = _val;
  }
  get menuMode() {
    return this.layoutService.config.menuMode;
  }
  set menuMode(_val) {
    this.layoutService.config.menuMode = _val;
  }
  get inputStyle() {
    return this.layoutService.config.inputStyle;
  }
  set inputStyle(_val) {
    this.layoutService.config.inputStyle = _val;
  }
  get ripple() {
    return this.layoutService.config.ripple;
  }
  set ripple(_val) {
    this.layoutService.config.ripple = _val;
  }
  onConfigButtonClick() {
    this.layoutService.showConfigSidebar();
  }
  changeTheme(theme, colorScheme) {
    const themeLink = document.getElementById('theme-css');
    const newHref = themeLink.getAttribute('href').replace(this.layoutService.config.theme, theme);
    this.layoutService.config.colorScheme;
    this.replaceThemeLink(newHref, () => {
      this.layoutService.config.theme = theme;
      this.layoutService.config.colorScheme = colorScheme;
      this.layoutService.onConfigUpdate();
    });
  }
  replaceThemeLink(href, onComplete) {
    const id = 'theme-css';
    const themeLink = document.getElementById('theme-css');
    const cloneLinkElement = themeLink.cloneNode(true);
    cloneLinkElement.setAttribute('href', href);
    cloneLinkElement.setAttribute('id', id + '-clone');
    themeLink.parentNode.insertBefore(cloneLinkElement, themeLink.nextSibling);
    cloneLinkElement.addEventListener('load', () => {
      themeLink.remove();
      cloneLinkElement.setAttribute('id', id);
      onComplete();
    });
  }
  decrementScale() {
    this.scale--;
    this.applyScale();
  }
  incrementScale() {
    this.scale++;
    this.applyScale();
  }
  applyScale() {
    document.documentElement.style.fontSize = this.scale + 'px';
  }
}
AppConfigComponent.ɵfac = function AppConfigComponent_Factory(t) {
  return new (t || AppConfigComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_app_menu_service__WEBPACK_IMPORTED_MODULE_1__.MenuService));
};
AppConfigComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppConfigComponent,
  selectors: [["app-config"]],
  inputs: {
    minimal: "minimal"
  },
  decls: 120,
  vars: 7,
  consts: [["type", "button", 1, "layout-config-button", "p-link", 3, "click"], [1, "pi", "pi-cog"], ["position", "right", "styleClass", "layout-config-sidebar w-20rem", 3, "visible", "transitionOptions", "visibleChange"], [1, "flex", "align-items-center"], ["icon", "pi pi-minus", "type", "button", "pButton", "", 1, "p-button-text", "p-button-rounded", "w-2rem", "h-2rem", "mr-2", 3, "disabled", "click"], [1, "flex", "gap-2", "align-items-center"], ["class", "pi pi-circle-fill text-300", 3, "ngClass", 4, "ngFor", "ngForOf"], ["icon", "pi pi-plus", "type", "button", "pButton", "", 1, "p-button-text", "p-button-rounded", "w-2rem", "h-2rem", "ml-2", 3, "disabled", "click"], [4, "ngIf"], [1, "grid"], [1, "col-3"], [1, "p-link", "w-2rem", "h-2rem", 3, "click"], ["src", "assets/layout/images/themes/bootstrap4-light-blue.svg", "alt", "Bootstrap Light Blue", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/bootstrap4-light-purple.svg", "alt", "Bootstrap Light Purple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/bootstrap4-dark-blue.svg", "alt", "Bootstrap Dark Blue", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/bootstrap4-dark-purple.svg", "alt", "Bootstrap Dark Purple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/md-light-indigo.svg", "alt", "Material Light Indigo", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/md-light-deeppurple.svg", "alt", "Material Light DeepPurple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/md-dark-indigo.svg", "alt", "Material Dark Indigo", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/md-dark-deeppurple.svg", "alt", "Material Dark DeepPurple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/md-light-deeppurple.svg", "alt", "Material Light Deep Purple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/md-dark-deeppurple.svg", "alt", "Material Dark Deep Purple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/tailwind-light.png", "alt", "Tailwind Light", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/fluent-light.png", "alt", "Fluent Light", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/lara-light-indigo.png", "alt", "Lara Light Indigo", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/lara-light-blue.png", "alt", "Lara Light Blue", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/lara-light-purple.png", "alt", "Lara Light Purple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/lara-light-teal.png", "alt", "Lara Light Teal", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/lara-dark-indigo.png", "alt", "Lara Dark Indigo", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/lara-dark-blue.png", "alt", "Lara Dark Blue", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/lara-dark-purple.png", "alt", "Lara Dark Purple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/lara-dark-teal.png", "alt", "Lara Dark Teal", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/saga-blue.png", "alt", "Saga Blue", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/saga-green.png", "alt", "Saga Green", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/saga-orange.png", "alt", "Saga Orange", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/saga-purple.png", "alt", "Saga Purple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/vela-blue.png", "alt", "Vela Blue", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/vela-green.png", "alt", "Vela Green", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/vela-orange.png", "alt", "Vela Orange", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/vela-purple.png", "alt", "Vela Purple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/arya-blue.png", "alt", "Arya Blue", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/arya-green.png", "alt", "Arya Green", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/arya-orange.png", "alt", "Arya Orange", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/arya-purple.png", "alt", "Arya Purple", 1, "w-2rem", "h-2rem"], [1, "pi", "pi-circle-fill", "text-300", 3, "ngClass"], [1, "field-radiobutton"], ["name", "menuMode", "value", "static", "inputId", "mode1", 3, "ngModel", "ngModelChange"], ["for", "mode1"], ["name", "menuMode", "value", "overlay", "inputId", "mode2", 3, "ngModel", "ngModelChange"], ["for", "mode2"], [1, "flex"], [1, "field-radiobutton", "flex-1"], ["name", "inputStyle", "value", "outlined", "inputId", "outlined_input", 3, "ngModel", "ngModelChange"], ["for", "outlined_input"], ["name", "inputStyle", "value", "filled", "inputId", "filled_input", 3, "ngModel", "ngModelChange"], ["for", "filled_input"], [3, "ngModel", "ngModelChange"]],
  template: function AppConfigComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_0_listener() {
        return ctx.onConfigButtonClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p-sidebar", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("visibleChange", function AppConfigComponent_Template_p_sidebar_visibleChange_2_listener($event) {
        return ctx.visible = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Scale");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3)(6, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_6_listener() {
        return ctx.decrementScale();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AppConfigComponent_i_8_Template, 1, 3, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_9_listener() {
        return ctx.incrementScale();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, AppConfigComponent_ng_container_10_Template, 11, 2, "ng-container", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, AppConfigComponent_ng_container_11_Template, 15, 3, "ng-container", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Themes");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9)(15, "div", 10)(16, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_16_listener() {
        return ctx.changeTheme("bootstrap4-light-blue", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 10)(19, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_19_listener() {
        return ctx.changeTheme("bootstrap4-light-purple", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "img", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 10)(22, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_22_listener() {
        return ctx.changeTheme("bootstrap4-dark-blue", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "img", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 10)(25, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_25_listener() {
        return ctx.changeTheme("bootstrap4-dark-purple", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "img", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 9)(28, "div", 10)(29, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_29_listener() {
        return ctx.changeTheme("md-light-indigo", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 10)(32, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_32_listener() {
        return ctx.changeTheme("md-light-deeppurple", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "img", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 10)(35, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_35_listener() {
        return ctx.changeTheme("md-dark-indigo", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 10)(38, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_38_listener() {
        return ctx.changeTheme("md-dark-deeppurple", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 9)(41, "div", 10)(42, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_42_listener() {
        return ctx.changeTheme("mdc-light-indigo", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 10)(45, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_45_listener() {
        return ctx.changeTheme("mdc-light-deeppurple", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 10)(48, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_48_listener() {
        return ctx.changeTheme("mdc-dark-indigo", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 10)(51, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_51_listener() {
        return ctx.changeTheme("mdc-dark-deeppurple", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "img", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 9)(54, "div", 10)(55, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_55_listener() {
        return ctx.changeTheme("tailwind-light", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "img", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 10)(58, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_58_listener() {
        return ctx.changeTheme("fluent-light", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "img", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 10)(61, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_61_listener() {
        return ctx.changeTheme("lara-light-indigo", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "img", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 10)(64, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_64_listener() {
        return ctx.changeTheme("lara-light-blue", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "img", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 10)(67, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_67_listener() {
        return ctx.changeTheme("lara-light-purple", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "img", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 10)(70, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_70_listener() {
        return ctx.changeTheme("lara-light-teal", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "img", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 10)(73, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_73_listener() {
        return ctx.changeTheme("lara-dark-indigo", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "img", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 10)(76, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_76_listener() {
        return ctx.changeTheme("lara-dark-blue", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](77, "img", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 10)(79, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_79_listener() {
        return ctx.changeTheme("lara-dark-purple", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](80, "img", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 10)(82, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_82_listener() {
        return ctx.changeTheme("lara-dark-teal", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "img", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 10)(85, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_85_listener() {
        return ctx.changeTheme("saga-blue", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](86, "img", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 10)(88, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_88_listener() {
        return ctx.changeTheme("saga-green", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](89, "img", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 10)(91, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_91_listener() {
        return ctx.changeTheme("saga-orange", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](92, "img", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 10)(94, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_94_listener() {
        return ctx.changeTheme("saga-purple", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](95, "img", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 10)(97, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_97_listener() {
        return ctx.changeTheme("vela-blue", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](98, "img", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div", 10)(100, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_100_listener() {
        return ctx.changeTheme("vela-green", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](101, "img", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "div", 10)(103, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_103_listener() {
        return ctx.changeTheme("vela-orange", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](104, "img", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "div", 10)(106, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_106_listener() {
        return ctx.changeTheme("vela-purple", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](107, "img", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "div", 10)(109, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_109_listener() {
        return ctx.changeTheme("arya-blue", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](110, "img", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "div", 10)(112, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_112_listener() {
        return ctx.changeTheme("arya-green", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](113, "img", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "div", 10)(115, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_115_listener() {
        return ctx.changeTheme("arya-orange", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](116, "img", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "div", 10)(118, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_118_listener() {
        return ctx.changeTheme("arya-purple", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](119, "img", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", ctx.visible)("transitionOptions", ".3s cubic-bezier(0, 0, 0.2, 1)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.scale === ctx.scales[0]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.scales);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.scale === ctx.scales[ctx.scales.length - 1]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.minimal);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.minimal);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, primeng_sidebar__WEBPACK_IMPORTED_MODULE_5__.Sidebar, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_6__.RadioButton, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_8__.InputSwitch],
  encapsulation: 2
});

/***/ }),

/***/ 3981:
/*!************************************************!*\
  !*** ./src/app/layout/config/config.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppConfigModule": () => (/* binding */ AppConfigModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/sidebar */ 4179);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/radiobutton */ 9902);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputswitch */ 3585);
/* harmony import */ var _app_config_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.config.component */ 8716);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);








class AppConfigModule {}
AppConfigModule.ɵfac = function AppConfigModule_Factory(t) {
  return new (t || AppConfigModule)();
};
AppConfigModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: AppConfigModule
});
AppConfigModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_4__.SidebarModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_5__.RadioButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_7__.InputSwitchModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppConfigModule, {
    declarations: [_app_config_component__WEBPACK_IMPORTED_MODULE_0__.AppConfigComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_4__.SidebarModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_5__.RadioButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_7__.InputSwitchModule],
    exports: [_app_config_component__WEBPACK_IMPORTED_MODULE_0__.AppConfigComponent]
  });
})();

/***/ }),

/***/ 6580:
/*!*****************************************************!*\
  !*** ./src/app/layout/main.app.layout.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainAppLayoutComponent": () => (/* binding */ MainAppLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var _components_app_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/app.sidebar.component */ 9802);
/* harmony import */ var _components_app_topbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/app.topbar.component */ 4083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/app.layout.service */ 1758);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _config_app_config_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/app.config.component */ 8716);
/* harmony import */ var _components_app_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/app.footer.component */ 6343);












class MainAppLayoutComponent {
  constructor(layoutService, renderer, router) {
    this.layoutService = layoutService;
    this.renderer = renderer;
    this.router = router;
    this.overlayMenuOpenSubscription = this.layoutService.overlayOpen$.subscribe(() => {
      if (!this.menuOutsideClickListener) {
        this.menuOutsideClickListener = this.renderer.listen('document', 'click', event => {
          const isOutsideClicked = !(this.appSidebar.el.nativeElement.isSameNode(event.target) || this.appSidebar.el.nativeElement.contains(event.target) || this.appTopbar.menuButton.nativeElement.isSameNode(event.target) || this.appTopbar.menuButton.nativeElement.contains(event.target));
          if (isOutsideClicked) {
            this.hideMenu();
          }
        });
      }
      if (!this.profileMenuOutsideClickListener) {
        this.profileMenuOutsideClickListener = this.renderer.listen('document', 'click', event => {
          const isOutsideClicked = !(this.appTopbar.menu.nativeElement.isSameNode(event.target) || this.appTopbar.menu.nativeElement.contains(event.target) || this.appTopbar.topbarMenuButton.nativeElement.isSameNode(event.target) || this.appTopbar.topbarMenuButton.nativeElement.contains(event.target));
          if (isOutsideClicked) {
            this.hideProfileMenu();
          }
        });
      }
      if (this.layoutService.state.staticMenuMobileActive) {
        this.blockBodyScroll();
      }
    });
    this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd)).subscribe(() => {
      this.hideMenu();
      this.hideProfileMenu();
    });
  }
  hideMenu() {
    this.layoutService.state.overlayMenuActive = false;
    this.layoutService.state.staticMenuMobileActive = false;
    this.layoutService.state.menuHoverActive = false;
    if (this.menuOutsideClickListener) {
      this.menuOutsideClickListener();
      this.menuOutsideClickListener = null;
    }
    this.unblockBodyScroll();
  }
  hideProfileMenu() {
    this.layoutService.state.profileSidebarVisible = false;
    if (this.profileMenuOutsideClickListener) {
      this.profileMenuOutsideClickListener();
      this.profileMenuOutsideClickListener = null;
    }
  }
  blockBodyScroll() {
    if (document.body.classList) {
      document.body.classList.add('blocked-scroll');
    } else {
      document.body.className += ' blocked-scroll';
    }
  }
  unblockBodyScroll() {
    if (document.body.classList) {
      document.body.classList.remove('blocked-scroll');
    } else {
      document.body.className = document.body.className.replace(new RegExp('(^|\\b)' + 'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  }
  get containerClass() {
    return {
      'layout-theme-light': this.layoutService.config.colorScheme === 'light',
      'layout-theme-dark': this.layoutService.config.colorScheme === 'dark',
      'layout-overlay': this.layoutService.config.menuMode === 'overlay',
      'layout-static': this.layoutService.config.menuMode === 'static',
      'layout-static-inactive': this.layoutService.state.staticMenuDesktopInactive && this.layoutService.config.menuMode === 'static',
      'layout-overlay-active': this.layoutService.state.overlayMenuActive,
      'layout-mobile-active': this.layoutService.state.staticMenuMobileActive,
      'p-input-filled': this.layoutService.config.inputStyle === 'filled',
      'p-ripple-disabled': !this.layoutService.config.ripple
    };
  }
  ngOnDestroy() {
    if (this.overlayMenuOpenSubscription) {
      this.overlayMenuOpenSubscription.unsubscribe();
    }
    if (this.menuOutsideClickListener) {
      this.menuOutsideClickListener();
    }
  }
}
MainAppLayoutComponent.ɵfac = function MainAppLayoutComponent_Factory(t) {
  return new (t || MainAppLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_app_layout_service__WEBPACK_IMPORTED_MODULE_2__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
};
MainAppLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: MainAppLayoutComponent,
  selectors: [["app-layout"]],
  viewQuery: function MainAppLayoutComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_components_app_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.AppSidebarComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_components_app_topbar_component__WEBPACK_IMPORTED_MODULE_1__.AppTopBarComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.appSidebar = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.appTopbar = _t.first);
    }
  },
  decls: 11,
  vars: 1,
  consts: [[1, "layout-wrapper", 3, "ngClass"], [1, "layout-wrapper"], [1, "layout-sidebar"], [1, "layout-main-container"], [1, "layout-main"], [1, "layout-mask"]],
  template: function MainAppLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-topbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "app-sidebar");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 3)(6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "app-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "app-config")(10, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.containerClass);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _config_app_config_component__WEBPACK_IMPORTED_MODULE_3__.AppConfigComponent, _components_app_topbar_component__WEBPACK_IMPORTED_MODULE_1__.AppTopBarComponent, _components_app_footer_component__WEBPACK_IMPORTED_MODULE_4__.AppFooterComponent, _components_app_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.AppSidebarComponent],
  encapsulation: 2
});

/***/ }),

/***/ 3693:
/*!**************************************************!*\
  !*** ./src/app/layout/main.app.layout.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainAppLayoutModule": () => (/* binding */ MainAppLayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/sidebar */ 4179);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/badge */ 2381);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/radiobutton */ 9902);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputswitch */ 3585);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/ripple */ 4538);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _config_config_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/config.module */ 3981);
/* harmony import */ var _main_app_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.app.layout.component */ 6580);
/* harmony import */ var _components_app_menuitem_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/app.menuitem.component */ 2853);
/* harmony import */ var _components_app_topbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/app.topbar.component */ 4083);
/* harmony import */ var _components_app_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/app.footer.component */ 6343);
/* harmony import */ var _components_app_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/app.menu.component */ 8372);
/* harmony import */ var _components_app_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/app.sidebar.component */ 9802);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @azure/msal-angular */ 4084);
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @azure/msal-browser */ 9790);
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @azure/msal-browser */ 3105);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);



















// import { OverlayModule } from 'primeng/overlay';





const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
class MainAppLayoutModule {}
MainAppLayoutModule.ɵfac = function MainAppLayoutModule_Factory(t) {
  return new (t || MainAppLayoutModule)();
};
MainAppLayoutModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: MainAppLayoutModule
});
MainAppLayoutModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__.InputTextModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_13__.SidebarModule, primeng_badge__WEBPACK_IMPORTED_MODULE_14__.BadgeModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_15__.RadioButtonModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_16__.InputSwitchModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_17__.RippleModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule, _config_config_module__WEBPACK_IMPORTED_MODULE_0__.AppConfigModule, primeng_button__WEBPACK_IMPORTED_MODULE_19__.ButtonModule,
  // OverlayModule,
  primeng_dropdown__WEBPACK_IMPORTED_MODULE_20__.DropdownModule, _azure_msal_angular__WEBPACK_IMPORTED_MODULE_21__.MsalModule.forRoot(new _azure_msal_browser__WEBPACK_IMPORTED_MODULE_22__.PublicClientApplication({
    auth: {
      clientId: 'a08bafed-c04f-403e-bd0e-3029926ee183',
      authority: 'https://login.microsoftonline.com/common/',
      redirectUri: 'http://localhost:4200/' // This is your redirect URI
    },

    cache: {
      cacheLocation: 'localStorage',
      storeAuthStateInCookie: isIE // Set to true for Internet Explorer 11
    }
  }), {
    interactionType: _azure_msal_browser__WEBPACK_IMPORTED_MODULE_23__.InteractionType.Popup,
    authRequest: {
      scopes: ["user.read"]
    }
  }, null)]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](MainAppLayoutModule, {
    declarations: [_components_app_menuitem_component__WEBPACK_IMPORTED_MODULE_2__.AppMenuitemComponent, _components_app_topbar_component__WEBPACK_IMPORTED_MODULE_3__.AppTopBarComponent, _components_app_footer_component__WEBPACK_IMPORTED_MODULE_4__.AppFooterComponent, _components_app_menu_component__WEBPACK_IMPORTED_MODULE_5__.AppMenuComponent, _components_app_sidebar_component__WEBPACK_IMPORTED_MODULE_6__.AppSidebarComponent, _main_app_layout_component__WEBPACK_IMPORTED_MODULE_1__.MainAppLayoutComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__.InputTextModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_13__.SidebarModule, primeng_badge__WEBPACK_IMPORTED_MODULE_14__.BadgeModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_15__.RadioButtonModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_16__.InputSwitchModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_17__.RippleModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule, _config_config_module__WEBPACK_IMPORTED_MODULE_0__.AppConfigModule, primeng_button__WEBPACK_IMPORTED_MODULE_19__.ButtonModule,
    // OverlayModule,
    primeng_dropdown__WEBPACK_IMPORTED_MODULE_20__.DropdownModule, _azure_msal_angular__WEBPACK_IMPORTED_MODULE_21__.MsalModule],
    exports: [_main_app_layout_component__WEBPACK_IMPORTED_MODULE_1__.MainAppLayoutComponent]
  });
})();

/***/ }),

/***/ 1758:
/*!******************************************************!*\
  !*** ./src/app/layout/service/app.layout.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutService": () => (/* binding */ LayoutService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class LayoutService {
  constructor() {
    this.config = {
      ripple: true,
      inputStyle: 'outlined',
      menuMode: 'static',
      colorScheme: 'light',
      theme: 'lara-light-indigo',
      scale: 14
    };
    this.state = {
      staticMenuDesktopInactive: false,
      overlayMenuActive: false,
      profileSidebarVisible: false,
      configSidebarVisible: false,
      staticMenuMobileActive: false,
      menuHoverActive: false
    };
    this.configUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.overlayOpen = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.configUpdate$ = this.configUpdate.asObservable();
    this.overlayOpen$ = this.overlayOpen.asObservable();
  }
  onMenuToggle() {
    if (this.isOverlay()) {
      this.state.overlayMenuActive = !this.state.overlayMenuActive;
      if (this.state.overlayMenuActive) {
        this.overlayOpen.next(null);
      }
    }
    if (this.isDesktop()) {
      this.state.staticMenuDesktopInactive = !this.state.staticMenuDesktopInactive;
    } else {
      this.state.staticMenuMobileActive = !this.state.staticMenuMobileActive;
      if (this.state.staticMenuMobileActive) {
        this.overlayOpen.next(null);
      }
    }
  }
  showProfileSidebar() {
    this.state.profileSidebarVisible = !this.state.profileSidebarVisible;
    if (this.state.profileSidebarVisible) {
      this.overlayOpen.next(null);
    }
  }
  showConfigSidebar() {
    this.state.configSidebarVisible = true;
  }
  isOverlay() {
    return this.config.menuMode === 'overlay';
  }
  isDesktop() {
    return window.innerWidth > 991;
  }
  isMobile() {
    return !this.isDesktop();
  }
  onConfigUpdate() {
    this.configUpdate.next(this.config);
  }
}
LayoutService.ɵfac = function LayoutService_Factory(t) {
  return new (t || LayoutService)();
};
LayoutService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: LayoutService,
  factory: LayoutService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3084:
/*!****************************************************!*\
  !*** ./src/app/layout/service/app.menu.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuService": () => (/* binding */ MenuService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class MenuService {
  constructor() {
    this.menuSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.resetSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.menuSource$ = this.menuSource.asObservable();
    this.resetSource$ = this.resetSource.asObservable();
  }
  onMenuStateChange(event) {
    this.menuSource.next(event);
  }
  reset() {
    this.resetSource.next(true);
  }
}
MenuService.ɵfac = function MenuService_Factory(t) {
  return new (t || MenuService)();
};
MenuService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: MenuService,
  factory: MenuService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8835:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 23);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8835)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map