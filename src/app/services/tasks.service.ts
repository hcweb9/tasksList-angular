import { Injectable } from '@angular/core';
import { json } from 'stream/consumers';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

private localStorageKey = 'tasksList';

getTasks():string[] {
  return JSON.parse(localStorage.getItem(this.localStorageKey) as string) || [];
}

 addTask(task: string) {
  const tasks = this.getTasks();
  tasks.push(task);
  localStorage.setItem(this.localStorageKey, JSON.stringify(tasks))

}


removeTask(index: number) {
  const tasks = this.getTasks();
  tasks.splice(index, 1);
  localStorage.setItem(this.localStorageKey, JSON.stringify(tasks))
}


}
