import { Component, OnInit } from '@angular/core';
import { CategorysStore } from '../../categorys.store';
import { tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Song } from 'src/app/core/services/songs';
import { Store } from '@ngrx/store';
import { resetCurrentSong, setCurrentSong, setPlaying, setSongs } from 'src/app/pages/now-playing/store';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss'],
})
export class CategoryDetailComponent implements OnInit {
  readonly category$ = this.categoryStore.value$;
  readonly id = String(this.route.snapshot.paramMap?.get('id'));
  readonly categoryDetail$ = this.categoryStore.loadCategoryDetail(this.id);
  readonly value$ = this.categoryStore.value$;
  checked = false;
  indeterminate = false;
  constructor(
    private readonly categoryStore: CategorysStore,
    private readonly route: ActivatedRoute,
    private readonly store: Store
  ) {}

  ngOnInit(): void {
    this.categoryDetail$;
  }
  onAllChecked(checked: boolean): void {}
  addMusicToPlaylist(id: string) {
    console.log(id);
  }
  addMusicFavorite(id: string) {
    this.categoryStore.addSongToFavorite(id);
  }
  playMusicItem(item: Song) {
    this.store.dispatch(setCurrentSong({ value: item }));
  }
  playAlbum(item: Song[]) {
    this.store.dispatch(setSongs({ value: item }));
    this.store.dispatch(setPlaying({ value: true }));
    this.store.dispatch(resetCurrentSong());
    this.store.dispatch(setCurrentSong({ value: item[0] }));
  }
}
