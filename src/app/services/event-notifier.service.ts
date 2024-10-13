import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventNotifierService {
  private eventAddedSource = new Subject<void>();
  eventAdded$ = this.eventAddedSource.asObservable();

  notifyEventAdded(): void {
    this.eventAddedSource.next();
  }
}
