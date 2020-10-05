import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountService } from './account/account.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [AccountService],
})
export class ServicesModule {}
