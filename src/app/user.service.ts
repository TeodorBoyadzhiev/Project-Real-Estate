import { Injectable } from '@angular/core';
import { IUser } from './shared/interfaces/user';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UserService {

  user: IUser | null | undefined;

  constructor(
    private http: HttpClient
  ) {
    this.loggedIn();
  }

  get isLogged(): boolean {
    // console.log(this.loggedIn())
    return !!this.loggedIn();
  }

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

  loggedIn() {
    console.log(!!localStorage.getItem)

    return !!localStorage.getItem('auth-cookie')
  }


  updateProfile(data: { username: string; email: string; tel: string; }) {
    return this.http.put<IUser>(`/api/users/profile`, data).pipe(
      tap((user) => this.user = user)
    );
  }


  logout() {
    return this.http.post<IUser>(`/api/logout`, {}).pipe(
      tap((user) => this.user = null))
  }




}
