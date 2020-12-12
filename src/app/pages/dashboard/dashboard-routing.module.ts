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
      import('./pages/stores/stores.module').then((m) => m.StoresModule),
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('./pages/categories/categories.module').then(
        (m) => m.CategoriesModule
      ),
  },
  {
    path: 'clients',
    loadChildren: () =>
      import('./pages/clients/clients.module').then((m) => m.ClientsModule),
  },
  {
    path: 'employees',
    loadChildren: () =>
      import('./pages/employees/employees.module').then(
        (m) => m.EmployeesModule
      ),
  },
  {
    path: 'headings',
    loadChildren: () =>
      import('./pages/headings/headings.module').then((m) => m.HeadingsModule),
  },
  {
    path: 'persons',
    loadChildren: () =>
      import('./pages/persons/persons.module').then((m) => m.PersonsModule),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./pages/products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'tickets',
    loadChildren: () =>
      import('./pages/tickets/tickets.module').then((m) => m.TicketsModule),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./pages/cart/cart.module').then((m) => m.CartModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class DashboardRoutingModule {}
