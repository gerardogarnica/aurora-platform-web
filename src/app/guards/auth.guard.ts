import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

// Services
import { TokenService, TokenType } from '@services/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }

  canActivate(): boolean {
    if (!this.tokenService.isValidToken(TokenType.Access)) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

}
