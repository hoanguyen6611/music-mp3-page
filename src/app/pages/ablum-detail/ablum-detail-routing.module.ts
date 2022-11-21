import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AblumDetailComponent } from './ablum-detail.component';

const routes: Routes = [
  {
    path: '',
    component: AblumDetailComponent
  },
  {
    path: ':id',
    component: AblumDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AblumDetailRoutingModule { }
