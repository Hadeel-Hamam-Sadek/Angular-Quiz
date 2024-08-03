import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../models/i-user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  getUsers(page: number = 1): Observable<{ data: IUser[], total: number }> {
    return this.http.get<{ data: IUser[], total: number }>(`${this.apiUrl}?page=${page}`);
  }

  getUserById(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${this.apiUrl}/${id}`);
  }
}
