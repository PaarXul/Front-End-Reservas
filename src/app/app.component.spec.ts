import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component'; // Importa el NavbarComponent
import { RouterTestingModule } from '@angular/router/testing'; // Para manejar el routerLink
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog'; // Importa MatDialogModule


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, // Necesario para manejar 'routerLink'
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
      ],
      declarations: [
        AppComponent,
        NavbarComponent // Declara el NavbarComponent para las pruebas
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA] // Opcional si quieres suprimir algunos errores de elementos desconocidos
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse el componente', () => {
    expect(component).toBeTruthy();
  });
});
