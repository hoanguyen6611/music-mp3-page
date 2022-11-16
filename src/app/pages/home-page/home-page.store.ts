import { Injectable } from "@angular/core";
import { ComponentStore, tapResponse } from "@ngrx/component-store";
import { tap, switchMap, finalize } from "rxjs";
import { Category } from "src/app/core/services/categorys/categorys.model";
import { Song } from "src/app/core/services/songs/songs.model";
import { SongsService } from "src/app/core/services/songs/songs.service";

export interface HomePageState {
  IsLoading: boolean;
  Song: Song[];
}
const initialState: HomePageState = {
  IsLoading: false,
  Song: []
}

@Injectable()
export class HomePageStore extends ComponentStore<HomePageState> {
  readonly vm$ = this.select(
    this.state$,
    ({Song, IsLoading}) => ({
      Song,
      IsLoading
    }),
    {debounce: true}
  )
  constructor(private readonly service: SongsService) {
    super(initialState);
    this.loadSong();
  }

  readonly setIsLoading = this.updater<boolean> (
    (state, IsLoading): HomePageState => ({
      ...state,
      IsLoading
    })
  )

  readonly loadSong = this.effect(
    params$ =>
      params$.pipe(
        tap(() => {
          this.patchState({IsLoading: true});
        }),
        switchMap(() =>
          this.service.getAllSong().pipe(
            tapResponse(
              (value: Song[]) => {
                this.patchState({
                  IsLoading: false,
                  Song: value
                });
              },
              error => {
                this.patchState({
                  IsLoading: false,
                  Song: []
                });
              },
            ),
            finalize(() => {
              this.patchState({ IsLoading: false });
            }),
          ),
        ),
      )
  )
  refreshData() {
    this.patchState({
    });
    this.loadSong();
  }
}
