import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public IMGURL = "https://backtest.achilleseg.com/"
  MAINURL ="https://backtest.achilleseg.com/api/"
  constructor(private _http:HttpClient) { }

  showAllProducts():Observable<any>{
    return this._http.get(`${this.MAINURL}ProductsUpdated?lang_id=1&page=0&limit=12`)
  }
  showSingleProduct(id):Observable<any>{
return this._http.get(`${this.MAINURL}ProductsUpdated?lang_id=1&page=0&limit=12&product_id=${id}`)

  }
}
