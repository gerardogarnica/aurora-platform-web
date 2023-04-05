import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Routing
import { HomeRoutingModule } from './home-routing.module';

// Components
import { HomeCardComponent } from './components/home-card/home-card.component';

// Pages
import { HomeComponent } from './pages/home/home.component';

// Modules
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    HomeCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    SharedModule
  ]
})
export class HomeModule { }
