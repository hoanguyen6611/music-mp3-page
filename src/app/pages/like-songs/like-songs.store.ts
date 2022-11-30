import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { TranslateService } from '@ngx-translate/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { tap, switchMap, finalize } from 'rxjs';
import { Album, AlbumService } from 'src/app/core/services/album';
import { Category } from 'src/app/core/services/categorys/categorys.model';
import { FavoriteService } from 'src/app/core/services/favorite/favorite.service';
import { Song } from 'src/app/core/services/songs/songs.model';
import { SongsService } from 'src/app/core/services/songs/songs.service';

export interface LikeSongState {
  IsLoadingSong: boolean;
  Song: Song[];
}
const initialState: LikeSongState = {
  IsLoadingSong: false,
  Song: [],
};

@Injectable()
export class LikeSongStore extends ComponentStore<LikeSongState> {
  readonly vm$ = this.select(
    this.state$,
    ({ Song, IsLoadingSong }) => ({
      Song,
      IsLoadingSong,
    }),
    { debounce: true },
  );
  constructor(
    private readonly favoriteService: FavoriteService,
    private readonly message: NzMessageService,
    private readonly translateService: TranslateService,
  ) {
    super(initialState);
    this.loadSongFavorite();
  }

  readonly setIsLoadingSong = this.updater<boolean>(
    (state, IsLoadingSong): LikeSongState => ({
      ...state,
      IsLoadingSong,
    }),
  );

  readonly loadSongFavorite = this.effect(params$ =>
    params$.pipe(
      tap(() => {
        this.patchState({ IsLoadingSong: true });
      }),
      switchMap(() =>
        this.favoriteService.getSongFavoriteByUser().pipe(
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
  refreshData() {
    this.patchState({});
    this.loadSongFavorite();
  }
  readonly removeSongToFavorite = this.effect<string>(param$ =>
    param$.pipe(
      switchMap(param =>
        this.favoriteService.removeSongFavorite(param).pipe(
          tapResponse(
            () => {
              this.message.success(
                this.translateService.instant('MESSAGE.REMOVE_TO_FAVORITE'),
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
  readonly addMusicToPlaylist = this.effect<string>(param$ =>
    param$.pipe(
      switchMap(param =>
        this.favoriteService.removeSongFavorite(param).pipe(
          tapResponse(
            () => {
              this.message.success(
                this.translateService.instant('MESSAGE.REMOVE_TO_FAVORITE'),
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
}
