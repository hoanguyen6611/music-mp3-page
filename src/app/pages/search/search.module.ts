import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { CategoryModule } from 'src/app/shared/category/category.module';
import { SearchComponent } from './search.component';
import { SearchStore } from './search.store';
import { ReactiveFormsModule } from '@angular/forms';
import { SongModule } from 'src/app/shared/song';


@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    CategoryModule,
    ReactiveFormsModule,
    SongModule
  ],
  providers: [SearchStore]
})
export class SearchModule { }
