import { Component, OnInit, Input } from '@angular/core';
import { MyPlaylist } from 'src/app/core/services/my-playlist/my-playlist.model';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
})
export class PlaylistComponent implements OnInit {
  @Input() playlist: MyPlaylist = {
    id: '',
    name: '',
    state: true,
    image: '',
    description: '',
    listSong: [],
  };
  constructor() {}

  ngOnInit(): void {}
}
