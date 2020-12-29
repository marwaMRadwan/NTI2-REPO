import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { SingleComponent } from './pages/single/single.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ReactiveComponent } from './reactive/reactive.component'

@NgModule({
  declarations: [
    AppComponent,
    AllProductsComponent,
    SingleComponent,
    ReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
