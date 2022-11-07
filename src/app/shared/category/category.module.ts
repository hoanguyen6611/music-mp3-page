import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { RouterModule } from '@angular/router';
import { MediaCoverModule } from '../media-cover/media-cover.module';


@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    NzCardModule,
    RouterModule,
    MediaCoverModule
  ],
  exports: [CategoryComponent]
})
export class CategoryModule { }
