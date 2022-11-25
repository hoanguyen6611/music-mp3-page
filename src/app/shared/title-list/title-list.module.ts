import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleListComponent } from './title-list.component';



@NgModule({
  declarations: [TitleListComponent],
  imports: [
    CommonModule
  ],
  exports: [TitleListComponent]
})
export class TitleListModule { }
