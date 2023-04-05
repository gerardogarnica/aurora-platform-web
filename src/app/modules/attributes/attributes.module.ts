import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Routing
import { AttributesRoutingModule } from './attributes-routing.module';

// Components

// Pages
import { AttributesComponent } from './pages/attributes/attributes.component';

// Modules
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    AttributesComponent
  ],
  imports: [
    CommonModule,
    AttributesRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AttributesModule { }
