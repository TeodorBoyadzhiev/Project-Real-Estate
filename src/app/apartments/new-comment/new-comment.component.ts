import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from 'src/app/content.service';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent {

  constructor(
    private contentService: ContentService,
    private activatedRoute: ActivatedRoute,
    private router: Router

  ) { }

  createComment(form: NgForm): void {
    console.log(form.value)
    const id = this.activatedRoute.snapshot.params.apartmentId;

    if (form.invalid) { return; }
    this.contentService.saveComment(form.value, id).subscribe({
      next: () => {
        this.router.navigate([`/apartments/${id}`]);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
