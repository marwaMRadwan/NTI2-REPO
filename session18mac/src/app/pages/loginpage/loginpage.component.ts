import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

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
  loginflag = true
  constructor(private _user:UserService) { }

  ngOnInit(): void {
  }
onLoginSubmit(){
  console.log(this.userModal)  
  this._user.signIn(this.userModal).subscribe(data=>{
    this.loginflag=false
    console.log(data);
    localStorage.setItem('token',`${data.token_type} ${data.access_token}`)
  })
}
}
