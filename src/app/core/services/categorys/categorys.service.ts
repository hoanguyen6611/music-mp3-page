import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categorys } from './categorys.model';


@Injectable({
  providedIn: 'root'
})
export class CategorysService {
  private readonly apiUrl = 'http://localhost:5000';
  constructor(private readonly httpClient: HttpClient) { }

  getAllCategory() {
    return this.httpClient.get<Categorys> (
      `${this.apiUrl}/category`
    )
  }
}
