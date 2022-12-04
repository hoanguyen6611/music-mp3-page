import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SafePipe } from './pipe/safe.pipe';

const PIPES: Type<any>[] = [SafePipe];
@NgModule({
  declarations: [...PIPES],
  imports: [CommonModule],
  exports: [CommonModule, FormsModule, TranslateModule, ...PIPES],
})
export class SharedModule {}
