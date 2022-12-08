import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Song } from 'src/app/core/services/categorys/categorys.model';
import { selectCurrentSong } from '../now-playing/store';
import {
  resetCurrentSong,
  resetListSong,
  setCurrentSong,
  setPlaying,
  setSongs,
} from '../now-playing/store/now-playing.actions';
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
  readonly currentSong$ = this.store.select(selectCurrentSong);
  constructor(
    private readonly homePageStore: HomePageStore,
    private readonly store: Store,
  ) {}
  playMusic(item: Song) {
    this.store.dispatch(setPlaying({ value: true }));
    this.store.dispatch(resetListSong());
    this.store.dispatch(resetCurrentSong());
    this.store.dispatch(setCurrentSong({ value: item }));
  }
  playAlbum(item: Song[]) {
    this.store.dispatch(setSongs({ value: item }));
    this.store.dispatch(setPlaying({ value: true }));
    this.store.dispatch(resetCurrentSong());
    this.store.dispatch(setCurrentSong({ value: item[0] }));
  }
}
