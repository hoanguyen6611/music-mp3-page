import { Component, OnInit } from '@angular/core';
import { CategorysStore } from './categorys.store';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categorys',
  templateUrl: './categorys.component.html',
  styleUrls: ['./categorys.component.scss'],
})
export class CategorysComponent implements OnInit {
  readonly vm$ = this.store.vm$;
  constructor(private readonly store: CategorysStore) {
  }

  ngOnInit(): void {}
  selectCategoryDetail(id: string) {
    console.log(id);
    this.store.loadCategoryDetail(id);
  }
}
