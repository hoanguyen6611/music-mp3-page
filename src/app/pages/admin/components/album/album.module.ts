import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album.component';
import { AlbumFormComponent } from './components/album-form/album-form.component';
import { AlbumTableComponent } from './components/album-table/album-table.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { TranslateModule } from '@ngx-translate/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { ReactiveFormsModule } from '@angular/forms';
import { AlbumPageStore } from './album.store';

@NgModule({
  declarations: [AlbumComponent, AlbumFormComponent, AlbumTableComponent],
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
  ],
  exports: [AlbumComponent],
  providers: [AlbumPageStore]
})
export class AlbumModule {}
