import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { selectCurrentSong } from './store';
import * as moment from 'moment';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.scss'],
})
export class NowPlayingComponent implements OnInit {
  readonly destroy$ = new Subject<void>();
  readonly song$ = this.store.select(selectCurrentSong);
  audio = new Audio();
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
  ];
  constructor(
    private readonly store: Store,
    protected sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    this.song$.pipe().subscribe(value => {
      this.setMusic(value?.link);
      console.log(this.currentTime);
    });
  }
  play() {
    this.audio.play();
    this.isPlay = false;
  }
  pause() {
    this.audio.pause();
    this.isPlay = true;
  }
  stop() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }
  format = 'mm:ss';
  currentTime = '00:00';
  duration = '00:00';
  seek = 0;
  isPlay = false;
  streamObs(url: string) {
    return new Observable(obs => {
      this.audio.src = url;
      this.audio.load();
      this.audio.play();
      const handler = (event: Event) => {
        console.log(event);
        this.seek = this.audio.currentTime;
        this.duration = this.timeFormat(this.audio.duration, this.format);
        this.currentTime = this.timeFormat(this.audio.currentTime, this.format);
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
    this.audio.currentTime = seek.target.value;
  }
  setSeek(val: any) {}
}
