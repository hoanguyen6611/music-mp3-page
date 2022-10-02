import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from 'src/app/shared/header/header.module';
import { MusicPageComponent } from './music-page.component';
import { MusicPageRoutingModule } from './music-page-routing.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCardModule } from 'ng-zorro-antd/card';

const nzModules = [
  NzGridModule,
  NzButtonModule,
  NzIconModule,
  NzInputModule,
  NzCardModule,
];

@NgModule({
  declarations: [MusicPageComponent],
  imports: [
    CommonModule,
    HeaderModule,
    MusicPageRoutingModule,
    ...nzModules
  ]
})
export class MusicPageModule { }
