import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadComponent } from './pages/upload/upload.component';
import {HttpClientModule} from '@angular/common/http';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { RegisterComponent } from './register/register.component'
@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    C1Component,
    C2Component,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
