import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackInfoComponent } from './track-info.component';
import { RouterModule } from '@angular/router';
import { MediaCoverModule } from '../media-cover/media-cover.module';
import { NzIconModule } from 'ng-zorro-antd/icon';



@NgModule({
  declarations: [TrackInfoComponent],
  imports: [
    CommonModule,
    RouterModule,
    MediaCoverModule,
    NzIconModule
  ],
  exports: [TrackInfoComponent]
})
export class TrackInfoModule { }
