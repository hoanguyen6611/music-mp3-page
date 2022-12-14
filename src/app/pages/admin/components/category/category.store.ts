import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { finalize, of, switchMap, tap } from 'rxjs';
import {
  Category,
  createCategory,
} from 'src/app/core/services/categorys/categorys.model';
import { CategorysService } from 'src/app/core/services/categorys/categorys.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd/message';
import { TranslateService } from '@ngx-translate/core';

export interface CategoryPageState {
  IsLoadingCategory: boolean;
  Category: Category[];
  currentCategory: Category;
  isLoadingFormCategory: boolean;
  IsVisibleFormCategory: boolean;
  ListCategory?: Category[];
  IsFormLoadingCategory: boolean;
  IsEditCategory: boolean;
}
const initialState: CategoryPageState = {
  IsLoadingCategory: false,
  Category: [],
  currentCategory: {
    id: '',
    name: '',
    image: '',
    description: '',
    songs: [],
  },
  isLoadingFormCategory: false,
  IsVisibleFormCategory: false,
  IsFormLoadingCategory: false,
  IsEditCategory: false,
};

@Injectable()
export class CategoryPageStore extends ComponentStore<CategoryPageState> {
  readonly vm$ = this.select(
    this.state$,
    ({ IsLoadingCategory, Category }) => ({
      IsLoadingCategory,
      Category,
    }),
    { debounce: true },
  );
  readonly isVisibleFormCategory$ = this.select(
    state => state.IsVisibleFormCategory,
  );
  readonly isFormLoadingCategory$ = this.select(
    state => state.IsFormLoadingCategory,
  );
  readonly currentCategory$ = this.select(state => state.currentCategory);
  readonly isEditCategory$ = this.select(state => state.IsEditCategory);
  constructor(
    private readonly categoryService: CategorysService,
    private readonly message: NzMessageService,
    private readonly translateService: TranslateService,
  ) {
    super(initialState);
    this.loadCategory();
  }

  readonly setIsLoadingCategory = this.updater<boolean>(
    (state, IsLoadingCategory): CategoryPageState => ({
      ...state,
      IsLoadingCategory,
    }),
  );

  readonly setIsLoadingFormCategory = this.updater<boolean>(
    (state, isLoadingFormCategory): CategoryPageState => ({
      ...state,
      isLoadingFormCategory,
    }),
  );

  readonly setFormCategory = this.updater<boolean>(
    (state, IsVisibleFormCategory): CategoryPageState => ({
      ...state,
      IsVisibleFormCategory,
    }),
  );

  readonly setIsEditCategory = this.updater<boolean>(
    (state, IsEditCategory): CategoryPageState => ({
      ...state,
      IsEditCategory,
    }),
  );

  readonly loadCategory = this.effect(params$ =>
    params$.pipe(
      tap(() => {
        this.patchState({ IsLoadingCategory: true });
      }),
      switchMap(() =>
        this.categoryService.getAllCategory().pipe(
          tapResponse(
            (value: Category[]) => {
              this.patchState({
                IsLoadingCategory: false,
                Category: value,
              });
            },
            error => {
              this.patchState({
                IsLoadingCategory: false,
                Category: [],
              });
            },
          ),
          finalize(() => {
            this.patchState({ IsLoadingCategory: false });
          }),
        ),
      ),
    ),
  );

  readonly createCategory = this.effect<createCategory>(params$ =>
    params$.pipe(
      switchMap(param =>
        this.categoryService.createCategory(param).pipe(
          tap(() => {
            this.patchState({ IsFormLoadingCategory: true });
          }),
          tapResponse(
            () => {
              this.message.success(
                this.translateService.instant('MESSAGE.ADD_SUCCESS'),
              );
              this.setFormCategory(false);
              this.loadCategory();
            },
            (error: HttpErrorResponse) => {
              this.message.error(error.error.message);
            },
          ),
          finalize(() => {
            this.patchState({ IsFormLoadingCategory: false });
          }),
        ),
      ),
    ),
  );
  readonly updateCategory = this.effect<createCategory>(params$ =>
    params$.pipe(
      switchMap(param =>
        this.categoryService.updateCategory(param).pipe(
          tap(() => {
            this.patchState({ IsFormLoadingCategory: true });
          }),
          tapResponse(
            () => {
              this.message.success(
                this.translateService.instant('MESSAGE.EDIT_SUCCESS'),
              );
              this.setFormCategory(false);
              this.loadCategory();
            },
            (error: HttpErrorResponse) => {
              this.message.error(error.error.message);
            },
          ),
          finalize(() => {
            this.patchState({ IsFormLoadingCategory: false });
          }),
        ),
      ),
    ),
  );
  readonly deleteCategory = this.effect<string>(params$ =>
    params$.pipe(
      switchMap(params =>
        this.categoryService.deleteCategory(params).pipe(
          tap(() => {
            this.patchState({ IsLoadingCategory: true });
          }),
          tapResponse(
            () => {
              this.message.success(
                this.translateService.instant('MESSAGE.DELETE_SUCCESS'),
              );
              this.loadCategory();
            },
            (error: HttpErrorResponse) => {
              this.message.error(error.error.message);
            },
          ),
          finalize(() => {
            this.patchState({ IsLoadingCategory: false });
          }),
        ),
      ),
    ),
  );
  readonly loadCategoryDetail = this.effect<string | undefined>(params$ =>
    params$.pipe(
      tap(() => this.patchState({ isLoadingFormCategory: true })),
      switchMap((id: string | undefined) => {
        if (id) {
          return this.categoryService.getCategoryDetail(id);
        } else {
          return of(undefined);
        }
      }),
      tapResponse(
        (value: Category | undefined) => {
          console.log(value);
          this.patchState({
            currentCategory: value,
            isLoadingFormCategory: false,
          });
          this.currentCategory$.pipe(tap(x => x)).subscribe(console.log);
        },
        error => {
          this.patchState({
            currentCategory: undefined,
            isLoadingFormCategory: false,
          });
        },
      ),
    ),
  );
}
