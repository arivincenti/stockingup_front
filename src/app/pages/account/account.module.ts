import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountComponent } from './components/account.component';
import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { AccountService } from 'src/app/pages/account/services/account.service';

//Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivateAccountComponent } from './pages/activate-account/activate-account.component';

@NgModule({
  declarations: [
    AccountComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    ActivateAccountComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [AccountService],
})
export class AccountModule {}
