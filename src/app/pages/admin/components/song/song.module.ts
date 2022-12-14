import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongComponent } from './song.component';
import { SongFormComponent } from './components/song-form/song-form.component';
import { SongTableComponent } from './components/song-table/song-table.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { TranslateModule } from '@ngx-translate/core';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { SongPageStore } from './song.store';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzBadgeModule } from 'ng-zorro-antd/badge';

@NgModule({
  declarations: [SongComponent, SongTableComponent, SongFormComponent],
  imports: [
    CommonModule,
    NzTableModule,
    NzToolTipModule,
    NzIconModule,
    TranslateModule,
    NzDrawerModule,
    NzButtonModule,
    NzFormModule,
    NzSpinModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzEmptyModule,
    NzSelectModule,
    NzDropDownModule,
    NzBadgeModule
  ],
  exports: [SongComponent],
  providers: [SongPageStore],
})
export class SongModule {}
