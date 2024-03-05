import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'variable', data: { breadcrumb: 'Library' }, loadChildren: () => import('./azure-variable/azure-variable-routing.module').then(m => m.AzureVariableRoutingModule) },
  { path: 'admin', data: { breadcrumb: 'Library' }, loadChildren: () => import('./azure-admin/admin-routing.module').then(m => m.AdminRoutingModule) },
  { path: 'compare', data: { breadcrumb: 'Library' }, loadChildren: () => import('./compare/compare-routing.module').then(m => m.CompareRoutingModule) }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AzurelibRoutingModule { }
