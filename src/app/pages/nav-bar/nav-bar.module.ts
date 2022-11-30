import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NavBarPlaylistComponent } from './components/nav-bar-playlist/nav-bar-playlist.component';
import { PlayButtonModule } from 'src/app/shared/play-button/play-button.module';
import { NavBarStore } from './nav-bar.store';
import { NavPlaylistComponent } from './components/nav-playlist/nav-playlist.component';


@NgModule({
  declarations: [NavBarComponent, NavBarPlaylistComponent, NavPlaylistComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    NzDividerModule,
    PlayButtonModule
  ],
  exports: [NavBarComponent],
  providers: [NavBarStore]
})
export class NavBarModule { }
