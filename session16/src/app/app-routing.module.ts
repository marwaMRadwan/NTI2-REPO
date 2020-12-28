import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Err404Component } from './pages/err404/err404.component';
import { AddComponent } from './pages/tasks/add/add.component';
import { EditComponent } from './pages/tasks/edit/edit.component';
import { ShowComponent } from './pages/tasks/show/show.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:"allTasks",component:ShowComponent},
  {path:"editTask/:id",component:EditComponent},
  {path:"addTask",component:AddComponent},
  {path:'404',component:Err404Component},
  {path:'**',redirectTo:'/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
