import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { CreateUser } from '@models/security/user.model';
import { ProcessStatus } from '@models/shared/process-status.model';
import { ErrorsService } from '@services/errors.service';
import { UsersService } from '@services/users.service';

@Component({
  selector: 'app-user-detail-dialog', 
  templateUrl: './user-detail-dialog.component.html'
})
export class UserDetailDialogComponent {
  errorMessage$: Observable<string>;
  status: ProcessStatus = 'init';

  form = this.formBuilder.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(3)]]
  });

  constructor(
    private dialogRef: DialogRef,
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private errorService: ErrorsService) {
    this.errorMessage$ = this.errorService.errorMessage$;
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onSave(event: Event): void {
    event.preventDefault();

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.status = 'loading';

    const newUser: CreateUser = this.form.getRawValue();
    console.log(newUser);

    this.usersService
      .create(newUser)
      .subscribe({
        next: () => {
          this.status = 'success';
          this.dialogRef.close();
        },
        error: () => {
          this.status = 'error';
        }
      });
  }
}
