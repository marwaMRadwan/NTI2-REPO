import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loginflag: boolean= true;
/*
firstName, lastName, gender, email, password, re_password, type, phone
*/
  constructor(private _user:UserService, private router:Router) { }
userModel= new FormGroup({
  firstName:new FormControl(""),
  lastName:new FormControl(""),
  gender:new FormControl(""),
  email:new FormControl(""),
  password:new FormControl(""),
  re_password:new FormControl(""),
  phone:new FormControl("")
})
  ngOnInit(): void {
  }
onSubmitRegister(){
  this.userModel.value.type = 0
  this._user.signUp(this.userModel.value).subscribe(data=>{
    console.log(data)
  },()=>{}
  ,()=>{
 
    this._user.signIn(this.userModel).subscribe(data=>{
      this.loginflag=false
      console.log(data);
      localStorage.setItem('token',`${data.token_type} ${data.access_token}`)
    },()=>{
      //problem
      console.log('ay 7aga byza')
    }
      ,()=>{
        //done
        console.log('ay 7aga')
        this.router.navigateByUrl("/")
      })      
    })
  }
}

