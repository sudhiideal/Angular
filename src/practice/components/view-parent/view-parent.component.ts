import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-view-parent',
  templateUrl: './view-parent.component.html',
  styleUrls: ['./view-parent.component.css'],
})
export class ViewParentComponent implements AfterViewInit {
  @ViewChild('child') childRef!: ChildComponent;

  ngAfterViewInit(): void {
    console.log(this.childRef);
  }

  handleIncrement() {
    this.childRef.increment();
  }
  handleDecrement() {
    this.childRef.decrement();
  }
}
