import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Song } from '../songs/songs.model';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  private readonly apiUrl = environment.urlBE;
  constructor(private readonly httpClient: HttpClient) {}
  getSongFavoriteByUser() {
    return this.httpClient.get<Song[]>(`${this.apiUrl}/favoriteSongs`);
  }
  addSongFavorite(id: string) {
    return this.httpClient.post(
      `${this.apiUrl}/favoriteSongs/addSongToFavoriteSongs/${id}`,
      {},
    );
  }
  removeSongFavorite(id: string) {
    return this.httpClient.delete(
      `${this.apiUrl}/favoriteSongs/deleteSongFromFavoriteSongs/${id}`,
      {},
    );
  }
}
