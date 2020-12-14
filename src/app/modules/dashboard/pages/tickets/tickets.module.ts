import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketsComponent } from './components/tickets/tickets.component';
import { TicketComponent } from './components/ticket/ticket.component';

@NgModule({
  declarations: [TicketsComponent, TicketComponent],
  imports: [CommonModule, TicketsRoutingModule],
})
export class TicketsModule {}
