import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  model={
    image:String
  }
  myImg : File 
  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
  }
  imageUpload(e:any){
    this.myImg = e.target.files[0]
  }

  handelSubmit(){
//headers.append('Content-Type','multipart/form-data')
const myData = new FormData()
myData.append('upload',this.myImg,this.myImg.name)
    this._http.post('http://localhost:3000/me/uploadImg2', myData,{
      reportProgress:true,
      observe:'events'
    }).subscribe(data=>
console.log(data))
  }
}
