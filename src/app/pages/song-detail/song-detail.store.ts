import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { SongsService } from 'src/app/core/services/songs/songs.service';
import { Song } from 'src/app/core/services/categorys/categorys.model';

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
};
@Injectable()
export class SongDetailStore extends ComponentStore<SongDetailState> {
  readonly value$ = this.select(state => state.Value);

  constructor(private readonly service: SongsService) {
    super(initialState);
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
}
