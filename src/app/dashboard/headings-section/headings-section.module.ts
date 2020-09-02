import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadingsSectionRoutingModule } from './headings-section-routing.module';
import { HeadingsComponent } from './headings/headings.component';
import { HeadingComponent } from './heading/heading.component';


@NgModule({
  declarations: [HeadingsComponent, HeadingComponent],
  imports: [
    CommonModule,
    HeadingsSectionRoutingModule
  ]
})
export class HeadingsSectionModule { }
