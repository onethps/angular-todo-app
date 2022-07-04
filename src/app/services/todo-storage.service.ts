import { Injectable } from '@angular/core';
import { TodoModel } from "src/app/models/todo-model";

@Injectable({
  providedIn: 'root'
})
export class TodoStorageService {

  todoItems: TodoModel[] = [
    {title: 'ang'},
    {title: 'react'},
  ];

  constructor() {}


  addTodo(title: string) {
    this.todoItems.push({title})
  }

  removeTodo(todoItemIndex:number) {
    this.todoItems.splice(todoItemIndex, 1)
  }

}
