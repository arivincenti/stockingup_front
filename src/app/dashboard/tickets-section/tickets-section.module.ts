import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsSectionRoutingModule } from './tickets-section-routing.module';
import { TicketsComponent } from './tickets/tickets.component';
import { TicketComponent } from './ticket/ticket.component';


@NgModule({
  declarations: [TicketsComponent, TicketComponent],
  imports: [
    CommonModule,
    TicketsSectionRoutingModule
  ]
})
export class TicketsSectionModule { }
