import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EventDialogComponent } from '../dialog-content/dialog-content.component';
import { EventNotifierService } from '../../services/event-notifier.service';
import { AppEvent } from '../../models/event';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public dialog: MatDialog, private eventNotifier: EventNotifierService, private router: Router) { }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(EventDialogComponent, {
      width: '400px',
      data: { action: 'add', event: {} }
    });

    dialogRef.afterClosed().subscribe((result: AppEvent | undefined) => {
      if (result) {
        this.eventNotifier.notifyEventAdded();
      }
    });
  }

  // Método para redirigir a la página de eventos
  goToEvents() {
    this.router.navigate(['/events']);
  }
}
