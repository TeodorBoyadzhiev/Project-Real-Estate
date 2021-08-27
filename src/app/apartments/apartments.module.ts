import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { CreateComponent } from './create/create.component';
import { ApartmentsRoutingModule } from './apartments-routing.module';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { ContentService } from '../content.service';
import { FormsModule } from '@angular/forms';
import { CommentsComponent } from './comments/comments.component';
import { NewCommentComponent } from './new-comment/new-comment.component';



@NgModule({
  declarations: [
    CatalogComponent,
    CreateComponent,
    EditComponent,
    DetailsComponent,
    CommentsComponent,
    NewCommentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ApartmentsRoutingModule,
    FormsModule
  ],
  providers: [
    ContentService
  ]
})
export class ApartmentsModule { }
