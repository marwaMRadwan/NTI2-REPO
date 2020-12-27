import { registerLocaleData } from '@angular/common';
import { templateJitUrl } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { FormTemplateDrivenComponent } from './form-template-driven/form-template-driven.component';
import { RegisterComponent } from './register/register.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path:'parent', component:Comp1Component},
  {path:'form', component:FormTemplateDrivenComponent},
  {path: 'todo', component:TodoComponent},
  {path:'register', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
