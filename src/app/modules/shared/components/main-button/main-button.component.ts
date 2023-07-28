import { Component, Input } from '@angular/core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { ButtonColor, BUTTON_COLOR_CLASSES } from '@models/shared/button-color.model';

@Component({
  selector: 'app-main-button',
  templateUrl: './main-button.component.html'
})
export class MainButtonComponent {
  @Input() color: ButtonColor = 'default';
  @Input() disabled = false;
  @Input() loading = false;
  @Input() title = '';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  faSpinner = faSpinner;
  mapButtonColorClasses = BUTTON_COLOR_CLASSES;

  get buttonColorClasses() {
    return this.mapButtonColorClasses[this.color] ? this.mapButtonColorClasses[this.color] : {};
  }
}
