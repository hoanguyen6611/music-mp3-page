import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { finalize, switchMap, tap } from 'rxjs/operators';
import { MyPlaylist } from 'src/app/core/services/my-playlist/my-playlist.model';
import { MyPlaylistService } from 'src/app/core/services/my-playlist/my-playlist.service';

export interface NavBarState {
  IsLoading: boolean;
  Data: MyPlaylist[];
}
const initialState: NavBarState = {
  Data: [],
  IsLoading: false,
};
@Injectable()
export class NavBarStore extends ComponentStore<NavBarState> {
  readonly vm$ = this.select(
    this.state$,
    ({ Data, IsLoading }) => ({
      Data,
      IsLoading,
    }),
    { debounce: true },
  );

  constructor(
    private readonly service: MyPlaylistService,
  ) {
    super(initialState);
    this.loadData();
  }

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
}
