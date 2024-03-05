import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AzureService, Variable } from '../azure.service';

@Component({
  selector: 'app-azure-admin',
  templateUrl: './azure-admin.component.html',
  providers: [MessageService]
})
export class AzureAdminComponent implements OnInit {

  approvedVariables: Variable[] | any;
  selectedVariables: Variable[] | any;
  modifiedVariables: Variable[] = [];
  allRequests: any = [];

  approver = "Pankajkumar Patel";

  httpError: HttpErrorResponse | any;

  base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
  
  constructor(    
    private azureService: AzureService,
    private messageService: MessageService,
    ) { }

  ngOnInit(): void {
    this.getRequests();
  }

  getRequests() {
    this
      .azureService
      .getRequests(this.approver)
      .subscribe(
        (response) => {
          console.log("response : " + response);
          this.handleSuccessfulResponse(response);
          this.messageService.add({ key: 'success', severity: 'success', summary: 'Success', detail: "Successfully Fetched " + this.allRequests.length + " Requests" });
        },
        (error: any) => {
          console.log("error : " + error);
          this.httpError = error;
          this.messageService.add({ key: 'retry', severity: 'error', sticky: true, summary: error.statusText, detail: error.message });
        }
      );
  }

  onRetry() {
    this.getRequests();
    this.messageService.clear('retry');
  }

  handleSuccessfulResponse(response: any) {
    this.allRequests = response;
    if(response.length > 0){
      this.allRequests = response;
      for(let i=0 ; i< this.allRequests.length ; i++){
          this.allRequests[i].modifiedVariables = JSON.parse(this.allRequests[i].modifiedVariables);
          this.allRequests[i].updatedAllVariables = JSON.parse(this.allRequests[i].updatedAllVariables);
      }
      console.log(this.modifiedVariables);
    }
    
  }

  toggleEncryptedVariable(event: any, variableValue: any, variable: Variable) {

    if (variable.secret && variable.encrypted) {
      if (this.base64regex.test(variableValue.textContent)) {
        event.currentTarget.children[0].classList.value = "p-button-icon pi pi-eye-slash";
        variableValue.textContent = atob(variableValue.textContent);
      } else {
        event.currentTarget.children[0].classList.value = "p-button-icon pi pi-eye";
        variableValue.textContent = btoa(variableValue.textContent);
      }
    }
  }

  fetchValues(variable: any, keyName: string) {
    return variable[keyName];
  }

  approveRequest(request : any){
    this.azureService.approveRequest(request)
    .subscribe((response) => {
      this.messageService.add({ key: 'success', severity: 'success', summary: 'Success', detail: "Successfully approved request"});
      this.getRequests(); 
    },
    (error: any) => {
      console.log("error : " + error);
      this.httpError = error;
      this.messageService.add({ key: 'retry', severity: 'error', sticky: true, summary: error.statusText, detail: error.message });
    })

  }

  rejectRequest(request : any){
    this.azureService.rejectRequest(request)
    .subscribe((response) => {
      this.messageService.add({ key: 'success', severity: 'success', summary: 'Success', detail: "Successfully rejected request"});
      this.getRequests(); 
    },
    (error: any) => {
      console.log("error : " + error);
      this.httpError = error;
      this.messageService.add({ key: 'retry', severity: 'error', sticky: true, summary: error.statusText, detail: error.message });
    })

  }
 


}
