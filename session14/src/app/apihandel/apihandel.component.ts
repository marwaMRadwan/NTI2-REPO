import { Component, OnInit, Input } from '@angular/core';
import {FirstService} from 'src/app/services/first.service'
@Component({
  selector: 'app-apihandel',
  templateUrl: './apihandel.component.html',
  styleUrls: ['./apihandel.component.css']
})
export class ApihandelComponent implements OnInit {
  @Input() c:number
  photos : any[] = []
  constructor(private _firstService:FirstService) {
    this._firstService.getData().subscribe(data=>{
      console.log(data)
      this.photos = data
    })
       
   }

  ngOnInit(): void {
  }

}
