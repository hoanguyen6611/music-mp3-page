import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { MainPageRoutingModule } from './main-page-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BusyOverlayModule } from '../shared/busy-overlay/busy-overlay.module';
import { LayoutModule } from '../core/layout/layout.module';
import { NotificationsModule } from '../containers/notifications/notifications.module';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { NowPlayingModule } from './now-playing/now-playing.module';
import { ViewModule } from './view/view.module';
import { HeaderBarModule } from './header-bar/header-bar.module';

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    BusyOverlayModule,
    TranslateModule,
    ReactiveFormsModule,
    NowPlayingModule,
    LayoutModule,
    NotificationsModule,
    NavBarModule,
    HeaderBarModule,
    ViewModule,
  ],
})
export class MainPageModule {}
