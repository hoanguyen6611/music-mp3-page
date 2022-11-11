import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PlaylistsService } from 'src/app/core/services/playlists/playlists.service';
import { SongsService } from 'src/app/core/services/songs/songs.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {

  constructor(private readonly songsService: SongsService, private readonly playlistService: PlaylistsService) {}
  readonly song$ = this.songsService.getAllSong();
  readonly data$ = this.playlistService.getAllUserPlaylist();
}
