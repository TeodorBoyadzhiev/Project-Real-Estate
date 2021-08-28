import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitlecasePipe } from './pipes/titlecase.pipe';
import { FilterpipePipe } from './pipes/filterpipe.pipe';



@NgModule({
  declarations: [
    FilterpipePipe,
    TitlecasePipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilterpipePipe,
    TitlecasePipe,

  ]
})
export class SharedModule { }
