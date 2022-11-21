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


@NgModule({
  declarations: [MyPlaylistsComponent, MyPlaylistDetailComponent],
  imports: [
    CommonModule,
    MyPlaylistsRoutingModule,
    PlaylistModule,
    DetailModule,
    TrackInfoModule,
    MediaNumberModule
  ],
  exports: [MyPlaylistsComponent],
  providers: [MyPlayListStore]
})
export class MyPlaylistsModule { }
