import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { loadUsers, loadUsersSuccess, loadUsersFailure } from '../actions/user.actions';

@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      mergeMap(action =>
        this.usersService.getUsers(action.page).pipe(
          map(response => loadUsersSuccess({ users: response.data, totalCount: response.total })),
          catchError(error => of(loadUsersFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private usersService: UsersService
  ) {}
}
