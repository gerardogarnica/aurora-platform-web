import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Components
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { MainButtonComponent } from './components/main-button/main-button.component';
import { ModuleMenuComponent } from './components/module-menu/module-menu.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { PaginationComponent } from './components/pagination/pagination.component';

// Pages
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    DropdownComponent,
    MainButtonComponent,
    ModuleMenuComponent,
    PageNotFoundComponent,
    PageTitleComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    DropdownComponent,
    MainButtonComponent,
    ModuleMenuComponent,
    PageTitleComponent,
    PaginationComponent
  ]
})
export class SharedModule { }
