import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from '../core/guards/auth.activate';
import { CatalogComponent } from './catalog/catalog.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';



const routes: Routes = [
  {
    path: 'apartments',
    children: [{
      path: '',
      pathMatch: 'full',
      component: CatalogComponent
    },
    {
      path: 'edit/:apartmentId',
      component: EditComponent
    },
    {
      path: 'details/:apartmentId',
      component: DetailsComponent
    }]
  },
  {
    path: 'create',
    component: CreateComponent,
    canActivate: [AuthActivate],
    data: {
      authenticationRequired: true,
      authenticationFailureRedirectUrl: '/login'
    }
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class ApartmentsRoutingModule { }
