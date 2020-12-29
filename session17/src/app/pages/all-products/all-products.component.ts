import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  
allData
  constructor(public _pro:ProductsService) { }

  ngOnInit(): void {
    this._pro.showAllProducts().subscribe(data=>
{      this.allData = data.result.product_data;
      console.log(data.result.product_data);
}      
      )
  }

}
