import { Component, Input, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import {ActivatedRoute, Router} from '@angular/router'
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  @Input() type:boolean
  @Input() data:any
  constructor(private _task:TasksService, private router:Router, private _route:ActivatedRoute) { }
  ngOnInit(): void {
  }
  editData(data){
    console.log(this._route.snapshot.paramMap.get('id'))
    this._task.editTask(data.value, this._route.snapshot.paramMap.get('id'))
    this.router.navigateByUrl('allTasks')
  }
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
