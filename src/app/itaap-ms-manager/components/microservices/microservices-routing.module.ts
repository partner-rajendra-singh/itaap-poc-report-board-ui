import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MicroservicesComponent } from './microservices.component';

const routes: Routes = [
  {
    path: 'lists',
    component: MicroservicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MicroservicesRoutingModule { }
