import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RecentlySongService {
  private readonly apiUrl = environment.urlBE;

  constructor(private readonly httpClient: HttpClient) {}
  addMusicRecently(id: string) {
    return this.httpClient.post(
      `${this.apiUrl}/recentlySongs/addSongToRecentlySongs/${id}`,
      {},
    );
  }
}
