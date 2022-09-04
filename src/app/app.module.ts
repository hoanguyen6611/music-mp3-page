import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainPageComponent } from './pages/main-page.component';
import { NotificationsComponent } from './containers/notifications/notifications.component';
import { NotificationsItemComponent } from './containers/notifications/notifications-item/notifications-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MainPageComponent,
    NotificationsComponent,
    NotificationsItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
