import { Component } from '@angular/core';

import { User } from '@models/security/user.model';
import { PagedCollections } from '@models/shared/paged-collections.model';
import { UsersService } from '@services/users.service';
import { PaginationRequest } from '@shared/components/pagination/pagination.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent {
  collection: PagedCollections<User> = {} as PagedCollections<User>;
  pagination: PaginationRequest = { currentPage: 1, pageSize: 10 };

  constructor(
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.getPagedUsers();
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
}
