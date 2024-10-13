import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit {
  events: Event[] = [];
  displayedColumns: string[] = ['id', 'name', 'location', 'date', 'accion'];
  columnAliases: { [key: string]: string } = {
    id: 'ID',
    name: 'Nombre',
    location: 'Locación',
    date: 'Fecha',
    accion: 'Acción',
  };

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.getEvents();
    //this.loadMockEvents();
  }
  // private loadMockEvents() {
  //   this.events = [
  //     {
  //       id: 1,
  //       name: 'Concierto de Rock',
  //       location: 'Estadio Nacional',
  //       date: '2024-10-01',
  //     },
  //     {
  //       id: 2,
  //       name: 'Obra de Teatro',
  //       location: 'Teatro Municipal',
  //       date: '2024-11-05',
  //     },
  //     {
  //       id: 3,
  //       name: 'Festival de Jazz',
  //       location: 'Parque Central',
  //       date: '2024-12-12',
  //     },
  //   ];
  // }

  private getEvents() {
    this.eventService.getEvents().subscribe((data) => {
      this.events = data;
    });
  }

  deleteEvent(id: number) {
    this.eventService.deleteEvent(id).subscribe((data) => {
      this.getEvents();
    });
  }
}
