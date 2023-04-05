import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
    `
    .activeLink {
      border-bottom: solid 2px rgb(252 211 77);
      color: rgb(252 211 77);
    }
    `
  ]
})
export class NavbarComponent {

}
