import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { finalize, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { SongsService } from 'src/app/core/services/songs/songs.service';
import { Song } from 'src/app/core/services/categorys/categorys.model';
import { FavoriteService } from 'src/app/core/services/favorite/favorite.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { TranslateService } from '@ngx-translate/core';
import { HttpErrorResponse } from '@angular/common/http';
import { LikeSongStore } from '../like-songs/like-songs.store';
import { MyPlaylist } from 'src/app/core/services/my-playlist/my-playlist.model';
import { MyPlaylistService } from 'src/app/core/services/my-playlist/my-playlist.service';

export interface SongDetailState {
  IsLoadingDetail: boolean;
  Value: {
    id: string;
    name: string;
    author: string;
    link: string;
    image: string;
    description: string;
  };
  myPlaylist: MyPlaylist[];
}
const initialState: SongDetailState = {
  IsLoadingDetail: false,
  Value: {
    id: '',
    name: '',
    author: '',
    image: '',
    link: '',
    description: '',
  },
  myPlaylist: []
};
@Injectable()
export class SongDetailStore extends ComponentStore<SongDetailState> {
  readonly value$ = this.select(state => state.Value);

  constructor(
    private readonly service: SongsService,
    private readonly favoriteService: FavoriteService,
    private readonly message: NzMessageService,
    private readonly translateService: TranslateService,
    private readonly myPlaylistService: MyPlaylistService
  ) {
    super(initialState);
    this.getPlaylist();
  }

  setIsLoadingDetail = this.updater<boolean>(
    (state, IsLoadingDetail): SongDetailState => ({
      ...state,
      IsLoadingDetail,
    }),
  );

  refreshData() {
    this.patchState({});
  }

  readonly loadSongDetail = this.effect<string | undefined>(params$ =>
    params$.pipe(
      tap(() => this.patchState({ IsLoadingDetail: true })),
      switchMap((id: string | undefined) => {
        if (id) {
          return this.service.getSongByID(id);
        } else {
          return of(undefined);
        }
      }),
      tapResponse(
        (Song: Song | undefined) => {
          this.patchState({
            Value: Song,
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
            value => this.patchState({ myPlaylist: value }),
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
      tap(() =>
      this.patchState(state => ({
      }))
      ),
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
