import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dilaog',
  templateUrl: './delete-dilaog.component.html',
  styleUrls: ['./delete-dilaog.component.scss'],
})
export class DeleteDilaogComponent {
  constructor(public dilaog: MatDialogRef<DeleteDilaogComponent>) {}

  confirmAction() {
    this.dilaog.close(true);
  }
}
