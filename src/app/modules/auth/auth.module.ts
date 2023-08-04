import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Routing
import { AuthRoutingModule } from './auth-routing.module';

// Components
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

// Pages
import { LoginComponent } from './pages/login/login.component';

// Modules
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    LoginFormComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    SharedModule
  ]
})
export class AuthModule { }
