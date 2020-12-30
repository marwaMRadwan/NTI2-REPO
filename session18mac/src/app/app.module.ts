import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { HomeComponent } from './pages/home/home.component';
import { UserService } from './services/user.service';
import { UserInterceptor } from './user.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    {
     provide:HTTP_INTERCEPTORS,
     useClass:UserInterceptor,
     multi:true

    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
