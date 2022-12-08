import {
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Observable, Subject, take, takeUntil, BehaviorSubject } from 'rxjs';
import {
  resetCurrentSong,
  selectCurrentSong,
  selectPlaying,
  selectSongs,
  setCurrentSong,
  setPlaying,
} from './store';
import * as moment from 'moment';
import { NowPlayingStore } from './now-playing.store';
import { Song } from 'src/app/core/services/songs';
import { NzSliderValue } from 'ng-zorro-antd/slider';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.scss'],
})
export class NowPlayingComponent implements OnInit, OnChanges, DoCheck {
  readonly destroy$ = new Subject<void>();
  readonly song$ = this.store.select(selectCurrentSong);
  readonly listSongAlbum$ = this.store.select(selectSongs);
  readonly listLikeSong$ = this.nowPlayingStore.listLikeMusic$;
  readonly isPlay$ = this.store.select(selectPlaying);
  isSliderMoving$ = new BehaviorSubject<boolean>(false);

  listLikeSong: Song[] = [];
  listSongAlbum: Song[] = [];
  currentSong: any;
  audio = new Audio();
  format = 'mm:ss';
  currentTime = '00:00';
  duration = '00:00';
  seek = 0;
  isPlay = false;
  indexCurrent = 0;
  audioEvents = [
    'ended',
    'error',
    'play',
    'playing',
    'pause',
    'timeupdate',
    'canplay',
    'loadedmetadata',
    'loadstart',
    'input',
  ];
  constructor(
    private readonly store: Store,
    private readonly nowPlayingStore: NowPlayingStore,
    protected sanitizer: DomSanitizer,
  ) {
    this.listLikeSong$
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => (this.listLikeSong = value));
    this.song$.pipe(takeUntil(this.destroy$)).subscribe(value => {
      this.setMusic(value?.link);
      this.currentSong = value;
    });
    this.listSongAlbum$
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => (this.listSongAlbum = value));
    this.isPlay$.pipe().subscribe(value => console.log(value));
  }

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {}
  ngDoCheck(): void {}
  isPlayMusic() {
    this.isPlay = !this.isPlay;
    if (this.isPlay) {
      this.store.dispatch(setPlaying({ value: false }));
      this.audio.pause();
    } else {
      this.store.dispatch(setPlaying({ value: true }));
      this.audio.play();
    }
  }
  stop() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }
  streamObs(url: string) {
    return new Observable(obs => {
      this.audio.src = url;
      this.audio.load();
      this.audio.play();
      const handler = (event: Event) => {
        // console.log(event);
        switch (event.type) {
          case 'canplay':
            this.indexCurrent =
              this.listSongAlbum.map(x => x.id).indexOf(this.currentSong.id) +
              1;
            this.duration = this.timeFormat(this.audio.duration, this.format);
            break;
          case 'timeupdate':
            this.duration = this.timeFormat(this.audio.duration, this.format);
            this.currentTime = this.timeFormat(
              this.audio.currentTime,
              this.format,
            );
            break;
          case 'ended':
            this.store.dispatch(setPlaying({ value: true }));
            this.store.dispatch(resetCurrentSong());
            this.store.dispatch(
              setCurrentSong({ value: this.listSongAlbum[this.indexCurrent] }),
            );
            break;
          case 'input':
            this.currentTime = this.timeFormat(
              this.audio.currentTime,
              this.format,
            );
            break;
        }
        obs.next(event);
      };
      this.addEvent(this.audio, this.audioEvents, handler);
      return () => {
        this.audio.pause();
        this.audio.currentTime = 0;
        this.removeEvent(this.audio, this.audioEvents, handler);
      };
    });
  }
  addEvent(obj: any, events: any, handler: any) {
    for (let i = 0; i < events.length; i++) {
      obj.addEventListener(events[i], handler);
    }
  }
  removeEvent(obj: any, events: any, handler: any) {
    for (let i = 0; i < events.length; i++) {
      obj.removeEventListener(events[i], handler);
    }
  }
  setMusic(url: any) {
    this.streamObs(url).subscribe(event => {});
  }
  setVolume(ev: any) {
    this.audio.volume = ev.target.value;
  }
  timeFormat(time: any, format: string) {
    const momentTime = time * 1000;
    return moment.utc(momentTime).format(format);
  }
  setSeekTo(seek: any) {
    console.log(seek);
    this.audio.currentTime = seek.target.value;
  }
  setSeek(val: any) {
    console.log(val);
  }
  checkLikeMusic(id: string) {
    if (this.listLikeSong?.map(x => x.id).includes(id)) {
      return true;
    }
    return false;
  }
  addMusicFavorite(id: string) {
    this.nowPlayingStore.addSongToFavorite(id);
  }
  previous() {
    if (this.listSongAlbum.length > 0) {
      const index =
        this.listSongAlbum.map(x => x.id).indexOf(this.currentSong.id) - 1;
      this.store.dispatch(resetCurrentSong());
      this.store.dispatch(setCurrentSong({ value: this.listSongAlbum[index] }));
    }
  }
  next() {
    if (this.listSongAlbum.length > 0) {
      const index =
        this.listSongAlbum.map(x => x.id).indexOf(this.currentSong.id) + 1;
      this.store.dispatch(resetCurrentSong());
      this.store.dispatch(setCurrentSong({ value: this.listSongAlbum[index] }));
    }
  }
  seeks(positions: NzSliderValue) {
    if (Array.isArray(positions)) {
      const lastPosition = positions[positions.length - 1];
      console.log(lastPosition);
      // this.playbackService.seek(lastPosition);
    }
    if (typeof positions === 'number') {
      // this.playbackService.seek(positions);
      console.log(positions);
    }
    this.isSliderMoving$.next(false);
  }
  onChange() {
    this.isSliderMoving$.next(true);
  }
}
