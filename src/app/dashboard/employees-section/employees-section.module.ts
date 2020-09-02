import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesSectionRoutingModule } from './employees-section-routing.module';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employee/employee.component';


@NgModule({
  declarations: [EmployeesComponent, EmployeeComponent],
  imports: [
    CommonModule,
    EmployeesSectionRoutingModule
  ]
})
export class EmployeesSectionModule { }
