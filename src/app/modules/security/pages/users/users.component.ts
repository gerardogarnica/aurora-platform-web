import { Component } from '@angular/core';

import { User } from '@models/security/user.model';

import { UsersService } from '@services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent {
  users: User[] = [];

  constructor(
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.userService
      .getUsers(0, 10)
      .subscribe({
        next: collection => {
          console.log(collection.items);
          this.users = collection.items;
        }
      });
  }

}
