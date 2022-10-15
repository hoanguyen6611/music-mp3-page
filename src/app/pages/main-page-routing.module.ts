import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { MainPageComponent } from './main-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: 'music-page',
        loadChildren: async () =>
        (await import('./music-page/music-page.module'))
          .MusicPageModule,
      },
      {
        path: 'home',
        loadChildren: async () =>
        (await import('./home-page/home-page.module'))
          .HomePageModule,
      },
      {
        path: 'dashboard',
        loadChildren: async () =>
        (await import('./dashboard-page/dashboard-page.module'))
          .DashboardPageModule,
      },
      {
        path: 'user-page',
        loadChildren: async () =>
        (await import('./user-page/user-page.module'))
          .UserPageModule,
      }
    ],
    // canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
