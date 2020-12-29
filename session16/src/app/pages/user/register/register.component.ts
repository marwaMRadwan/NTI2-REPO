import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _user:UserService) { }

  ngOnInit(): void {
  }
  registerUser(register){
this._user.registerUser(register.value).subscribe(data=>{
  console.log(data)
})
  }

}
