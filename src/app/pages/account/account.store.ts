import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { finalize, of, switchMap, tap } from 'rxjs';
import { Album, AlbumService } from 'src/app/core/services/album';
import {
  Category,
  createCategory,
} from 'src/app/core/services/categorys/categorys.model';
import { CategorysService } from 'src/app/core/services/categorys/categorys.service';
import { Song, songCreate } from 'src/app/core/services/songs/songs.model';
import { SongsService } from 'src/app/core/services/songs/songs.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd/message';
import { TranslateService } from '@ngx-translate/core';

export interface AccountState {
  user: any;
}
const initialState: AccountState = {
  user: [],
};

@Injectable()
export class AccountStore extends ComponentStore<AccountState> {
  readonly vm$ = this.select(this.state$, () => ({}), { debounce: true });
  readonly user$ = this.select(state => state.user);
  constructor() {
    super(initialState);
  }

  readonly setUser = this.updater<boolean>(
    (state, user): AccountState => ({
      ...state,
      user,
    }),
  );
}
