import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces/user';

@Injectable()
export class UserService {

  user: IUser | undefined;

  constructor() { }

  login(email: string, password: string): void {

  }


  logout(): void {
    this.user = undefined;
  }




}
