import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {
  // Observables
  private errorMessage = new BehaviorSubject<string>('');
  errorMessage$ = this.errorMessage.asObservable();

  constructor() { }

  handleErrorMessage = (error: HttpErrorResponse) => {
    const errorMessageText = error.error.Message;

    if (error.status !== 0) {
      if (error.status === HttpStatusCode.BadRequest) {
        this.errorMessage.next(errorMessageText);
        return throwError(() => (errorMessageText));
      }
      if (error.status === HttpStatusCode.Unauthorized) {
        this.errorMessage.next(errorMessageText);
        return throwError(() => (errorMessageText));
      }
      if (error.status === HttpStatusCode.NotFound) {
        this.errorMessage.next('Endpoint not found.');
        return throwError(() => ('Endpoint not found.'));
      }
      if (error.status === HttpStatusCode.InternalServerError) {
        this.errorMessage.next(errorMessageText);
        return throwError(() => (errorMessageText));
      }
    }

    this.errorMessage.next('There is a connection error. Please, try later.');
    return throwError(() => ('There is a connection error. Please, try later.'));
  }

  clearErrorMessages() {
    this.errorMessage.next('');
  }
}
