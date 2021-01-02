import { Component, OnInit } from '@angular/core';
import { XService } from '../x.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public global:XService) {
    global.t = false
   }

  ngOnInit(): void {
  }

}
