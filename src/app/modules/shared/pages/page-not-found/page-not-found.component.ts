import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html'
})
export class PageNotFoundComponent {
  imageUrl = '/assets/images/404-page-not-found.jpg';

  constructor(
    private router: Router
  ) { }

  onReturn() {
    this.router.navigate(['/']);
  }
}
