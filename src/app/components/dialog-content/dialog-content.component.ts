import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventService } from '../../services/event.service';  // Importa el servicio
import { AppEvent } from '../../models/event';
import { EventNotifierService } from '../../services/event-notifier.service';  // Importa el servicio de notificación



@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
})
export class EventDialogComponent {

  event: AppEvent;  // Definimos la propiedad event
  

  constructor(
    public dialogRef: MatDialogRef<EventDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private eventService: EventService,
    private eventNotifier: EventNotifierService  


  ) {
    // Inicializa el evento dependiendo de la acción (add o edit)
    this.event = data.action === 'add' ? { id: 0, name: '', location: '', date: '' } : { ...data.event };
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveEvent(): void {
    // Formatear la fecha a 'YYYY-MM-DD' antes de enviarla al backend
  const formattedEvent = {
    ...this.event,
    date: this.formatDate(this.event.date)  // Utiliza la función formatDate para cambiar el formato
  };
    this.eventService.createEvent(this.event).subscribe(
      (data) => {
        console.log('Evento guardado:', data);
        this.eventNotifier.notifyEventAdded();  // Notificamos que se ha añadido un evento
        this.dialogRef.close(data); // Cerramos el diálogo y pasamos los datos creados
      },
      (error) => {
        console.log('Error al guardar el evento:', error);
      }
    );
  }
  

  onSubmit() {
    this.saveEvent();
  }

  // Añadir una función auxiliar para formatear la fecha
formatDate(date: Date | string): string {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = ('0' + (d.getMonth() + 1)).slice(-2);  // Asegura siempre tener dos dígitos
  const day = ('0' + d.getDate()).slice(-2);           // Asegura siempre tener dos dígitos
  return `${year}-${month}-${day}`;
}
}


