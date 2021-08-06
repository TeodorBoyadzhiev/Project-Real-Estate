import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { CreateComponent } from './create/create.component';



const routes: Routes = [
  {
    path: 'apartments',
    children: [{
      path: '',
      pathMatch: 'full',
      component: CatalogComponent
    }]
  },
  {
    path: 'create',
    component: CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class ApartmentsRoutingModule { }
