import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { faEllipsisVertical, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { Role } from '@models/security/role.model';
import { PagedCollections, PaginationRequest } from '@models/shared/paged-collections.model';
import { RoleDetailDialogComponent } from '@modules/security/components/role-detail-dialog/role-detail-dialog.component';
import { RolesService } from '@services/roles.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html'
})
export class RolesComponent {
  faEllipsisVertical = faEllipsisVertical;
  faMagnifyingGlass = faMagnifyingGlass;

  collection: PagedCollections<Role> = {} as PagedCollections<Role>;
  pagination: PaginationRequest = { currentPage: 1, pageSize: 10 };
  role!: Role;

  constructor(
    private rolesService: RolesService,
    private dialog: Dialog
  ) { }

  ngOnInit(): void {
    this.getPagedRoles();
  }

  onAddNewRole(): void {
    const dialogRef = this.dialog.open(RoleDetailDialogComponent, {
      autoFocus: false,
      data: { action: 'add', roleId: 0 }
    });

    dialogRef.closed.subscribe(() => {
      this.getPagedRoles();
    });
  }

  onEditRole(roleId: number): void {
    const dialogRef = this.dialog.open(RoleDetailDialogComponent, {
      autoFocus: false,
      data: { action: 'edit', roleId: roleId }
    });

    dialogRef.closed.subscribe(() => {
      this.getPagedRoles();
    });
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
