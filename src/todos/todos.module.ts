import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TodoRoutingModule } from './todo-routing.module';
import { FormsModule } from '@angular/forms';
import { TodoContainerComponent } from './components/todo-container/todo-container.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { TodoService } from './services/todo.service';

@NgModule({
  declarations: [
    TodoContainerComponent,
    HeaderComponent,
    ButtonComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoAddComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    TodoRoutingModule,
  ],
  exports: [TodoContainerComponent],
})
export class TodosModule {}
