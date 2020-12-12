import { createReducer, on, Action } from '@ngrx/store';
import { User } from 'src/app/core/models/user';
import * as AccountActions from '../actions/account.actions';

export interface AccountState {
  user: User;
  token: string;
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const accountInitialState: AccountState = {
  user: null,
  token: null,
  loading: false,
  loaded: false,
  error: null,
};

export const accountReducer = createReducer(
  accountInitialState,
  on(AccountActions.login, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(AccountActions.loginSuccess, (state, action) => ({
    ...state,
    user: action.user,
    token: action.token,
    loading: false,
    loaded: true,
  })),
  on(AccountActions.loginError, (state, action) => ({
    ...state,
    user: null,
    token: null,
    loading: false,
    loaded: false,
    error: action.error,
  }))
);

export function AccountReducer(state: AccountState, action: Action) {
  return accountReducer(state, action);
}
