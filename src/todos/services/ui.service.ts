import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import {} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private canShow: boolean = false;
  subject: Subject<boolean> = new Subject();

  constructor() {}

  onToggle(): void {
    this.canShow = !this.canShow;
    this.subject.next(this.canShow);
  }

  onAdd(): Observable<boolean> {
    return this.subject;
  }
}
