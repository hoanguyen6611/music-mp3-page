import { Component, OnInit } from '@angular/core';
import { SearchStore } from 'src/app/pages/search/search.store';
import { AdminPageStore } from '../../admin.store';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  constructor(private readonly store: AdminPageStore) { }

  ngOnInit(): void {
  }

}
