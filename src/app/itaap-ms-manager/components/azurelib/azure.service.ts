import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from '../../service/constants';

export interface VariableValues {
  name: string,
  secrets: number,
  variableValues: Variable[];
}

export interface Variable {
  index: number;
  key: string;
  value: string;
  secret: boolean;
  encrypted: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AzureService {

  constructor(private httpClient: HttpClient, private constants: Constants) { }

  getVariableGroups() {
    let url = this.constants.hostname + 'getAllVariableGroups?organization=' + this.constants.org + '&api-version=' + this.constants.apiV;
    return this.httpClient
      .get<any>(url, this.constants.headerOptions);
  }

  fetchVariablesFromGroup(groupName: string) {
    let url = this.constants.hostname + 'getVariableUsingGroupName?groupName=' + groupName + '&organization=' + this.constants.org + '&api-version=' + this.constants.apiV;
    console.log("url : " + url);
    return this.httpClient.get<VariableValues>(url, this.constants.headerOptions);
  }

  sendVarGrpForApproval(request: VariableValues) {
    let url = this.constants.hostname + 'routeToApproval';
    return this.httpClient.post<any>(url, request, this.constants.headerOptions);

  }

  getRequests(approver: any) {
    let url = this.constants.hostname + 'fetchRequests' + "/" + approver;
    return this.httpClient.get(url, this.constants.headerOptions);
  }

  approveRequest(request: any) {
    let url = this.constants.hostname + 'approveRequest';
    return this.httpClient.post(url, request, this.constants.headerOptions);
  }

  rejectRequest(request: any) {
    let url = this.constants.hostname + 'rejectRequest';
    return this.httpClient.post(url, request, this.constants.headerOptions);
  }

  getTasksAssignedToSelf(userId: number) {
    let url = this.constants.hostname + 'user/tasks/userId?userId=' + userId;
    return this.httpClient.get<any>(url, this.constants.headerOptions);
  }

  getMyRequests(requester: any) {
    let url = this.constants.hostname + 'my-requests' + "/" + requester;
    return this.httpClient.get(url, this.constants.headerOptions);
  }

}
