import { Component } from '@angular/core';
import { ContentService } from '../core/services/content.service';
import { IApartment } from '../shared/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  apartments: IApartment[] | undefined;

  constructor(
    private contentService: ContentService,
  ) {

    this.fetchApartment();
  }

  fetchApartment(): void {
    this.apartments = undefined;
    this.contentService.getLatestApartments().subscribe(apartments => {
      this.apartments = apartments
    });
  }

}
