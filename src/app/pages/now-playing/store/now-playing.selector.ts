import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NowPlayingState } from './now-playing.state';

export const nowplaying = 'now_playing';
export const selectNowPlayingState =
  createFeatureSelector<NowPlayingState>(nowplaying);
