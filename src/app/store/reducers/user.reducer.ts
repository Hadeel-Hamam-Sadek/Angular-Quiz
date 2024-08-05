import { createReducer, on } from '@ngrx/store';
import {
  loadUsers,
  loadUsersSuccess,
  loadUserDetails,
  loadUserDetailsSuccess,
  loadUserDetailsFailure,
  loadUsersFailure,
} from '../actions/user.actions';
import { IUser } from 'src/app/models/i-user';

export interface UserState {
  users: IUser[];
  loading: boolean;
  totalCount: number;
  userDetails: IUser | null;
}

export const initialState: UserState = {
  users: [],
  loading: false,
  totalCount: 0,
  userDetails: null,
};

export const userReducer = createReducer(
  initialState,

  // Users
  on(loadUsers, (state) => ({ ...state, loading: true })),
  on(loadUsersSuccess, (state, { users, totalCount }) => ({
    ...state,
    users,
    loading: false,
    totalCount,
  })),
  on(loadUsersFailure, (state) => ({
    ...state,
    loading: false,
  })),

  // User Details
  on(loadUserDetails, (state) => ({ ...state, loading: true })),
  on(loadUserDetailsSuccess, (state, { user }) => ({
    ...state,
    userDetails: user,
    loading: false,
  })),
  on(loadUserDetailsFailure, (state) => ({
    ...state,
    loading: false,
  }))
);
