import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app-store.reducer';
import { logout } from 'src/app/modules/account/store/actions/account.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  links = [
    {
      name: 'Negocios',
      icon: 'store',
      url: 'stores',
    },
    {
      name: 'Categorias',
      icon: 'list',
      url: 'categories',
    },
    {
      name: 'Empleados',
      icon: 'assignment_ind',
      url: 'employees',
    },
    {
      name: 'Reportes',
      icon: 'analytics',
      url: '',
    },
  ];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  logout() {
    this.store.dispatch(logout());
  }
}
