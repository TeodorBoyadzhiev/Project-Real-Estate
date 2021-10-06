import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ContentService } from '../../content.service';
import { IApartment } from '../../shared/interfaces';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})

export class CatalogComponent implements OnInit, OnChanges{

  apartments?: IApartment[] = [];
  description: any;
  errorLoadingUsers = false;

  constructor(
    private contentService: ContentService
  ) { }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.apartments = undefined;
    this.contentService.getApartments().subscribe(apartments => this.apartments = apartments);
  }


  Search() {
    if (this.description == '') {
      this.ngOnInit();
    } else {
      this.apartments = this.apartments!.filter(res => {
        return res.description.toLocaleLowerCase().match(this.description.toLocaleLowerCase())
      })
    }
  }



}
