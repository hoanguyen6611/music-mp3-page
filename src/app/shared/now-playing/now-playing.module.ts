import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NowPlayingComponent } from './now-playing.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { TrackInfoComponent } from './components/track-info/track-info.component';
import { RouterModule } from '@angular/router';
import { PlayButtonModule } from '../play-button/play-button.module';
import { PlayerControlsComponent } from './components/player-controls/player-controls.component';
import { PlayerPlaybackComponent } from './components/player-playback/player-playback.component';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { FormsModule } from '@angular/forms';
import { PlayerVolumeComponent } from './components/player-volume/player-volume.component';

@NgModule({
  declarations: [NowPlayingComponent, TrackInfoComponent, PlayerControlsComponent, PlayerPlaybackComponent, PlayerVolumeComponent],
  imports: [
    CommonModule,
    NzIconModule,
    RouterModule,
    PlayButtonModule,
    NzSliderModule,
    FormsModule
  ],
  exports: [NowPlayingComponent]
})
export class NowPlayingModule { }
