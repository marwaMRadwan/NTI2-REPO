import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  myForm = new FormGroup({
    fname: new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(15), Validators.email]),
    lname: new FormControl(''),
    gender: new FormControl('')
  })
  constructor() { }

  ngOnInit(): void {
  }

  formHandel(){
    console.log(this.myForm.value);
    console.log(this.myForm.valid);  
   console.log(this.myForm.controls.fname.errors);
  }
  get fname(){ return this.myForm.get('fname')}
}
