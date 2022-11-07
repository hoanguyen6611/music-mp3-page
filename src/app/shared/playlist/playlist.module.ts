import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistComponent } from './playlist.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterModule } from '@angular/router';
import { MediaCoverModule } from '../media-cover/media-cover.module';
import { PlayButtonModule } from '../play-button/play-button.module';


@NgModule({
  declarations: [PlaylistComponent],
  imports: [
    CommonModule,
    NzCardModule,
    NzIconModule,
    RouterModule,
    MediaCoverModule,
    PlayButtonModule
  ],
  exports: [PlaylistComponent]
})
export class PlaylistModule { }
