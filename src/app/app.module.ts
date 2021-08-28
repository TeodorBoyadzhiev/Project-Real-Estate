import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { ApartmentsModule } from './apartments/apartments.module';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { NotFoundRoutingModule } from './not-found/not-found-routing.module';
import { ContentService } from './content.service';
import { UserService } from './user.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    AppRoutingModule,
    ApartmentsModule,
    UserModule,
    NotFoundRoutingModule
  ],
  providers: [
    ContentService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
