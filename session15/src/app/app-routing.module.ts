import { templateJitUrl } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { FormTemplateDrivenComponent } from './form-template-driven/form-template-driven.component';

const routes: Routes = [
  {path:'parent', component:Comp1Component},
  {path:'form', component:FormTemplateDrivenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
