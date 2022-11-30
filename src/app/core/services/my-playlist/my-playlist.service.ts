import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MyPlaylist, PlaylistCreate } from './my-playlist.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MyPlaylistService {
  private readonly apiUrl = environment.urlBE;

  constructor(private readonly httpClient: HttpClient) {}

  getAllMyPlayList(): Observable<MyPlaylist[]> {
    return this.httpClient.get<MyPlaylist[]>(
      `${this.apiUrl}/userplaylist/getUserPlayList`,
    );
  }
  getMyPlaylistDetail(id: string) {
    return this.httpClient.get<MyPlaylist>(
      `${this.apiUrl}/userplaylist/getUserPlayList/${id}`,
    );
  }
  addSongToPlaylist(idSong: string, idPlaylist: string) {
    return this.httpClient.post(
      `${this.apiUrl}/userplaylist/addSongToUserPlayList/${idSong}/${idPlaylist}`,
      {},
    );
  }
  createPlaylist(playlist: PlaylistCreate) {
    return this.httpClient.post(
      `${this.apiUrl}/userplaylist/createUserPlayList`,
      playlist,
    );
  }
}
