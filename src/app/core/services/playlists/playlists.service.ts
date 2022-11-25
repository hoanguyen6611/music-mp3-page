import { Injectable } from '@angular/core';
import { Playlists } from './playlists.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PlaylistsService {
  private readonly apiUrl = environment.urlBE;
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
