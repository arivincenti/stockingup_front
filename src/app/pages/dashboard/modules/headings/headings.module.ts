import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadingsRoutingModule } from './headings-routing.module';
import { HeadingsComponent } from './components/headings/headings.component';
import { HeadingComponent } from './components/heading/heading.component';

@NgModule({
  declarations: [HeadingsComponent, HeadingComponent],
  imports: [CommonModule, HeadingsRoutingModule],
})
export class HeadingsModule {}
