import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackInfoComponent } from './track-info.component';
import { RouterModule } from '@angular/router';
import { MediaCoverModule } from '../media-cover/media-cover.module';



@NgModule({
  declarations: [TrackInfoComponent],
  imports: [
    CommonModule,
    RouterModule,
    MediaCoverModule
  ],
  exports: [TrackInfoComponent]
})
export class TrackInfoModule { }
