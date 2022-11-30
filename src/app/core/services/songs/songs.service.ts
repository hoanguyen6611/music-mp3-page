import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Song, songCreate } from './songs.model';

@Injectable({
  providedIn: 'root',
})
export class SongsService {
  private readonly apiUrl = environment.urlBE;
  constructor(private readonly httpClient: HttpClient) {}
  getAllSong(): Observable<Song[]> {
    return this.httpClient.get<Song[]>(`${this.apiUrl}/song`);
  }
  getSongByID(id: string) {
    return this.httpClient.get<Song>(`${this.apiUrl}/song/${id}`);
  }
  createSong(song: songCreate) {
    return this.httpClient.post(`${this.apiUrl}/song`, song);
  }
  updateSong(song: Song) {}
  deleteSong(id: string) {
    return this.httpClient.post(`${this.apiUrl}/song/${id}`, {});
  }
  getSongFavoriteByUser() {
    return this.httpClient.get<Song[]>(`${this.apiUrl}/favoriteSongs`);
  }
}
