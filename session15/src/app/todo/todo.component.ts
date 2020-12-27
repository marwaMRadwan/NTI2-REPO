import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  tasks_types=[
    'type 1', 'type 2', 'type 3', 'type 4', 'type 5' 
  ]
  todos = []
  constructor() { }

  ngOnInit(): void {
  }
  addNewTask(data){
    this.todos.push(data)    
  }
}
