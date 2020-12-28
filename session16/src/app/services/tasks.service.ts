import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class TasksService {
  Tasks = [
    {title:'a', type:'t 1', status:true, content:'c 1'},
    {title:'b', type:'t 2', status:false, content:'c 2'}
  ]

  constructor(private _http:HttpClient) { }

  allTasks(){
    return this.Tasks
  }
  addTask(task){
    this.Tasks.push(task)
    console.log(this.Tasks)
  }
}
