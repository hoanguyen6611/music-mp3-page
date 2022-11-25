import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SongDetailRoutingModule } from './song-detail-routing.module';
import { DetailModule } from 'src/app/shared/detail/detail.module';
import { TrackInfoModule } from 'src/app/shared/track-info/track-info.module';
import { SongDetailComponent } from './song-detail.component';
import { SongDetailStore } from './song-detail.store';
import { PlaylistTrackModule } from 'src/app/shared/playlist-track/playlist-track.module';
import { TitleListModule } from 'src/app/shared/title-list/title-list.module';


@NgModule({
  declarations: [SongDetailComponent],
  imports: [
    CommonModule,
    SongDetailRoutingModule,
    DetailModule,
    TrackInfoModule,
    PlaylistTrackModule,
    TitleListModule
  ],
  exports: [SongDetailComponent],
  providers: [SongDetailStore]
})
export class SongDetailModule { }
