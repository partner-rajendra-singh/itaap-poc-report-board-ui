import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'builds', data: { breadcrumb: 'Builds' }, loadChildren: () => import('./builds/builds-routing.module').then(m => m.BuildsRoutingModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeploymentRoutingModule { }
