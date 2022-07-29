import { Component, OnInit } from '@angular/core';
import { Task } from '../app.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public taskList : Task [] = [];

  addTask(){
    this.taskList.push(new Task())
  }

  removeTask(index: number){
    if(index > -1){
      this.taskList.splice(index,1)
    }
  }
}
