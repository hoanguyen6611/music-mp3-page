import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { debounceTime, finalize, switchMap, tap } from 'rxjs/operators';
import { combineLatest, of } from 'rxjs';
import {
  Category,
  Song,
} from 'src/app/core/services/categorys/categorys.model';
import { CategorysService } from 'src/app/core/services/categorys/categorys.service';

export interface CategorysState {
  IsLoading: boolean;
  IsLoadingDetail: boolean;
  Data: Category[];
  Value: {
    id: string;
    name: string;
    image: string;
    description: string;
    songs: Song[];
  };
}
const initialState: CategorysState = {
  Data: [],
  IsLoading: false,
  IsLoadingDetail: false,
  Value: {
    id: '',
    name: '',
    image: '',
    description: '',
    songs: [],
  },
};
@Injectable()
export class CategorysStore extends ComponentStore<CategorysState> {
  readonly vm$ = this.select(
    this.state$,
    ({ Data, IsLoading }) => ({
      Data,
      IsLoading,
    }),
    { debounce: true },
  );

  readonly value$ = this.select(state => state.Value);

  constructor(private readonly service: CategorysService) {
    super(initialState);
    this.loadData();
  }

  setIsLoading = this.updater<boolean>(
    (state, IsLoading): CategorysState => ({
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
        this.service.getAllCategory().pipe(
          tapResponse(
            (value: Category[]) => {
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

  readonly loadCategoryDetail = this.effect<string | undefined>(params$ =>
    params$.pipe(
      tap(() => this.patchState({ IsLoadingDetail: true })),
      switchMap((id: string | undefined) => {
        if (id) {
          return this.service.getCategoryDetail(id);
        } else {
          return of(undefined);
        }
      }),
      tapResponse(
        (Category: Category | undefined) => {
          this.patchState({
            Value: Category,
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
