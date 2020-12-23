import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  colors = [
    {
      color: "red",
      value: "#f00"
    },
    {
      color: "green",
      value: "#0f0"
    },
    {
      color: "blue",
      value: "#00f"
    },
    {
      color: "cyan",
      value: "#0ff"
    },
    {
      color: "magenta",
      value: "#f0f"
    },
    {
      color: "yellow",
      value: "#ff0"
    },
    {
      color: "black",
      value: "#000"
    }
  ]
  filtered = this.colors
  val = ""
  constructor() { }

  ngOnInit(): void {
  }
  filterColors(val){
    let key = val.target.value
    this.filtered = this.colors.filter(el=>{
      return el.color.includes(key)
    })
  }

}
