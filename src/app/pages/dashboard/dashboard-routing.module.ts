import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/pages/dashboard/components/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'stores',
        pathMatch: 'full',
      },
      {
        path: 'stores',
        loadChildren: () =>
          import('./modules/stores/stores.module').then((m) => m.StoresModule),
      },
      {
        path: 'categories',
        loadChildren: () =>
          import('./modules/categories/categories.module').then(
            (m) => m.CategoriesModule
          ),
      },
      {
        path: 'clients',
        loadChildren: () =>
          import('./modules/clients/clients.module').then(
            (m) => m.ClientsModule
          ),
      },
      {
        path: 'employees',
        loadChildren: () =>
          import('./modules/employees/employees.module').then(
            (m) => m.EmployeesModule
          ),
      },
      {
        path: 'headings',
        loadChildren: () =>
          import('./modules/headings/headings.module').then(
            (m) => m.HeadingsModule
          ),
      },
      {
        path: 'persons',
        loadChildren: () =>
          import('./modules/persons/persons.module').then(
            (m) => m.PersonsModule
          ),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./modules/products/products.module').then(
            (m) => m.ProductsModule
          ),
      },
      {
        path: 'tickets',
        loadChildren: () =>
          import('./modules/tickets/tickets.module').then(
            (m) => m.TicketsModule
          ),
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('./modules/cart/cart.module').then((m) => m.CartModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class DashboardRoutingModule {}
