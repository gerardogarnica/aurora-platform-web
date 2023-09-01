import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';

import { User } from '@models/security/user.model';

interface InputDialogData {
  user: User;
}

interface OutputDialogData {
  response: boolean;
}

@Component({
  selector: 'app-user-roles-dialog',
  templateUrl: './user-roles-dialog.component.html'
})
export class UserRolesDialogComponent {
  user: User;

  constructor(
    private dialogRef: DialogRef<OutputDialogData>,
    @Inject(DIALOG_DATA) data: InputDialogData) {
    this.user = data.user;
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
