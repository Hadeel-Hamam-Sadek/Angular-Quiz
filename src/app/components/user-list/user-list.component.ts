import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadUsers } from '../../store/actions/user.actions';
import { selectUsers, selectLoading, selectTotalCount } from '../../store/selectors/user.selectors';
import { IUser } from 'src/app/models/i-user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users$: Observable<IUser[]> = this.store.select(selectUsers);
  loading$: Observable<boolean> = this.store.select(selectLoading);
  totalCount$: Observable<number> = this.store.select(selectTotalCount);
  currentPage: number = 1;
  pageSize: number = 6;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.loadUsers(this.currentPage);
  }

  loadUsers(page: number): void {
    this.store.dispatch(loadUsers({ page }));
  }

  navigateToUserDetails(userId: number): void {
    this.router.navigate(['/user-details', userId]);
  }

  onPaginationChange(page: number): void {
    this.currentPage = page;
    this.loadUsers(this.currentPage);
  }
}
