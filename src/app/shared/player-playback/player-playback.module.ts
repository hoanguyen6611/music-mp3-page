import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerPlaybackComponent } from './player-playback.component';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [PlayerPlaybackComponent],
  imports: [
    CommonModule,
    NzSliderModule,
    FormsModule
  ],
  exports: [PlayerPlaybackComponent]
})
export class PlayerPlaybackModule { }
