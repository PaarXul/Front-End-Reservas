import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EventDialogComponent } from '../dialog-content/dialog-content.component';
import { EventNotifierService } from '../../services/event-notifier.service';
import { AppEvent } from '../../models/event';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public dialog: MatDialog, private eventNotifier: EventNotifierService) { }

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
}
