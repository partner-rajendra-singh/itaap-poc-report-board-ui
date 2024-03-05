import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-signout',
    templateUrl: './signout.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class SignOutComponent {

  valCheck: string[] = ['remember'];
  password!: string;

  constructor(public authService: AuthService) { }

  
}
