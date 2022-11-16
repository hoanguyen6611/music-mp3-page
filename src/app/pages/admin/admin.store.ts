import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { finalize, switchMap, tap } from 'rxjs';
import {
  Category,
  Song,
} from 'src/app/core/services/categorys/categorys.model';
import { CategorysService } from 'src/app/core/services/categorys/categorys.service';
import { SongsService } from 'src/app/core/services/songs/songs.service';

export interface AdminPageState {
  IsLoading: boolean;
  Song: Song[];
  Category: Category[];
}
const initialState: AdminPageState = {
  IsLoading: false,
  Song: [],
  Category: [],
};

@Injectable()
export class AdminPageStore extends ComponentStore<AdminPageState> {
  readonly vm$ = this.select(
    this.state$,
    ({ IsLoading, Song, Category }) => ({
      IsLoading,
      Song,
      Category,
    }),
    { debounce: true },
  );
  constructor(
    private readonly songService: SongsService,
    private readonly categoryService: CategorysService,
  ) {
    super(initialState);
    this.loadCategory();
    this.loadSong();
  }

  readonly setIsLoading = this.updater<boolean>(
    (state, IsLoading): AdminPageState => ({
      ...state,
      IsLoading,
    }),
  );
  readonly loadSong = this.effect(params$ =>
    params$.pipe(
      tap(() => {
        this.patchState({ IsLoading: true });
      }),
      switchMap(() =>
        this.songService.getAllSong().pipe(
          tapResponse(
            (value: Song[]) => {
              this.patchState({
                IsLoading: false,
                Song: value,
              });
            },
            error => {
              this.patchState({
                IsLoading: false,
                Song: [],
              });
            },
          ),
          finalize(() => {
            this.patchState({ IsLoading: false });
          }),
        ),
      ),
    ),
  );
  readonly loadCategory = this.effect(params$ =>
    params$.pipe(
      tap(() => {
        this.patchState({ IsLoading: true });
      }),
      switchMap(() =>
        this.categoryService.getAllCategory().pipe(
          tapResponse(
            (value: Category[]) => {
              this.patchState({
                IsLoading: false,
                Category: value,
              });
            },
            error => {
              this.patchState({
                IsLoading: false,
                Category: [],
              });
            },
          ),
          finalize(() => {
            this.patchState({ IsLoading: false });
          }),
        ),
      ),
    ),
  );
}
