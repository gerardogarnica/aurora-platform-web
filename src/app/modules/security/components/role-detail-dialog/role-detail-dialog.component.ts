import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

import { CreateRole } from '@models/security/role.model';
import { ProcessAction } from '@models/shared/process-action.model';
import { ProcessStatus } from '@models/shared/process-status.model';
import { ErrorsService } from '@services/errors.service';
import { MessagesService } from '@services/messages.service';
import { RolesService } from '@services/roles.service';

interface InputDialogData {
  action: ProcessAction;
  roleId: number;
}

@Component({
  selector: 'app-role-detail-dialog',
  templateUrl: './role-detail-dialog.component.html'
})
export class RoleDetailDialogComponent {
  errorMessage$: Observable<string>;
  action: ProcessAction = 'none';
  status: ProcessStatus = 'init';
  roleId: number = 0;
  title: string = 'Add New Role';

  form = this.formBuilder.nonNullable.group({
    application: ['', [Validators.required]],
    name: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required, Validators.minLength(3)]]
  });

  constructor(
    private dialogRef: DialogRef,
    private formBuilder: FormBuilder,
    private rolesService: RolesService,
    private errorService: ErrorsService,
    private messagesService: MessagesService,
    @Inject(DIALOG_DATA) data: InputDialogData) {
    this.action = data.action;
    this.roleId = data.roleId;
    this.errorMessage$ = this.errorService.errorMessage$;
    this.initControls();
  }

  initControls(): void {
    if (this.action === 'add') {
      this.title = 'Add New Role';
    } else if (this.action === 'edit') {
      this.title = 'Edit Role';
      this.form['controls'].application.disable();
      this.form['controls'].name.disable();
      this.getRole();
    }
  }

  onSave(event: Event): void {
    event.preventDefault();

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.status = 'loading';

    if (this.action === 'add') {
      this.createRole();
    } else if (this.action === 'edit') {
      this.updateRole();
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }

  getRole(): void {
    this.rolesService
      .getById(this.roleId)
      .subscribe({
        next: role => {
          this.form.patchValue({
            application: role.application,
            name: role.name,
            description: role.description
          });
        },
        error: response => {
          this.messagesService.showError(response);
        }
      });
  }

  createRole(): void {
    const newRole: CreateRole = this.form.getRawValue();

    this.rolesService
      .create(newRole)
      .subscribe({
        next: () => {
          this.status = 'success';
          this.messagesService.showSuccess('Role created successfully!');
          this.dialogRef.close();
        },
        error: response => {
          this.status = 'error';
          this.messagesService.showError(response);
        }
      });
  }

  updateRole(): void {
    const { description } = this.form.getRawValue();
    const roleId = this.roleId;

    this.rolesService
      .update({ roleId, description })
      .subscribe({
        next: () => {
          this.status = 'success';
          this.messagesService.showSuccess('Role updated successfully!');
          this.dialogRef.close();
        },
        error: response => {
          this.status = 'error';
          this.messagesService.showError(response);
        }
      });
  }
}
