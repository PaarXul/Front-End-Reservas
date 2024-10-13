import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { EventDialogComponent } from './dialog-content.component';

describe('EventDialogComponent', () => {
  let component: EventDialogComponent;
  let fixture: ComponentFixture<EventDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule, // Importa HttpClientTestingModule para los servicios que dependen de HttpClient
      ],
      declarations: [ EventDialogComponent ],
      providers: [
        { provide: MatDialogRef, useValue: {} }, // Mock de MatDialogRef
        { provide: MAT_DIALOG_DATA, useValue: {} } // Mock de los datos del diálogo
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
