import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  type = true
  data = { title:"", content:"", type:"", status:false}

  constructor() { }

  ngOnInit(): void {
  }

}
