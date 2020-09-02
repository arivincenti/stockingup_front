import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsSectionRoutingModule } from './clients-section-routing.module';
import { ClientsComponent } from './clients/clients.component';
import { ClientComponent } from './client/client.component';


@NgModule({
  declarations: [ClientsComponent, ClientComponent],
  imports: [
    CommonModule,
    ClientsSectionRoutingModule
  ]
})
export class ClientsSectionModule { }
