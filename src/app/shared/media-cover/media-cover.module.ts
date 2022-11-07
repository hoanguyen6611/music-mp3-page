import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaCoverComponent } from './media-cover.component';



@NgModule({
  declarations: [MediaCoverComponent],
  imports: [
    CommonModule
  ],
  exports: [MediaCoverComponent]
})
export class MediaCoverModule { }
