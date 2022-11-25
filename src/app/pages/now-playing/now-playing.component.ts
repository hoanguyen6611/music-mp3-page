import { Component, OnInit } from '@angular/core';
import { Subject, take, takeUntil } from 'rxjs';
import { Song } from 'src/app/core/services/categorys/categorys.model';
import { HomePageStore } from '../home-page/home-page.store';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.scss']
})
export class NowPlayingComponent implements OnInit {
  readonly destroy$ = new Subject<void>();
  readonly currentSong$ = this.store.currentSong$;
  song?:Song;
  constructor(private readonly store: HomePageStore) {
    // this.currentSong$.pipe(takeUntil(this.destroy$)).subscribe(x => console.log(x));
  }

  ngOnInit(): void {
  }

}
