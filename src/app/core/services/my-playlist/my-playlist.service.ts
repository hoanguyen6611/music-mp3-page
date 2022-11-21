import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MyPlaylist } from './my-playlist.model';


@Injectable({
  providedIn: 'root'
})
export class MyPlaylistService {
  private readonly apiUrl = 'http://localhost:5000';

  constructor(private readonly httpClient: HttpClient) { }

  getAllMyPlayList(): Observable<MyPlaylist[]> {
    return this.httpClient.get<MyPlaylist[]> (
      `${this.apiUrl}/userplaylist/getUserPlayList`
    )
  }
  getMyPlaylistDetail(id: string) {
    return this.httpClient.get<MyPlaylist> (
      `${this.apiUrl}/userplaylist/getUserPlayList/${id}`
    )
  }
}
