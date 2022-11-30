import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistTrackComponent } from './playlist-track.component';
import { MediaNumberModule } from '../media-number/media-number.module';
import { TrackInfoModule } from '../track-info/track-info.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationsModule } from 'src/app/containers/notifications/notifications.module';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { TranslateModule } from '@ngx-translate/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzSelectModule } from 'ng-zorro-antd/select';

@NgModule({
  declarations: [PlaylistTrackComponent],
  imports: [
    CommonModule,
    MediaNumberModule,
    TrackInfoModule,
    NzIconModule,
    ReactiveFormsModule,
    FormsModule,
    NotificationsModule,
    NzBadgeModule,
    NzDropDownModule,
    TranslateModule,
    NzDividerModule,
    NzButtonModule,
    NzEmptyModule,
    NzSelectModule
  ],
  exports: [PlaylistTrackComponent],
})
export class PlaylistTrackModule {}
