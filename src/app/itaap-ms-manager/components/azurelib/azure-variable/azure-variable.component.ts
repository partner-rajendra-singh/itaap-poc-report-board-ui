import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MenuItem, MessageService, ConfirmationService } from 'primeng/api';
import { AzureService, Variable, VariableValues } from '../azure.service';

import * as FileSaver from 'file-saver';

@Component({
  templateUrl: './azure-variable.component.html',
  providers: [MessageService, ConfirmationService]
})
export class AzureVariableComponent implements OnInit {
  httpError: HttpErrorResponse | any;

  userName: string = "";
  userEmail: string = "";
  userOverlayVisible: boolean = false;
  loggedIn: boolean = false;

  modifiedGroup: any = { azureGroupName: '', updatedAllVariables: [], modifiedVariables: [], requester: '', approver: '' };

  items: MenuItem[] = [];

  base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;

  variables: Variable[] = [];
  variablesRef: Variable[] = [];
  modifiedVariables: Variable[] = [];

  response: VariableValues = {
      name: '',
      secrets: 0,
      variableValues: []
  };

  selectedVariable: Variable | any;
  submitted: boolean | any;
  variableDialog: boolean | any;
  selectedVariables: Variable[] | any;
  isNewVariable: boolean = false;

  loginDialog: boolean = false;

  groupSelected: boolean = false;
  selectedGrpName: string = 'Select a Variable Group';
  oldGrpName: string = '';
  selectedGrp: any;

  allVariableGrpsList: any = [];

  checked: false | any;

  tabItems: MenuItem[] = [];
  activeItem: MenuItem | any;

  displayModal: boolean = false;

  allVarGrp: any;

  constructor(
    private azureService: AzureService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService) {
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
          this.httpError = error;
          this.messageService.add({ key: 'retry', severity: 'error', sticky: true, summary: error.statusText, detail: error.message });
        }
      );
  }

  toggle() {
    this.userOverlayVisible = !this.userOverlayVisible;
  }
  onRetry() {
    this.getVariableGroups();
    this.messageService.clear('retry');
  }

  handleSuccessfulResponse(response: any) {
    if (this.loggedIn) {
      this.messageService.add({ key: 'success', severity: 'success', summary: 'Login Success!', detail: this.userName + ' (' + this.userEmail + ')' + ' logged in successfully' });
    }
    this.allVarGrp = response.value;
    let arr = [];
    for (let i = 0; i < response.value.length; i++) {
      arr.push({ name: response.value[i].name, id: response.value[i].id });
    }
    this.allVariableGrpsList = arr;
  }

  onSelectGrp() {
    if (this.modifiedVariables.length == 0) {
      for (let i = 0; i < this.allVarGrp.length; i++) {
        if (this.allVarGrp[i].name == this.selectedGrpName) {
          this.selectedGrp = this.allVarGrp[i];
          break;
        }
      }
      this.oldGrpName = this.selectedGrpName;
      this.groupSelected = true;
      this
        .azureService
        .fetchVariablesFromGroup(this.selectedGrpName)
        .subscribe((response) => this.receivedVariables(response),
          (error: any) => {
            this.httpError = error;
            /*this.receivedVariables(null);*/
            this.messageService.add({ key: 'retry', severity: 'error', summary: error.statusText, detail: error.message });
          });
    }
    else {
      this.selectedGrpName = this.oldGrpName;
      this.messageService.add({ severity: 'error', summary: 'Failure', detail: 'There are unsaved changes for the selected variable group', life: 3000 });
    }
  }

  receivedVariables(response: VariableValues) {
    this.variables = response.variableValues;
    this.response = response;
    /*this.variables = JSON.parse(res).variableValues;
    this.variablesRef = JSON.parse(res).variableValues;*/
  }

  showGrpInfo() {
    this.displayModal = true;
  }

  fetchValues(variable: any, keyName: string) {
    return variable[keyName];
  }

  getGrpDetails(key: string, childKey: string) {
    if (this.selectedGrp !== undefined) {
      if (childKey == '' || childKey == "") {
        return this.selectedGrp[key];
      }
      else {
        return this.selectedGrp[key][childKey];
      }
    }
    else {
      return key;
    }
  }

  hideDialog() {
    this.selectedVariable = undefined;
    this.variableDialog = false;
    this.submitted = false;
  }

  saveVariable() {
    this.submitted = true;
    this.selectedVariable.encrypted = this.selectedVariable.secret;
    if (this.selectedVariable.key.trim()) {
      if (this.selectedVariable.key && !this.isNewVariable) {
        if (JSON.stringify(this.variables[this.findIndexByID(this.selectedVariable.index)]) === JSON.stringify(this.selectedVariable)) {
          this.messageService.add({ severity: 'warn', summary: 'Warning!', detail: 'Not changes detected, variable not updated.', life: 3000 });
        } else {
          this.variables[this.findIndexByID(this.selectedVariable.index)] = this.selectedVariable;
        this.modifiedVariables.push(this.selectedVariable);
          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Variable Updated', life: 3000 });
        }
      }
      else {
        this.selectedVariable.index = this.variables.length + 1;
        if (this.findIndexByID(this.selectedVariable.index) == -1) {
          this.variables.push(this.selectedVariable);
          this.modifiedVariables.push(this.selectedVariable);
          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Variable Created', life: 3000 });
        } else {
          this.messageService.add({ severity: 'error', summary: 'Failure', detail: this.selectedVariable.key + ' already exists', life: 3000 });
        }
        this.isNewVariable = false;
      }

      this.variables = [...this.variables];
      this.variableDialog = false;
      this.selectedVariable = { key: '', value: '', secret: false, encrypted: false };
    }
  }

  findIndexByID(id: number): number {
    let index = -1;
    for (let i = 0; i < this.variables.length; i++) {
      if (this.variables[i].index === id) {
        index = i;
        break;
      }
    }
    return index;
  }

  createNew() {
    this.selectedVariable = { key: '', value: '', secret: false, encrypted: false };
    this.submitted = false;
    this.variableDialog = true;
    this.isNewVariable = true;
  }

  editVariable(variable: Variable) {
    this.selectedVariable = { ...variable };
    this.variableDialog = true;
  }

  encryptVariable() {
    this.selectedVariable.value = btoa(this.selectedVariable.value);
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

  clearModifiedVariable() {
    this.modifiedVariables = [];
    this.variables = this.response.variableValues;
    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Discarded all changes!', life: 3000 });
  }

  deleteVariable(event: Event, variable: Variable) {
    this.confirmationService.confirm({
      key: 'confirm_selected_variables',
      target: event.target || new EventTarget,
      message: 'Are you sure you want to delete ' + variable.key + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.variables = this.variables.filter(val => val.key !== variable.key);
        this.selectedVariable = { key: '', value: '', secret: false };
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Variable Deleted', life: 3000 });
      }
    });
  }

  deleteSelectedVariables(event: Event) {
    this.confirmationService.confirm({
      key: 'confirm_selected_variables',
      target: event.target || new EventTarget,
      message: 'Are you sure you want to delete the selected variables ?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.variables = this.variables.filter(val => !this.selectedVariables.includes(val));
        this.selectedVariables = null;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Variables Deleted', life: 3000 });
      }
    });
  }

  overlayToggle(event: any, op: any) {
    op.toggle(event);

  }
  exportExcel() {
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.variables);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, this.selectedGrpName);
    });
  }

  importExcel() {

  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

  routeForApproval() {
    this.modifiedGroup.azureGroupName = this.selectedGrpName;
    this.modifiedGroup.updatedAllVariables = this.variables;
    this.modifiedGroup.modifiedVariables = this.modifiedVariables;
    this.modifiedGroup.requester = "Soumendu";
    this.modifiedGroup.approver = this.getGrpDetails('createdBy', 'displayName');
    
    this.azureService.sendVarGrpForApproval(this.modifiedGroup)
      .subscribe((response) => {
        this.clearModifiedVariable();
        this.messageService.add({ severity: 'success', summary: response.status, detail: response.message });
      },
        (error: any) => {
          console.log(error);
        this.httpError = error;
        this.messageService.add({severity: 'error', summary: error.statusText, detail: error.message });
      });
  }
}
