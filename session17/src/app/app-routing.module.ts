import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { SingleComponent } from './pages/single/single.component';
import { ReactiveComponent } from './reactive/reactive.component';

const routes: Routes = [
  {path:"", component:AllProductsComponent},
  {path:"single/:id", component:SingleComponent},
  {path:"reactive",component:ReactiveComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
