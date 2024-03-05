import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectivityHistoryComponent } from './connectivity-history.component';

const routes: Routes = [{ path: '', component: ConnectivityHistoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectivityRoutingModule { }
