import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-template-driven',
  templateUrl: './form-template-driven.component.html',
  styleUrls: ['./form-template-driven.component.css']
})
export class FormTemplateDrivenComponent implements OnInit {
data:any = ""
  constructor() { }

  ngOnInit(): void {
  }
getData(obj){
console.log(obj.value)
this.data=obj
}
}
