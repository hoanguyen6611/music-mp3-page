import { Component, OnInit } from '@angular/core';
import { CategorysStore } from '../../categorys.store';
import { tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss'],
})
export class CategoryDetailComponent implements OnInit {
  readonly category$ = this.store.value$;
  readonly id = String(this.route.snapshot.paramMap?.get('id'));
  readonly categoryDetail$ = this.store.loadCategoryDetail(this.id);
  readonly value$ = this.store.value$;
  checked = false;
  indeterminate = false;
  constructor(
    private readonly store: CategorysStore,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.categoryDetail$;
  }
  onAllChecked(checked: boolean): void {}
  addMusicToPlaylist(id: string) {
    console.log(id);
  }
  addMusicFavorite(id: string) {
    this.store.addSongToFavorite(id);
  }
}
