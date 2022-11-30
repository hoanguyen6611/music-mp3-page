import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-playlist',
  templateUrl: './nav-playlist.component.html',
  styleUrls: ['./nav-playlist.component.scss']
})
export class NavPlaylistComponent implements OnInit {
  @Input()
  set playlist(value: any) {
    this.playlistWithRoute = {... value, routeUrl: this.getPlaylistRouteUrl(value.id)}
  }

  playlistWithRoute: any & { routeUrl: string };
  constructor() { }

  ngOnInit(): void {
  }
  getPlaylistRouteUrl(playlistId: string) {
    return `/main/my-playlists/${playlistId}`
  }

}
