import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AlbumComponent } from './components/album/album.component';
import { CategoryComponent } from './components/category/category.component';
import { SongComponent } from './components/song/song.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'category',
        component: CategoryComponent
      },
      {
        path: 'album',
        component: AlbumComponent
      },
      {
        path: 'song',
        component: SongComponent
      },
      {
        path: 'user',
        component: UserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
