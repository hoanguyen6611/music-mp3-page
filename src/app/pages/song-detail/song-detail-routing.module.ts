import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongDetailComponent } from './song-detail.component';

const routes: Routes = [
  {
    path: '',
    component: SongDetailComponent
  },
  {
    path: ':id',
    component: SongDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SongDetailRoutingModule { }
