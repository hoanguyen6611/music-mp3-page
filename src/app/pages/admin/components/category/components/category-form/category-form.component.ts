import { Component, OnInit } from '@angular/core';
import { AdminPageStore } from 'src/app/pages/admin/admin.store';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {
  readonly isFormCategory$ = this.store.isFormCategory$;
  constructor(private readonly store: AdminPageStore) {}

  ngOnInit(): void {}
  onClosed() {
    this.store.setFormCategory(false);
  }

}
