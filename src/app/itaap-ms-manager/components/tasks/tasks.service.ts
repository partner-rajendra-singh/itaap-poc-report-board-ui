import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Microservices, Task, Users } from '../../api/models';
import { Constants } from '../../service/constants';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private httpClient: HttpClient, private constants: Constants) { }

  getTasksAssignedToSelf(userId: number) {
    return this.getTasksAssignedToUser(userId);
  }
  getTasksAssignedToUser(userId: number) {
    let url = this.constants.hostname + 'fetch/tasks/user?userId=' + userId;
    return this.httpClient.get<Task[]>(url, this.constants.headerOptions);
  }
  getTasksByStatus(status: string) {
    let url = this.constants.hostname + 'fetch/tasks/status?status=' + status;
    return this.httpClient.get<Task[]>(url, this.constants.headerOptions);
  }
  getTasksCreatedByUser(userId: number) {
    let url = this.constants.hostname + 'fetch/tasks/created-by?userId=' + userId;
    return this.httpClient.get<Task[]>(url, this.constants.headerOptions);
  }
  getTasksByMicroservice(microserviceId: number) {
    let url = this.constants.hostname + 'fetch/tasks/microservice?microserviceId=' + microserviceId;
    return this.httpClient.get<Task[]>(url, this.constants.headerOptions);
  }
  createTask(request: any) {
    let url = this.constants.hostname + 'create/task';
    return this.httpClient.post<Task>(url, request, this.constants.headerOptions);
  }
  getAllMicroservices() {
    let url = this.constants.hostname + 'fetch/microservices/all';
    return this.httpClient.get<Microservices[]>(url, this.constants.headerOptions);
  }
  getMicroservicesByName(name: string) {
    let url = this.constants.hostname + 'fetch/microservices/name?microserviceName=' + name;
    return this.httpClient.get<Microservices>(url, this.constants.headerOptions);
  }
  getAllUsers() {
    let url = this.constants.hostname + 'fetch/users/all';
    return this.httpClient.get<Users[]>(url, this.constants.headerOptions);
  }
  getAllTasks() {
    let url = this.constants.hostname + 'fetch/tasks/all';
    return this.httpClient.get<Task[]>(url, this.constants.headerOptions);
  }
  updateTask(modifiedTask: Task) {
    let url = this.constants.hostname + 'update/task';
    return this.httpClient.put<Task>(url, modifiedTask, this.constants.headerOptions);
  }

}
