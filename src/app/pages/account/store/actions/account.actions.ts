import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/core/models/user';

export const login = createAction(
  '[Account] Login',
  props<{ credentials: any }>()
);

export const loginSuccess = createAction(
  '[Account] Login Success',
  props<{ user: User; token: string }>()
);

export const loginError = createAction(
  '[Login] Login Error',
  props<{ error: any }>()
);
