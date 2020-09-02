import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonsSectionRoutingModule } from './persons-section-routing.module';
import { PersonsComponent } from './persons/persons.component';
import { PersonComponent } from './person/person.component';


@NgModule({
  declarations: [PersonsComponent, PersonComponent],
  imports: [
    CommonModule,
    PersonsSectionRoutingModule
  ]
})
export class PersonsSectionModule { }
