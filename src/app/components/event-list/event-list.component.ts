import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { AppEvent } from '../../models/event';
import { EventDialogComponent } from '../dialog-content/dialog-content.component';
import { MatDialog } from '@angular/material/dialog';
import { EventNotifierService } from '../../services/event-notifier.service';  // Importa el servicio de notificación


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit {
  events: AppEvent[] = [];
  displayedColumns: string[] = ['id', 'name', 'location', 'date', 'accion'];
  columnAliases: { [key: string]: string } = {
    id: 'ID',
    name: 'Nombre',
    location: 'Locación',
    date: 'Fecha',
    accion: 'Acción',
  };

  constructor(private eventService: EventService, public dialog: MatDialog, private eventNotifier: EventNotifierService 
  ) { }

  ngOnInit(): void {
    this.getEvents();
    //this.loadMockEvents();

     // Suscribirse a las notificaciones para refrescar la lista de eventos
     this.eventNotifier.eventAdded$.subscribe(() => {
      this.getEvents(); // Actualizar la lista de eventos
    });

  }
  
  private getEvents() {
    this.eventService.getEvents().subscribe((data) => {
      this.events = data;
    });
  }
  
  openEditDialog(event: AppEvent): void {
    const dialogRef = this.dialog.open(EventDialogComponent, {
      width: '400px',
      data: { action: 'edit', event: { ...event } } // Pasar una copia del evento
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateEvent(result);
      }
    });
  }

  openDeleteDialog(event: AppEvent): void {
    const dialogRef = this.dialog.open(EventDialogComponent, {
      width: '400px',
      data: { action: 'delete', event: event }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteEvent(event.id);
      }
    });
  }

  private updateEvent(event: AppEvent): void {
    this.eventService.updateEvent(event).subscribe(() => {
      this.getEvents();
    });
  }

  private deleteEvent(id: number): void {
    this.eventService.deleteEvent(id).subscribe(() => {
      this.getEvents();
    });
  }
}
