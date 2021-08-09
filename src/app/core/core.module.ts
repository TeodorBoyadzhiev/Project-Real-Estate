import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { appInterceptorProviders } from './app-interceptor';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
 
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    appInterceptorProviders
  ]
})
export class CoreModule { }
