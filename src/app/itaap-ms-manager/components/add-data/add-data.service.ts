import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccProd, Microservices, Users } from '../../api/models';
import { Constants } from '../../service/constants';

@Injectable({
  providedIn: 'root'
})
export class AddDataService {

  constructor(private httpClient: HttpClient, private constants: Constants) { }

  addUser(request: Users) {
    let url = this.constants.hostname + 'create/user';
    return this.httpClient.post<Users>(url, request, this.constants.headerOptions);
  }
  addMicroservice(request: Microservices) {
    let url = this.constants.hostname + 'create/microservice';
    return this.httpClient.post<Microservices>(url, request, this.constants.headerOptions);
  }
  addDeploymentDocuments(request: AccProd) {
    let url = this.constants.hostname + 'update/documents';
    return this.httpClient.post<AccProd>(url, request, this.constants.headerOptions);
  }

  fetchAllTechLeads() {
    let url = this.constants.hostname + 'fetch/tech-leads';
    return this.httpClient.get<Users[]>(url, this.constants.headerOptions);
  }
  fetchAllDevelopers() {
    let url = this.constants.hostname + 'fetch/developers';
    return this.httpClient.get<Users[]>(url, this.constants.headerOptions);
  }
  fetchAllScrumMasters() {
    let url = this.constants.hostname + 'fetch/scrum-masters';
    return this.httpClient.get<Users[]>(url, this.constants.headerOptions);
  }
  fetchAllClients() {
    let url = this.constants.hostname + 'fetch/clients';
    return this.httpClient.get<Users[]>(url, this.constants.headerOptions);
  }

}
