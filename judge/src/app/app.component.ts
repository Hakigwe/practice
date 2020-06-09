import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'judge';

  tasks = [{name: 'David', description: 'Hi'}];

  onCreateTask(newTask: { taskName: string, taskDesc: string}){
    this.tasks.push({
      name: newTask.taskName,
      description: newTask.taskDesc });
  }
}
