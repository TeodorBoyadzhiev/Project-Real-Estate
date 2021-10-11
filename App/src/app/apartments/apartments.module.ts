import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { CreateComponent } from './create/create.component';
import { ApartmentsRoutingModule } from './apartments-routing.module';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { ContentService } from '../shared/services/content.service';
import { FormsModule } from '@angular/forms';
import { CommentsComponent } from './comments/comments.component';
import { NewCommentComponent } from './new-comment/new-comment.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [
    CatalogComponent,
    CreateComponent,
    EditComponent,
    DetailsComponent,
    CommentsComponent,
    NewCommentComponent,


  ],
  imports: [
    CommonModule,
    FormsModule,
    ApartmentsRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [
    ContentService,
  ]
})
export class ApartmentsModule { }
