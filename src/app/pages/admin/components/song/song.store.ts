import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { finalize, of, switchMap, tap } from 'rxjs';
import { Category } from 'src/app/core/services/categorys/categorys.model';
import { CategorysService } from 'src/app/core/services/categorys/categorys.service';
import { Song, songCreate } from 'src/app/core/services/songs/songs.model';
import { SongsService } from 'src/app/core/services/songs/songs.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd/message';
import { TranslateService } from '@ngx-translate/core';
import { Album, AlbumService } from 'src/app/core/services/album';

export interface SongPageState {
  IsLoadingSong: boolean;
  Song: Song[];
  currentSong: Song;
  isLoadingFormSong: boolean;
  IsVisibleFormSong: boolean;
  IsFormLoadingSong: boolean;
  IsEditSong: boolean;
  ListCategory?: Category[];
  ListAlbum?:Album[],
}
const initialState: SongPageState = {
  IsLoadingSong: false,
  Song: [],
  currentSong: {
    id: '',
    name: '',
    author: '',
    link: '',
    image: '',
    description: '',
  },
  isLoadingFormSong: false,
  IsVisibleFormSong: false,
  IsFormLoadingSong: false,
  IsEditSong: false,
};

@Injectable()
export class SongPageStore extends ComponentStore<SongPageState> {
  readonly vm$ = this.select(
    this.state$,
    ({ IsLoadingSong, Song }) => ({
      IsLoadingSong,
      Song,
    }),
    { debounce: true },
  );

  readonly isVisibleFormSong$ = this.select(state => state.IsVisibleFormSong);
  readonly isFormLoadingSong$ = this.select(state => state.IsFormLoadingSong);

  readonly currentSong$ = this.select(state => state.currentSong);
  readonly isEditSong$ = this.select(state => state.IsEditSong);
  readonly listAlbum$ = this.select(state => state.ListAlbum);

  constructor(
    private readonly songService: SongsService,
    private readonly categoryService: CategorysService,
    private readonly message: NzMessageService,
    private readonly translateService: TranslateService,
    private readonly albumService: AlbumService
  ) {
    super(initialState);
    this.loadSong();
    this.getCategoryList();
    this.getAlbumList();
  }

  readonly setIsLoadingSong = this.updater<boolean>(
    (state, IsLoadingSong): SongPageState => ({
      ...state,
      IsLoadingSong,
    }),
  );

  readonly setFormSong = this.updater<boolean>(
    (state, IsVisibleFormSong): SongPageState => ({
      ...state,
      IsVisibleFormSong,
    }),
  );

  readonly setIsEditSong = this.updater<boolean>(
    (state, IsEditSong): SongPageState => ({
      ...state,
      IsEditSong,
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
  readonly getAlbumList = this.effect(param$ =>
    param$.pipe(
      switchMap(() =>
        this.albumService.getAllAlbum().pipe(
          tapResponse(
            ListCategory => this.patchState({ ListAlbum: ListCategory }),
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
  readonly deleteSong = this.effect<string>(params$ =>
    params$.pipe(
      switchMap(params =>
        this.songService.deleteSong(params).pipe(
          tap(() => {
            this.patchState({ IsLoadingSong: true });
          }),
          tapResponse(
            () => {
              this.message.success(
                this.translateService.instant('MESSAGE.DELETE_SUCCESS', ),
              );
              this.loadSong();
            },
            (error: HttpErrorResponse) => {
              this.message.error(error.error.message);
            },
          ),
          finalize(() => {
            this.patchState({ IsLoadingSong: false });
          }),
        ),
      ),
    ),
  );
  readonly loadSongDetail = this.effect<string | undefined>(params$ =>
    params$.pipe(
      tap(() => this.patchState({ isLoadingFormSong: true })),
      switchMap((id: string | undefined) => {
        if (id) {
          return this.songService.getSongByID(id);
        } else {
          return of(undefined);
        }
      }),
      tapResponse(
        (value: Song | undefined) => {
          this.patchState({
            currentSong: value,
            isLoadingFormSong: false,
          });
        },
        error => {
          this.patchState({
            currentSong: undefined,
            isLoadingFormSong: false,
          });
        },
      ),
    ),
  );
  readonly addSongToPlaylist = this.effect<[string, string]>(params$ =>
    params$.pipe(
      tap(() => this.patchState(state => ({}))),
      switchMap(([idSong, idAlbum]) =>
        this.songService.addSongToAlbum(idSong, idAlbum).pipe(
          tap(() => {
            this.patchState({});
          }),
          tapResponse(
            () => {
              this.message.success(
                this.translateService.instant(
                  'MESSAGE.ADD_SONG_TO_ALBUM_SUCCESS',
                ),
              );
            },
            (error: HttpErrorResponse) => {
              this.message.error(error.error.message);
            },
          ),
          finalize(() => {
            this.patchState({});
          }),
        ),
      ),
    ),
  );
}
