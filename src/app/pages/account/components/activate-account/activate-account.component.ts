import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/pages/account/services/account.service';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.css'],
})
export class ActivateAccountComponent implements OnInit {
  activation_code: string;
  constructor(
    private _accountService: AccountService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activation_code = this.route.snapshot.params.activation_code;
    this._accountService
      .activateAccount(this.activation_code)
      .subscribe((data) => {
        return data;
      });
  }
}
