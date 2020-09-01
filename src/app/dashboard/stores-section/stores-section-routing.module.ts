import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { StoresComponent } from './stores/stores.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  { path: '', component: StoresComponent },
  { path: ':id', component: StoreComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoresSectionRoutingModule {}
