import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoresComponent } from './stores/stores.component';
import { StoreComponent } from './store/store.component';
import { StoresSectionRoutingModule } from './stores-section-routing.module';

@NgModule({
  declarations: [StoresComponent, StoreComponent],
  imports: [CommonModule, StoresSectionRoutingModule],
})
export class StoresSectionModule {}
