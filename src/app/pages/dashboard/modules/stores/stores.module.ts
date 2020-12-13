import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoresComponent } from './components/stores/stores.component';
import { StoreComponent } from './components/store/store.component';
import { StoresRoutingModule } from './stores-routing.module';

@NgModule({
  declarations: [StoresComponent, StoreComponent],
  imports: [CommonModule, StoresRoutingModule],
})
export class StoresModule {}
