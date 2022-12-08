import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NowPlayingState } from './now-playing.state';

export const nowPlaying = 'NowPlaying';
export const selectNowPlayingState =
  createFeatureSelector<NowPlayingState>(nowPlaying);

export const selectSongs = createSelector(
  selectNowPlayingState,
  state => state.songs,
);
export const selectCurrentSong = createSelector(
  selectNowPlayingState,
  state => state.currentSong
);
export const selectUserLogin = createSelector(
  selectNowPlayingState,
  state => state.user
)
export const selectPlaying = createSelector(
  selectNowPlayingState,
  state => state.playing
)
