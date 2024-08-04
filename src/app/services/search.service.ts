import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchUserIdSubject = new BehaviorSubject<number | null>(null);
  searchUserId$ = this.searchUserIdSubject.asObservable();

  updateSearchUserId(userId: number | null): void {
    this.searchUserIdSubject.next(userId);
  }
}
