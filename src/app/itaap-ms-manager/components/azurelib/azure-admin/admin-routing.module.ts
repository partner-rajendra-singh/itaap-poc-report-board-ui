import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AzureAdminComponent } from './azure-admin.component';

const routes: Routes = [{ path: '', component: AzureAdminComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
