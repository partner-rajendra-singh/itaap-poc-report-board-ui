import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyRequestsComponent } from './my-requests.component';

const routes: Routes = [
  {
    path: 'my-requests',
    component: MyRequestsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyRequestsRoutingModule {
  
 }
