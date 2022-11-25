import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-track',
  templateUrl: './playlist-track.component.html',
  styleUrls: ['./playlist-track.component.scss']
})
export class PlaylistTrackComponent implements OnInit {
  @Input() index:number = 0;
  @Input() song:any;
  constructor() { }

  ngOnInit(): void {
  }

}
