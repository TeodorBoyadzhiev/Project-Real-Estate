import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from '../../core/services/content.service';
import { UserService } from '../../core/services/user.service';
import { IApartment, IComment } from '../../shared/interfaces';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  apartment: IApartment | undefined;
  comments: IComment | undefined;

  get isOwner(): boolean {
    return this.apartment?.userId == this.userService.user?._id
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
    const id = this.activatedRoute.snapshot.params.apartmentId;
    this.contentService.getApartment(id).subscribe(apartment => this.apartment = apartment);
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
