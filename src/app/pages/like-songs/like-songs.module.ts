import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeSongsRoutingModule } from './like-songs-routing.module';
import { LikeSongsComponent } from './like-songs.component';
import { DetailModule } from 'src/app/shared/detail/detail.module';
import { PlaylistTrackModule } from 'src/app/shared/playlist-track/playlist-track.module';
import { TitleListModule } from 'src/app/shared/title-list/title-list.module';
import { LikeSongStore } from './like-songs.store';
import { PlayButtonModule } from 'src/app/shared/play-button/play-button.module';
import { TranslateModule } from '@ngx-translate/core';
import { NzMessageModule } from 'ng-zorro-antd/message';

@NgModule({
  declarations: [LikeSongsComponent],
  imports: [
    CommonModule,
    LikeSongsRoutingModule,
    DetailModule,
    PlaylistTrackModule,
    TitleListModule,
    PlayButtonModule,
    TranslateModule,
    NzMessageModule
  ],
  exports: [LikeSongsComponent],
  providers: [LikeSongStore]
})
export class LikeSongsModule {}
