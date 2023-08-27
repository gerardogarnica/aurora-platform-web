import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html'
})
export class DropdownComponent<T> {
  @Input() name: string = '';
  @Input() value!: DropdownOption<T>;
  @Input() options!: DropdownOption<T>[];

  @Output() selectedValueChange: EventEmitter<string> = new EventEmitter<string>();

  onChange(selectedValue: string): void {
    this.selectedValueChange.emit(selectedValue);
  }
}

export type DropdownOption<T> = {
  text: string;
  value: T;
}
