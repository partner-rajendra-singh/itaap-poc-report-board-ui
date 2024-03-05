import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestConnectivityComponent } from './test-connectivity.component';

const routes: Routes = [{ path: '', component: TestConnectivityComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestConnectivityRoutingModule { }
