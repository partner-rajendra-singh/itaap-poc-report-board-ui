"use strict";(self.webpackChunkitaap_ms_manager=self.webpackChunkitaap_ms_manager||[]).push([[200],{3200:(A,g,i)=>{i.r(g),i.d(g,{AdminRoutingModule:()=>p});var u=i(2386),d=i(805),e=i(8256),l=i(6646),_=i(6895),n=i(433),r=i(4247),f=i(5593),y=i(1989),v=i(6125),x=i(2453);function b(a,s){if(1&a){const t=e.EpF();e.TgZ(0,"div",6)(1,"div",7),e._UZ(2,"i",8),e.TgZ(3,"h4"),e._uU(4),e.qZA(),e.TgZ(5,"p"),e._uU(6),e.qZA()(),e.TgZ(7,"div",9)(8,"div",10)(9,"button",11),e.NdJ("click",function(){e.CHM(t);const c=e.oxw();return e.KtG(c.onRetry())}),e.qZA()()()()}if(2&a){const t=s.$implicit;e.xp6(4),e.Oqu(t.summary),e.xp6(2),e.Oqu(t.detail)}}function q(a,s){1&a&&(e.TgZ(0,"tr")(1,"th",18),e._UZ(2,"p-tableHeaderCheckbox"),e.qZA(),e.TgZ(3,"th",19),e._uU(4,"Name "),e._UZ(5,"p-columnFilter",20),e.qZA(),e.TgZ(6,"th",21),e._uU(7,"Value"),e.qZA(),e.TgZ(8,"th",22),e._uU(9,"Secret"),e.qZA()())}function Z(a,s){if(1&a&&(e.TgZ(0,"tr")(1,"td"),e._UZ(2,"p-tableCheckbox",23),e.qZA(),e.TgZ(3,"td",24),e._uU(4),e.qZA(),e.TgZ(5,"td",24,25),e._uU(7),e.qZA(),e.TgZ(8,"td"),e._UZ(9,"p-checkbox",26),e.qZA()()),2&a){const t=s.$implicit,o=e.oxw(2);e.xp6(2),e.Q6J("value",t),e.xp6(2),e.Oqu(t.key),e.xp6(3),e.Oqu(t.value),e.xp6(2),e.Q6J("binary",!0)("ngModel",o.fetchValues(t,"secret"))("disabled",!0)}}const C=function(){return{"margin-left":".5em"}};function R(a,s){if(1&a){const t=e.EpF();e.TgZ(0,"div",27)(1,"div")(2,"p-button",28),e.NdJ("click",function(){e.CHM(t);const c=e.oxw().$implicit,h=e.oxw();return e.KtG(h.approveRequest(c))}),e.qZA(),e.TgZ(3,"p-button",29),e.NdJ("click",function(){e.CHM(t);const c=e.oxw().$implicit,h=e.oxw();return e.KtG(h.rejectRequest(c))}),e.qZA()(),e.TgZ(4,"div",30)(5,"p"),e._uU(6),e.qZA()()()}if(2&a){const t=e.oxw().$implicit;e.xp6(3),e.Akn(e.DdM(3,C)),e.xp6(3),e.Oqu(t.requestDate)}}const T=function(){return{width:"1510px"}},z=function(){return{"table-layout":"fixed","min-width":"75rem"}},S=function(){return["key"]};function O(a,s){if(1&a){const t=e.EpF();e.TgZ(0,"div")(1,"p-card",12)(2,"div")(3,"p-table",13,14),e.NdJ("selectionChange",function(c){e.CHM(t);const h=e.oxw();return e.KtG(h.selectedVariables=c)}),e.YNc(5,q,10,0,"ng-template",15),e.YNc(6,Z,10,6,"ng-template",16),e.qZA()(),e.YNc(7,R,7,4,"ng-template",17),e.qZA(),e._UZ(8,"br"),e.qZA()}if(2&a){const t=s.$implicit,o=e.oxw();e.xp6(1),e.Akn(e.DdM(10,T)),e.Q6J("header",t.requester)("subheader",t.azureGroupName),e.xp6(2),e.Q6J("value",t.modifiedVariables)("selection",o.selectedVariables)("rowHover",!0)("scrollable",!0)("tableStyle",e.DdM(11,z))("globalFilterFields",e.DdM(12,S))}}class m{constructor(s,t){this.azureService=s,this.messageService=t,this.modifiedVariables=[],this.allRequests=[],this.approver="Pankajkumar Patel",this.base64regex=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/}ngOnInit(){this.getRequests()}getRequests(){this.azureService.getRequests(this.approver).subscribe(s=>{console.log("response : "+s),this.handleSuccessfulResponse(s),this.messageService.add({key:"success",severity:"success",summary:"Success",detail:"Successfully Fetched "+this.allRequests.length+" Requests"})},s=>{console.log("error : "+s),this.httpError=s,this.messageService.add({key:"retry",severity:"error",sticky:!0,summary:s.statusText,detail:s.message})})}onRetry(){this.getRequests(),this.messageService.clear("retry")}handleSuccessfulResponse(s){if(this.allRequests=s,s.length>0){this.allRequests=s;for(let t=0;t<this.allRequests.length;t++)this.allRequests[t].modifiedVariables=JSON.parse(this.allRequests[t].modifiedVariables),this.allRequests[t].updatedAllVariables=JSON.parse(this.allRequests[t].updatedAllVariables);console.log(this.modifiedVariables)}}toggleEncryptedVariable(s,t,o){o.secret&&o.encrypted&&(this.base64regex.test(t.textContent)?(s.currentTarget.children[0].classList.value="p-button-icon pi pi-eye-slash",t.textContent=atob(t.textContent)):(s.currentTarget.children[0].classList.value="p-button-icon pi pi-eye",t.textContent=btoa(t.textContent)))}fetchValues(s,t){return s[t]}approveRequest(s){this.azureService.approveRequest(s).subscribe(t=>{this.messageService.add({key:"success",severity:"success",summary:"Success",detail:"Successfully approved request"}),this.getRequests()},t=>{console.log("error : "+t),this.httpError=t,this.messageService.add({key:"retry",severity:"error",sticky:!0,summary:t.statusText,detail:t.message})})}rejectRequest(s){this.azureService.rejectRequest(s).subscribe(t=>{this.messageService.add({key:"success",severity:"success",summary:"Success",detail:"Successfully rejected request"}),this.getRequests()},t=>{console.log("error : "+t),this.httpError=t,this.messageService.add({key:"retry",severity:"error",sticky:!0,summary:t.statusText,detail:t.message})})}}m.\u0275fac=function(s){return new(s||m)(e.Y36(l.z),e.Y36(d.ez))},m.\u0275cmp=e.Xpm({type:m,selectors:[["app-azure-admin"]],features:[e._Bn([d.ez])],decls:12,vars:2,consts:[["key","success"],["key","retry"],["pTemplate","message"],[1,"text-900","font-medium","text-3xl","textOverflow"],[4,"ngFor","ngForOf"],[1,"block","text-500","font-medium","text-xl","mb-3"],[1,"flex","flex-column",2,"flex","1"],[1,"text-center"],[1,"pi","pi-exclamation-triangle",2,"font-size","3rem"],[1,"grid","p-fluid"],[1,"col-12"],["type","button","icon","pi pi-refresh","pButton","","label","Retry",1,"p-button-danger",3,"click"],["styleClass","p-card-shadow",3,"header","subheader"],["scrollHeight","45vh","styleClass","p-datatable-sm",3,"value","selection","rowHover","scrollable","tableStyle","globalFilterFields","selectionChange"],["dt",""],["pTemplate","header"],["pTemplate","body"],["pTemplate","footer"],[2,"width","5%"],[2,"width","40%"],["type","text","field","key","display","menu"],[2,"width","70%"],[2,"width","20%"],[3,"value"],[1,"textOverflow"],["variableValue",""],[3,"binary","ngModel","disabled"],[1,"flex"],["label","Approve","icon","pi pi-check",3,"click"],["label","Reject","icon","pi pi-times","styleClass","p-button-secondary",3,"click"],[1,"ml-auto"]],template:function(s,t){1&s&&(e._UZ(0,"p-toast")(1,"p-toast",0),e.TgZ(2,"p-toast",1),e.YNc(3,b,10,2,"ng-template",2),e.qZA(),e.TgZ(4,"div",3),e._uU(5,"Azure Admin Portal"),e.qZA(),e._UZ(6,"br")(7,"br"),e.YNc(8,O,9,13,"div",4),e.TgZ(9,"div")(10,"span",5),e._uU(11),e.qZA()()),2&s&&(e.xp6(8),e.Q6J("ngForOf",t.allRequests),e.xp6(3),e.Oqu(0===t.allRequests.length?"No Requests Found.":""))},dependencies:[_.sg,n.JJ,n.On,r.Z,d.jx,f.Hq,f.zx,y.XZ,v.iA,v.UA,v.Mo,v.xl,x.FN],encapsulation:2});const k=[{path:"",component:m}];class p{}p.\u0275fac=function(s){return new(s||p)},p.\u0275mod=e.oAB({type:p}),p.\u0275inj=e.cJS({imports:[u.Bz.forChild(k),u.Bz]})},6646:(A,g,i)=>{i.d(g,{z:()=>l});var u=i(8256),d=i(529),e=i(2543);class l{constructor(n,r){this.httpClient=n,this.constants=r}getVariableGroups(){return this.httpClient.get(this.constants.hostname+"getAllVariableGroups?organization="+this.constants.org+"&api-version="+this.constants.apiV,this.constants.headerOptions)}fetchVariablesFromGroup(n){let r=this.constants.hostname+"getVariableUsingGroupName?groupName="+n+"&organization="+this.constants.org+"&api-version="+this.constants.apiV;return console.log("url : "+r),this.httpClient.get(r,this.constants.headerOptions)}sendVarGrpForApproval(n){return this.httpClient.post(this.constants.hostname+"routeToApproval",n,this.constants.headerOptions)}getRequests(n){return this.httpClient.get(this.constants.hostname+"fetchRequests/"+n,this.constants.headerOptions)}approveRequest(n){return this.httpClient.post(this.constants.hostname+"approveRequest",n,this.constants.headerOptions)}rejectRequest(n){return this.httpClient.post(this.constants.hostname+"rejectRequest",n,this.constants.headerOptions)}getTasksAssignedToSelf(n){return this.httpClient.get(this.constants.hostname+"user/tasks/userId?userId="+n,this.constants.headerOptions)}getMyRequests(n){return this.httpClient.get(this.constants.hostname+"my-requests/"+n,this.constants.headerOptions)}}l.\u0275fac=function(n){return new(n||l)(u.LFG(d.eN),u.LFG(e.g))},l.\u0275prov=u.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"})}}]);