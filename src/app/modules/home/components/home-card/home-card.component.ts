import { Component, Input } from '@angular/core';
import { faListUl, faLocationArrow, faLocationDot, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html'
})
export class HomeCardComponent {
  @Input() type: 'applications' | 'attributes' | 'locations' | 'security' = 'applications';

  faListUl = faListUl;
  faLocationArrow = faLocationArrow;
  faLocationDot = faLocationDot;
  faLock = faLock;

  get icon() {
    if (this.type === 'applications') return this.faLocationArrow;
    if (this.type === 'attributes') return this.faListUl;
    if (this.type === 'locations') return this.faLocationDot;
    if (this.type === 'security') return this.faLock;

    return this.faLocationArrow;
  }

  get title() {
    if (this.type === 'applications') return 'Applications';
    if (this.type === 'attributes') return 'Attributes';
    if (this.type === 'locations') return 'Locations';
    if (this.type === 'security') return 'Security';

    return 'Applications';
  }

  get url() {
    if (this.type === 'applications') return '/applications';
    if (this.type === 'attributes') return '/attributes';
    if (this.type === 'locations') return '/locations';
    if (this.type === 'security') return '/security';

    return '/';
  }

  get description() {
    if (this.type === 'applications') return 'Manage applications, components and custom data profiles.';
    if (this.type === 'attributes') return 'Manage common attributes, scoped attributes and option lists for applications.';
    if (this.type === 'locations') return 'Manage country locations.';
    if (this.type === 'security') return 'Manage users and roles, as well as permissions and access control for applications.';

    return 'Manage your applications';
  }

}
