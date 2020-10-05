import { ActionReducerMap } from '@ngrx/store';
import { InjectionToken } from '@angular/core';
import * as AccountReducer from '../account/account-store/reducer/account.reducer';

export interface AppState {
  account: AccountReducer.AccountState;
  stockingup: any;
}

export const appReducers: ActionReducerMap<AppState> = {
  account: AccountReducer.AccountReducer,
  stockingup: null,
};

export const REDUCERS_TOKEN = new InjectionToken<ActionReducerMap<AppState>>(
  'App Reducers'
);

export const reducerProvider = {
  provide: REDUCERS_TOKEN,
  useValue: appReducers,
};
