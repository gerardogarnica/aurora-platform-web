import { Component } from '@angular/core';

import { Role } from '@models/security/role.model';
import { PagedCollections, PaginationRequest } from '@models/shared/paged-collections.model';
import { RolesService } from '@services/roles.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html'
})
export class RolesComponent {
  collection: PagedCollections<Role> = {} as PagedCollections<Role>;
  pagination: PaginationRequest = { currentPage: 1, pageSize: 10 };

  constructor(
    private rolesService: RolesService
  ) { }

  ngOnInit(): void {
    this.getPagedRoles();
  }

  onGoTo(page: number): void {
    this.pagination.currentPage = page;
    this.getPagedRoles();
  }

  onPageSizeChange(pageSize: number): void {
    this.pagination.pageSize = pageSize;
    this.pagination.currentPage = 1;
    this.getPagedRoles();
  }

  getPagedRoles(): void {
    this.rolesService
      .getPaged(this.pagination.currentPage - 1, this.pagination.pageSize, 'DBB1F084-0E5C-488F-8990-EA1FDF223A94')
      .subscribe({
        next: collection => {
          this.collection = collection;
        }
      });
  }

}
