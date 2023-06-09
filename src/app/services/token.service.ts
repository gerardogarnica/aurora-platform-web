import { Injectable } from '@angular/core';
import { getCookie, setCookie, removeCookie } from 'typescript-cookie';
import jwt_decode, { JwtPayload } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  accessTokenKeyName = 'access-token-aurora-platform';
  refreshTokenKeyName = 'refresh-token-aurora-platform';

  getAccessToken(): string | undefined {
    return getCookie(this.accessTokenKeyName);
  }

  setAccessToken(token: string): void {
    setCookie(this.accessTokenKeyName, token, { expires: 365, path: '/' });
  }

  removeAccessToken(): void {
    removeCookie(this.accessTokenKeyName);
  }
}
