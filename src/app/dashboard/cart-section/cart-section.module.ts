import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartSectionRoutingModule } from './cart-section-routing.module';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    CartSectionRoutingModule
  ]
})
export class CartSectionModule { }
