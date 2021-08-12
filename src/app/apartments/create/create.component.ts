import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContentService } from '../../core/services/content.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {


  constructor(
    private contentService: ContentService,
    private router: Router

  ) { }

  createApartment(form: NgForm):void {
    if (form.invalid) { return; }
    this.contentService.saveApartment(form.value).subscribe({
      next: () => {
        this.router.navigate(['/apartments']);
      },
      error: (err) => {
        console.log(err);
      }
    })
}


}
