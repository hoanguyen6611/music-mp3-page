import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private readonly apiUrl = 'http://localhost:5000';
  constructor(private readonly httpClient: HttpClient) { }
  getAllAlbum(): Observable<Album[]> {
    return this.httpClient.get<Album[]>(
      `${this.apiUrl}/album`
    )
  }
  getAlbumDetail(id: string) {
    return this.httpClient.get<Album> (
      `${this.apiUrl}/album/${id}`
    )
  }
}
