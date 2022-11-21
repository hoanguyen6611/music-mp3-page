import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorysRoutingModule } from './categorys-routing.module';
import { CategorysComponent } from './categorys.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CategoryModule } from 'src/app/shared/category/category.module';
import { CategorysStore } from './categorys.store';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { DetailModule } from 'src/app/shared/detail/detail.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { TrackInfoModule } from 'src/app/shared/track-info/track-info.module';
import { MediaNumberModule } from 'src/app/shared/media-number/media-number.module';

const nzModules = [
  NzGridModule,
  NzButtonModule,
  NzIconModule,
  NzInputModule,
  NzCardModule,
  NzTableModule
];
@NgModule({
  declarations: [CategorysComponent, CategoryDetailComponent],
  imports: [
    CommonModule,
    CategorysRoutingModule,
    CategoryModule,
    DetailModule,
    TrackInfoModule,
    MediaNumberModule,
    ...nzModules,
  ],
  exports: [CategorysComponent],
  providers: [CategorysStore]
})
export class CategorysModule { }
