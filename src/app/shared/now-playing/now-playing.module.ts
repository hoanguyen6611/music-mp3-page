import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NowPlayingComponent } from './now-playing.component';



@NgModule({
  declarations: [NowPlayingComponent],
  imports: [
    CommonModule
  ],
  exports: [NowPlayingComponent]
})
export class NowPlayingModule { }
