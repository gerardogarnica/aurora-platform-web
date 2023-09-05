import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  constructor() { }

  showSuccess(message: string): void {
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: message,
      timer: 2000,
      confirmButtonText: 'OK',
      confirmButtonColor: '#0369a1'
    });
  }

  showError(message: string): void {
    Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: message,
      confirmButtonText: 'OK',
      confirmButtonColor: '#b91c1c'
    });
  }
}
