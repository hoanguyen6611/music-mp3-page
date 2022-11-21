import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyPlaylistDetailComponent } from './components/my-playlist-detail/my-playlist-detail.component';
import { MyPlaylistsComponent } from './my-playlists.component';

const routes: Routes = [
  {
    path: '',
    component: MyPlaylistsComponent
  },
  {
    path: ':id',
    component: MyPlaylistDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyPlaylistsRoutingModule { }
