import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { MatDialog } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EventNotifierService } from '../../services/event-notifier.service';
import { of } from 'rxjs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing'; // Importa RouterTestingModule
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let mockDialog: jasmine.SpyObj<MatDialog>;
  let mockNotifier: jasmine.SpyObj<EventNotifierService>;

  beforeEach(async () => {
    // Creamos los espías (mocks) para las dependencias del componente
    mockDialog = jasmine.createSpyObj('MatDialog', ['open']);
    mockNotifier = jasmine.createSpyObj('EventNotifierService', ['notifyEventAdded']);

    // Configuramos el TestBed
    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        RouterTestingModule
      ],
      declarations: [NavbarComponent],
      providers: [
        { provide: MatDialog, useValue: mockDialog },
        { provide: EventNotifierService, useValue: mockNotifier },
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería abrir el diálogo al llamar a openAddDialog', () => {
    // Mock para la respuesta del diálogo
    const dialogRefSpyObj = jasmine.createSpyObj({ afterClosed: of(undefined) });
    mockDialog.open.and.returnValue(dialogRefSpyObj);

    // Llamamos al método
    component.openAddDialog();

    // Verificamos que se haya llamado a open() del MatDialog
    expect(mockDialog.open).toHaveBeenCalled();
  });

  it('debería llamar a notifyEventAdded si el diálogo devuelve un resultado', () => {
    // Mock para la respuesta del diálogo que devuelve un evento
    const dialogRefSpyObj = jasmine.createSpyObj({ afterClosed: of({ id: 1, name: 'Test Event' }) });
    mockDialog.open.and.returnValue(dialogRefSpyObj);

    // Llamamos al método
    component.openAddDialog();

    // Verificamos que se haya llamado a notifyEventAdded() del EventNotifierService
    expect(mockNotifier.notifyEventAdded).toHaveBeenCalled();
  });
});
