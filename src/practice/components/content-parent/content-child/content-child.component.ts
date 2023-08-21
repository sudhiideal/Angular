import {
  AfterContentInit,
  Component,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-content-child',
  template: ` <ng-content></ng-content> `,
  styles: [],
})
export class ContentChildComponent implements AfterContentInit {
  @ContentChild('child', { read: ElementRef })
  childContent!: ElementRef<HTMLParagraphElement>;

  ngAfterContentInit(): void {
    this.childContent.nativeElement.setAttribute(
      'style',
      'color:green'
    );
  }
}
{
}
