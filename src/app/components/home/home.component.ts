import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../../services/event.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private eventService: EventService,private router: Router) { }

  event = {
    id: 0, // o un valor por defecto
    name: '',
    location: '',
    date: ''
  };

  submitForm(form: any) {
    console.log(form.value);
  }
  // Método para redirigir a la página de eventos

  saveEvent() {
    this.eventService.createEvent(this.event).subscribe(data => {
      console.log(data);
      this.goToEventList();
    }, error => console.log(error));
  }

  onSubmit() {
    this.saveEvent();
  }

  goToEventList() {
    this.router.navigate(['/events']);
  }
}
