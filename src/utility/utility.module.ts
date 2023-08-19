import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UtilityComponent } from './utility.component';
import { TextInput } from './textInput/textInput.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [UtilityComponent, TextInput, NavbarComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  exports: [UtilityComponent, NavbarComponent],
})
export class UtilityModule {}
