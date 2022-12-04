import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Song } from 'src/app/core/services/categorys/categorys.model';
import { selectCurrentSong } from '../now-playing/store';
import { addMusicRecently, setCurrentSong, setSongs } from '../now-playing/store/now-playing.actions';
import { HomePageStore } from './home-page.store';
import { Subject, take, takeUntil, tap } from 'rxjs';
import { Album } from 'src/app/core/services/album';

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
    this.store.dispatch(setCurrentSong({ value: item }));
    // this.store.dispatch(addMusicRecently(item.id));
  }
  playAlbum(item: Song[]) {
    this.store.dispatch(setSongs({value: item}))
    this.store.dispatch(setCurrentSong({ value: item[0] }));
  }
}
