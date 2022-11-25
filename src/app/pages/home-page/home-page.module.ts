import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HeaderModule } from 'src/app/shared/header';
import { SongModule } from 'src/app/shared/song';
import { PlaylistModule } from 'src/app/shared/playlist';
import { CategoryModule } from 'src/app/shared/category/category.module';
import { HomePageStore } from './home-page.store';
import { AblumModule } from 'src/app/shared/ablum/ablum.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    HeaderModule,
    SongModule,
    AblumModule,
    PlaylistModule,
    CategoryModule,
  ],
  providers: [HomePageStore],
})
export class HomePageModule {}
