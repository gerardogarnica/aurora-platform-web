import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faAward, faClose, faUser } from '@fortawesome/free-solid-svg-icons';

import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  faAward = faAward;
  faClose = faClose;
  faUser = faUser;

  isOpenUserMenu = false;
  user$ = this.authService.user$;

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
