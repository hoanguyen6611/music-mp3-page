import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCardModule } from 'ng-zorro-antd/card';
import { ForgetPasswordPageComponent } from './forget-password-page/forget-password-page.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { PlayButtonModule } from '../shared/play-button/play-button.module';


const NzModules = [
  NzLayoutModule,
  NzButtonModule,
  NzIconModule,
  NzFormModule,
  NzInputModule,
  NzMessageModule,
  NzSpinModule,
  NzCheckboxModule,
  NzCardModule,
  NzDividerModule,
  NzSpaceModule,
];

@NgModule({
  declarations: [
    LandingPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ForgetPasswordPageComponent,
  ],
  imports: [
    CommonModule,
    ...NzModules,
    ReactiveFormsModule,
    TranslateModule,
    LandingPageRoutingModule,
    PlayButtonModule
  ]
})
export class LandingPageModule {}
