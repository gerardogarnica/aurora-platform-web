import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

import { environment } from '@environments/environment';

import { ErrorsService } from './errors.service';

import { checkToken } from '@interceptors/token.interceptor';
import { User } from '@models/security/user.model';
import { PagedCollections } from '@models/shared/paged-collections.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl = `${environment.auroraPlatformApiUrl}/aurora/api/security/v1/users`

  constructor(
    private http: HttpClient,
    private errorService: ErrorsService
  ) { }

  getUser(email: string) {
    let url = `${this.apiUrl}/${email}`;

    return this.http.get<User>(url, { context: checkToken() })
      .pipe(
        catchError(error => this.errorService.handleErrorMessage(error))
      );
  }

  getUsers(pageIndex: number, pageSize: number, rolId: number = 0) {
    let url = `${this.apiUrl}?pageIndex=${pageIndex}&pageSize=${pageSize}&roleId=${rolId}`;

    return this.http.get<PagedCollections<User>>(url, { context: checkToken() })
      .pipe(
        catchError(error => this.errorService.handleErrorMessage(error))
      );
  }
}
