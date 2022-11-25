import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LikeSongsComponent } from './like-songs.component';

const routes: Routes = [
  {
    path: '',
    component: LikeSongsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LikeSongsRoutingModule { }
