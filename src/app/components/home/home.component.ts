import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) { }

  event = {
    name: '',
    location: '',
    date: ''
  };

  submitForm(form: any) {
    console.log(form.value);
  }
  // Método para redirigir a la página de eventos
  goToEvents() {
    this.router.navigate(['/events']);
  }
}
