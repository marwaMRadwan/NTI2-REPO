import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { UploadComponent } from './pages/upload/upload.component';
import { UserGuard } from './user.guard';

const routes: Routes = [
  {path:"", component: UploadComponent},
  {path:"c2", component:C2Component, canActivate:[UserGuard]},
  {path:"login", component:C1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
