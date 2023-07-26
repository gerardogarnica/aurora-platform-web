import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@guards/auth.guard';
import { RedirectGuard } from '@guards/redirect.guard';
import { PageNotFoundComponent } from '@shared/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('@modules/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'login',
    canActivate: [RedirectGuard],
    loadChildren: () => import('@modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
