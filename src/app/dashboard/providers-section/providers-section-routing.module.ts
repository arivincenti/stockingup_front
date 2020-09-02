import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProvidersComponent } from './providers/providers.component';
import { ProviderComponent } from './provider/provider.component';

const routes: Routes = [
  {
    path: '',
    component: ProvidersComponent,
  },
  {
    path: ':id',
    component: ProviderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProvidersSectionRoutingModule {}
