import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class Constants {

    constructor() { }

    hostname: string = 'http://localhost:9083/poc/';
    org: string = 'PhilipsAgile/56.0 EADI';
    apiV: string = '6.0-preview.1';

    authorizationData = 'Basic ' + btoa("AZURE_POC_USERNAME" + ':' + "AZURE_POC_PASSWORD");
    headerOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': this.authorizationData
        })
    };

    azureHostname: string = 'https://dev.azure.com/' + this.org + '/_apis/';
    azureAuthorizationData = 'Basic ' + btoa("" + ':' + "vljrfdnoawhe64oe6537fistlyv562w6nz5dtlvts6mbc7okrxba");
    azureHeaderOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.azureAuthorizationData
      })
    };
}