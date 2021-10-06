import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from '../../content.service';
import { UserService } from '../../user.service';
import { IApartment, IComment } from '../../shared/interfaces';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  apartment: IApartment | undefined;
  recentComments: IComment[] | undefined;

  get isOwner(): boolean {
    return this.apartment?.userId._id == this.userService.user?._id
  }

  get isRented() {
    return ((this.apartment?.rented)?.length! > 0)
  }

  constructor(
    private contentService: ContentService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.fetchApartment();

  }
  
  fetchApartment(): void {
    this.apartment = undefined;
    this.recentComments = undefined;
    const id = this.activatedRoute.snapshot.params.apartmentId;
    this.contentService.getApartment(id).subscribe(apartment => {
      this.apartment = apartment,
        this.recentComments = apartment.comments
    });
  }

  rentApartment(): void {
    const userId = this.userService.user?._id;
    const id = this.activatedRoute.snapshot.params.apartmentId;
    this.contentService.rentApartment(id).subscribe({
      next: () => this.router.navigate([`/profile`]),
      error: (err) => console.error(err)
    });
  }


  deleteApartment(): void {
    this.apartment = undefined;
    const id = this.activatedRoute.snapshot.params.apartmentId;
    this.contentService.deleteApartment(id).subscribe({
      next: () => this.router.navigate(['/apartments']),
      error: (err) => console.error(err)
    });
  }

}
