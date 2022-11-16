import { Injectable } from "@angular/core";
import { ComponentStore, tapResponse } from "@ngrx/component-store";
import { tap, switchMap, finalize } from "rxjs";
import { Category } from "src/app/core/services/categorys/categorys.model";
import { CategorysService } from "src/app/core/services/categorys/categorys.service";

export interface SearchState {
  IsLoading: boolean;
  Data: Category[]
}
const initialState: SearchState = {
  Data: [],
  IsLoading: false
}
@Injectable()
export class SearchStore extends ComponentStore<SearchState> {
  readonly vm$ = this.select(
    this.state$,
    ({Data, IsLoading}) => ({
      Data,
      IsLoading
    }),
    {debounce: true}
  )
  constructor(private readonly service: CategorysService) {
    super(initialState);
    this.loadData();
  }

  setIsLoading = this.updater<boolean> (
    (state, IsLoading): SearchState => ({
      ...state,
      IsLoading
    })
  )
  readonly loadData = this.effect(
    params$ =>
      params$.pipe(
        tap(() => {
          this.patchState({IsLoading:true});
        }),
        switchMap(() =>
          this.service.getAllCategory().pipe(
            tapResponse(
              (value: Category[]) => {
                this.patchState({
                  IsLoading: false,
                  Data: value
                });
              },
              error => {
                this.patchState({
                  Data: [],
                  IsLoading: false
                })
              }
            ),
            finalize(() => {
              this.patchState({ IsLoading: false})
            })
          )
        )
      )
  )
  refreshData() {
    this.patchState({});
    this.loadData();
  }
}
