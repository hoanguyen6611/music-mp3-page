import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { selectCurrentSong } from './store';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.scss'],
})
export class NowPlayingComponent implements OnInit {
  readonly destroy$ = new Subject<void>();
  readonly song$ = this.store.select(selectCurrentSong);
  elem = document.querySelector("audio");
  constructor(private readonly store: Store) {
    console.log(this.elem);
  }

  ngOnInit(): void {}
  getLinkAudio(audio: string) {
    return audio;
  }
}
