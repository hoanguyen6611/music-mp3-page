import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistsRoutingModule } from './playlists-routing.module';
import { SongModule } from 'src/app/shared/song';
import { PlaylistDetailComponent } from './components/playlist-detail/playlist-detail.component';
import { PlaylistsComponent } from './playlists.component';


@NgModule({
  declarations: [
    PlaylistDetailComponent,
    PlaylistsComponent
  ],
  imports: [
    CommonModule,
    PlaylistsRoutingModule,
    SongModule
  ],
  exports: [
    PlaylistDetailComponent,
    PlaylistsComponent
  ],
})
export class PlaylistsModule { }
