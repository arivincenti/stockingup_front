import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ActivateAccountComponent } from './components/activate-account/activate-account.component';

const routes: Routes = [
  { path: '', redirectTo: 'account', pathMatch: 'full' },
  {
    path: 'account',
    component: AccountComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'reset',
        component: ResetPasswordComponent,
      },
      {
        path: 'activate_account/:activation_code',
        component: ActivateAccountComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
