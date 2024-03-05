import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload/fileupload';
import { AccProd, Microservices, Users } from '../../api/models';
import { AddDataService } from '../add-data/add-data.service';
import { AzureVariableComponent } from '../azurelib/azure-variable/azure-variable.component';
import { DeploymentService } from '../deployment/deployment.service';
import { TasksService } from '../tasks/tasks.service';
import { MicroservicesService } from './microservices.service';

@Component({
  selector: 'app-microservices',
  templateUrl: './microservices.component.html',
  providers: [MessageService, ConfirmationService, AzureVariableComponent]
})
export class MicroservicesComponent implements OnInit {

  allMicroservicesList: Microservices[] = [];
  selectedMs: Microservices = {};

  editModal: boolean = false;
  visibleProgressBar: boolean = true;
  blockedDialog: boolean = false;

  uploadModal: boolean = false;
  uploadedAcc: AccProd[] = [];
  uploadedProd: any[] = [];
  deploymentAcc: AccProd;
  deploymentProd: AccProd;
  documentTag: any[] = [{ id: 0, name: 'ITD' }, { id: 0, name: 'IQ' }, { id: 0, name: 'PIQ' }, { id: 0, name: 'Azure Var' }, { id: 0, name: 'Postman Coll.' }];
  accDocModal: any[] = [];
  accTag: string;
  prodDocModal: any[] = [];

  allTechLeads: Users[];
  allScrumMasters: Users[];
  allDevelopers: Users[];
  allClients: Users[];
  todayDate: Date = new Date();

  constructor(
    private tasksService: TasksService,
    private addDataService: AddDataService,
    private deploymentService: DeploymentService,
    private messageService: MessageService) {

  }

  ngOnInit(): void {
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
    }
    this.getAllMicroservices();
  }

  getAllMicroservices() {
    this.tasksService.getAllMicroservices().subscribe(
      (response) => {
        if (response.length != 0) {
          this.allMicroservicesList = response;
          this.selectedMs = this.allMicroservicesList[0];
        }
        this.messageService.add({ severity: 'success', summary: 'Success', detail: "Connection established successfully." });
      },
      (error) => {
        this.messageService.add({ key: 'retry', severity: 'error', sticky: true, summary: error.statusText, detail: error.message });
      });
  }

  onRetry() {
    this.getAllMicroservices();
    this.messageService.clear('retry');
  }
  populateMicroservice(ms: Microservices) {
    this.selectedMs = ms;
    this.uploadedAcc = [];
    this.uploadedProd = [];
    this.deploymentAcc = undefined;
    this.deploymentProd = undefined;
  }
  getConvertedDate(date: Date): string {
    if (date != null) {
      date = new Date(date);
      var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      var day = date.getDate();
      var monthIndex = date.getMonth();
      var year = date.getFullYear();

      return monthNames[monthIndex] + " " + day + ", " + year;
    }
    else {
      return "No data";
    }
  }
  refresh() {
    this.selectedMs;
    this.deploymentService
      .addMicroserviceInDB(this.selectedMs, this.selectedMs.pipelineID)
      .subscribe(
        (response) => {
          console.log(response);
          this.messageService.add({ severity: 'success', summary: 'Updated', detail: 'Successfully refreshed for microservice ' + response.name });
        },
        (error) => {
          console.log(error);
          this.messageService.add({ severity: 'error', summary: error.statusText, detail: error.message });
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
    this.deploymentService.addMicroserviceInDB(this.selectedMs, this.selectedMs.pipelineID)
      .subscribe(
        (response) => {
          this.editModal = false;
          this.blockedDialog = false;
          this.messageService.add({ severity: 'success', summary: 'Updated', detail: 'Successfully Updated the microservice ' + response.name });
        },
        (error) => {
          this.blockedDialog = false;
          this.messageService.add({ severity: 'error', summary: error.statusText, detail: error.message });
        }
      );
  }
  openUploadDialog() {
    this.uploadModal = true;
    this.populateAllDropdowns();
  }
  onUploadDialog() {
    this.uploadModal = false;
  }
  populateAllDropdowns() {
    this.addDataService.fetchAllClients().subscribe((response) => this.allClients = response, (error) => console.log(error));
    this.addDataService.fetchAllDevelopers().subscribe((response) => this.allDevelopers = response, (error) => console.log(error));
    this.addDataService.fetchAllScrumMasters().subscribe((response) => this.allScrumMasters = response, (error) => console.log(error));
    this.addDataService.fetchAllTechLeads().subscribe((response) => this.allTechLeads = response, (error) => console.log(error));
  }

  formatBytes(bytes: any, decimals = 2) {
    let units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']
    let i = 0
    for (i; bytes > 1024; i++) {
      bytes /= 1024;
    }
    return parseFloat(bytes.toFixed(decimals)) + ' ' + units[i]
  }
  files: any;
  onUpload(event: any, stage: number) {
    for (let file of event.files) {
      if (file.tag != undefined) {
        // this.microservicesService.readExcel(file);
        this
          .getBase64(file)
          .then(
            (data) => {
              this.populateDocuments(file, data, stage);
            }
          );
      } else {
        this.uploadedAcc = [];
        this.messageService.add({ severity: 'error', summary: 'Not Uploaded', detail: 'Please select document type for all files.', life: 5000 });
        break;
      }
    }
    console.log(this.uploadedAcc);
  }
  populateDocuments(file: any, data: any, stage: number) {
    if (stage == 3) {
      for (let i = 0; i < this.selectedMs.deployment.deploymentAcc.length; i++) {
        if (this.selectedMs.deployment.deploymentAcc[i].buildNumber == this.deploymentAcc.buildNumber) {
          this.deploymentAcc.fileName = file.name;
          this.deploymentAcc.fileTag = file.tag.name;
          this.deploymentAcc.fileData = data;
          this.deploymentAcc.pipelineID = this.selectedMs.pipelineID;
          this.selectedMs.deployment.deploymentAcc[i] = this.deploymentAcc;
          this.addDataService.addDeploymentDocuments(this.selectedMs.deployment.deploymentAcc[i])
            .subscribe(
              (response) => {
                this.messageService.add({ severity: 'success', summary: 'Uploaded', detail: 'Successfully uploaded file : ' + file.name });
              },
              (error) => {
                this.messageService.add({ severity: 'error', summary: error.statusText, detail: error.message });
              }
            );
        }
      }
    } else if (stage == 4) {

    }
  }
  getBase64(file: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  removeFile(event: any, file: File, uploader: FileUpload) {
    const index = uploader.files.indexOf(file);
    uploader.remove(event, index);
  }

  addNewRow(event: any, prodDiv: any, stage: number) {

  }

  onSelectFiles(event: any, stage: number) {
    for (let file of event.currentFiles) {
      file.buildNumber = this.deploymentAcc.buildNumber;
      file.stage = stage;
    }
    if (this.deploymentAcc == undefined) {
      this.messageService.add({ severity: 'error', summary: '', detail: 'Please select a build version.', life: 5000 });
    }
  }

  downloadDocuments(type: string) {
    let itd = this.selectedMs.deployment.itd;
    let buffer = itd.split("base64,")[1];
    // this.microservicesService.readExcel('assets/itaap-ms-manager/templates/IQ.xlsx');
    // this.azureVarComponent.saveAsExcelFile(buffer, this.selectedMs.name + "_ITD");
  }
}
