import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userData ={
    "firstName":"", 
    "email":"",  
    "gender" :"", 
    "lastName" :"", 
    "password" :"", 
    "phone" :"", 
    "re_password" :"", 
    "type":0
  }

  constructor( private _user: UserService) { }

  ngOnInit(): void {
  }
  register(user){
    if(user.valid){
      console.log(this.userData)
      this._user.registerUser(this.userData).subscribe(data=>{
        console.log(data)
      })
  
    }
  }
}
