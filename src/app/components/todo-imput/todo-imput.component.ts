import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-imput',
  templateUrl: './todo-imput.component.html',
  styleUrls: ['./todo-imput.component.scss']
})
export class TodoImputComponent implements OnInit {
  todoTitle: string = '';

  @Output() todoTitleSubmit = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }


  submitTodo() {
    this.todoTitleSubmit.emit(this.todoTitle)
  }



}
