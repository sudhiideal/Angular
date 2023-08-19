import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private canShow: boolean = false;
  subject: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {}

  onToggle(): void {
    this.canShow = !this.canShow;
    this.subject.next(this.canShow);
  }

  onAdd(): Observable<boolean> {
    return this.subject;
  }
}
