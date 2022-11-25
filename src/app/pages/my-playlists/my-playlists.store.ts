import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { debounceTime, finalize, switchMap, tap } from 'rxjs/operators';
import { combineLatest, of } from 'rxjs';
import {
  Category,
  Song,
} from 'src/app/core/services/categorys/categorys.model';
import { CategorysService } from 'src/app/core/services/categorys/categorys.service';
import { MyPlaylist } from 'src/app/core/services/my-playlist/my-playlist.model';
import { MyPlaylistService } from 'src/app/core/services/my-playlist/my-playlist.service';
import { ListSong } from 'src/app/core/services/album';
import { NzMessageService } from 'ng-zorro-antd/message';
import { TranslateService } from '@ngx-translate/core';
import { HttpErrorResponse } from '@angular/common/http';

export interface MyPlaylistsState {
  IsLoading: boolean;
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
  readonly createCategory = this.effect<[string, string]>(params$ =>
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
}
