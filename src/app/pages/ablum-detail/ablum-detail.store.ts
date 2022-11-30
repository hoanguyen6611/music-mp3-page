import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { finalize, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Album, AlbumService, ListSong } from 'src/app/core/services/album';
import { FavoriteService } from 'src/app/core/services/favorite/favorite.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { TranslateService } from '@ngx-translate/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MyPlaylist } from 'src/app/core/services/my-playlist/my-playlist.model';
import { MyPlaylistService } from 'src/app/core/services/my-playlist/my-playlist.service';

export interface AlbumDetailState {
  IsLoadingDetail: boolean;
  Album: {
    id: string;
    name: string;
    image: string;
    description: string;
    listSong: ListSong[];
  };
  MyPlaylist: MyPlaylist[];
}
const initialState: AlbumDetailState = {
  IsLoadingDetail: false,
  Album: {
    id: '',
    name: '',
    image: '',
    description: '',
    listSong: [],
  },
  MyPlaylist: [],
};
@Injectable()
export class AlbumDetailStore extends ComponentStore<AlbumDetailState> {
  readonly value$ = this.select(state => state.Album);
  readonly myplaylist$ = this.select(state => state.MyPlaylist);

  constructor(
    private readonly service: AlbumService,
    private readonly favoriteService: FavoriteService,
    private readonly message: NzMessageService,
    private readonly translateService: TranslateService,
    private readonly myPlaylistService: MyPlaylistService,
  ) {
    super(initialState);
    this.getPlaylist();
  }

  setIsLoadingDetail = this.updater<boolean>(
    (state, IsLoadingDetail): AlbumDetailState => ({
      ...state,
      IsLoadingDetail,
    }),
  );

  refreshData() {
    this.patchState({});
  }

  readonly loadAlbumDetail = this.effect<string | undefined>(params$ =>
    params$.pipe(
      tap(() => this.patchState({ IsLoadingDetail: true })),
      switchMap((id: string | undefined) => {
        if (id) {
          return this.service.getAlbumDetail(id);
        } else {
          return of(undefined);
        }
      }),
      tapResponse(
        (value: Album | undefined) => {
          this.patchState({
            Album: value,
            IsLoadingDetail: false,
          });
        },
        error => {
          this.patchState({
            Album: undefined,
            IsLoadingDetail: false,
          });
        },
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
  readonly getPlaylist = this.effect(param$ =>
    param$.pipe(
      switchMap(() =>
        this.myPlaylistService.getAllMyPlayList().pipe(
          tapResponse(
            value => this.patchState({ MyPlaylist: value }),
            (err: HttpErrorResponse) => {
              this.message.error(err.error.message);
            },
          ),
        ),
      ),
    ),
  );
  readonly addSongToPlaylist = this.effect<[string, string]>(params$ =>
    params$.pipe(
      tap(() => this.patchState({})),
      switchMap(([idSong, idPlaylist]) =>
        this.myPlaylistService.addSongToPlaylist(idSong, idPlaylist).pipe(
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
}
