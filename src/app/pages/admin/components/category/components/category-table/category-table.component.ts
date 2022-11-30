import { Component, OnInit } from '@angular/core';
import { AdminPageStore } from 'src/app/pages/admin/admin.store';
import { CategoryPageStore } from '../../category.store';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.scss'],
})
export class CategoryTableComponent implements OnInit {
  checked = false;
  indeterminate = false;
  readonly vm$ = this.store.vm$;
  constructor(private readonly store: CategoryPageStore, ) {}

  ngOnInit(): void {}
  onAllChecked(checked: boolean): void {}
  onEdit(id: string) {
    this.store.setIsEditCategory(true);
    this.store.setFormCategory(true);
    this.store.loadCategoryDetail(id);
  }
}
