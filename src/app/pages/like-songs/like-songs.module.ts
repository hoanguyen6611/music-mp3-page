import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeSongsComponent } from './like-songs.component';



@NgModule({
  declarations: [LikeSongsComponent],
  imports: [
    CommonModule
  ],
  exports: [LikeSongsComponent]
})
export class LikeSongsModule { }
