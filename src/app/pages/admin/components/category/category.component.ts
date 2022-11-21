import { Component, OnInit } from '@angular/core';
import { AdminPageStore } from 'src/app/pages/admin/admin.store';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  constructor(private readonly store: AdminPageStore) { }

  ngOnInit(): void {
  }
  onForm() {
    this.store.setFormCategory(true);
  }
}
