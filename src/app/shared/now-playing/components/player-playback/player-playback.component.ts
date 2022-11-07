import { Component, OnInit } from '@angular/core';
import { NzSliderValue } from 'ng-zorro-antd/slider';

@Component({
  selector: 'app-player-playback',
  templateUrl: './player-playback.component.html',
  styleUrls: ['./player-playback.component.scss']
})
export class PlayerPlaybackComponent implements OnInit {
  progress: number = 0;
  max: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onChange() {

  }
  seek(positions: NzSliderValue) {
  }
}
