import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, combineLatest, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { loadUsers } from '../../store/actions/user.actions';
import { selectUsers, selectLoading, selectTotalCount } from '../../store/selectors/user.selectors';
import { IUser } from 'src/app/models/i-user';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users$: Observable<IUser[]> = this.store.select(selectUsers);
  filteredUsers$: Observable<IUser[]> = of([]);
  loading$: Observable<boolean> = this.store.select(selectLoading);
  totalCount$: Observable<number> = this.store.select(selectTotalCount);
  currentPage: number = 1;
  pageSize: number = 6;

  constructor(private store: Store, private router: Router, private searchService: SearchService) {}

  ngOnInit(): void {
    
    this.loadUsers(this.currentPage);

    this.filteredUsers$ = combineLatest([
      this.users$,
      this.searchService.searchUserId$.pipe(startWith(null))
    ]).pipe(
      map(([users, searchUserId]) => {
        if (searchUserId !== null) {
          return users.filter(user => user.id === searchUserId);
        }
        return users;
      })
    );
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
