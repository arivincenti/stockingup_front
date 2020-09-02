import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'stores',
    pathMatch: 'full',
  },
  {
    path: 'stores',
    loadChildren: () =>
      import('./stores-section/stores-section.module').then(
        (m) => m.StoresSectionModule
      ),
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('./categories-section/categories-section.module').then(
        (m) => m.CategoriesSectionModule
      ),
  },
  {
    path: 'clients',
    loadChildren: () =>
      import('./clients-section/clients-section.module').then(
        (m) => m.ClientsSectionModule
      ),
  },
  {
    path: 'employees',
    loadChildren: () =>
      import('./employees-section/employees-section.module').then(
        (m) => m.EmployeesSectionModule
      ),
  },
  {
    path: 'headings',
    loadChildren: () =>
      import('./headings-section/headings-section.module').then(
        (m) => m.HeadingsSectionModule
      ),
  },
  {
    path: 'persons',
    loadChildren: () =>
      import('./persons-section/persons-section.module').then(
        (m) => m.PersonsSectionModule
      ),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./products-section/products-section.module').then(
        (m) => m.ProductsSectionModule
      ),
  },
  {
    path: 'tickets',
    loadChildren: () =>
      import('./tickets-section/tickets-section.module').then(
        (m) => m.TicketsSectionModule
      ),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./cart-section/cart-section.module').then(
        (m) => m.CartSectionModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class DashboardRoutingModule {}
