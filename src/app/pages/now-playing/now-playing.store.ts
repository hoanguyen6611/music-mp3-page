import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { finalize, switchMap, tap } from 'rxjs/operators';
import { Song } from 'src/app/core/services/categorys/categorys.model';
import { FavoriteService } from 'src/app/core/services/favorite/favorite.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { TranslateService } from '@ngx-translate/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MyPlaylistService } from 'src/app/core/services/my-playlist/my-playlist.service';

export interface NowPlayingState {
  likeMusic: Song[];
}
const initialState: NowPlayingState = {
  likeMusic: []
};
@Injectable()
export class NowPlayingStore extends ComponentStore<NowPlayingState> {
  readonly listLikeMusic$ = this.select(state => state.likeMusic);

  constructor(
    private readonly favoriteService: FavoriteService,
    private readonly message: NzMessageService,
    private readonly translateService: TranslateService,
    private readonly myPlaylistService: MyPlaylistService,
  ) {
    super(initialState);
    this.loadSongFavorite();
  }


  refreshData() {
    this.patchState({});
  }

  readonly addSongToFavorite = this.effect<string>(param$ =>
    param$.pipe(
      switchMap(param =>
        this.favoriteService.addSongFavorite(param).pipe(
          tapResponse(
            () => {
              this.message.success(
                this.translateService.instant('MESSAGE.ADD_TO_FAVORITE'),
              );
              this.loadSongFavorite();
            },
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
      tap(() => this.patchState(state => ({}))),
      switchMap(([idSong, idPlaylist]) =>
        this.myPlaylistService.addSongToPlaylist(idSong, idPlaylist).pipe(
          tap(() => {
            this.patchState({});
          }),
          tapResponse(
            () => {
              this.message.success(
                this.translateService.instant(
                  'MESSAGE.ADD_SONG_TO_PLAYLIST_SUCCESS',
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
  readonly loadSongFavorite = this.effect(params$ =>
    params$.pipe(
      tap(() => {
        this.patchState({});
      }),
      switchMap(() =>
        this.favoriteService.getSongFavoriteByUser().pipe(
          tapResponse(
            (value: Song[]) => {
              this.patchState({
                likeMusic: value,
              });
            },
            error => {
              this.patchState({
                likeMusic: [],
              });
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
