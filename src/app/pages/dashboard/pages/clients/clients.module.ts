import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientComponent } from './components/client/client.component';

@NgModule({
  declarations: [ClientsComponent, ClientComponent],
  imports: [CommonModule, ClientsRoutingModule],
})
export class ClientsModule {}
