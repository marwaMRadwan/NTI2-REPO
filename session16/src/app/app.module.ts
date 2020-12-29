import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './pages/tasks/add/add.component';
import { EditComponent } from './pages/tasks/edit/edit.component';
import { ShowComponent } from './pages/tasks/show/show.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TaskFormComponent } from './shared/task-form/task-form.component';
import { LoginFormComponent } from './shared/login-form/login-form.component';
import { Err404Component } from './pages/err404/err404.component';
import { RegisterComponent } from './pages/user/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditComponent,
    ShowComponent,
    WelcomeComponent,
    NavbarComponent,
    FooterComponent,
    TaskFormComponent,
    LoginFormComponent,
    Err404Component,
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
