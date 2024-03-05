import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'history', data: { breadcrumb: 'Connection' }, loadChildren: () => import('./connectivity-history/connectivity-routing.module').then(m => m.ConnectivityRoutingModule) },
  { path: 'test', data: { breadcrumb: 'Test' }, loadChildren: () => import('./test-connectivity/test-connectivity-routing.module').then(m => m.TestConnectivityRoutingModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KubernetesRoutingModule { }
