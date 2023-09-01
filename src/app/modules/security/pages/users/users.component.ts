import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { faEllipsisVertical, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { User } from '@models/security/user.model';
import { PagedCollections, PaginationRequest } from '@models/shared/paged-collections.model';
import { UserDetailDialogComponent } from '@modules/security/components/user-detail-dialog/user-detail-dialog.component';
import { UserRolesDialogComponent } from '@modules/security/components/user-roles-dialog/user-roles-dialog.component';
import { UsersService } from '@services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent {
  faEllipsisVertical = faEllipsisVertical;
  faMagnifyingGlass = faMagnifyingGlass;

  collection: PagedCollections<User> = {} as PagedCollections<User>;
  pagination: PaginationRequest = { currentPage: 1, pageSize: 10 };
  user!: User;

  constructor(
    private userService: UsersService,
    private dialog: Dialog
  ) { }

  ngOnInit(): void {
    this.getPagedUsers();
  }

  onAddNewUser(): void {
    const dialogRef = this.dialog.open(UserDetailDialogComponent, {
      autoFocus: false
    });

    dialogRef.closed.subscribe(() => {
      this.getPagedUsers();
    });
  }

  onGoTo(page: number): void {
    this.pagination.currentPage = page;
    this.getPagedUsers();
  }

  onPageSizeChange(pageSize: number): void {
    this.pagination.pageSize = pageSize;
    this.pagination.currentPage = 1;
    this.getPagedUsers();
  }

  getPagedUsers(): void {
    this.userService
      .getUsers(this.pagination.currentPage - 1, this.pagination.pageSize)
      .subscribe({
        next: collection => {
          this.collection = collection;
        }
      });
  }

  onShowUserRoles(userEmail: string): void {
    this.userService
      .getUser(userEmail)
      .subscribe({
        next: user => {
          this.showUserRolesModal(user);
        }
      });
  }

  showUserRolesModal(user: User): void {
    this.user = user;

    this.dialog.open(UserRolesDialogComponent, {
      autoFocus: false,
      data: { user: this.user }
    });
  }
}
