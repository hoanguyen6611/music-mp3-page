import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusyOverlayComponent } from './busy-overlay/busy-overlay.component';
import { DateRangePickerComponent } from './date-range-picker/date-range-picker.component';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [
    BusyOverlayComponent,
    DateRangePickerComponent,
    HeaderComponent,
    TableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
