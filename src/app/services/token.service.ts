import { Injectable } from '@angular/core';
import { getCookie, setCookie, removeCookie } from 'typescript-cookie';
import jwt_decode, { JwtPayload } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  accessTokenKeyName = 'access-token-aurora-platform';
  refreshTokenKeyName = 'refresh-token-aurora-platform';

  getTokenKeyName(type: TokenType): string {
    switch (type) {
      case TokenType.Access: return this.accessTokenKeyName;
      case TokenType.Refresh: return this.refreshTokenKeyName;
    }
  }

  getToken(type: TokenType): string | undefined {
    return getCookie(this.getTokenKeyName(type));
  }

  setToken(type: TokenType, token: string): void {
    setCookie(this.getTokenKeyName(type), token, { expires: 365, path: '/' });
  }

  removeToken(type: TokenType): void {
    removeCookie(this.getTokenKeyName(type));
  }

  hasToken(type: TokenType): boolean {
    return !!this.getToken(type);
  }

  isValidToken(type: TokenType): boolean {
    const token = this.getToken(type);
    if (!token) {
      return false;
    }

    const decodedToken = jwt_decode<JwtPayload>(token);
    if (decodedToken && decodedToken?.exp) {
      const now = new Date();
      const expirationDate = new Date(decodedToken.exp * 1001);

      return expirationDate > now;
    }

    return false;
  }
}

export enum TokenType {
  Access,
  Refresh
}