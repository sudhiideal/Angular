import { Component, OnDestroy, OnInit } from '@angular/core';
import { UiService } from 'src/todos/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  appHeader = 'Todo List';
  subscription: Subscription = new Subscription();
  canShow: boolean = false;

  constructor(private uiService: UiService) {}

  ngOnInit(): void {
    this.subscription = this.uiService
      .onAdd()
      .subscribe((data: boolean) => {
        this.canShow = data;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onAdd() {
    this.uiService.onToggle();
  }
}
