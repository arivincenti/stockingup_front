import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesSectionRoutingModule } from './categories-section-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [CategoriesComponent, CategoryComponent],
  imports: [
    CommonModule,
    CategoriesSectionRoutingModule
  ]
})
export class CategoriesSectionModule { }
