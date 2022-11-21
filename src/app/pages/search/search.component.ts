import { Component, OnInit } from '@angular/core';
import { CategorysService } from 'src/app/core/services/categorys/categorys.service';
import { SearchStore } from './search.store';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  constructor(private readonly searchStore: SearchStore) {}
}
