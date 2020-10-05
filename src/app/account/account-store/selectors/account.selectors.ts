import { createSelector } from '@ngrx/store';
import { AppState } from '../../../app-store/app-store.reducer';

const account = (state: AppState) => state.account;
export const tokenSelector = createSelector(
  account,
  (account) => account.token
);
