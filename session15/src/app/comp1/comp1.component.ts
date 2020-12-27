import { Component, OnInit, ViewChild } from '@angular/core';
import { Comp2Component } from '../comp2/comp2.component';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  constructor() { }
 // @ViewChild(Comp2Component) c: Comp2Component
  ngOnInit(): void {
  //  this.x()
  }
// x(){
//   this.c.myFun()
// }

z(n){
console.log(n)
}
}
