import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../core/guards/admin.guard';
import { AuthGuard } from '../core/guards/auth.guard';
import { MainPageComponent } from './main-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: async () =>
        (await import('./home-page/home-page.module'))
          .HomePageModule,
      },
      {
        path: 'account-me',
        loadChildren: async () =>
        (await import('./account/account.module'))
          .AccountModule,
        canActivate: [AuthGuard]
      },
      {
        path: 'search',
        loadChildren: async () =>
        (await import('./search/search.module'))
          .SearchModule,
      },
      {
        path: 'my-playlists',
        loadChildren: async () =>
        (await import('./my-playlists/my-playlists.module'))
          .MyPlaylistsModule,
        canActivate: [AuthGuard]
      },
      {
        path: 'admin',
        loadChildren: async () =>
        (await import('./admin/admin.module'))
          .AdminModule,
        canActivate: [AdminGuard]
      },
      {
        path: 'category',
        loadChildren: async () =>
        (await import('./categorys/categorys.module'))
          .CategorysModule,
      },
      {
        path: 'album',
        loadChildren: async () =>
        (await import('./ablum-detail/ablum-detail.module'))
          .AblumDetailModule
      },
      {
        path: 'song',
        loadChildren: async () =>
        (await import('./song-detail/song-detail.module'))
          .SongDetailModule
      },
      {
        path: 'collection',
        loadChildren: async () =>
        (await import('./like-songs/like-songs.module'))
          .LikeSongsModule
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
