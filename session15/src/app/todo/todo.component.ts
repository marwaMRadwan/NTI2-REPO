import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tasks } from '../interfaces/tasks';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  tasks_types=[
    'type 1', 'type 2', 'type 3', 'type 4', 'type 5' 
  ]
  todos: Tasks[] = []
  data :Tasks ={
    taskTitle:"marwa",
    taskStatus:true,
    taskType:'type 2'
  }
  constructor() { }

  ngOnInit(): void {
  }
  addNewTask(dataform: NgForm){
     this.todos.push(this.data) 
    // console.log(this.todos)
    // //this.data = dataform.value
    console.log(this.data)
   dataform.resetForm()
  }
}
