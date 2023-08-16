import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../interfaces/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  isEditEnabled = false;
  editText: string = this.getEditText();

  @Input() todo: Todo = {
    userId: 1,
    id: 1,
    title: '',
    completed: false,
  };
  @Output() onDeleteTask: EventEmitter<number> = new EventEmitter();
  @Output() onUpdateTask: EventEmitter<Todo> = new EventEmitter();

  onUpdate(todo: Todo): void {
    this.isEditEnabled = !this.isEditEnabled;
    this.editText = this.getEditText();
    !this.isEditEnabled ? this.sendUpdate(todo) : null;
  }

  onDelete(id: number): void {
    this.onDeleteTask.emit(id);
  }

  onToggleStatus(todo: Todo): void {
    todo.completed = !todo.completed;
    this.onUpdateTask.emit(todo);
  }

  getEditText(): string {
    return this.isEditEnabled ? 'Edit' : 'Update';
  }

  sendUpdate(todo: Todo): void {
    this.onUpdateTask.emit(todo);
  }
}
