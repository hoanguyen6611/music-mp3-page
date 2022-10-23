import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
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
      },
      {
        path: 'playlists',
        loadChildren: async () =>
        (await import('./playlists/playlists.module'))
          .PlaylistsModule,
      },
      {
        path: 'search',
        loadChildren: async () =>
        (await import('./search/search.module'))
          .SearchModule,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
