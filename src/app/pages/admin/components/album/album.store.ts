import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { finalize, of, switchMap, tap } from 'rxjs';
import { Album, AlbumService, CreateAlbum } from 'src/app/core/services/album';
import { NzMessageService } from 'ng-zorro-antd/message';
import { TranslateService } from '@ngx-translate/core';
import { HttpErrorResponse } from '@angular/common/http';


export interface AlbumPageState {
  IsLoadingAlbum: boolean;
  currentAlbum: Album;
  isLoadingFormAlbum: boolean;
  Album: Album[];
  IsVisibleFormAlbum: boolean;
  IsFormLoadingAlbum: boolean;
  IsEditAlbum: boolean;
}
const initialState: AlbumPageState = {
  IsLoadingAlbum: false,

  currentAlbum: {
    id: '',
    name: '',
    state: true,
    description: '',
    image: '',
    listSong: [],
  },
  isLoadingFormAlbum: false,
  Album: [],
  IsVisibleFormAlbum: false,
  IsFormLoadingAlbum: false,
  IsEditAlbum: false,
};

@Injectable()
export class AlbumPageStore extends ComponentStore<AlbumPageState> {
  readonly vm$ = this.select(
    this.state$,
    ({
      IsLoadingAlbum,
      Album,
    }) => ({
      IsLoadingAlbum,
      Album,
    }),
    { debounce: true },
  );

  readonly isVisibleFormAlbum$ = this.select(state => state.IsVisibleFormAlbum);
  readonly isFormLoadingAlbum$ = this.select(state => state.IsFormLoadingAlbum);
  readonly currentAlbum$ = this.select(state => state.currentAlbum);
  readonly isEditAlbum$ = this.select(state => state.IsEditAlbum);

  constructor(
    private readonly ablumService: AlbumService,
    private readonly message: NzMessageService,
    private readonly translateService: TranslateService,
  ) {
    super(initialState);
    this.loadAlbum();
  }

  readonly setIsLoadingAlbum = this.updater<boolean>(
    (state, IsLoadingAlbum): AlbumPageState => ({
      ...state,
      IsLoadingAlbum,
    }),
  );

  readonly setFormAlbum = this.updater<boolean>(
    (state, IsVisibleFormAlbum): AlbumPageState => ({
      ...state,
      IsVisibleFormAlbum,
    }),
  );

  readonly setIsEditAlbum = this.updater<boolean>(
    (state, IsEditAlbum): AlbumPageState => ({
      ...state,
      IsEditAlbum,
    }),
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

  readonly loadAlbumDetail = this.effect<string | undefined>(params$ =>
    params$.pipe(
      tap(() => this.patchState({ isLoadingFormAlbum: true })),
      switchMap((id: string | undefined) => {
        if (id) {
          return this.ablumService.getAlbumDetail(id);
        } else {
          return of(undefined);
        }
      }),
      tapResponse(
        (value: Album | undefined) => {
          this.patchState({
            currentAlbum: value,
            isLoadingFormAlbum: false,
          });
        },
        error => {
          this.patchState({
            currentAlbum: undefined,
            isLoadingFormAlbum: false,
          });
        },
      ),
    ),
  );
  readonly createAlbum = this.effect<CreateAlbum>(params$ =>
    params$.pipe(
      switchMap(param =>
        this.ablumService.createAlbum(param).pipe(
          tap(() => {
            this.patchState({ IsFormLoadingAlbum: true });
          }),
          tapResponse(
            () => {
              this.message.success(
                this.translateService.instant('MESSAGE.ADD_SUCCESS'),
              );
              this.setFormAlbum(false);
              this.loadAlbum();
            },
            (error: HttpErrorResponse) => {
              this.message.error(error.error.message);
            },
          ),
          finalize(() => {
            this.patchState({ IsFormLoadingAlbum: false });
          }),
        ),
      ),
    ),
  );
}
