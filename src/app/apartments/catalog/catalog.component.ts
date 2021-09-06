import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from '../../content.service';
import { IApartment } from '../../shared/interfaces';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})

export class CatalogComponent implements OnInit {

  apartments?: IApartment[] | undefined;
  errorLoadingUsers = false;

  constructor(
    private contentService: ContentService,
    private route: ActivatedRoute,
    private router: Router

  ) {
    // this.fetchApartments();

  }

  ngOnInit(): void {
    this.apartments = undefined;
    this.contentService.getApartments().subscribe(apartments => this.apartments = apartments);
  }

  fetchApartments(): void {
    // this.apartments = undefined;
    // this.contentService.getApartments().subscribe(apartments => this.apartments = apartments);
  }




  search(form: NgForm): void {
    this.apartments = undefined;
    if (form.invalid) { return; }
    console.log(form.value)
    const { search } = form.value;
    this.contentService.searchApartments(search).subscribe(
      apartments => this.apartments = apartments,
      error => {
        console.log(error);
        this.errorLoadingUsers = true;
      },
      () => console.log('load apartments stream completed.')


    )

  }

}
