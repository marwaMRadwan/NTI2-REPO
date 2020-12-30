import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
// lang = 1||4 
defaultURL ="https://backtest.achilleseg.com/api"
public imgURL = "https://backtest.achilleseg.com/"
lang: string ='en'
  constructor(private _http:HttpClient) {
    // this.lang = localStorage.getItem('currentLanguage')   //ar en
    // if(this.lang=="ar") this.lang = "4"
    // else this.lang=1
    this.lang = localStorage.getItem('currentLanguage') || "1"
   }

   signUp(obj:any):Observable<any>{
    return this._http.post(`${this.defaultURL}/auth/signup`,obj)
   }

   signIn(obj:any):Observable<any>{
    return this._http.post(`${this.defaultURL}/auth/loginApi`,obj)
   }

   authMe():Observable<any>{
    return this._http.post(`${this.defaultURL}/auth/me`,null)
   }

   logOut():Observable<any>{
    return this._http.get(`${this.defaultURL}/auth/logout_api`)
   }
   couponOfTheDay():Observable<any>{
     return this._http.get(`${this.defaultURL}/CopounOfTheDayApi`)
   }
   myCart():Observable<any>{
     return this._http.post(`${this.defaultURL}/MyCart`,{lang_id:1})
   }
}
