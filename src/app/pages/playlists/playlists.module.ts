import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistsRoutingModule } from './playlists-routing.module';
import { SongModule } from 'src/app/shared/song';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PlaylistsRoutingModule,
    SongModule
  ]
})
export class PlaylistsModule { }
