import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  get username(): String {
    return this.userService.user?.username || '';
  }

  get email(): String {
    return this.userService.user?.email || '';
  }

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

}
