import { createReducer, on } from '@ngrx/store';
import { loadUsers, loadUsersSuccess } from '../actions/user.actions';
import { IUser } from 'src/app/models/i-user';

export interface UserState {
  users: IUser[];
  loading: boolean;
  totalCount: number;
}

export const initialState: UserState = {
  users: [],
  loading: false,
  totalCount: 0,
};

export const userReducer = createReducer(
  initialState,
  on(loadUsers, (state) => ({ ...state, loading: true })),
  on(loadUsersSuccess, (state, { users, totalCount }) => ({
    ...state,
    users,
    loading: false,
    totalCount,
  }))
);
