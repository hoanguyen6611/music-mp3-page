import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorysRoutingModule } from './categorys-routing.module';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { CategorysComponent } from './categorys.component';


@NgModule({
  declarations: [
    CategoryDetailComponent,
    CategorysComponent
  ],
  imports: [
    CommonModule,
    CategorysRoutingModule
  ]
})
export class CategorysModule { }
