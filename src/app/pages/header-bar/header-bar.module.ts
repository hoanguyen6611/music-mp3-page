import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBarComponent } from './header-bar.component';
import { LayoutModule } from 'src/app/core/layout/layout.module';
import { NotificationsModule } from 'src/app/containers/notifications/notifications.module';



@NgModule({
  declarations: [HeaderBarComponent],
  imports: [
    CommonModule,
    LayoutModule,
    NotificationsModule,
  ],
  exports: [HeaderBarComponent]
})
export class HeaderBarModule { }
