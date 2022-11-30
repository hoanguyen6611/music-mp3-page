import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AblumDetailRoutingModule } from './ablum-detail-routing.module';
import { AblumDetailComponent } from './ablum-detail.component';
import { AlbumDetailStore } from './ablum-detail.store';
import { DetailModule } from 'src/app/shared/detail/detail.module';
import { TrackInfoModule } from 'src/app/shared/track-info/track-info.module';
import { MediaNumberModule } from 'src/app/shared/media-number/media-number.module';
import { PlaylistTrackModule } from 'src/app/shared/playlist-track/playlist-track.module';
import { TitleListModule } from 'src/app/shared/title-list/title-list.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { PlayButtonModule } from 'src/app/shared/play-button/play-button.module';

@NgModule({
  declarations: [AblumDetailComponent],
  imports: [
    CommonModule,
    AblumDetailRoutingModule,
    DetailModule,
    TrackInfoModule,
    MediaNumberModule,
    PlaylistTrackModule,
    TitleListModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NzMessageModule,
    PlayButtonModule
  ],
  exports: [AblumDetailComponent],
  providers: [AlbumDetailStore],
})
export class AblumDetailModule {}
