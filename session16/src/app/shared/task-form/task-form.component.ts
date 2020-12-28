import { Component, Input, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  @Input() type:boolean
  data = { title:"", content:"", type:"", status:false}
  constructor(private _task:TasksService, private router:Router) { }
  ngOnInit(): void {
  }
  editData(data){console.log('edit');}
  addData(data){
    if(data.valid){
      this._task.addTask(data.value)
      this.router.navigateByUrl('allTasks')
    }
    else{
      console.log('invalid data');
      
    }
  }
}
