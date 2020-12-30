import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  userModal = {
    email:"",
    password:"",
    type: 0
  }
  constructor() { }

  ngOnInit(): void {
  }
onLoginSubmit(){
  console.log(this.userModal)  
}
}
