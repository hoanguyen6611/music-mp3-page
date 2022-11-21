import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from './songs.model';

@Injectable({
  providedIn: 'root',
})
export class SongsService {
  private readonly apiUrl = 'http://localhost:5000';
  constructor(private readonly httpClient: HttpClient) {}
  getAllSong(): Observable<Song[]> {
    return this.httpClient.get<Song[]>(`${this.apiUrl}/song`);
  }
  getSongByID(id: string) {
    return this.httpClient.get<Song>(`${this.apiUrl}/song/${id}`);
  }
}
