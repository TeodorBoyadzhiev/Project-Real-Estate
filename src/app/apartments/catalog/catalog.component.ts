import { Component } from '@angular/core';
import { ContentService } from '../../content.service';
import { IApartment } from '../../shared/interfaces';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {

  apartments?: IApartment[] | undefined;

  constructor(
    private contentService: ContentService
  ) { }

  fetchApartments(): void {
    this.apartments = undefined;
    this.contentService.getApartments().subscribe(apartments => this.apartments = apartments);
  }

}
