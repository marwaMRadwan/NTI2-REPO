import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
   @Output() c:EventEmitter<number> = new EventEmitter()
   @Input () x :number
  //b = 5
  constructor() { }

  ngOnInit(): void {
  }
  xx(){
    this.x = 5
    this.c.emit(this.x)
  }
  // myFun(){
    // this.x = 5
    // this.c.emit(this.x)
  //   console.log('hello')
  // }
}
