import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HeaderModule } from 'src/app/shared/header';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCardModule } from 'ng-zorro-antd/card';
import { SongModule } from 'src/app/shared/song';
import { PlaylistModule } from 'src/app/shared/playlist';
import { CategoryModule } from 'src/app/shared/category/category.module';
import { HomePageStore } from './home-page.store';

const nzModules = [
  NzGridModule,
  NzButtonModule,
  NzIconModule,
  NzInputModule,
  NzCardModule,
];

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    HeaderModule,
    SongModule,
    PlaylistModule,
    CategoryModule,
    ...nzModules
  ],
  providers: [HomePageStore]
})
export class HomePageModule { }
