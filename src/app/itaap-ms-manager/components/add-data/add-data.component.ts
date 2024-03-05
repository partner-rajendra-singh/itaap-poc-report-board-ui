import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Role } from '../../api/enums';
import { Microservices, Users } from '../../api/models';
import { AddDataService } from './add-data.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  providers: [MessageService, ConfirmationService]
})
export class AddDataComponent {

  allTechLeads: Users[];
  allScrumMasters: Users[];
  allDevelopers: Users[];
  allClients: Users[];

  todayDate: Date = new Date();

  techLead: Users;
  scrumMaster: Users;
  developer: Users;
  backup: Users;
  poc: Users;
  targetDate: Date;

  allRoles: string[] = [];

  selRole: string;
  newUser: Users = {};
  newMicroservice: Microservices = {};
  usersubmitted: boolean = false;
  mssubmitted: boolean = false;

  constructor(private addDataService: AddDataService,
    private messageService: MessageService) {

    this.allRoles = Object.values(Role);
    this.populateAllDropdowns();
    
  }

  populateAllDropdowns() {
    this.addDataService.fetchAllClients().subscribe((response) => this.allClients = response, (error) => console.log(error));
    this.addDataService.fetchAllDevelopers().subscribe((response) => this.allDevelopers = response, (error) => console.log(error));
    this.addDataService.fetchAllScrumMasters().subscribe((response) => this.allScrumMasters = response, (error) => console.log(error));
    this.addDataService.fetchAllTechLeads().subscribe((response) => this.allTechLeads = response, (error) => console.log(error));
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
      this
        .addDataService
        .addMicroservice(this.newMicroservice)
        .subscribe(
          (response) => {
            this.mssubmitted = false;
            this.newMicroservice = {};
            this.messageService.add({ severity: 'success', summary: 'Success', detail: "Successfully Added Microservice [" + response.name + "]." });
          },
          (error) => {
            this.messageService.add({ severity: 'error', summary: 'Failure : ' + error.error.errorCode, detail: "Failed : " + error.error.errorDesc });
          }
      );
    }
  }
  saveUser() {
    this.usersubmitted = true;
    if (this.newUser.name != undefined && this.newUser.email != undefined) {
      const role = Object.values(Role).indexOf(this.selRole as unknown as Role);
      this.newUser.role = Object.keys(Role)[role];
    
      this
        .addDataService
        .addUser(this.newUser)
        .subscribe(
          (response) => {
            this.usersubmitted = false;
            this.newUser = {};
            this.populateAllDropdowns();
            this.messageService.add({ severity: 'success', summary: 'Success', detail: "Successfully Added User [" + response.name + "]." });
          },
          (error) => {
            this.messageService.add({ severity: 'error', summary: 'Failure : ' + error.error.errorCode, detail: "Failed : " + error.error.errorDesc });
          }
      );
    }

  }
}
