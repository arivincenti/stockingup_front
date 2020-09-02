import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvidersSectionRoutingModule } from './providers-section-routing.module';
import { ProvidersComponent } from './providers/providers.component';
import { ProviderComponent } from './provider/provider.component';


@NgModule({
  declarations: [ProvidersComponent, ProviderComponent],
  imports: [
    CommonModule,
    ProvidersSectionRoutingModule
  ]
})
export class ProvidersSectionModule { }
