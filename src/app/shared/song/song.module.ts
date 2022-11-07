import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongComponent } from './song.component';



@NgModule({
  declarations: [SongComponent],
  imports: [
    CommonModule
  ],
  exports: [SongComponent]
})
export class SongModule { }
