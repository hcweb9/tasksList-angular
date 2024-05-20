import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  tasksList: string[] = [];
  newTask: string = '';

  private _tasksService = inject(TasksService);

  ngOnInit(): void {
    this.tasksList = this._tasksService.getTasks();
  }

  addTask() {
    this._tasksService.addTask(this.newTask);
    this.newTask = '';
    this.tasksList = this._tasksService.getTasks();
  }

  removeTask(index: number) {
    this._tasksService.removeTask(index);
    this.tasksList = this._tasksService.getTasks();
  }
}
