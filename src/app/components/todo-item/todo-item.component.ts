import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoModel } from "src/app/models/todo-model";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: TodoModel = {title: ''}
  @Output() removeTodo = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteTodo() {
    this.removeTodo.emit()
  }

}
