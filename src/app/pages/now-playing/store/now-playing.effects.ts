import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as actions from './now-playing.actions';
import {
  catchError,
  exhaustMap,
  filter,
  map,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { RecentlySongService } from 'src/app/core/services/recently-song/recently-song.service';
import { of } from 'rxjs';
@Injectable()
export class NowPlayingEffects {
  constructor(
    private readonly action$: Actions,
    private readonly service: RecentlySongService,
  ) {}
  addMusicRecently$ = createEffect(() =>
    this.action$.pipe(
      ofType(actions.addMusicRecently),
      exhaustMap(({ value }) => {
        console.log(value);
        return this.service.addMusicRecently(value).pipe(
          map(_ => actions.addMusicRecentlySuccess(value)),
          catchError(error => of(actions.addMusicRecentlyFailure(error))),
        );
      }),
    ),
  );
}
