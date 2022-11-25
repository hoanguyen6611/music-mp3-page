import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPlaylistsRoutingModule } from './my-playlists-routing.module';
import { MyPlaylistsComponent } from './my-playlists.component';
import { PlaylistModule } from 'src/app/shared/playlist';
import { MyPlayListStore } from './my-playlists.store';
import { MyPlaylistDetailComponent } from './components/my-playlist-detail/my-playlist-detail.component';
import { DetailModule } from 'src/app/shared/detail/detail.module';
import { TrackInfoModule } from 'src/app/shared/track-info/track-info.module';
import { MediaNumberModule } from 'src/app/shared/media-number/media-number.module';
import { PlaylistTrackModule } from 'src/app/shared/playlist-track/playlist-track.module';
import { TitleListModule } from 'src/app/shared/title-list/title-list.module';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [MyPlaylistsComponent, MyPlaylistDetailComponent],
  imports: [
    CommonModule,
    MyPlaylistsRoutingModule,
    PlaylistModule,
    DetailModule,
    TrackInfoModule,
    MediaNumberModule,
    PlaylistTrackModule,
    TitleListModule,
    NzMessageModule,
    TranslateModule
  ],
  exports: [MyPlaylistsComponent],
  providers: [MyPlayListStore]
})
export class MyPlaylistsModule { }
