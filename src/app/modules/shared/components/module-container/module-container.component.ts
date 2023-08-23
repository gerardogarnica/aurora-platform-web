import { Component, Input } from '@angular/core';
import { IconDefinition, faHouse, faKey, faListUl, faLocationArrow, faLocationDot, faLock, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-module-container',
  templateUrl: './module-container.component.html',
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
export class ModuleContainerComponent {
  faLock = faLock;

  @Input() moduleTitle = '';
  @Input() moduleMenuItems: ModuleContainerMenuItem[] = [];

}

export interface ModuleContainerMenuItem {
  title: string;
  routerLink: string;
}
