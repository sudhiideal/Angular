import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<h4>A Child Component with Increment Logic</h4>
    {{ counter }}`,
})
export class ChildComponent {
  counter: number = 0;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}
