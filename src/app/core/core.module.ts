import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { appInterceptorProviders } from './app-interceptor';
import { AuthActivate } from './guards/auth.activate';
import { UserService } from './services/user2.service';



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
    appInterceptorProviders,
    AuthActivate,
    UserService
  ]
})
export class CoreModule { }
