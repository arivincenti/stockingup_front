import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketsComponent } from './components/tickets/tickets.component';
import { TicketComponent } from './components/ticket/ticket.component';

const routes: Routes = [
  {
    path: '',
    component: TicketsComponent,
  },
  {
    path: ':id',
    component: TicketComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketsRoutingModule {}
