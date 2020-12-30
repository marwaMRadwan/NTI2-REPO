import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"login", component:LoginpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
