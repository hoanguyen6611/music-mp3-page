import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { finalize, switchMap, tap } from 'rxjs';
import { Album, AlbumService } from 'src/app/core/services/album';
import {
  Category,
  createCategory,
} from 'src/app/core/services/categorys/categorys.model';
import { CategorysService } from 'src/app/core/services/categorys/categorys.service';
import { Song, songCreate } from 'src/app/core/services/songs/songs.model';
import { SongsService } from 'src/app/core/services/songs/songs.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd/message';
import { TranslateService } from '@ngx-translate/core';

export interface AdminPageState {
  IsLoadingSong: boolean;
  IsLoadingCategory: boolean;
  IsLoadingAlbum: boolean;
  Song: Song[];
  Category: Category[];
  Album: Album[];
  IsVisibleFormSong: boolean;
  IsVisibleFormCategory: boolean;
  IsVisibleFormAlbum: boolean;
  ListCategory?: Category[];
  IsFormLoadingSong: boolean;
  IsFormLoadingCategory: boolean;
  IsFormLoadingAlbum: boolean;
}
const initialState: AdminPageState = {
  IsLoadingSong: false,
  IsLoadingCategory: false,
  IsLoadingAlbum: false,
  Song: [],
  Category: [],
  Album: [],
  IsVisibleFormSong: false,
  IsVisibleFormCategory: false,
  IsVisibleFormAlbum: false,
  IsFormLoadingSong: false,
  IsFormLoadingCategory: false,
  IsFormLoadingAlbum: false,
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

  readonly isVisibleFormSong$ = this.select(state => state.IsVisibleFormSong);
  readonly isVisibleFormCategory$ = this.select(
    state => state.IsVisibleFormCategory,
  );
  readonly isVisibleFormAlbum$ = this.select(state => state.IsVisibleFormAlbum);
  readonly isFormLoadingAlbum$ = this.select(state => state.IsFormLoadingAlbum);
  readonly isFormLoadingSong$ = this.select(state => state.IsFormLoadingSong);
  readonly isFormLoadingCategory$ = this.select(
    state => state.IsFormLoadingCategory,
  );

  constructor(
    private readonly songService: SongsService,
    private readonly categoryService: CategorysService,
    private readonly ablumService: AlbumService,
    private readonly message: NzMessageService,
    private readonly translateService: TranslateService,
  ) {
    super(initialState);
    this.loadCategory();
    this.loadSong();
    this.loadAlbum();
    this.getCategoryList();
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
    (state, IsVisibleFormSong): AdminPageState => ({
      ...state,
      IsVisibleFormSong,
    }),
  );

  readonly setFormCategory = this.updater<boolean>(
    (state, IsVisibleFormCategory): AdminPageState => ({
      ...state,
      IsVisibleFormCategory,
    }),
  );

  readonly setFormAlbum = this.updater<boolean>(
    (state, IsVisibleFormAlbum): AdminPageState => ({
      ...state,
      IsVisibleFormAlbum,
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
  readonly getCategoryList = this.effect(param$ =>
    param$.pipe(
      switchMap(() =>
        this.categoryService.getAllCategory().pipe(
          tapResponse(
            ListCategory => this.patchState({ ListCategory: ListCategory }),
            (err: HttpErrorResponse) => {
              this.message.error(err.error.message);
            },
          ),
        ),
      ),
    ),
  );
  readonly createSong = this.effect<songCreate>(params$ =>
    params$.pipe(
      switchMap(param =>
        this.songService.createSong(param).pipe(
          tap(() => {
            this.patchState({ IsFormLoadingSong: true });
          }),
          tapResponse(
            () => {
              this.message.success(
                this.translateService.instant('MESSAGE.SUCCESS'),
              );
              this.setFormSong(false);
              this.loadSong();
            },
            (error: HttpErrorResponse) => {
              this.message.error(error.error.message);
            },
          ),
          finalize(() => {
            this.patchState({ IsFormLoadingSong: false });
          }),
        ),
      ),
    ),
  );
  readonly createCategory = this.effect<createCategory>(params$ =>
    params$.pipe(
      switchMap(param =>
        this.categoryService.createCategory(param).pipe(
          tap(() => {
            this.patchState({ IsFormLoadingCategory: true });
          }),
          tapResponse(
            () => {
              this.message.success(
                this.translateService.instant('MESSAGE.SUCCESS'),
              );
              this.setFormCategory(false);
              this.loadCategory();
            },
            (error: HttpErrorResponse) => {
              this.message.error(error.error.message);
            },
          ),
          finalize(() => {
            this.patchState({ IsFormLoadingCategory: false });
          }),
        ),
      ),
    ),
  );
}
