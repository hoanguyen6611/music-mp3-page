import { Component, OnInit } from '@angular/core';
import { AlbumDetailStore } from './ablum-detail.store';
import { ActivatedRoute } from '@angular/router';
import { ListSong } from 'src/app/core/services/album';
import { Store } from '@ngrx/store';
import { setCurrentSong, setSongs } from '../now-playing/store';
import { Song } from 'src/app/core/services/songs';

@Component({
  selector: 'app-ablum-detail',
  templateUrl: './ablum-detail.component.html',
  styleUrls: ['./ablum-detail.component.scss'],
})
export class AblumDetailComponent implements OnInit {
  readonly id = String(this.route.snapshot.paramMap?.get('id'));
  readonly albumDetail$ = this.albumDetailStore.loadAlbumDetail(this.id);
  readonly album$ = this.albumDetailStore.value$;
  readonly myplaylist$ = this.albumDetailStore.myplaylist$;
  readonly listLikeSong$ = this.albumDetailStore.listLikeSong$;
  listLikeSong: Song[] = [];
  constructor(
    private readonly albumDetailStore: AlbumDetailStore,
    private readonly route: ActivatedRoute,
    private readonly store: Store,
  ) {
    this.listLikeSong$.pipe().subscribe(value => (this.listLikeSong = value));
  }

  ngOnInit(): void {}
  confirmFavorite(id: string) {
    this.albumDetailStore.addSongToFavorite(id);
  }
  addMusicToPlaylist(id: string) {
    this.albumDetailStore.addSongToPlaylist([this.id, id]);
  }
  playMusicList(item: ListSong[]) {
    this.store.dispatch(setSongs({ value: item }));
    this.store.dispatch(setCurrentSong({ value: item[0] }));
  }
  checkLikeMusic(id: string) {
    console.log(this.listLikeSong);
    if (this.listLikeSong?.map(x => x.id).includes(id)) {
      return true;
    }
    return false;
  }
  playMusicItem(item: Song) {
    this.store.dispatch(setCurrentSong({ value: item }));
  }
}
