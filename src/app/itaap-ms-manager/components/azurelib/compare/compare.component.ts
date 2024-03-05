import { Component } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AzureService, Variable, VariableValues } from '../azure.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  providers: [MessageService, ConfirmationService]
})
export class CompareComponent {

  allVarGrp: any;
  allVariableGrpsList: any = [];

  firstGroup: any;
  secondGroup: any;

  filteredFirstGroup: any;
  filteredSecondGroup: any;

  firstVariables: Variable[] = [];
  secondVariables: Variable[] = [];

  response: VariableValues = {
    name: '',
    secrets: 0,
    variableValues: []
  };

  constructor(
    private azureService: AzureService,
    private messageService: MessageService) {
  }


  ngOnInit(): void {
    this.getVariableGroups();
  }

  getVariableGroups() {
    this
      .azureService
      .getVariableGroups()
      .subscribe(
        (response) => {
          this.handleSuccessfulResponse(response);
          this.messageService.add({ key: 'success', severity: 'success', summary: 'Success', detail: "Successfully Fetched " + this.allVariableGrpsList.length + " Variable Groups" });
        },
        (error: any) => {
          this.messageService.add({ key: 'retry', severity: 'error', sticky: true, summary: error.statusText, detail: error.message });
        }
      );
  }

  handleSuccessfulResponse(response: any) {
    this.allVarGrp = response.value;
    let arr = [];
    for (let i = 0; i < response.value.length; i++) {
      arr.push({ name: response.value[i].name, id: response.value[i].id });
    }
    this.allVariableGrpsList = arr;
  }

  filterGroups(event: any, grp: number) {
    const filtered: any[] = [];
    const query = event.query;
    for (let i = 0; i < this.allVariableGrpsList.length; i++) {
      const group = this.allVariableGrpsList[i];
      if (group.name.toLowerCase().indexOf(query.toLowerCase()) != -1) {
        filtered.push(group);
      }
    }
    if (grp == 1) {
      this.filteredFirstGroup = filtered;
    }
    else {
      this.filteredSecondGroup = filtered;
    }
  }
  onSelectGrp(grp: number) {
    let name;
    if (grp == 1) {
      name = this.firstGroup.name;
    }
    else {
      name = this.secondGroup.name;
    }
    this
      .azureService
      .fetchVariablesFromGroup(name)
      .subscribe((response) => this.receivedVariables(response, grp),
        (error: any) => {
          this.messageService.add({ key: 'retry', severity: 'error', summary: error.statusText, detail: error.message });
        });
  }

  receivedVariables(response: VariableValues, grp: number) {
    if (grp == 1) {
      this.firstVariables = response.variableValues;
    }
    else {
      this.secondVariables = response.variableValues;
    }
  }

}
