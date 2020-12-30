import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
allCoupons:any
  constructor(private _user:UserService) {
    this._user.couponOfTheDay().subscribe( data => {
      this.allCoupons=data.data[0]
      console.log(data)
    })
    this._user.myCart().subscribe(data=>{
      console.log(data)
    })
   }

  ngOnInit(): void {
  }

}
