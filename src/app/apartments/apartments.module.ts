import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { CreateComponent } from './create/create.component';
import { ApartmentsRoutingModule } from './apartments-routing.module';



@NgModule({
  declarations: [
    CatalogComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    ApartmentsRoutingModule
  ]
})
export class ApartmentsModule { }
