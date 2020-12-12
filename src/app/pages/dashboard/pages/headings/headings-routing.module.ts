import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeadingsComponent } from './components/headings/headings.component';
import { HeadingComponent } from './components/heading/heading.component';

const routes: Routes = [
  {
    path: '',
    component: HeadingsComponent,
  },
  {
    path: ':id',
    component: HeadingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeadingsRoutingModule {}
