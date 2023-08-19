import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PracticeComponent } from './components/practice/practice.component';
import { ViewParentComponent } from './components/view-parent/view-parent.component';

const practiceRoutes: Routes = [
  {
    path: '',
    component: PracticeComponent,
    children: [{ path: 'viewchild', component: ViewParentComponent }],
  },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(practiceRoutes)],
  exports: [RouterModule],
})
export class PracticeRoutingModule {}
