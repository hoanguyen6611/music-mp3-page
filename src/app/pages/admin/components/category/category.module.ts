import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { TranslateModule } from '@ngx-translate/core';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './category.component';
import { CategoryTableComponent } from './components/category-table/category-table.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { CategoryPageStore } from './category.store';

@NgModule({
  declarations: [
    CategoryComponent,
    CategoryTableComponent,
    CategoryFormComponent,
  ],
  imports: [
    CommonModule,
    NzTableModule,
    NzToolTipModule,
    NzIconModule,
    TranslateModule,
    NzDrawerModule,
    NzButtonModule,
    NzFormModule,
    NzSpinModule,
    ReactiveFormsModule,
  ],
  exports: [CategoryComponent],
  providers: [CategoryPageStore]
})
export class CategoryModule {}
