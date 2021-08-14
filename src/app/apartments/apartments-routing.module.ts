import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from '../core/guards/auth.activate';
import { CatalogComponent } from './catalog/catalog.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { NewCommentComponent } from './new-comment/new-comment.component';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CatalogComponent
  },
  {
    path: 'create',
    component: CreateComponent,
    canActivate: [AuthActivate],
    data: {
      authenticationRequired: true,
      authenticationFailureRedirectUrl: 'user/login'
    }
  },
  {
    path: ':apartmentId',
    component: DetailsComponent,
    canActivate: [AuthActivate],
    data: {
      authenticationRequired: true,
      authenticationFailureRedirectUrl: 'user/login'
    }
  },
  {
    path: 'edit/:apartmentId',
    component: EditComponent,
    canActivate: [AuthActivate],
    data: {
      authenticationRequired: true,
      authenticationFailureRedirectUrl: 'user/login'
    }
  },
  {
    path: 'comment/:apartmentId',
    component: NewCommentComponent,
    canActivate: [AuthActivate],
    data: {
      authenticationRequired: true,
      authenticationFailureRedirectUrl: 'user/login'
    }

  }

]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ApartmentsRoutingModule { }
