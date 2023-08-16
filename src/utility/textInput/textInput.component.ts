import { Component } from '@angular/core';

@Component({
  selector: 'text-input',
  templateUrl: 'textInput.component.html',
  styleUrls: ['textInput.component.css'],
})
export class TextInput {
  enteredText = 'Please enter some text';
  isDisabled = true;
  twoWayText = '2 way data binding';

  constructor() {
    setTimeout(() => {
      this.enteredText = '';
      this.isDisabled = false;
    }, 5000);
  }

  onTextEnter(event: Event) {
    this.enteredText = (<HTMLInputElement>event.target).value;
  }
}
