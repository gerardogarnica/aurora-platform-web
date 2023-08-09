import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IconDefinition, faHouse, faKey, faListUl, faLocationArrow, faLocationDot, faLock, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `
    .activeLink {
      background: rgb(14 165 233);
      color: rgb(24 24 7);
      font-weight: bold;
    }
    `
  ]
})
export class SidebarComponent {
  faHouse = faHouse;
  faListUl = faListUl;
  faKey = faKey;
  faLocationArrow = faLocationArrow;
  faLocationDot = faLocationDot;
  faLock = faLock;
  faRightFromBracket = faRightFromBracket;

  @Input() sidebarMenuItems: SidebarMenuItem[] = [
    { title: 'Home', icon: this.faHouse, routerLink: '/home' },
    { title: 'Applications', icon: this.faLocationArrow, routerLink: '/applications' },
    { title: 'Security', icon: this.faLock, routerLink: '/security' },
    { title: 'Attributes', icon: this.faListUl, routerLink: '/attributes' },
    { title: 'Locations', icon: this.faLocationDot, routerLink: '/locations' }
  ];

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  doLogout() {
    this.authService
      .logout()
      .subscribe({
        next: () => {
          this.router.navigate(['/login']);
        },
        error: () => {
          console.log('error');
        }
      });
  }

}

interface SidebarMenuItem {
  title: string;
  icon: IconDefinition;
  routerLink: string;
}
