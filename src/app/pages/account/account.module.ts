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
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';

const nzModules = [NzButtonModule, NzIconModule, NzFormModule, NzInputModule];
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
    ...nzModules,
  ],
})
export class AccountModule {}
