import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignOutComponent } from './signout.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: SignOutComponent }
    ])],
    exports: [RouterModule]
})
export class SignOutRoutingModule { }
