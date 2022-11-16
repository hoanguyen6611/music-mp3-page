import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CategoryModule } from 'src/app/shared/category/category.module';
import { SearchComponent } from './search.component';
import { SearchStore } from './search.store';

const nzModules = [
  NzGridModule,
  NzButtonModule,
  NzIconModule,
  NzInputModule,
  NzCardModule,
];

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    CategoryModule,
    ...nzModules,
  ],
  providers: [SearchStore]
})
export class SearchModule { }
