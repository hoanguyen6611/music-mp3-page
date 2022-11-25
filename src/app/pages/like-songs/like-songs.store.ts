import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { tap, switchMap, finalize } from 'rxjs';
import { Album, AlbumService } from 'src/app/core/services/album';
import { Category } from 'src/app/core/services/categorys/categorys.model';
import { Song } from 'src/app/core/services/songs/songs.model';
import { SongsService } from 'src/app/core/services/songs/songs.service';

export interface LikeSongState {
  IsLoadingSong: boolean;
  Song: Song[];
}
const initialState: LikeSongState = {
  IsLoadingSong: false,
  Song: [],
};

@Injectable()
export class LikeSongStore extends ComponentStore<LikeSongState> {
  readonly vm$ = this.select(
    this.state$,
    ({ Song, IsLoadingSong }) => ({
      Song,
      IsLoadingSong,
    }),
    { debounce: true },
  );
  constructor(private readonly songService: SongsService) {
    super(initialState);
    this.loadSongFavorite();
  }

  readonly setIsLoadingSong = this.updater<boolean>(
    (state, IsLoadingSong): LikeSongState => ({
      ...state,
      IsLoadingSong,
    }),
  );

  readonly loadSongFavorite = this.effect(params$ =>
    params$.pipe(
      tap(() => {
        this.patchState({ IsLoadingSong: true });
      }),
      switchMap(() =>
        this.songService.getSongFavoriteByUser().pipe(
          tapResponse(
            (value: Song[]) => {
              this.patchState({
                IsLoadingSong: false,
                Song: value,
              });
            },
            error => {
              this.patchState({
                IsLoadingSong: false,
                Song: [],
              });
            },
          ),
          finalize(() => {
            this.patchState({ IsLoadingSong: false });
          }),
        ),
      ),
    ),
  );
  refreshData() {
    this.patchState({});
    this.loadSongFavorite();
  }
}
