import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AblumComponent } from './ablum.component';
import { PlayButtonModule } from '../play-button/play-button.module';
import { MediaCoverModule } from '../media-cover/media-cover.module';
import { RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';



@NgModule({
  declarations: [AblumComponent],
  imports: [
    CommonModule,
    NzCardModule,
    NzIconModule,
    RouterModule,
    MediaCoverModule,
    PlayButtonModule
  ],
  exports: [AblumComponent]
})
export class AblumModule { }
