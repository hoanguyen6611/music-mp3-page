import { Component, OnInit } from '@angular/core';
import { AlbumDetailStore } from './ablum-detail.store';
import { ActivatedRoute } from '@angular/router';
import { takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-ablum-detail',
  templateUrl: './ablum-detail.component.html',
  styleUrls: ['./ablum-detail.component.scss'],
})
export class AblumDetailComponent implements OnInit {
  readonly id = String(this.route.snapshot.paramMap?.get('id'));
  readonly albumDetail$ = this.store.loadAlbumDetail(this.id);
  readonly album$ = this.store.value$;
  readonly myplaylist$ = this.store.myplaylist$;
  constructor(
    private readonly store: AlbumDetailStore,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit(): void {}
  confirmFavorite(id: string) {
    this.store.addSongToFavorite(id);
  }
  addMusicToPlaylist(id: string) {
    this.store.addSongToPlaylist([this.id, id]);
  }
}
