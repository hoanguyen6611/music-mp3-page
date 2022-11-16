import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SongComponent } from './components/song/song.component';
import { CategoryComponent } from './components/category/category.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
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
import { PlaylistFormComponent } from './components/playlist/components/playlist-form/playlist-form.component';
import { PlaylistTableComponent } from './components/playlist/components/playlist-table/playlist-table.component';
import { SongTableComponent } from './components/song/components/song-table/song-table.component';
import { SongFormComponent } from './components/song/components/song-form/song-form.component';

@NgModule({
  declarations: [
    SongComponent,
    CategoryComponent,
    PlaylistComponent,
    UserComponent,
    AdminComponent,
    CategoryTableComponent,
    CategoryFormComponent,
    PlaylistFormComponent,
    PlaylistTableComponent,
    SongTableComponent,
    SongFormComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NzTabsModule,
    TranslateModule,
    NzIconModule,
    ReactiveFormsModule,
    NzTableModule
  ],
  exports: [AdminComponent],
  providers: [AdminPageStore]
})
export class AdminModule { }
