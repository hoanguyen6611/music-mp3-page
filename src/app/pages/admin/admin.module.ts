import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SongComponent } from './components/song/song.component';
import { CategoryComponent } from './components/category/category.component';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './admin.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { TranslateModule } from '@ngx-translate/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { SearchStore } from '../search/search.store';
import { AdminPageStore } from './admin.store';
import { CategoryTableComponent } from './components/category/components/category-table/category-table.component';
import { CategoryFormComponent } from './components/category/components/category-form/category-form.component';
import { SongTableComponent } from './components/song/components/song-table/song-table.component';
import { SongFormComponent } from './components/song/components/song-form/song-form.component';
import { AlbumComponent } from './components/album/album.component';
import { AlbumFormComponent } from './components/album/components/album-form/album-form.component';
import { AlbumTableComponent } from './components/album/components/album-table/album-table.component';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { TitleListModule } from 'src/app/shared/title-list/title-list.module';
import { PlaylistTrackModule } from 'src/app/shared/playlist-track/playlist-track.module';
import { TrackInfoModule } from 'src/app/shared/track-info/track-info.module';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { AlbumModule } from './components/album/album.module';
import { CategoryModule } from './components/category/category.module';
import { SongModule } from './components/song/song.module';

@NgModule({
  declarations: [
    UserComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NzTabsModule,
    TranslateModule,
    NzIconModule,
    ReactiveFormsModule,
    NzTableModule,
    NzDrawerModule,
    NzButtonModule,
    TitleListModule,
    PlaylistTrackModule,
    TrackInfoModule,
    NzFormModule,
    NzSpinModule,
    NzUploadModule,
    NzSelectModule,
    NzDatePickerModule,
    NzMessageModule,
    NzToolTipModule,
    AlbumModule,
    CategoryModule,
    SongModule
  ],
  exports: [AdminComponent],
  providers: [AdminPageStore],
})
export class AdminModule {}
