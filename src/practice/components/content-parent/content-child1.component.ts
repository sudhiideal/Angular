import {
  Component,
  ContentChild,
  Directive,
  Input,
} from '@angular/core';

@Directive({ selector: 'panes' })
export class Panes {
  @Input() id!: string;
}

@Component({
  selector: 'tab',
  template: ` <div>pane: {{ panes.id }}</div> `,
})
export class Tab {
  @ContentChild(Panes) panes!: Panes;
}

@Component({
  selector: 'examples-app',
  template: `
    <tab>
      <panes id="1" *ngIf="shouldShow"></panes>
      <panes id="2" *ngIf="!shouldShow"></panes>
    </tab>

    <button (click)="toggle()">Toggle</button>
  `,
})
export class ContentChildComp {
  shouldShow = true;

  toggle() {
    this.shouldShow = !this.shouldShow;
  }
}
