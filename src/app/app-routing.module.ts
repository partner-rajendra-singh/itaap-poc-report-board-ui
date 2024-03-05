import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainAppLayoutComponent } from './layout/main.app.layout.component';

const routes: Routes = [
  {
    path: '', component: MainAppLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./itaap-ms-manager/components/dashboard/dashboard-routing.module').then(m => m.DashboardRoutingModule) },
      { path: 'home', loadChildren: () => import('./itaap-ms-manager/components/dashboard/dashboard-routing.module').then(m => m.DashboardRoutingModule) },
      { path: 'home', loadChildren: () => import('./itaap-ms-manager/components/my-requests/my-requests-routing.module').then(m => m.MyRequestsRoutingModule) },
      { path: 'add', loadChildren: () => import('./itaap-ms-manager/components/add-data/add-data-routing.module').then(m => m.AddDataRoutingModule) },
      { path: 'library', loadChildren: () => import('./itaap-ms-manager/components/azurelib/azurelib-routing.module').then(m => m.AzurelibRoutingModule) },
      { path: 'microservices', loadChildren: () => import('./itaap-ms-manager/components/microservices/microservices-routing.module').then(m => m.MicroservicesRoutingModule) },
      { path: 'tasks', loadChildren: () => import('./itaap-ms-manager/components/tasks/tasks-routing.module').then(m => m.TasksRoutingModule) },
      { path: 'deployment', loadChildren: () => import('./itaap-ms-manager/components/deployment/deployment-routing.module').then(m => m.DeploymentRoutingModule) },
      { path: 'connectivity', loadChildren: () => import('./itaap-ms-manager/components/kubernetes/kubernetes-routing.module').then(m => m.KubernetesRoutingModule) }
    ]
  },
  { path: 'auth', loadChildren: () => import('./itaap-ms-manager/components/auth/auth-routing.module').then(m => m.AuthRoutingModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
