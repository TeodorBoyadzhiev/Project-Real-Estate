import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces/user';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UserService {

  user: IUser | null | undefined = undefined;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(
    private http: HttpClient
  ) { }

  login(data: { email: string, password: string }) {
    return this.http.post<IUser>(`/api/login`, data).pipe(
      tap((user) => this.user = user)
    );
  }

  register(data: { username: string, email: string, password: string }) {
    return this.http.post<IUser>(`/api/register`, data).pipe(
      tap((user) => this.user = user)
    );
  }

  getProfileInfo() {
    return this.http.get<IUser>(`/api/users/profile`).pipe(
      tap((user) => this.user = user)
    );
  }


  logout() {
    return this.http.post<IUser>(`/api/logout`, {}).pipe(
      tap((user)=> this.user = null))
  }




}