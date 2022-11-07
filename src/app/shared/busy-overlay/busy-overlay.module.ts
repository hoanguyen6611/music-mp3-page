import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { BusyOverlayComponent } from './busy-overlay.component';

@NgModule({
  declarations: [BusyOverlayComponent],
  imports: [CommonModule, NzSpinModule, NzModalModule],
  exports: [BusyOverlayComponent],
})
export class BusyOverlayModule {}
