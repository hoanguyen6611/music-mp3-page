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
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { PlayButtonModule } from 'src/app/shared/play-button/play-button.module';


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
    TranslateModule,
    NzModalModule,
    NzFormModule,
    NzSpinModule,
    ReactiveFormsModule,
    NzButtonModule,
    TranslateModule,
    NzMessageModule,
    PlayButtonModule
  ],
  exports: [MyPlaylistsComponent],
  providers: [MyPlayListStore]
})
export class MyPlaylistsModule { }
