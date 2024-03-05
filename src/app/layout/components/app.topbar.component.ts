import { Component, ElementRef, ViewChild } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Users } from '../../itaap-ms-manager/api/models';
import { AuthService } from '../../itaap-ms-manager/components/auth/auth.service';
import { TasksService } from '../../itaap-ms-manager/components/tasks/tasks.service';
import { TodoComponent } from '../../itaap-ms-manager/components/tasks/todo/todo.component';
import { LayoutService } from "../service/app.layout.service";

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html',
  providers: [TodoComponent, MessageService, ConfirmationService]
})
export class AppTopBarComponent {

  items!: MenuItem[];
  allDevelopers: Users[];
  user: Users;

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  userName: string | any = "";
  userEmail: string | any = "";
  constructor(public layoutService: LayoutService,
    public authService: AuthService,
    public tasksService: TasksService,
    public todoComponent: TodoComponent) {
    /*this.userName = sessionStorage.getItem("userName");
    this.userEmail = sessionStorage.getItem("userEmail");*/

    this
      .tasksService
      .getAllUsers()
      .subscribe(
        (response) => {
          this.allDevelopers = response;
          for (let i = 0; i < this.allDevelopers.length; i++) {
            if (this.allDevelopers[i].id == Number.parseInt(sessionStorage.getItem("loggedInUser")))
              this.userName = this.allDevelopers[i].name;
          }
        },
        (error) => {
          console.log(error);
        });
  }
  setUserId() {
    sessionStorage.setItem("loggedInUserDetails", JSON.stringify(this.user));
    sessionStorage.setItem("loggedInUser", this.user.id.toString());
    window.location.reload();
    /*this.todoComponent.ngOnInit();*/
  }
}
