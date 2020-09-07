import { ActionReducerMap } from '@ngrx/store';
import { InjectionToken } from '@angular/core';

export interface AppState {
  account: any;
  stockingup: any;
}

export const appReducers: ActionReducerMap<AppState> = {
  account: null,
  stockingup: null,
};

export const REDUCERS_TOKEN = new InjectionToken<ActionReducerMap<AppState>>(
  'App Reducers'
);

export const reducerProvider = {
  provide: REDUCERS_TOKEN,
  useValue: appReducers,
};
