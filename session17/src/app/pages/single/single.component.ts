import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  product :any = null
  attributes =[]
  constructor(private _pro:ProductsService, private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this._pro.showSingleProduct(this._route.snapshot.paramMap.get('id')).subscribe(data=>{
this.product=data.result.product_data[0]
this.attributes=data.result.product_data[0].attributes;

    })
  }

}
