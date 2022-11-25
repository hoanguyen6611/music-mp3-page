import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private readonly apiUrl = environment.urlBE;
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
