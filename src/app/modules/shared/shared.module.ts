import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainButtonComponent } from './components/main-button/main-button.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    MainButtonComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainButtonComponent
  ]
})
export class SharedModule { }
