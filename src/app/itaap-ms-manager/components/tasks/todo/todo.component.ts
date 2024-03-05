import { Component } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Priority, Status } from '../../../api/enums';
import { Comments, Microservices, Task, TaskList, Users } from '../../../api/models';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  providers: [MessageService, ConfirmationService]
})
export class TodoComponent {

  isHidden = false;
  priorityOptions: any[]

  userId: number;
  todayDate: Date = new Date();
  currentUser: Users;
  currentUserTasks: Task[];

  allStatus: string[];
  allSelectedTaskStatus: string[];
  allMicroservices: Microservices[];
  allDevelopers: Users[];

  submitted: boolean;
  selectedUser: Users;
  selectedMicroservice: Microservices = { id: 0 };
  selectedDate: Date;
  selectedTask: Task = {};

  modifiedStatus: string;
  modifiedComments: string;
  modifiedNotes: string;
  modifiedImpediments: string;

  isSaveEnable: boolean = false;
  visibleSidebar: boolean = false;
  visibleAddSidebar: boolean = false;

  filterUser: Users;
  filterMicroservice: Microservices;
  filterStatus: string;

  isSubmitted: boolean = false;
  createdTask: Task = { taskTitle: "Untitled task", taskLists: [], comments: [], assignedUsers: [], assignees: [] };
  newItemTaskList: TaskList = {};
  newTaskComment: Comments = {};
  newItemTaskListDetails: string = "";
  newComment: string = "";
  filteredAssignees: Users[] = [];

  progressBarValue: number = 0;

  items: MenuItem[];
  activeItem: MenuItem;

  constructor(private tasksService: TasksService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService) {

    // this.allStatus = Object.values(Status).map((name, index) => {return {name, inactive: true}})
    this.allStatus = Object.values(Status);
    this.allSelectedTaskStatus = Object.values(Status);
    this.userId = Number.parseInt(sessionStorage.getItem("loggedInUser"));
    this.currentUser = JSON.parse(sessionStorage.getItem("loggedInUserDetails"));

    this.priorityOptions = Object.values(Priority).map((name, index) => { return { type: name, code: Object.keys(Priority)[index] } });
  }

  ngOnInit(): void {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home' },
      { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
      { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
      { label: 'Documentation', icon: 'pi pi-fw pi-file' },
      { label: 'Settings', icon: 'pi pi-fw pi-cog' }
    ];

    this.activeItem = this.items[0];

    this.populateUsers();
    this.populateMicroservice();
    this.getTasksAssignedToSelf();
  }

  populateUsers() {
    this
      .tasksService
      .getAllUsers()
      .subscribe(
        (response) => {
          this.allDevelopers = response;
          this.allDevelopers.unshift({ id: 0, name: 'All' });
        },
        (error) => {
          console.log(error);
        });
  }

  createTask() {
    this.isSubmitted = true;
    if (this.isValidTask()) {
      this.createdTask.microserviceID = this.selectedMicroservice.id;
      for (let i = 0; i < this.createdTask.assignees.length; i++) {
        this.createdTask.assignedUsers.push(this.createdTask.assignees[i].id);
      }
      this.createdTask.createdByUserID = this.currentUser.id;
      this.tasksService.createTask(this.createdTask).subscribe(
        (response) => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: "Successfully Created Task [" + response.id + "]" });
          this.getTasksAssignedToSelf();
          this.createdTask = {};
          this.visibleAddSidebar = false;
        },
        (error) => {
          this.messageService.add({ severity: 'error', summary: 'Failure : ' + error.error.errorCode, detail: "Failed : " + error.error.errorDesc });
        });
    }
  }

  isValidTask(): boolean {
    return this.createdTask.taskTitle !== undefined
      && this.createdTask.taskTitle !== 'Untitled task'
      && this.createdTask.taskDesc !== undefined
      && this.createdTask.priority !== undefined
      && this.createdTask.startDate !== undefined
      && this.createdTask.dueDate !== undefined
      && this.createdTask.taskLists.length !== 0
      && this.createdTask.assignees.length !== 0;
  }

  populateMicroservice() {
    this
      .tasksService
      .getAllMicroservices()
      .subscribe(
        (response) => {
          this.allMicroservices = response;
        },
        (error) => {
          console.log(error);
        });
  }

  getTasksAssignedToSelf() {
    this
      .tasksService
      .getAllTasks()
      .subscribe(
        (response) => {
          this.currentUserTasks = response;
          /*this.messageService.add({ severity: 'success', summary: 'Success', detail: "Successfully fetched all tasks" });*/
        },
        (error: any) => {
          console.log(error);
          this.messageService.add({ key: 'retry', severity: 'error', sticky: true, summary: error.statusText, detail: error.message });
        }
      );
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
      return "TBD";
    }
  }

  overlayToggle(event: any, op: any) {
    op.toggle(event);
  }
  onRetry() {
    this.getTasksAssignedToSelf();
    this.messageService.clear('retry');
  }

  filterByUser() {
    if (this.filterUser.id == 0) {
      this.
        tasksService
        .getAllTasks()
        .subscribe(
          (response) => {
            this.currentUserTasks = response;
          },
          (error: any) => {
            console.log(error);
          }
        );
    }
    else {
      this.
        tasksService
        .getTasksAssignedToUser(this.filterUser.id)
        .subscribe(
          (response) => {
            this.currentUserTasks = response;
          },
          (error: any) => {
            console.log(error);
          }
        );
    }
  }
  filterByMicroservice() {
    if (this.filterMicroservice != undefined) {
      this
        .tasksService
        .getTasksByMicroservice(this.filterMicroservice.id)
        .subscribe(
          (response) => {
            console.log(response);
            this.currentUserTasks = response;
          },
          (error: any) => {
            console.log(error);
          }
        );
    }
    else {

    }
  }
  filterByStatus() {
    const index = Object.values(Status).indexOf(this.filterStatus as unknown as Status);
    let status = Object.keys(Status)[index];
    if (this.filterByStatus != undefined) {
      this
        .tasksService
        .getTasksByStatus(status)
        .subscribe(
          (response) => {
            this.currentUserTasks = response;
          },
          (error: any) => {
            console.log(error);
          }
        );
    }
  }
  clearFilters() {
    this.filterMicroservice = {};
    this.filterUser = {};
    this.getTasksAssignedToSelf();
  }

  populateSelectedTask(task: Task) {
    this.selectedTask = task;
    this.visibleSidebar = true;
    this.assignModifiedTasks();
  }

  onActivateTaskStatus() {
    this.allSelectedTaskStatus = Object.values(Status);;
    this.changeStatusDropdown();
  }

  changeStatusDropdown() {
    this.allSelectedTaskStatus.splice(this.allSelectedTaskStatus.indexOf(Status.N), 1);
    this.allSelectedTaskStatus.splice(this.allSelectedTaskStatus.indexOf(Status.O), 1);
    this.allSelectedTaskStatus.splice(this.allSelectedTaskStatus.indexOf(Status.R), 1);
    if (this.getStatusValue(this.selectedTask.status) == Status.P || this.getStatusValue(this.selectedTask.status) == Status.O || this.getStatusValue(this.selectedTask.status) == Status.B) {
      this.allSelectedTaskStatus.splice(this.allSelectedTaskStatus.indexOf(Status.A), 1);
    }
  }

  assignModifiedTasks() {
    // this.modifiedComments = this.selectedTask.comments;
    this.modifiedImpediments = this.selectedTask.impediments;
    this.modifiedNotes = this.selectedTask.notes;
    this.modifiedStatus = this.getStatusValue(this.selectedTask.status);
  }
  getStatusKey(value: string): string {
    const index = Object.values(Status).indexOf(value as unknown as Status);
    return Object.keys(Status)[index];
  }
  getStatusValue(key: string): string {
    const status = Object.keys(Status).indexOf(key as unknown as Status);
    let s = Object.values(Status)[status];
    return s;
  }

  updateTaskStatus(status: string) {
    const user = this.getUserFromArray();
    let id;
    if (user !== undefined) {
      id = user.id;
    }

    let newComment: Comments = {};
    this.selectedTask.status = this.getStatusKey(status);
    this.selectedTask.acceptedByUserID = this.currentUser.id;
    newComment.givenByUserId = this.currentUser.id;
    newComment.givenBy = this.currentUser;
    newComment.timestamp = new Date();

    if (status == Status.A) {
      if (id === undefined || id !== this.currentUser.id) {
        this.selectedTask.assignedUsers = [];
        this.selectedTask.assignedUsers.push(this.currentUser.id);
        let assignees: any = [];
        this.selectedTask.assignees.forEach((el) => assignees.push(el.name))
        let userUpdComment: Comments = {};
        userUpdComment.givenByUserId = this.currentUser.id;
        userUpdComment.givenBy = this.currentUser;
        userUpdComment.timestamp = new Date();
        userUpdComment.comments = "Assignee Changed :: Previous : [" + assignees + "], Current : [" + this.currentUser.name + "].";
        this.selectedTask.comments.push(userUpdComment);
      }
      newComment.comments = this.currentUser.name + " accepted the task.";
      this.selectedTask.comments.push(newComment);
      this.callUpdateTask();
    }
    else if (status == Status.P) {
      newComment.comments = this.currentUser.name + " changed the status to in progress";
      this.selectedTask.comments.push(newComment);
      this.callUpdateTask();
    }
    else if (status == Status.C && !this.isEmpty(this.modifiedComments)) {
      newComment.comments = this.currentUser.name + " marked the task as complete.";
      this.selectedTask.comments.push(newComment);
      this.selectedTask.notes = this.modifiedNotes;
      this.selectedTask.impediments = this.modifiedImpediments;
      this.callUpdateTask();
    }
    else if (status == Status.B) {
      newComment.comments = this.currentUser.name + " changed the status as blocked.";
      this.selectedTask.comments.push(newComment);
      this.selectedTask.notes = this.modifiedNotes;
      this.selectedTask.impediments = this.modifiedImpediments;
      this.callUpdateTask();
    }
    else if (status == Status.R) {
      newComment.comments = this.currentUser.name + " rejected the task.";
      this.selectedTask.comments.push(newComment);
      this.callUpdateTask();
    }

  }

  callUpdateTask() {
    this
      .tasksService
      .updateTask(this.selectedTask)
      .subscribe(
        (response) => {
          this.onActivateTaskStatus();
          if (this.selectedTask.status == this.getStatusKey(Status.C)) {
            this.onDiscard();
          }
          this.isSubmitted = false;
          this.visibleAddSidebar = false;
          this.isSaveEnable = false;
          this.messageService.add({ severity: 'success', summary: 'Success', detail: "Successfully " + status + " task [" + response.taskTitle + "]" });
        },
        (error: any) => {
          this.messageService.add({ severity: 'error', summary: 'Update Task Failed : ' + error.error.errorCode, detail: "Failed : " + error.error.errorDesc });
        }
      );
  }

  enableSave() {
    if (this.getStatusValue(this.selectedTask.status) != this.modifiedStatus) {
      this.isSaveEnable = true;
    } else {
      this.isSaveEnable = false;
    }
  }
  saveQualified(): boolean {
    if (this.isSaveEnable) {
      return (this.selectedTask.status != 'C' && this.selectedTask.status != 'R');
    }
    return false;
  }
  onDiscard() {
    this.visibleSidebar = false;
    this.isSaveEnable = false;
    this.assignModifiedTasks();
  }
  onTextChange() {
    if (this.modifiedNotes != this.selectedTask.notes) {
      this.isSaveEnable = true;
    }
    if (this.modifiedImpediments != this.selectedTask.impediments) {
      this.isSaveEnable = true;
    }
  }

  isEmpty(str: string) {
    return !str || str.trim() === '';
  }

  filterAssignees(event: any) {
    const filtered: any[] = [];
    const query = event.query;
    for (let i = 0; i < this.allDevelopers.length; i++) {
      const user = this.allDevelopers[i];
      if (user.name.toLowerCase().indexOf(query.toLowerCase()) != -1) {
        filtered.push(user);
      }
    }
    this.filteredAssignees = filtered;
  }

  addTaskList(event: any) {
    if (this.newItemTaskListDetails == "" || this.newItemTaskListDetails == undefined) {
      return;
    }
    this.newItemTaskList.taskDetails = this.newItemTaskListDetails;
    this.newItemTaskList.completedByUserId = this.userId;
    this.newItemTaskList.addedOn = new Date();
    this.newItemTaskList.isCompleted = false;
    if (event.keyCode == 13) {
      this.createdTask.taskLists.push(this.newItemTaskList);
      this.newItemTaskListDetails = undefined;
      this.newItemTaskList = {};
    }

  }

  addComment(event: any) {
    if (this.newComment == "" || this.newComment == undefined) {
      return;
    }
    this.newTaskComment.comments = this.newComment;
    this.newTaskComment.givenByUserId = this.userId;
    this.newTaskComment.givenBy = this.currentUser;
    this.newTaskComment.timestamp = new Date();
    if (event.keyCode == 13) {
      this.selectedTask.comments.splice(0, 0, this.newTaskComment);
      this.newComment = undefined;
      this.newTaskComment = {};
    }
  }
  onKeydown(event: any) {
    event.preventDefault();
  }

  completeTaskListItem(task: Task) {
    task.completedTasks = task.taskLists.filter(item => item.isCompleted).length;
    task.progress = Math.round((task.completedTasks / task.taskLists.length) * 100);
  }
  deleteTaskList(item: TaskList) {
    this.confirmationService.confirm({
      key: 'confirm_selected_variables',
      target: event.target || new EventTarget,
      message: 'Are you sure you want to delete ?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.createdTask.taskLists = this.createdTask.taskLists.filter(val => val.taskDetails !== item.taskDetails);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Task Deleted', life: 3000 });
      }
    });
  }

  getTaskPriorityImg(priority: string): string {
    const pri = Object.keys(Priority).indexOf(priority as unknown as Priority);
    let s = Object.values(Priority)[pri];
    return s.toLowerCase();
  }
  getTaskPriorityName(priority: string): string {
    const pri = Object.keys(Priority).indexOf(priority as unknown as Priority);
    let s = Object.values(Priority)[pri];
    return s;
  }

  enableRejectButton(): boolean {
    const user = this.getUserFromArray();
    let id;
    if (user !== undefined) {
      id = user.id;
    }
    if (id === this.currentUser.id && (this.selectedTask.status == 'N' || this.selectedTask.status == 'A'))
      return true;
    else {
      return false;
    }
  }

  enableAcceptButton(status: string): boolean {
    const user = this.getUserFromArray();
    let id;
    if (user !== undefined) {
      id = user.id;
    }
    // if (id === this.currentUser.id && !user.accepted &&
    if (this.getStatusValue(status) !== Status.A) {
      if ((this.getStatusValue(status) == Status.N || this.getStatusValue(status) == Status.O)) {
        return true;
      }
    }
    else {
      if (id === this.currentUser.id && !user.accepted) {
        return true;
      }
    }
    return false;
  }

  getUserFromArray(): Users {
    return this.selectedTask.assignees.find((user) => {
      return user.id === this.currentUser.id;
    });
  }

  onStatusTabChange(event: any) {
    this.activeItem = event;
  }
}
