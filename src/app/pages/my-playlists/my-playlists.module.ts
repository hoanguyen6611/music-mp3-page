import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPlaylistsRoutingModule } from './my-playlists-routing.module';
import { MyPlaylistsComponent } from './my-playlists.component';


@NgModule({
  declarations: [MyPlaylistsComponent],
  imports: [
    CommonModule,
    MyPlaylistsRoutingModule
  ],
  exports: [MyPlaylistsComponent]
})
export class MyPlaylistsModule { }
