import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvidersRoutingModule } from './providers-routing.module';
import { ProvidersComponent } from './components/providers/providers.component';
import { ProviderComponent } from './components/provider/provider.component';

@NgModule({
  declarations: [ProvidersComponent, ProviderComponent],
  imports: [CommonModule, ProvidersRoutingModule],
})
export class ProvidersModule {}
