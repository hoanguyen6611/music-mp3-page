import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistComponent } from './artist.component';



@NgModule({
  declarations: [ArtistComponent],
  imports: [
    CommonModule
  ],
  exports: [ArtistComponent]
})
export class ArtistModule { }
