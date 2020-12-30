import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private _user:UserService, private router:Router) { 
    
  }

  ngOnInit(): void {
  }
onLoginSubmit(){
  console.log(this.userModal)  
  this._user.signIn(this.userModal).subscribe(data=>{
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
}
}
