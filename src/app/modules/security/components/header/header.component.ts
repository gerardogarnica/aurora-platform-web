import { Component } from '@angular/core';

import { ModuleContainerMenuItem } from '@shared/components/module-container/module-container.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  items: ModuleContainerMenuItem[] = [
    { title: 'Users', routerLink: '/security/users' },
    { title: 'Roles', routerLink: '/security/roles' },
    { title: 'Permissions', routerLink: '/security/permissions' }
  ];

}
