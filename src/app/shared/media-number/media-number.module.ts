import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayButtonModule } from '../play-button/play-button.module';
import { MediaNumberComponent } from './media-number.component';



@NgModule({
  declarations: [MediaNumberComponent],
  imports: [
    CommonModule,
    PlayButtonModule
  ],
  exports: [MediaNumberComponent]
})
export class MediaNumberModule { }
