import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { environment } from '@environments/environment';

import { ErrorsService } from './errors.service';

import { checkToken } from '@interceptors/token.interceptor';
import { CreateRole, Role, UpdateRole } from '@models/security/role.model';
import { PagedCollections } from '@models/shared/paged-collections.model';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  apiUrl = `${environment.auroraPlatformApiUrl}/aurora/api/security/v1/roles`

  constructor(
    private http: HttpClient,
    private errorService: ErrorsService
  ) { }

  getById(roleId: number) {
    let url = `${this.apiUrl}/${roleId}`;

    return this.http.get<Role>(url, { context: checkToken() })
      .pipe(
        catchError(error => this.errorService.handleErrorMessage(error))
      );
  }

  getPaged(pageIndex: number, pageSize: number, application: string, search: string) {
    let url = `${this.apiUrl}?pageIndex=${pageIndex}&pageSize=${pageSize}&application=${application}&search=${search}`;

    return this.http.get<PagedCollections<Role>>(url, { context: checkToken() })
      .pipe(
        catchError(error => this.errorService.handleErrorMessage(error))
      );
  }

  create(data: CreateRole) {
    return this.http.post<number>(this.apiUrl, data, { context: checkToken() })
      .pipe(
        catchError(error => this.errorService.handleErrorMessage(error))
      );
  }

  update(data: UpdateRole) {
    return this.http.put<number>(this.apiUrl, data, { context: checkToken() })
      .pipe(
        catchError(error => this.errorService.handleErrorMessage(error))
      );
  }
}
