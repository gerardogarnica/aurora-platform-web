import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Components
import { MainButtonComponent } from './components/main-button/main-button.component';
import { ModuleContainerComponent } from './components/module-container/module-container.component';

// Pages
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    MainButtonComponent,
    ModuleContainerComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    MainButtonComponent,
    ModuleContainerComponent
  ]
})
export class SharedModule { }
