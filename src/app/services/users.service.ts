import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

import { environment } from '@environments/environment';

import { ErrorsService } from './errors.service';

import { checkToken } from '@interceptors/token.interceptor';
import { CreateUser, UpdateUser, User } from '@models/security/user.model';
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

  getPaged(pageIndex: number, pageSize: number, rolId: number = 0, search: string) {
    let url = `${this.apiUrl}?pageIndex=${pageIndex}&pageSize=${pageSize}&roleId=${rolId}&search=${search}`;

    return this.http.get<PagedCollections<User>>(url, { context: checkToken() })
      .pipe(
        catchError(error => this.errorService.handleErrorMessage(error))
      );
  }

  create(data: CreateUser) {
    return this.http.post<number>(this.apiUrl, data, { context: checkToken() })
      .pipe(
        catchError(error => this.errorService.handleErrorMessage(error))
      );
  }

  update(data: UpdateUser) {
    return this.http.put<number>(this.apiUrl, data, { context: checkToken() })
      .pipe(
        catchError(error => this.errorService.handleErrorMessage(error))
      );
  }
}
