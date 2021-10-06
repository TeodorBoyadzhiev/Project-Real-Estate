import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterpipePipe } from './pipes/filterpipe.pipe';
import { TitlecasePipe } from './pipes/titlecase.pipe';



@NgModule({
  declarations: [
    FilterpipePipe,
    TitlecasePipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TitlecasePipe,
    FilterpipePipe,
  ]
})
export class SharedModule { }
