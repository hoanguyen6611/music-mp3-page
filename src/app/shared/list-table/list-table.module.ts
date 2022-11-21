import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTableComponent } from './list-table.component';



@NgModule({
  declarations: [ListTableComponent],
  imports: [
    CommonModule
  ],
  exports: [ListTableComponent]
})
export class ListTableModule { }
