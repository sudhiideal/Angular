import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string = '';
  @Input() color: string = '';

  @Output() btnClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.color = this.color ? this.color : '#1da1f2';
  }

  onClick() {
    this.btnClick.emit();
  }
}
