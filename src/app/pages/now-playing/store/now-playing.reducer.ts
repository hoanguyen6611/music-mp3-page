import { createReducer, on, ReducerTypes } from '@ngrx/store';
import { NowPlayingState } from './now-playing.state';
import * as actions from './now-playing.actions';

const initialState: NowPlayingState = {
  songs: [],
};

export const nowPlayingReducer = createReducer<NowPlayingState>(
  initialState,
  on(
    actions.setCurrentSong,
    (state, { value }): NowPlayingState => ({
      ...state,
      currentSong: value,
    }),
  ),
  on(
    actions.setSongs,
    (state, { value }): NowPlayingState => ({
      ...state,
      songs: value,
    }),
  ),
  on(
    actions.setUserLogin,
    (state, {value}): NowPlayingState => ({
      ...state,
      user: value
    })
  ),
  on(
    actions.addMusicRecently,
    (state):NowPlayingState => ({
      ...state
    })
  ),
  on(
    actions.addMusicRecentlySuccess,
    (state): NowPlayingState => ({
      ...state
    })
  ),
  on(
    actions.addMusicRecentlyFailure,
    (state): NowPlayingState => ({
      ...state
    })
  )
);
