import { Component } from '@angular/core';

@Component({
  selector: 'app-content-parent',
  template: `
    <app-content-child>
      <h4>Content Child 1 Header - From Parent</h4>
      <p #child>Content from Parent- Styled from Child</p>
    </app-content-child>

    <hr />
    <h3>Example - 2</h3>
    <examples-app></examples-app>
  `,
  styles: [],
})
export class ContentParentComponent {}
