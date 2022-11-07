import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayButtonComponent } from './play-button.component';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [PlayButtonComponent],
  imports: [
    CommonModule,
    NzIconModule
  ],
  exports: [PlayButtonComponent]
})
export class PlayButtonModule { }
