import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Routing
import { SecurityRoutingModule } from './security-routing.module';

// Components

// Pages
import { SecurityComponent } from './pages/security/security.component';

// Modules
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    SecurityComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class SecurityModule { }
