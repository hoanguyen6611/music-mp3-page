import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableSongComponent } from './table-song.component';



@NgModule({
  declarations: [TableSongComponent],
  imports: [
    CommonModule
  ],
  exports: [TableSongComponent]
})
export class TableSongModule { }
