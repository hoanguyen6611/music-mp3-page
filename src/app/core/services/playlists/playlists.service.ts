import { Injectable } from '@angular/core';
import { Playlists } from './playlists.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PlaylistsService {
  private readonly apiUrl = 'http://localhost:5000';
  constructor(private readonly httpClient: HttpClient) { }

  getAllPlaylist() {
    return this.httpClient.get<Playlists>(
      `${this.apiUrl}/userplaylist`
    )
  }

  getAllUserPlaylist() {
    return this.httpClient.get(
      `${this.apiUrl}/userplaylist/getUserPlayList`
    )
  }

}
