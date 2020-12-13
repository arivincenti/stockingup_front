import { createSelector } from '@ngrx/store';
import { AppState } from '../../../../core/store/app-store.reducer';

const account = (state: AppState) => state.account;
export const tokenSelector = createSelector(
  account,
  (account) => account.token
);

export const errorMessage = createSelector(
  account,
  (account) => account.error?.message
);
