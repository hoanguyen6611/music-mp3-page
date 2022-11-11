import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPlaylistsRoutingModule } from './my-playlists-routing.module';
import { MyPlaylistsComponent } from './my-playlists.component';
import { PlaylistModule } from 'src/app/shared/playlist';


@NgModule({
  declarations: [MyPlaylistsComponent],
  imports: [
    CommonModule,
    MyPlaylistsRoutingModule,
    PlaylistModule
  ],
  exports: [MyPlaylistsComponent]
})
export class MyPlaylistsModule { }
