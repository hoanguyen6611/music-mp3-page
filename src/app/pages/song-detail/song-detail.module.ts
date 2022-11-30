import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SongDetailRoutingModule } from './song-detail-routing.module';
import { DetailModule } from 'src/app/shared/detail/detail.module';
import { TrackInfoModule } from 'src/app/shared/track-info/track-info.module';
import { SongDetailComponent } from './song-detail.component';
import { SongDetailStore } from './song-detail.store';
import { PlaylistTrackModule } from 'src/app/shared/playlist-track/playlist-track.module';
import { TitleListModule } from 'src/app/shared/title-list/title-list.module';
import { TranslateModule } from '@ngx-translate/core';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { LikeSongStore } from '../like-songs/like-songs.store';
import { PlayButtonModule } from 'src/app/shared/play-button/play-button.module';


@NgModule({
  declarations: [SongDetailComponent],
  imports: [
    CommonModule,
    SongDetailRoutingModule,
    DetailModule,
    TrackInfoModule,
    PlaylistTrackModule,
    TitleListModule,
    TranslateModule,
    NzMessageModule,
    PlayButtonModule
  ],
  exports: [SongDetailComponent],
  providers: [SongDetailStore, LikeSongStore]
})
export class SongDetailModule { }
