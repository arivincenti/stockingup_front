import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerifyTokenGuard } from './core/guards/verify-token/verify-token.guard';
import { IsLoggedGuard } from './core/guards/is-logged/is-logged.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'app',
    canActivate: [IsLoggedGuard],
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
