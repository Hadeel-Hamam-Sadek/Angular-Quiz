import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUserDetails, selectLoading } from '../../store/selectors/user.selectors';
import { IUser } from 'src/app/models/i-user';
import { Router, ActivatedRoute } from '@angular/router';
import { loadUserDetails } from '../../store/actions/user.actions';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  user$: Observable<IUser | null> = this.store.select(selectUserDetails);
  loading$: Observable<boolean> = this.store.select(selectLoading);

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const userId = +this.route.snapshot.paramMap.get('id')!;
    this.store.dispatch(loadUserDetails({ userId }));
  }

  navigateBack(): void {
    this.router.navigate(['/users']);
  }
}
