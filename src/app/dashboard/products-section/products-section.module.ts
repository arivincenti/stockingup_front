import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsSectionRoutingModule } from './products-section-routing.module';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [ProductComponent, ProductsComponent],
  imports: [CommonModule, ProductsSectionRoutingModule],
})
export class ProductsSectionModule {}
