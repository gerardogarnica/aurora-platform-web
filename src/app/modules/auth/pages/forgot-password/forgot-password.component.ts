import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEnvelope, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

import { ProcessStatus } from '@models/shared/process-status.model';
import { AuthService } from '@services/auth.service';
import { ErrorsService } from '@services/errors.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent {
  faEnvelope = faEnvelope;
  faSpinner = faSpinner;

  errorMessage$: Observable<string>;

  form = this.formBuilder.nonNullable.group({
    email: ['', [Validators.required, Validators.email]]
  });
  status: ProcessStatus = 'init';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private errorService: ErrorsService
  ) {
    this.errorMessage$ = this.errorService.errorMessage$;
  }

  doReset(event: Event) {
    event.preventDefault();

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.status = 'loading';
  }
}
