import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UtilityComponent } from './utility.component';
import { TextInput } from './textInput/textInput.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UtilityComponent, TextInput],
  imports: [BrowserModule, FormsModule],
  providers: [],
  exports: [UtilityComponent],
})
export class UtilityModule {}
