import { Component, Input } from '@angular/core';

import { ModuleName } from '@models/shared/module-name.model';

@Component({
  selector: 'app-module-menu',
  templateUrl: './module-menu.component.html',
  styles: [
    `
    .activeLink {
      background-color: rgb(14 165 233);
      border-color: rgb(3 105 161);
      color: rgb(244 244 245);
    }
    `
  ]
})
export class ModuleMenuComponent {
  @Input() moduleName: ModuleName = 'Home';

  selectedModule: ModuleMenu = { title: '', items: [] };

  modules: ModuleMenu[] = [{
    title: 'Home',
    items: []
  }, {
    title: 'Applications',
    items: [
      { name: 'Applications', routerLink: '/applications' }
    ]
  }, {
    title: 'Security',
    items: [
      { name: 'Users', routerLink: '/security/users' },
      { name: 'Roles', routerLink: '/security/roles' },
      { name: 'Permissions', routerLink: '/security/permissions' }
    ]
  }];

  ngOnInit() {
    this.selectedModule = this.modules.find(x => x.title === this.moduleName) || { title: '', items: [] };
  }
}

interface ModuleMenu {
  title: string;
  items: ModuleMenuItem[];
}

interface ModuleMenuItem {
  name: string;
  routerLink: string;
}