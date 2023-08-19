import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtilityComponent } from 'src/utility/utility.component';
import { AppContainerComponent } from './components/app-container/app-container.component';

const routes: Routes = [
  { path: '', component: AppContainerComponent },
  { path: 'utilities', component: UtilityComponent },
  {
    path: 'todos',
    loadChildren: () =>
      import('src/todos/todos.module').then((mod) => mod.TodosModule),
  },
  {
    path: 'practice',
    loadChildren: () =>
      import('src/practice/practice.module').then(
        (mod) => mod.PracticeModule
      ),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
