import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { finalize, switchMap, tap } from 'rxjs';
import { Album, AlbumService } from 'src/app/core/services/album';
import { Category } from 'src/app/core/services/categorys/categorys.model';
import { CategorysService } from 'src/app/core/services/categorys/categorys.service';
import { Song } from 'src/app/core/services/songs/songs.model';
import { SongsService } from 'src/app/core/services/songs/songs.service';

export interface AdminPageState {
  IsLoadingSong: boolean;
  IsLoadingCategory: boolean;
  IsLoadingAlbum: boolean;
  Song: Song[];
  Category: Category[];
  Album: Album[];
  IsFormSong: boolean;
  IsFormCategory: boolean;
  IsFormAlbum: boolean;
}
const initialState: AdminPageState = {
  IsLoadingSong: false,
  IsLoadingCategory: false,
  IsLoadingAlbum: false,
  Song: [],
  Category: [],
  Album: [],
  IsFormSong: false,
  IsFormCategory: false,
  IsFormAlbum: false,
};

@Injectable()
export class AdminPageStore extends ComponentStore<AdminPageState> {
  readonly vm$ = this.select(
    this.state$,
    ({
      IsLoadingSong,
      IsLoadingCategory,
      IsLoadingAlbum,
      Song,
      Category,
      Album,
    }) => ({
      IsLoadingSong,
      IsLoadingCategory,
      IsLoadingAlbum,
      Song,
      Category,
      Album,
    }),
    { debounce: true },
  );

  readonly isFormSong$ = this.select(state => state.IsFormSong);
  readonly isFormCategory$ = this.select(state => state.IsFormCategory);
  readonly isFormAlbum$ = this.select(state => state.IsFormAlbum);

  constructor(
    private readonly songService: SongsService,
    private readonly categoryService: CategorysService,
    private readonly ablumService: AlbumService,
  ) {
    super(initialState);
    this.loadCategory();
    this.loadSong();
    this.loadAlbum();
  }

  readonly setIsLoadingSong = this.updater<boolean>(
    (state, IsLoadingSong): AdminPageState => ({
      ...state,
      IsLoadingSong,
    }),
  );

  readonly setIsLoadingCategory = this.updater<boolean>(
    (state, IsLoadingCategory): AdminPageState => ({
      ...state,
      IsLoadingCategory,
    }),
  );

  readonly setIsLoadingAlbum = this.updater<boolean>(
    (state, IsLoadingAlbum): AdminPageState => ({
      ...state,
      IsLoadingAlbum,
    }),
  );

  readonly setFormSong = this.updater<boolean>(
    (state, IsFormSong): AdminPageState => ({
      ...state,
      IsFormSong,
    }),
  );

  readonly setFormCategory = this.updater<boolean>(
    (state, IsFormCategory): AdminPageState => ({
      ...state,
      IsFormCategory,
    }),
  );

  readonly setFormAlbum = this.updater<boolean>(
    (state, IsFormAlbum): AdminPageState => ({
      ...state,
      IsFormAlbum,
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

  readonly loadCategory = this.effect(params$ =>
    params$.pipe(
      tap(() => {
        this.patchState({ IsLoadingCategory: true });
      }),
      switchMap(() =>
        this.categoryService.getAllCategory().pipe(
          tapResponse(
            (value: Category[]) => {
              this.patchState({
                IsLoadingCategory: false,
                Category: value,
              });
            },
            error => {
              this.patchState({
                IsLoadingCategory: false,
                Category: [],
              });
            },
          ),
          finalize(() => {
            this.patchState({ IsLoadingCategory: false });
          }),
        ),
      ),
    ),
  );

  readonly loadAlbum = this.effect(params$ =>
    params$.pipe(
      tap(() => {
        this.patchState({ IsLoadingAlbum: true });
      }),
      switchMap(() =>
        this.ablumService.getAllAlbum().pipe(
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
}
