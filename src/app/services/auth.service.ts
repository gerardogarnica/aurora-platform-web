import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '@environments/environment';

import { TokenService, TokenType } from './token.service';

import { checkToken } from '@interceptors/token.interceptor';
import { IdentityToken } from '@models/identity/auth.model';
import { User } from '@models/security/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = `${environment.auroraPlatformApiUrl}/aurora/api/security/v1/auth`
  user$ = new BehaviorSubject<User | null>(null);

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  login(email: string, password: string) {
    return this.http.post<IdentityToken>(`${this.apiUrl}/login`, { email, password }, {
      headers: {
        'application': 'DBB1F084-0E5C-488F-8990-EA1FDF223A94'
      }
    })
      .pipe(
        tap(identityToken => {
          this.tokenService.setToken(TokenType.Access, identityToken.accessToken);
          this.tokenService.setToken(TokenType.Refresh, identityToken.refreshToken);
        })
      );
  }

  logout() {
    return this.http.post<number>(`${this.apiUrl}/logout`, null, { context: checkToken() })
      .pipe(
        tap(() => {
          this.tokenService.removeToken(TokenType.Access);
          this.tokenService.removeToken(TokenType.Refresh);
        })
      );
  }

  changePassword(currentPassword: string, newPassword: string) {
    return this.http.post(`${this.apiUrl}/change-password`, { currentPassword, newPassword }, { context: checkToken() });
  }

  refreshToken() {
    const refreshToken = this.tokenService.getToken(TokenType.Refresh);
    console.log(refreshToken, this.apiUrl);
    return this.http.post<IdentityToken>(`${this.apiUrl}/refresh-token`, refreshToken, { context: checkToken() })
      .pipe(
        tap(identityToken => {
          console.log('tap');
          this.tokenService.setToken(TokenType.Access, identityToken.accessToken);
          this.tokenService.setToken(TokenType.Refresh, identityToken.refreshToken);
        })
      );
  }

  getProfile() {
    return this.http.get<User>(`${this.apiUrl}/profile`, { context: checkToken() })
      .pipe(
        tap(user => this.user$.next(user))
      );
  }
}
