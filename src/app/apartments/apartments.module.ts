import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { CreateComponent } from './create/create.component';
import { ApartmentsRoutingModule } from './apartments-routing.module';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { ContentService } from '../core/services/content.service';
import { FormsModule } from '@angular/forms';
import { AsideComponent } from './comments/comments.component';
import { NewCommentComponent } from './new-comment/new-comment.component';



@NgModule({
  declarations: [
    CatalogComponent,
    CreateComponent,
    EditComponent,
    DetailsComponent,
    AsideComponent,
    NewCommentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ApartmentsRoutingModule
  ],
  providers: [
    ContentService
  ]
})
export class ApartmentsModule { }
