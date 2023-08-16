import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.fetchTodos();
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodos(id).subscribe(() => {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    });
  }

  fetchTodos(): void {
    this.todoService
      .fetchTodos()
      .subscribe((data) => (this.todos = data));
  }

  updateTodo(todo: Todo): void {
    this.todoService.updateTodos(todo).subscribe((data) => {
      console.log(data);
    });
  }

  handleTodoAdd(todo: Todo): void {
    this.todoService.addTodos(todo).subscribe((newTodo) => {
      this.todos.push(newTodo);
    });
  }
}
