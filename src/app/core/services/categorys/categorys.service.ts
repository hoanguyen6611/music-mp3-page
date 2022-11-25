import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category, createCategory } from './categorys.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CategorysService {
  private readonly apiUrl = environment.urlBE;
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
  createCategory(category: createCategory) {
    return this.httpClient.post(`${this.apiUrl}/category`, category);
  }
}
