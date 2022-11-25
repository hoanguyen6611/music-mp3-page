import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { tap, switchMap, finalize } from 'rxjs';
import { Album, AlbumService } from 'src/app/core/services/album';
import { Category } from 'src/app/core/services/categorys/categorys.model';
import { Song } from 'src/app/core/services/songs/songs.model';
import { SongsService } from 'src/app/core/services/songs/songs.service';

export interface HomePageState {
  IsLoadingSong: boolean;
  IsLoadingAlbum: boolean;
  Song: Song[];
  Album: Album[];
  Current?: Song;
}
const initialState: HomePageState = {
  IsLoadingSong: false,
  IsLoadingAlbum: false,
  Song: [],
  Album: [],
};

@Injectable()
export class HomePageStore extends ComponentStore<HomePageState> {
  readonly vm$ = this.select(
    this.state$,
    ({ Song, Album, IsLoadingSong, IsLoadingAlbum }) => ({
      Song,
      Album,
      IsLoadingSong,
      IsLoadingAlbum,
    }),
    { debounce: true },
  );
  readonly currentSong$ = this.select(state => state.Current);
  constructor(
    private readonly songService: SongsService,
    private readonly albumService: AlbumService,
  ) {
    super(initialState);
    this.loadSong();
    this.loadAblum();
  }

  readonly setIsLoadingSong = this.updater<boolean>(
    (state, IsLoadingSong): HomePageState => ({
      ...state,
      IsLoadingSong,
    }),
  );

  readonly setIsLoadingAlbum = this.updater<boolean>(
    (state, IsLoadingAlbum): HomePageState => ({
      ...state,
      IsLoadingAlbum,
    }),
  );

  readonly setCurrentSong = this.updater<Song>(
    (state, Current): HomePageState => ({
      ...state,
      Current,
    }),
  );

  readonly loadSong = this.effect(params$ =>
    params$.pipe(
      tap(() => {
        this.patchState({ IsLoadingSong: true });
      }),
      switchMap(() =>
        this.songService.getAllSong().pipe(
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

  readonly loadAblum = this.effect(params$ =>
    params$.pipe(
      tap(() => {
        this.patchState({ IsLoadingAlbum: true });
      }),
      switchMap(() =>
        this.albumService.getAllAlbum().pipe(
          tapResponse(
            (value: Album[]) => {
              this.patchState({
                IsLoadingAlbum: false,
                Album: value,
              });
            },
            error => {
              this.patchState({
                IsLoadingAlbum: false,
                Album: [],
              });
            },
          ),
          finalize(() => {
            this.patchState({ IsLoadingAlbum: false });
          }),
        ),
      ),
    ),
  );
  refreshData() {
    this.patchState({});
    this.loadSong();
  }
}
