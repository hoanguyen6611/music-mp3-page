import { createAction, props } from '@ngrx/store';
import { Song } from 'src/app/core/services/categorys/categorys.model';

export const setSongs = createAction(
  '[NowPlaying] Set Songs',
  props<{ value: Song[] }>(),
);
export const setCurrentSong = createAction(
  '[NowPlaying] Set Current Songs',
  props<{ value: Song }>(),
);
export const setUserLogin = createAction(
  '[NowPlaying] Set User Login',
  props<{value: any}>()
)
export const addMusicRecently = createAction(
  '[NowPlaying] Add Music Recently',
  props<any>(),
)
export const addMusicRecentlySuccess = createAction(
  '[NowPlaying] Add Music Recently Success',
  props<any>(),
)
export const addMusicRecentlyFailure = createAction(
  '[NowPlaying] Add Music Recently Failure',
  props<any>(),
)
