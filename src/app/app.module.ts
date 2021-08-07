import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApartmentsModule } from './apartments/apartments.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    UserModule,
    AppRoutingModule,
    ApartmentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
