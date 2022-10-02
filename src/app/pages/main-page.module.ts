import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { MainPageRoutingModule } from './main-page-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BusyOverlayModule } from '../shared/busy-overlay/busy-overlay.module';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

const nzModules = [
  NzLayoutModule,
  NzGridModule,
  NzMenuModule,
  NzIconModule,
  NzDropDownModule,
  NzBadgeModule,
  NzInputModule,
  NzToolTipModule,
  NzSpinModule,
  NzSliderModule,
  NzBreadCrumbModule
]


@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    BusyOverlayModule,
    TranslateModule,
    ReactiveFormsModule,
    ...nzModules
  ]
})
export class MainPageModule { }
