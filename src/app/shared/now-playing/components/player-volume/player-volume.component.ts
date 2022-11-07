import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-volume',
  templateUrl: './player-volume.component.html',
  styleUrls: ['./player-volume.component.scss']
})
export class PlayerVolumeComponent implements OnInit {
  volume: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  changeVolume(quantity: number) {

  }

}
