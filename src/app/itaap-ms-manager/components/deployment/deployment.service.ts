import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Microservices } from '../../api/models';
import { Builds } from './builds/builds.component';

import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { Constants } from '../../service/constants';

@Injectable({
  providedIn: 'root'
})
export class DeploymentService {

  constructor(private httpClient: HttpClient, private constants: Constants) { }

  readExcel(path: string, details: any) {
    this.httpClient.get(path, { responseType: 'blob' })
      .subscribe((data: any) => {
        const reader: FileReader = new FileReader();
        reader.readAsBinaryString(data);
        reader.onload = (e: any) => {

          const binarystr: string = e.target.result;
          const wb: XLSX.WorkBook = XLSX.read(binarystr, { type: 'binary' });

          const wsname: string = wb.SheetNames[0];
          const ws: XLSX.WorkSheet = wb.Sheets[wsname];

          const data = XLSX.utils.sheet_to_json(ws);
          this.replaceData(data, details);
        };
      });
  }

  replaceData(data: any, details: any) {
    this.replaceScripts(data, details)
      .subscribe(
        (response) => {
          console.log(response)
          this.writeExcel(response, details);
        },
        (error) => {
          console.log(error)
        });
  }

  writeExcel(data: any, details: any) {

    import("xlsx").then(xlsx => {
      console.log(data);
      const worksheet = xlsx.utils.json_to_sheet(data);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, details.MICROSERVICE_NAME + '_' + details.TYPE);
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + EXCEL_EXTENSION);
  }



  getBuildFolders() {
    let url = this.constants.hostname + 'build/folders?organization=' + this.constants.org;
    return this.httpClient
      .get<any>(url, this.constants.headerOptions);
  }

  getRunsFromPipelineID(pipelineID: any) {
    let url = this.constants.hostname + 'pipeline/runs?organization=' + this.constants.org + '&pipelineID=' + pipelineID;
    return this.httpClient
      .get<Builds[]>(url, this.constants.headerOptions);
  }

  getTimelineFromBuildID(buildId: any, buildNumber: any) {
    let url = this.constants.hostname + 'build/timeline?organization=' + this.constants.org + '&buildID=' + buildId + '&buildNumber=' + buildNumber;
    return this.httpClient
      .get<any>(url, this.constants.headerOptions);
  }

  getPipelineDetails(pipelineID: any) {
    let url = this.constants.azureHostname + 'pipelines/' + pipelineID;
    return this.httpClient
      .get<any>(url, this.constants.azureHeaderOptions);
  }

  addMicroserviceInDB(request: Microservices, pipelineID: number) {
    let url = this.constants.hostname + 'update/database/microservice?organization=' + this.constants.org + '&pipelineID=' + pipelineID;
    return this.httpClient.post<any>(url, request, this.constants.headerOptions);
  }

  replaceScripts(data: any, details: any) {
    let url = this.constants.hostname + 'replace/scripts?MICROSERVICE_CD_NAME=' + details.MICROSERVICE_CD_NAME + '&MICROSERVICE_NAME=' + details.MICROSERVICE_NAME + '&BUILD_NUMBER=' + details.BUILD_NUMBER + '&PLATFORM_NAME=' + details.PLATFORM_NAME;
    return this.httpClient.post<any>(url, data, this.constants.headerOptions);
  }

}
