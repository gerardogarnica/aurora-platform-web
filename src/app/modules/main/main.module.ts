import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Routing
import { MainRoutingModule } from './main-routing.module';

// Components
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavlinkComponent } from './components/navlink/navlink.component';

// Pages

// Modules
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    NavlinkComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    OverlayModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    SharedModule
  ]
})
export class MainModule { }
