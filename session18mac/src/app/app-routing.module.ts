import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"login", component:LoginpageComponent},
  {path:"x/:i/:x",component:TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
