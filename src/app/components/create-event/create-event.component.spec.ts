import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateEventComponent } from './create-event.component';
import { EventService } from '../../services/event.service';
import { FormsModule } from '@angular/forms';



describe('CreateEventComponent', () => {
  let component: CreateEventComponent;
  let fixture: ComponentFixture<CreateEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule, // Módulo de prueba para HttpClient
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule,
        FormsModule
      ],
      declarations: [ CreateEventComponent ],
      providers: [EventService]

    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
