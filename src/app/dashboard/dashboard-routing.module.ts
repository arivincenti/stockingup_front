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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class DashboardRoutingModule {}
