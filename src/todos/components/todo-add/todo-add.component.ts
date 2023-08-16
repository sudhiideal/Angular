import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Todo } from 'src/todos/interfaces/Todo';
import { UiService } from 'src/todos/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent implements OnInit, OnDestroy {
  @Output() onAdd: EventEmitter<Todo> = new EventEmitter();
  subscription: Subscription = new Subscription();

  title: string = '';
  completed: boolean = false;
  isFormValid: boolean = true;
  canShowForm: boolean = false;

  constructor(private uiService: UiService) {}

  ngOnInit(): void {
    this.subscription = this.uiService.onAdd().subscribe((data) => {
      this.canShowForm = data;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit(): void {
    if (!this.title) {
      console.log('here', this.title);
      this.isFormValid = false;
      return;
    }

    const newTodo = {
      id: Math.round(Math.random() * 10 * Math.random() * 100),
      userId: 1,
      completed: this.completed,
      title: this.title,
    };

    this.onAdd.emit(newTodo);

    this.resetForm();
  }

  resetForm(): void {
    this.isFormValid = true;
    this.title = '';
    this.completed = false;
  }
}
