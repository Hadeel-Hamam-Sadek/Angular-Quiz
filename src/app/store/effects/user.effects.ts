import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import {
  loadUsers,
  loadUsersSuccess,
  loadUsersFailure,
  loadUserDetails,
  loadUserDetailsSuccess,
  loadUserDetailsFailure,
} from '../actions/user.actions';
import { IUser } from 'src/app/models/i-user';

@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      mergeMap((action) =>
        this.usersService.getUsers(action.page).pipe(
          map((response) =>
            loadUsersSuccess({
              users: response.data,
              totalCount: response.total,
            })
          ),
          catchError((error) => of(loadUsersFailure({ error })))
        )
      )
    )
  );

  loadUserDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUserDetails),
      mergeMap((action) =>
        this.usersService.getUserById(action.userId).pipe(
          map((response) => {
            const user: IUser = response.data;
            return loadUserDetailsSuccess({ user });
          }),
          catchError((error) => of(loadUserDetailsFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private usersService: UsersService) {}
}
