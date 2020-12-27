import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL = "http://backtest.achilleseg.com/api/"
  constructor(private _http: HttpClient) { }

  registerUser(data:any){
   return this._http.post(`${this.URL}auth/signup`,data)
  }
}
