import { AccountService } from '../../../services/account/account.service';
// import { AccountService } from '@services/account';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AccountActions from '../actions/account.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AccountEffects {
  constructor(
    private _actions$: Actions,
    private _router: Router,
    private _accountService: AccountService
  ) {}

  login$ = createEffect(() =>
    this._actions$.pipe(
      ofType(AccountActions.login),
      mergeMap((action) =>
        this._accountService.login(action.credentials).pipe(
          map((payload: any) => {
            this._router.navigate(['/app']);
            return AccountActions.loginSuccess({
              user: payload.data,
              token: payload.token,
            });
          }),
          catchError((error) => {
            return of(AccountActions.loginError({ error: error.error }));
          })
        )
      )
    )
  );
}
