import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL ="http://localhost:3000/"
  constructor(private _http:HttpClient) { }

  registerUser(obj){
return this._http.post(`${this.URL}addUser`,obj)
  }
}
