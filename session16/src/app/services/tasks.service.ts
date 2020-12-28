import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class TasksService {
  Tasks = [
    {title:'a', type:'t 1', status:true, content:'c 1'},
    {title:'a', type:'t 1', status:false, content:'c 1'}
  ]

  constructor(private _http:HttpClient) { }

  allTasks(){
    return this.Tasks
  }
}
