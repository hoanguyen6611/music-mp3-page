import { Component, OnInit } from '@angular/core';
import { SongsService } from 'src/app/core/services/songs/songs.service';
import { MyPlayListStore } from './my-playlists.store';

@Component({
  selector: 'app-my-playlists',
  templateUrl: './my-playlists.component.html',
  styleUrls: ['./my-playlists.component.scss']
})
export class MyPlaylistsComponent implements OnInit {

  constructor(private readonly store: MyPlayListStore) { }

  readonly vmPlaylist$ = this.store.vm$;

  ngOnInit(): void {
  }

}
