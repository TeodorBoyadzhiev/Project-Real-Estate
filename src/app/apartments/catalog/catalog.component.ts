import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContentService } from '../../core/services/content.service';
import { IApartment } from '../../shared/interfaces';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {

  apartments?: IApartment[] | undefined;

  constructor(
    private contentService: ContentService,
    private router:Router

  ) {
    this.fetchApartments();
  }

  fetchApartments(): void {
    this.apartments = undefined;
    this.contentService.getApartments().subscribe(apartments => this.apartments = apartments);
  }


  search(form: NgForm): void {
    this.apartments = undefined;
    if (form.invalid) { return; }
    console.log(form.value)
    const { search } = form.value;
    this.contentService.searchApartments(search).subscribe({
      next: () => {
        this.router.navigate(['/apartments']);
      },
      error: (err) => {
        console.log(err);
      }
    })

  }

}
