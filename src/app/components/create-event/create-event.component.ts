import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { AppEvent } from '../../models/event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  event: AppEvent = new AppEvent();

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit(): void {
  }

  saveEvent() {
    this.eventService.createEvent(this.event).subscribe(data => {
      console.log(data);
      this.goToEventList();
    }, error => console.log(error));
  }

  goToEventList() {
    this.router.navigate(['/events']);
  }

  onSubmit() {
    this.saveEvent();
  }
}
