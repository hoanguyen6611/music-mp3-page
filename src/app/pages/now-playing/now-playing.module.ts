import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NowPlayingComponent } from './now-playing.component';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { PlayerVolumeComponent } from './components/player-volume/player-volume.component';
import { PlayerControlsComponent } from './components/player-controls/player-controls.component';
import { FormsModule } from '@angular/forms';
import { PlayButtonModule } from 'src/app/shared/play-button/play-button.module';
import { PlayerPlaybackModule } from 'src/app/shared/player-playback/player-playback.module';
import { TrackInfoModule } from 'src/app/shared/track-info/track-info.module';
import { StoreModule } from '@ngrx/store';
import { nowPlaying } from './store/now-playing.selector';
import { nowPlayingReducer } from './store/now-playing.reducer';
import { EffectsModule } from '@ngrx/effects';
import { NowPlayingEffects } from './store/now-playing.effects';
import { NzIconModule } from 'ng-zorro-antd/icon';



@NgModule({
  declarations: [NowPlayingComponent, PlayerVolumeComponent, PlayerControlsComponent],
  imports: [
    CommonModule,
    NzSliderModule,
    FormsModule,
    PlayButtonModule,
    PlayerPlaybackModule,
    TrackInfoModule,
    NzIconModule,
    StoreModule.forFeature(nowPlaying, nowPlayingReducer),
    EffectsModule.forFeature([NowPlayingEffects]),
  ],
  exports: [NowPlayingComponent]
})
export class NowPlayingModule { }
