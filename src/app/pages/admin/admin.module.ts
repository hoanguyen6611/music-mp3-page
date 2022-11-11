import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SongComponent } from './components/song/song.component';
import { CategoryComponent } from './components/category/category.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './admin.component';


@NgModule({
  declarations: [
    SongComponent,
    CategoryComponent,
    PlaylistComponent,
    UserComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [AdminComponent]
})
export class AdminModule { }
