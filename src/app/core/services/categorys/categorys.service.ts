import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from './categorys.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategorysService {
  private readonly apiUrl = 'http://localhost:5000';
  constructor(private readonly httpClient: HttpClient) { }

  getAllCategory(): Observable<Category[]> {
    return this.httpClient.get<Category[]> (
      `${this.apiUrl}/category`
    )
  }
  getCategoryDetail(id: string) {
    return this.httpClient.get<Category> (
      `${this.apiUrl}/category/getById/${id}`
    )
  }
}
