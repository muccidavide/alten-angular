import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: ''
  },
  {
    component: TodoListComponent,
    path: 'todos'
  },
  {
    component: UserListComponent,
    path: 'users'
  },
  {
    component: UserInfoComponent,
    path: 'users/:id'
  },
  {
    component: NotFoundComponent,
    path: '**'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
