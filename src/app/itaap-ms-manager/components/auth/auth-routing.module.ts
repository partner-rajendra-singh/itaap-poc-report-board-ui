import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'error', loadChildren: () => import('./error/error-routing.module').then(m => m.ErrorRoutingModule) },
    { path: 'access', loadChildren: () => import('./access/access-routing.module').then(m => m.AccessRoutingModule) },
    { path: 'login', loadChildren: () => import('./login/login-routing.module').then(m => m.LoginRoutingModule) },
    { path: 'signout', loadChildren: () => import('./signout/signout-routing.module').then(m => m.SignOutRoutingModule) },
    { path: '**', redirectTo: '/notfound' }
  ])],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
