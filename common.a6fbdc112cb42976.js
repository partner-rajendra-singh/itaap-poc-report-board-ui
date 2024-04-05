"use strict";(self.webpackChunkitaap_ms_manager=self.webpackChunkitaap_ms_manager||[]).push([[592],{5340:(E,p,o)=>{o.d(p,{e:()=>l});var t=o(8256),h=o(529),d=o(2543);class l{constructor(e,c){this.httpClient=e,this.constants=c}addUser(e){return this.httpClient.post(this.constants.hostname+"create/user",e,this.constants.headerOptions)}addMicroservice(e){return this.httpClient.post(this.constants.hostname+"create/microservice",e,this.constants.headerOptions)}addDeploymentDocuments(e){return this.httpClient.post(this.constants.hostname+"update/documents",e,this.constants.headerOptions)}fetchAllTechLeads(){return this.httpClient.get(this.constants.hostname+"fetch/tech-leads",this.constants.headerOptions)}fetchAllDevelopers(){return this.httpClient.get(this.constants.hostname+"fetch/developers",this.constants.headerOptions)}fetchAllScrumMasters(){return this.httpClient.get(this.constants.hostname+"fetch/scrum-masters",this.constants.headerOptions)}fetchAllClients(){return this.httpClient.get(this.constants.hostname+"fetch/clients",this.constants.headerOptions)}}l.\u0275fac=function(e){return new(e||l)(t.LFG(h.eN),t.LFG(d.g))},l.\u0275prov=t.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"})},7656:(E,p,o)=>{o.d(p,{L:()=>c});var t=o(574),h=o(4327),l=o(8256),_=o(529),e=o(2543);class c{constructor(n,s){this.httpClient=n,this.constants=s}readExcel(n,s){this.httpClient.get(n,{responseType:"blob"}).subscribe(i=>{const r=new FileReader;r.readAsBinaryString(i),r.onload=a=>{const m=t.read(a.target.result,{type:"binary"}),C=t.utils.sheet_to_json(m.Sheets[m.SheetNames[0]]);this.replaceData(C,s)}})}replaceData(n,s){this.replaceScripts(n,s).subscribe(i=>{console.log(i),this.writeExcel(i,s)},i=>{console.log(i)})}writeExcel(n,s){Promise.resolve().then(o.bind(o,574)).then(i=>{console.log(n);const a={Sheets:{data:i.utils.json_to_sheet(n)},SheetNames:["data"]},g=i.write(a,{bookType:"xlsx",type:"array"});this.saveAsExcelFile(g,s.MICROSERVICE_NAME+"_"+s.TYPE)})}saveAsExcelFile(n,s){const a=new Blob([n],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});h.saveAs(a,s+".xlsx")}getBuildFolders(){return this.httpClient.get(this.constants.hostname+"build/folders?organization="+this.constants.org,this.constants.headerOptions)}getRunsFromPipelineID(n){return this.httpClient.get(this.constants.hostname+"pipeline/runs?organization="+this.constants.org+"&pipelineID="+n,this.constants.headerOptions)}getTimelineFromBuildID(n,s){return this.httpClient.get(this.constants.hostname+"build/timeline?organization="+this.constants.org+"&buildID="+n+"&buildNumber="+s,this.constants.headerOptions)}getPipelineDetails(n){return this.httpClient.get(this.constants.azureHostname+"pipelines/"+n,this.constants.azureHeaderOptions)}addMicroserviceInDB(n,s){return this.httpClient.post(this.constants.hostname+"update/database/microservice?organization="+this.constants.org+"&pipelineID="+s,n,this.constants.headerOptions)}replaceScripts(n,s){return this.httpClient.post(this.constants.hostname+"replace/scripts?MICROSERVICE_CD_NAME="+s.MICROSERVICE_CD_NAME+"&MICROSERVICE_NAME="+s.MICROSERVICE_NAME+"&BUILD_NUMBER="+s.BUILD_NUMBER+"&PLATFORM_NAME="+s.PLATFORM_NAME,n,this.constants.headerOptions)}}c.\u0275fac=function(n){return new(n||c)(l.LFG(_.eN),l.LFG(e.g))},c.\u0275prov=l.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})},9219:(E,p,o)=>{o.d(p,{f:()=>s});var t=o(8256),h=o(7901),d=o(805),l=o(6125),_=o(3930),e=o(6895);function c(i,r){if(1&i&&(t.TgZ(0,"tr")(1,"th"),t._uU(2,"Host"),t.qZA(),t.TgZ(3,"th"),t._uU(4,"Port"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Triggered By"),t.qZA(),t.TgZ(7,"th",8),t._uU(8,"Triggered At "),t._UZ(9,"p-sortIcon",9),t.qZA(),t.TgZ(10,"th"),t._uU(11,"Status"),t.qZA()()),2&i){const a=t.oxw();t.xp6(7),t.Q6J("pSortableColumn",a.sortField),t.xp6(2),t.Q6J("field",a.sortField)}}function u(i,r){if(1&i&&(t.TgZ(0,"tr",10)(1,"td")(2,"div",11),t._uU(3),t.qZA()(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.ALo(10,"date"),t.qZA(),t.TgZ(11,"td")(12,"span"),t._uU(13),t.qZA()()()),2&i){const a=r.$implicit;t.Q6J("pSelectableRow",a),t.xp6(3),t.Oqu(a.host),t.xp6(2),t.Oqu(a.port),t.xp6(2),t.Oqu(a.triggeredByUser.name),t.xp6(2),t.Oqu(t.xi3(10,8,a.triggeredAt,"MMM dd, yyyy h:mm a")),t.xp6(3),t.Tol("connect-badge status-"+a.status),t.xp6(1),t.Oqu(a.status)}}const n=function(){return{height:"calc(100vh - 34rem)","min-height":"200px"}};class s{constructor(r){this.connectivityService=r,this.display=!1,this.sortField="port",this.selectedRow=new t.vpe}ngOnInit(){this.getAllHistory()}onRowSelect(r){this.showResults(r.data.id)}getAllHistory(){this.connectivityService.getAllHistory().subscribe(r=>{this.history=r,console.log(this.history)})}showResults(r){this.display=!this.display,console.log(r),this.getHistoryById(r)}getHistoryById(r){this.connectivityService.getHistoryById(r).subscribe(a=>{this.selectedRow.emit(a),this.viewResults=a,console.log(this.viewResults)})}}s.\u0275fac=function(r){return new(r||s)(t.Y36(h.l))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-connectivity-history"]],outputs:{selectedRow:"selectedRow"},decls:11,vars:4,consts:[[1,"grid"],[1,"col-12","pb-0"],[1,"card"],[3,"click"],[1,"p-link","pi","pi-refresh"],["selectionMode","single",3,"value","onRowSelect"],["pTemplate","header"],["pTemplate","body"],[3,"pSortableColumn"],[3,"field"],[3,"pSelectableRow"],[1,"textOverflow"]],template:function(r,a){1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5"),t._uU(4,"History "),t.TgZ(5,"label",3),t.NdJ("click",function(){return a.getAllHistory()}),t._UZ(6,"i",4),t.qZA()(),t.TgZ(7,"p-scrollPanel")(8,"p-table",5),t.NdJ("onRowSelect",function(m){return a.onRowSelect(m)}),t.YNc(9,c,12,2,"ng-template",6),t.YNc(10,u,14,11,"ng-template",7),t.qZA()()()()()),2&r&&(t.xp6(7),t.Akn(t.DdM(3,n)),t.xp6(1),t.Q6J("value",a.history))},dependencies:[d.jx,l.iA,l.lQ,l.Ei,l.fz,_.P,e.uU],encapsulation:2})},7901:(E,p,o)=>{o.d(p,{l:()=>l});var t=o(8256),h=o(529),d=o(2543);class l{constructor(e,c){this.http=e,this.constants=c}testConnection(e){let c=sessionStorage.getItem("loggedInUserDetails");const u=JSON.parse(c).id;return this.http.post(this.constants.hostname+"connectivity-check/?userID="+u,e,this.constants.headerOptions)}getAllHistory(){return this.http.get(this.constants.hostname+"connectivity-check/history",this.constants.headerOptions)}getHistoryById(e){return this.http.get(this.constants.hostname+"connectivity-check/history/"+e,this.constants.headerOptions)}}l.\u0275fac=function(e){return new(e||l)(t.LFG(h.eN),t.LFG(d.g))},l.\u0275prov=t.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"})}}]);