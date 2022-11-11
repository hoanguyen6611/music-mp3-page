import { Injectable } from "@angular/core";
import { ComponentStore, tapResponse } from "@ngrx/component-store";
import { tap, switchMap, finalize } from "rxjs";
import { PagedModel } from "src/app/core/model/paging.model";
import { Song } from "src/app/core/services/songs/songs.model";
import { SongsService } from "src/app/core/services/songs/songs.service";

export interface HomePageState extends PagedModel<Song> {
  IsLoading: boolean;
}
const initialState: HomePageState = {
  Data: [],
  Total: 0,
  IsLoading: false
}

@Injectable()
export class HomePageStore extends ComponentStore<HomePageState> {
  readonly vm$ = this.select(
    this.state$,
    ({Data, Total, IsLoading}) => ({
      Data,
      Total,
      IsLoading
    }),
    {debounce: true}
  )
  constructor(private readonly service: SongsService) {
    super(initialState);

  }

  readonly loadData = this.effect<[number, number]>(
    params$ =>
      params$.pipe(
        tap(() => {
          this.patchState({IsLoading: true});
        }),
        switchMap(([page, pageSize]) =>
        this.service.getAllSong().pipe(
          finalize(() => {
            this.patchState({IsLoading: false})
          })
        ),
        ),
      )
  )
}
