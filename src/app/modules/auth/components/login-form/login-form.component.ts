import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { faEnvelope, faLock, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

import { ProcessStatus } from '@models/shared/process-status.model';
import { AuthService } from '@services/auth.service';
import { ErrorsService } from '@services/errors.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent {
  faEnvelope = faEnvelope;
  faLock = faLock;
  faSpinner = faSpinner;

  errorMessage$: Observable<string>;

  form = this.formBuilder.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });
  status: ProcessStatus = 'init';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private errorService: ErrorsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParamMap
      .subscribe(queryParamMap => {
        const email = queryParamMap.get('email');
        if (email) {
          this.form.controls.email.setValue(email);
        }
      });

    this.errorMessage$ = this.errorService.errorMessage$;
  }

  doLogin(event: Event) {
    event.preventDefault();

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.status = 'loading';

    const { email, password } = this.form.getRawValue();

    this.authService
      .login(email, password)
      .subscribe({
        next: () => {
          this.status = 'success';
          this.router.navigate(['/']);
        },
        error: () => {
          this.status = 'error';
        }
      });
  }
}
