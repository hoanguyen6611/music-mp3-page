import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

const nzModules = [NzPageHeaderModule, NzBreadCrumbModule, NzIconModule];

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    ...nzModules,
    RouterModule,
    TranslateModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
