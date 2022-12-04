import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, take, takeUntil } from 'rxjs';
import { selectCurrentSong, selectSongs } from './store';
import * as moment from 'moment';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.scss'],
})
export class NowPlayingComponent implements OnInit {
  readonly destroy$ = new Subject<void>();
  readonly song$ = this.store.select(selectCurrentSong);
  readonly listSong$ = this.store.select(selectSongs);
  audio = new Audio();
  index: any = 0;
  allSongs: any;
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
  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.song$.pipe().subscribe(value => {
      this.mydata = value;
      this.loadData(this.mydata)
      this.setSeek(this.mydata.currentTime || 0);
    });
    this.listSong$.pipe().subscribe(value => {
      this.allSongs = value
    })
  }
  play() {
    this.audio.play();
    this.isPlay = false;
    console.log(this.audio.currentTime);
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
  readCurrentTime = '00:00';
  readDuration = '00:00';
  currentTime = 0;
  duration = 100;
  seek = 0;
  isPlay = false;
  mydata: any;
  streamObs(url: string) {
    return new Observable(obs => {
      this.audio.src = url;
      this.audio.load();
      this.audio.play();
      const handler = (event: Event) => {
        switch(event.type) {
          case "canplay":
            this.duration = this.audio.duration;
            this.readDuration = this.timeFormat(this.audio.duration, this.format);
            break;
          case "timeupdate":
            this.currentTime = this.audio.currentTime;
            this.readCurrentTime = this.timeFormat(this.audio.currentTime, this.format);
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
    console.log(seek.target.value);
    this.audio.currentTime = seek.target.value;
    console.log(this.audio.currentTime);
  }
  setSeek(val: any) {
    this.audio.currentTime = val;
  }
  playTimeTracker(data: any, song: any) {

  }
  loadData(item: any) {
    this.streamObs(item.link).pipe(takeUntil(this.destroy$)).subscribe((ev: any) => {
      if(ev.type === "timeupdate") {
        this.playTimeTracker(item, this)
      }
      if(ev.type === 'ended') {
        this.stop();
      }
    });
    this.play();
  }

}
