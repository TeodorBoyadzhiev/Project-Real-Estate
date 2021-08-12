import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/core/services/content.service';
import { IApartment } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent{

  apartment: IApartment | undefined;

  constructor(
    private contentService: ContentService,
    private activatedRoute: ActivatedRoute
  ) {
    this.fetchApartment();
  }

  fetchApartment(): void {
    this.apartment = undefined;
    const id = this.activatedRoute.snapshot.params.apartmentId;
    this.contentService.getApartment(id).subscribe(apartment => this.apartment = apartment);
  }
  
}
