import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoresComponent } from './components/stores/stores.component';
import { StoreComponent } from './components/store/store.component';
import { StoresRoutingModule } from './stores-routing.module';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [StoresComponent, StoreComponent],
  imports: [CommonModule, StoresRoutingModule, MatCardModule, MatButtonModule],
})
export class StoresModule {}
