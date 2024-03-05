import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AzureVariableComponent } from './azure-variable.component';

const routes: Routes = [{ path: '', component: AzureVariableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AzureVariableRoutingModule { }
