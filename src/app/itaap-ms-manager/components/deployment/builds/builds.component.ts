import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService, TreeNode } from 'primeng/api';
import { Microservices, Timeline, Users } from 'src/app/itaap-ms-manager/api/models';
import { AddDataService } from '../../add-data/add-data.service';
import { TasksService } from '../../tasks/tasks.service';
import { DeploymentService } from '../deployment.service';

export interface Builds {
  id: string;
  name: string;
  result: string;
  state: string;
  url: string
}

@Component({
  templateUrl: './builds.component.html',
  providers: [MessageService]
})
export class BuildsComponent implements OnInit {

  todayDate: Date = new Date();

  mssubmitted: boolean = false;
  msDialog: boolean = true;

  saveButtonText: string = "Save";

  visibleProgressBar: boolean = false;

  allTechLeads: Users[];
  allScrumMasters: Users[];
  allDevelopers: Users[];
  allClients: Users[];
  fetchedMicroservice: Microservices = {};

  constructor(
    private addDataService: AddDataService,
    private taskService: TasksService,
    private deploymentService: DeploymentService,
    private messageService: MessageService) {
    this.populateAllDropdowns();
  }

  files: TreeNode[] = [];
  selectedNode: TreeNode | any;

  selectedPipeline: string = "Select a pipeline";
  selectedPipelineDetails: any;

  runs: Builds[] = [];
  selectedRun: Builds | any;
  selectedRunTimeline: Timeline[] = [];
  stages: any;

  home: MenuItem | any;
  items: MenuItem[] = [];


  ngOnInit(): void {
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

    }
    this.home = { icon: 'pi pi-home', routerLink: '/deployment/builds' };
    this.deploymentService.getBuildFolders().subscribe((response) => this.handleResponse(response));
  }
  getConvertedDate(date: Date): string {
    return new Date(date).toDateString();
  }
  handleResponse(response: any) {
    this.files = response;
  }
  populateAllDropdowns() {
    this.addDataService.fetchAllClients().subscribe((response) => this.allClients = response, (error) => console.log(error));
    this.addDataService.fetchAllDevelopers().subscribe((response) => this.allDevelopers = response, (error) => console.log(error));
    this.addDataService.fetchAllScrumMasters().subscribe((response) => this.allScrumMasters = response, (error) => console.log(error));
    this.addDataService.fetchAllTechLeads().subscribe((response) => this.allTechLeads = response, (error) => console.log(error));
  }
  nodeSelect(event: any) {
    let arr = [];

    if (Number.isInteger(parseInt(event.node.data))) {
      for (let i = 0; i < event.node.path.length; i++) {
        let s = { label: event.node.path[i] };
        arr.push(s);
      }
      this.selectedPipeline = event.node.label;
      arr.push({ label: this.selectedPipeline });
      this.items = arr;

      this.deploymentService.getRunsFromPipelineID(event.node.data).subscribe((response) => this.runs = response);
      this.deploymentService.getPipelineDetails(event.node.data).subscribe((response) => {
        response.configuration.repository.connection.url = "https://github.com/" + response.configuration.repository.fullName;
        this.selectedPipelineDetails = response;
      });
      /*this.httpClientService.getTimelineFromBuildID(event.node.id).subscribe((response) => this.stages = response);*/
    }
  }

  onTabClose(event: any) {

  }

  onTabOpen(event: any) {
    this.selectedRun = this.runs[event.index];
    /*this.messageService.add({ severity: 'info', summary: 'Tab Expanded', detail: 'ID: ' + this.selectedRun.id });*/
    this.deploymentService.getTimelineFromBuildID(this.selectedRun.id, this.selectedRun.name).subscribe(response => {
      console.log(response);
      this.selectedRunTimeline = response;
    });
  }

  setSeverity(run: Builds): string {
    if (run.result == "succeeded") {
      return "success"
    }
    else {
      return "danger"
    }
  }

  openRun(run: Builds) {
    window.open(run.url, '_blank');
  }

  insertMsDB(event: any, op: any) {
    this.visibleProgressBar = true;
    this.fetchedMicroservice.techLeadID = this.fetchedMicroservice.techLead.id;
    this.fetchedMicroservice.scrumMasterID = this.fetchedMicroservice.scrumMaster.id;
    this.fetchedMicroservice.developerID = this.fetchedMicroservice.developer.id;
    this.fetchedMicroservice.backupID = this.fetchedMicroservice.backup.id;
    this.fetchedMicroservice.pocID = this.fetchedMicroservice.poc.id;
    this.fetchedMicroservice.targetCompletionDate = this.fetchedMicroservice.targetCompletionDate;
    this.deploymentService
      .addMicroserviceInDB(this.fetchedMicroservice, this.selectedPipelineDetails.id)
      .subscribe(
        (response) => {
          console.log(response);
          this.overlayToggle(event, op);
          this.visibleProgressBar = false;
          this.messageService.add({ severity: 'success', summary: 'Updated', detail: 'Record updated for microservice ' + response.name });
        },
        (error) => {
          console.log(error);
          this.overlayToggle(event, op);
          this.visibleProgressBar = false;
          this.messageService.add({ severity: 'error', summary: error.statusText, detail: error.message });
        });
  }
  fetchMS() {
    let name = this.selectedPipelineDetails.name;
    name = name.toLowerCase().replace("-cd", "");
    this.msDialog = true;
    this.mssubmitted = true;
    this
      .taskService
      .getMicroservicesByName(name)
      .subscribe(
        (response) => {
          console.log(response);
          if (response && response != null) {
            this.saveButtonText = "Update";
            this.fetchedMicroservice = response;
          }
          else {
            this.saveButtonText = "Save";
            this.fetchedMicroservice = {};
            this.fetchedMicroservice.name = name;
          }
        },
        (error) => { }
      )
  }

  overlayToggle(event: any, op: any) {
    op.toggle(event);
    this.fetchMS();
  }

  generateDocument(type: string) {
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
    }
    this.deploymentService.readExcel(path, details);
  }

}
