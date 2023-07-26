import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Routing
import { AuthRoutingModule } from './auth-routing.module';

// Components
import { LoginFormComponent } from './components/login-form/login-form.component';

// Pages
import { LoginComponent } from './pages/login/login.component';

// Modules
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    LoginFormComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AuthModule { }
