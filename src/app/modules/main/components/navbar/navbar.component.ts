import { Component } from '@angular/core';
import { faAward } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  faAward = faAward;

}
