import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/intefaces/data'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  d : Data[]= [
    {id:1, name:'task 1',content:'content 1'},
    {id:2, name:'task 2',content:'content 2'},
    {id:3, name:'task 3',content:'content 3'},
    {id:4, name:'task 4',content:'content 4'},
    {id:5, name:'task 5',content:'content 5'},
    {id:6, name:'task 6',content:'content 6'}
  ]
  ourContent ="<p>hello</p><h4>title</h4>"
  c = "red"
  inputData = ""
  twoWayData = ""
  ngModelData =""
  constructor() { }
  ngOnInit(): void {
  }
  clickMe(){
    console.log('hi there')
  }
  inputMe(x){
    console.log(x.target.value)
    this.inputData = x.target.value
  }
}
