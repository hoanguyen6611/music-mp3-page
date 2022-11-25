import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Song } from 'src/app/core/services/categorys/categorys.model';
import { HomePageStore } from './home-page.store';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HomePageStore],
})
export class HomePageComponent {
  readonly vm$ = this.homePageStore.vm$;
  constructor(
    private readonly homePageStore: HomePageStore,
  ) {}
  playMusic(song: Song) {
    console.log('play');
    console.log(song);
    this.homePageStore.setCurrentSong(song);
  }
}
