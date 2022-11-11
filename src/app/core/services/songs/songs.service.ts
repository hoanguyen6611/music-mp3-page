import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Songs } from './songs.model';

@Injectable({
  providedIn: 'root'
})
export class SongsService {
  private readonly apiUrl = 'http://localhost:5000';
  constructor(private readonly httpClient: HttpClient) { }
  getAllSong(){
    return this.httpClient.get<Songs>(
      `${this.apiUrl}/song`
    )
  }
}
