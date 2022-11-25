import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistTrackComponent } from './playlist-track.component';
import { MediaNumberModule } from '../media-number/media-number.module';
import { TrackInfoModule } from '../track-info/track-info.module';

@NgModule({
  declarations: [PlaylistTrackComponent],
  imports: [CommonModule, MediaNumberModule, TrackInfoModule],
  exports: [PlaylistTrackComponent],
})
export class PlaylistTrackModule {}
