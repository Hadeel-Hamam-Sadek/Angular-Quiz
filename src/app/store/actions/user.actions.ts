import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/models/i-user';

export const loadUsers = createAction(
  '[User] Load Users',
  props<{ page: number }>()
);
export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ users: IUser[]; totalCount: number }>()
);
export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: any }>()
);

export const loadUserDetails = createAction(
  '[User Details] Load User Details',
  props<{ userId: number }>()
);

export const loadUserDetailsSuccess = createAction(
  '[User Details] Load User Details Success',
  props<{ user: IUser }>()
);

export const loadUserDetailsFailure = createAction(
  '[User Details] Load User Details Failure',
  props<{ error: any }>()
);
