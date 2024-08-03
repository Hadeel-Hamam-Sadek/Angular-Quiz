import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/models/i-user';

// Define action types
export const loadUsers = createAction('[User] Load Users', props<{ page: number }>());
export const loadUsersSuccess = createAction('[User] Load Users Success', props<{ users: IUser[], totalCount: number }>());
export const loadUsersFailure = createAction('[User] Load Users Failure', props<{ error: any }>());
export const loadUserDetails = createAction('[User] Load User Details', props<{ userId: number }>());
export const loadUserDetailsSuccess = createAction('[User] Load User Details Success', props<{ user: IUser }>());
export const loadUserDetailsFailure = createAction('[User] Load User Details Failure', props<{ error: any }>());
