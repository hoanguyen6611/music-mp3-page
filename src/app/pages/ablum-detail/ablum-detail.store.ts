import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { debounceTime, finalize, switchMap, tap } from 'rxjs/operators';
import { combineLatest, of } from 'rxjs';
import {
  Category,
  Song,
} from 'src/app/core/services/categorys/categorys.model';
import { CategorysService } from 'src/app/core/services/categorys/categorys.service';
import { Album, AlbumService, ListSong } from 'src/app/core/services/album';

export interface AlbumDetailState {
  IsLoadingDetail: boolean;
  Value: {
    id: string;
    name: string;
    image: string;
    description: string;
    listSong: ListSong[];
  };
}
const initialState: AlbumDetailState = {
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
export class AlbumDetailStore extends ComponentStore<AlbumDetailState> {

  readonly value$ = this.select(state => state.Value);

  constructor(private readonly service: AlbumService) {
    super(initialState);
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
        (Album: Album | undefined) => {
          this.patchState({
            Value: Album,
            IsLoadingDetail: false
          });
        },
        error => {
          this.patchState({
            Value: undefined,
            IsLoadingDetail: false
          })
        }
      )
    ),
  );
}
