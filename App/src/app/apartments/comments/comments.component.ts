import { Component, Input, OnInit } from '@angular/core';
import { IApartment, IComment } from '../../shared/interfaces';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent<T> implements OnInit {

  @Input() comments!: IComment[] | undefined;
  @Input() recentApartment!: IApartment | undefined;

  constructor() {}

  get areComments() {
    return ((this.comments)?.length! > 0)
  }
  
  ngOnInit(): void {
  }

}
