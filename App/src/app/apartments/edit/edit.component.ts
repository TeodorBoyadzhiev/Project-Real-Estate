import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from 'src/app/content.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {


  get apartment() {
    return this.contentService.apartment;
  }

  constructor(
    private contentService: ContentService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  editApartment(form: NgForm): void {
    if (form.invalid) { return; }
    const id = this.activatedRoute.snapshot.params.apartmentId;
    this.contentService.editApartment(form.value, id).subscribe({
      next: () => {
        this.router.navigate([`/apartments`]);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
