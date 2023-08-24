import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { environment } from '@environments/environment';

import { ErrorsService } from './errors.service';

import { checkToken } from '@interceptors/token.interceptor';
import { Role } from '@models/security/role.model';
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

  getRoles(pageIndex: number, pageSize: number, application: string) {
    let url = `${this.apiUrl}?pageIndex=${pageIndex}&pageSize=${pageSize}&application=${application}`;

    return this.http.get<PagedCollections<Role>>(url, { context: checkToken() })
      .pipe(
        catchError(error => this.errorService.handleErrorMessage(error))
      );
  }
}
