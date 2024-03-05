import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../service/constants';

@Injectable({
  providedIn: 'root'
})
export class ConnectivityService {

  constructor(private http: HttpClient,
    private constants: Constants) { }

  public testConnection(data: any) {
    let loggedInUserDetails = sessionStorage.getItem("loggedInUserDetails");
    const userId = JSON.parse(loggedInUserDetails).id;
    let url = this.constants.hostname + 'connectivity-check/?userID=' + userId;
    return this.http.post(
      url, data, this.constants.headerOptions
    );
  }

  public getAllHistory() {
    let url = this.constants.hostname + 'connectivity-check/history';
    return this.http.get(url, this.constants.headerOptions);
  }

  public getHistoryById(id: String) {
    let url = this.constants.hostname + 'connectivity-check/history/' + id;
    return this.http.get(url, this.constants.headerOptions);
  }
}
