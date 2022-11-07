import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './notifications.component';
import { NotificationsItemComponent } from './notifications-item/notifications-item.component';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { TranslateModule } from '@ngx-translate/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzEmptyModule } from 'ng-zorro-antd/empty';



@NgModule({
  declarations: [NotificationsComponent, NotificationsItemComponent],
  imports: [
    CommonModule,
    NzBadgeModule,
    NzDropDownModule,
    NzIconModule,
    TranslateModule,
    NzDividerModule,
    NzButtonModule,
    NzEmptyModule,
  ],
  exports: [NotificationsComponent]
})
export class NotificationsModule { }
