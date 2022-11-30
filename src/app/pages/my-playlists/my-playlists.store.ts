import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { debounceTime, finalize, switchMap, tap } from 'rxjs/operators';
import { combineLatest, of } from 'rxjs';
import {
  Category,
  Song,
} from 'src/app/core/services/categorys/categorys.model';
import { CategorysService } from 'src/app/core/services/categorys/categorys.service';
import { MyPlaylist, PlaylistCreate } from 'src/app/core/services/my-playlist/my-playlist.model';
import { MyPlaylistService } from 'src/app/core/services/my-playlist/my-playlist.service';
import { ListSong } from 'src/app/core/services/album';
import { NzMessageService } from 'ng-zorro-antd/message';
import { TranslateService } from '@ngx-translate/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FavoriteService } from 'src/app/core/services/favorite/favorite.service';

export interface MyPlaylistsState {
  IsLoading: boolean;
  IsFormLoading: boolean;
  IsLoadingDetail: boolean;
  Data: MyPlaylist[];
  Value: {
    id: string;
    name: string;
    image: string;
    description: string;
    listSong: ListSong[];
  };
}
const initialState: MyPlaylistsState = {
  Data: [],
  IsLoading: false,
  IsFormLoading: false,
  IsLoadingDetail: false,
  Value: {
    id: '',
    name: '',
    image: '',
    description: '',
    listSong: [],
  },
};
@Injectable()
export class MyPlayListStore extends ComponentStore<MyPlaylistsState> {
  readonly vm$ = this.select(
    this.state$,
    ({ Data, IsLoading }) => ({
      Data,
      IsLoading,
    }),
    { debounce: true },
  );

  readonly value$ = this.select(state => state.Value);

  constructor(
    private readonly service: MyPlaylistService,
    private readonly message: NzMessageService,
    private readonly translateService: TranslateService,
    private readonly favoriteService: FavoriteService,
  ) {
    super(initialState);
    this.loadData();
  }

  setIsLoading = this.updater<boolean>(
    (state, IsLoading): MyPlaylistsState => ({
      ...state,
      IsLoading,
    }),
  );

  readonly loadData = this.effect(params$ =>
    params$.pipe(
      tap(() => {
        this.patchState({ IsLoading: true });
      }),
      switchMap(() =>
        this.service.getAllMyPlayList().pipe(
          tapResponse(
            (value: MyPlaylist[]) => {
              this.patchState({
                IsLoading: false,
                Data: value,
              });
            },
            error => {
              this.patchState({
                Data: [],
                IsLoading: false,
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

  refreshData() {
    this.patchState({});
    this.loadData();
  }
  readonly loadAlbumDetail = this.effect<string | undefined>(params$ =>
    params$.pipe(
      tap(() => this.patchState({ IsLoadingDetail: true })),
      switchMap((id: string | undefined) => {
        if (id) {
          return this.service.getMyPlaylistDetail(id);
        } else {
          return of(undefined);
        }
      }),
      tapResponse(
        (MyPlaylist: MyPlaylist | undefined) => {
          this.patchState({
            Value: MyPlaylist,
            IsLoadingDetail: false,
          });
        },
        error => {
          this.patchState({
            Value: undefined,
            IsLoadingDetail: false,
          });
        },
      ),
    ),
  );
  readonly addSongToPlaylist = this.effect<[string, string]>(params$ =>
    params$.pipe(
      tap(() =>
      this.patchState(state => ({
      }))
      ),
      switchMap(([idSong, idPlaylist]) =>
        this.service.addSongToPlaylist(idSong, idPlaylist).pipe(
          tap(() => {
            this.patchState({});
          }),
          tapResponse(
            () => {
              this.message.success(
                this.translateService.instant('MESSAGE.SUCCESS'),
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
  readonly createPlaylist = this.effect<PlaylistCreate>(params$ =>
    params$.pipe(
      switchMap(param =>
        this.service.createPlaylist(param).pipe(
          tap(() => {
            this.patchState({ IsFormLoading: true });
          }),
          tapResponse(
            () => {
              this.message.success(
                this.translateService.instant('MESSAGE.SUCCESS'),
              );
              this.loadData();
            },
            (error: HttpErrorResponse) => {
              this.message.error(error.error.message);
            },
          ),
          finalize(() => {
            this.patchState({ IsFormLoading: false });
          }),
        ),
      ),
    ),
  );
  readonly addSongToFavorite = this.effect<string>(param$ =>
    param$.pipe(
      switchMap(param =>
        this.favoriteService.addSongFavorite(param).pipe(
          tapResponse(
            () => {
              this.message.success(
                this.translateService.instant('MESSAGE.ADD_TO_FAVORITE'),
              );
            },
            (err: HttpErrorResponse) => {
              this.message.error(err.error.message);
            },
          ),
        ),
      ),
    ),
  );
}
