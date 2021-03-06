import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { IApartment } from '../../shared/interfaces';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  rentedApartments?: IApartment[] = [];

  inUpdateMode = false;

  get user() {
    return this.userService.user;
  }

  get rentedApartment() {
    if (this.rentedApartments!.length < 1) {
      return false;
    }
    return true;
  }

  constructor(
    private userService: UserService
  ) {
    this.userService.getProfileInfo().subscribe(user => {
      this.rentedApartments = user.rentedApartments
    });
  }

  


  updateProfile(form: NgForm): void {
    if (form.invalid) { return; }
    this.userService.updateProfile(form.value).subscribe({
      next: () => {
        this.inUpdateMode = false;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
