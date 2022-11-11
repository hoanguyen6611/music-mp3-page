import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { TranslateModule } from '@ngx-translate/core';
import { ProfileComponent } from './components/profile/profile.component';
import { PasswordChangeComponent } from './components/password-change/password-change.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSpaceModule } from 'ng-zorro-antd/space';

const NzModules = [
  NzLayoutModule,
  NzMenuModule,
  NzCarouselModule,
  NzButtonModule,
  NzIconModule,
  NzFormModule,
  NzInputModule,
  NzSelectModule,
  NzMessageModule,
  NzSpinModule,
  NzCheckboxModule,
  NzCardModule,
  NzDividerModule,
  NzSpaceModule,
];
@NgModule({
  declarations: [AccountComponent, ProfileComponent, PasswordChangeComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    NzTabsModule,
    TranslateModule,
    NzIconModule,
    NzAvatarModule,
    ReactiveFormsModule,
    ...NzModules
  ]
})
export class AccountModule { }
