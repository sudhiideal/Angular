import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AppComponent } from './app.component';
import { UtilityComponent } from 'src/header/utility.component';
// import { TodoContainerComponent } from 'src/todos/components/todo-container/todo-container.component';
import { AppContainerComponent } from './components/app-container/app-container.component';

const routes: Routes = [
  { path: '', component: AppContainerComponent },
  { path: 'practice', component: UtilityComponent },
  // { path: 'todos', component: TodoContainerComponent },
  {
    path: 'todos',
    loadChildren: () =>
      import('src/todos/todos.module').then((mod) => mod.TodosModule),
  },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
