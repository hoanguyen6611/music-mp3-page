import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorysRoutingModule } from './categorys-routing.module';
import { CategorysComponent } from './categorys.component';
import { CategoryModule } from 'src/app/shared/category/category.module';
import { CategorysStore } from './categorys.store';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { DetailModule } from 'src/app/shared/detail/detail.module';
import { TrackInfoModule } from 'src/app/shared/track-info/track-info.module';
import { MediaNumberModule } from 'src/app/shared/media-number/media-number.module';
import { PlaylistTrackModule } from 'src/app/shared/playlist-track/playlist-track.module';
import { TitleListModule } from 'src/app/shared/title-list/title-list.module';
import { TranslateModule } from '@ngx-translate/core';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { PlayButtonModule } from 'src/app/shared/play-button/play-button.module';

@NgModule({
  declarations: [CategorysComponent, CategoryDetailComponent],
  imports: [
    CommonModule,
    CategorysRoutingModule,
    CategoryModule,
    DetailModule,
    TrackInfoModule,
    MediaNumberModule,
    PlaylistTrackModule,
    TitleListModule,
    TranslateModule,
    NzMessageModule,
    PlayButtonModule
  ],
  exports: [CategorysComponent],
  providers: [CategorysStore],
})
export class CategorysModule {}
