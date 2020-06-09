import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.sass']
})
export class CockpitComponent implements OnInit {
  @Output() taskCreated = new EventEmitter<{taskName: string, taskDesc: string}>() ;
  newTask = '';
  newDesc = '';
  constructor() { }

  ngOnInit(): void {
  }
  newTaskCreated(){
    this.taskCreated.emit({
      taskName: this.newTask,
      taskDesc: this.newDesc
    });
  }
}
