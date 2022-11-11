import { Component, OnInit } from '@angular/core';
import { SongsService } from 'src/app/core/services/songs/songs.service';

@Component({
  selector: 'app-my-playlists',
  templateUrl: './my-playlists.component.html',
  styleUrls: ['./my-playlists.component.scss']
})
export class MyPlaylistsComponent implements OnInit {

  constructor(private readonly songsService: SongsService) { }

  readonly song$ = this.songsService.getAllSong();

  ngOnInit(): void {
  }

}
