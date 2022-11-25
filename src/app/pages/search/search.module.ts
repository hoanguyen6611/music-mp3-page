import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { CategoryModule } from 'src/app/shared/category/category.module';
import { SearchComponent } from './search.component';
import { SearchStore } from './search.store';


@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    CategoryModule
  ],
  providers: [SearchStore]
})
export class SearchModule { }
