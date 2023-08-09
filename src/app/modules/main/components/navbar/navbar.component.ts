import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faClose, faUser } from '@fortawesome/free-solid-svg-icons';

import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  faClose = faClose;
  faUser = faUser;

  isOpenUserMenu = false;
  user$ = this.authService.user$;

  @Input() userMenuItems: UserMenuItem[] = [
    { title: 'Profile', routerLink: '/profile' },
    { title: 'Settings', routerLink: '/settings' },
    { title: 'Change password', routerLink: '/change-password' }
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

  doShowAndHideUserMenu() {
    console.log(this.isOpenUserMenu);
    this.isOpenUserMenu = !this.isOpenUserMenu;
    console.log(this.isOpenUserMenu);
  }

}

interface UserMenuItem {
  title: string;
  routerLink: string;
}
