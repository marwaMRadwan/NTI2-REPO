import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import { TasksService } from 'src/app/services/tasks.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  type=false
  data:any
  id
  constructor(private _route:ActivatedRoute, private _task:TasksService) { 
    // this._route.params.subscribe(x=>console.log(x.id))

    // console.log(this._route.snapshot.paramMap.get('id'))
    this.id = this._route.snapshot.paramMap.get('id')
    this.data = _task.getSingleTask(this.id)
  }

  ngOnInit(): void {
  }

}
