import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { appInterceptorProviders } from './app-interceptor';
import { AuthActivate } from './guards/auth.activate';
import { UserService } from './services/user.service';
import { ContentService } from './services/content.service';



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
    AuthActivate,
    appInterceptorProviders,
    UserService,
    ContentService
  ]
})
export class CoreModule { }
