import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonsRoutingModule } from './persons-routing.module';
import { PersonsComponent } from './components/persons/persons.component';
import { PersonComponent } from './components/person/person.component';

@NgModule({
  declarations: [PersonsComponent, PersonComponent],
  imports: [CommonModule, PersonsRoutingModule],
})
export class PersonsModule {}
