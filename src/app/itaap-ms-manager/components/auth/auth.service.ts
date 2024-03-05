import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpError: HttpErrorResponse | any;
  userName: string = "";
  userEmail: string = "";
  visibility: string = "hidden";

  constructor(private msalAuthService: MsalService, private router: Router) { }

  login() {
    /*this.aut9hService.loginRedirect()*/
    sessionStorage.clear();
    this.msalAuthService.loginPopup()
      .subscribe({
        next: (result) => {
          console.log(result);
          this.setUserDisplay(result);
          this.router.navigateByUrl('/home/dashboard');
        },
        error: (error) => {
          console.log(error);
          this.router.navigateByUrl('/auth/access')
        }
      });
  }

  logout(event: any) { // Add log out function here
    this.msalAuthService.logoutPopup({
      mainWindowRedirectUri: "/"
    }).subscribe({
      complete() {
        sessionStorage.clear();
        event.currentTarget.style.visibility = 'hidden';
      }
      });
    
  }

  setUserDisplay(authority: any) {
    if (authority.account.name) {
      this.userName = authority.account.name;
    }
    else {
      this.userName = authority.account.username;
    }
    this.userEmail = authority.account.username;
    sessionStorage.setItem("userName", this.userName);
    sessionStorage.setItem("userEmail", this.userEmail);
    sessionStorage.setItem("loggedIn", "true");
  }
}
