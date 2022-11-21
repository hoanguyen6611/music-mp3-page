import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { MediaCoverModule } from '../media-cover/media-cover.module';



@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule,
    MediaCoverModule
  ],
  exports: [DetailComponent]
})
export class DetailModule { }
