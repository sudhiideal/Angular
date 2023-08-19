import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticeRoutingModule } from './practice-routing.module';
import { declarations } from './declaration';

@NgModule({
  declarations: declarations,
  imports: [CommonModule, PracticeRoutingModule],
})
export class PracticeModule {}
