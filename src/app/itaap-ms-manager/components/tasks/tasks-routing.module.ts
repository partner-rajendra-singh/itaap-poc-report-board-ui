import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'lists', data: { breadcrumb: 'Tasks' }, loadChildren: () => import('./todo/todo-routing.module').then(m => m.TodoRoutingModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
