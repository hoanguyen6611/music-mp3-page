import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NavBarPlaylistComponent } from './components/nav-bar-playlist/nav-bar-playlist.component';
import { PlayButtonModule } from 'src/app/shared/play-button/play-button.module';


@NgModule({
  declarations: [NavBarComponent, NavBarPlaylistComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    NzDividerModule,
    PlayButtonModule
  ],
  exports: [NavBarComponent]
})
export class NavBarModule { }
