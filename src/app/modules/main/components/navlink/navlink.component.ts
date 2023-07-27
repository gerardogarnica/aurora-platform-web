import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navlink',
  templateUrl: './navlink.component.html',
  styles: [
    `
    .activeLink {
      border-bottom: solid 2px rgb(252 211 77);
      color: rgb(252 211 77);
    }
    `
  ]
})
export class NavlinkComponent {
  @Input() link = '';

}
