import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzListModule } from 'ng-zorro-antd/list';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

const NzModules = [
  NzMenuModule,
  NzAvatarModule,
  NzDropDownModule,
  NzBadgeModule,
  NzNotificationModule,
  NzIconModule,
  NzButtonModule,
  NzPopoverModule,
  NzGridModule,
  NzDividerModule,
  NzDrawerModule,
  NzListModule,
];

@NgModule({
  declarations: [UserMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NzModules,
    TranslateModule,
  ],
  exports: [UserMenuComponent]
})
export class LayoutModule { }
