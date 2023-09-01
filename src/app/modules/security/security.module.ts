import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from '@angular/cdk/dialog';
import { CdkMenuModule } from '@angular/cdk/menu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Routing
import { SecurityRoutingModule } from './security-routing.module';

// Components
import { HeaderComponent } from './components/header/header.component';
import { RoleDetailDialogComponent } from './components/role-detail-dialog/role-detail-dialog.component';
import { UserDetailDialogComponent } from './components/user-detail-dialog/user-detail-dialog.component';
import { UserRolesDialogComponent } from './components/user-roles-dialog/user-roles-dialog.component';

// Pages
import { PermissionsComponent } from './pages/permissions/permissions.component';
import { RolesComponent } from './pages/roles/roles.component';
import { UsersComponent } from './pages/users/users.component';

// Modules
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    RoleDetailDialogComponent,
    UserDetailDialogComponent,
    UserRolesDialogComponent,
    PermissionsComponent,
    RolesComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    ReactiveFormsModule,
    DialogModule,
    CdkMenuModule,
    FontAwesomeModule,
    SharedModule
  ]
})
export class SecurityModule { }
