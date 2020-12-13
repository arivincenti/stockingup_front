import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  links = [
    {
      icon: 'store',
      url: 'stores',
    },
    {
      icon: 'list',
      url: 'categories',
    },
    {
      icon: 'home',
      url: 'form',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
