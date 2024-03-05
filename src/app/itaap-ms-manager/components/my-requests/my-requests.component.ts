import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { AzureService, Variable } from '../azurelib/azure.service';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  providers: [MessageService]
})
export class MyRequestsComponent {

  requester = "Soumendu"
  httpError: HttpErrorResponse | any;
  allRequests: any = [];

  constructor(private azureService: AzureService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    console.log("in init")
    this.getMyRequests();
  }

  getMyRequests() {
    this
      .azureService
      .getMyRequests(this.requester)
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

  handleSuccessfulResponse(response: any) {
    this.allRequests = response;
    if(response.length > 0){
      for(let i=0 ; i< this.allRequests.length ; i++){
          this.allRequests[i].modifiedVariables = JSON.parse(this.allRequests[i].modifiedVariables);
          this.allRequests[i].updatedAllVariables = JSON.parse(this.allRequests[i].updatedAllVariables);
          this.allRequests[i].isApproved = this.allRequests[i].status==="Approved" ? true: false;
          this.allRequests[i].isRejected = this.allRequests[i].status==="Rejected" ? true: false;
          this.allRequests[i].isInitiated = this.allRequests[i].status==="Initiated" ? true: false;
      }
    }
    
  }

  getSeverity(request: any): string {
    if (request.isApproved) {
      return "success";
    } else if (request.isInitiated) {
      return "info";
    }
    else {
      return "danger";
    }
  }

  getSeverityIcon(request: any): string {
    if (request.isApproved) {
      return "pi pi-check-circle";
    } else if (request.isInitiated) {
      return "pi pi-clock";
    }
    else {
      return "pi pi-times-circle";
    }
  }

  onRetry() {
    this.getMyRequests();
    this.messageService.clear('retry');
  }

  fetchValues(variable: any, keyName: string) {
    return variable[keyName];
  }


}
