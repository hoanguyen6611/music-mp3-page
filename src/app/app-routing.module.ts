import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./landing-page/landing-page.module').then(
        m => m.LandingPageModule,
      ),
  },
  {
    path: 'main',
    loadChildren: () =>
      import('./pages/main-page.module').then(m => m.MainPageModule),
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
