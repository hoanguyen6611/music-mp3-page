import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ListSong } from 'src/app/core/services/album';
import { Song } from 'src/app/core/services/categorys';
import { setCurrentSong, setSongs } from 'src/app/pages/now-playing/store';
import { MyPlayListStore } from '../../my-playlists.store';

@Component({
  selector: 'app-my-playlist-detail',
  templateUrl: './my-playlist-detail.component.html',
  styleUrls: ['./my-playlist-detail.component.scss'],
})
export class MyPlaylistDetailComponent implements OnInit {
  readonly id = String(this.route.snapshot.paramMap?.get('id'));
  readonly myPlaylistDetail$ = this.myPlaylistStore.loadAlbumDetail(this.id);
  readonly value$ = this.myPlaylistStore.value$;
  readonly vmPlaylist$ = this.myPlaylistStore.vm$;
  constructor(
    private readonly myPlaylistStore: MyPlayListStore,
    private readonly route: ActivatedRoute,
    private readonly store: Store
  ) {}

  ngOnInit(): void {}
  addMusicFavorite(id: string) {
    this.myPlaylistStore.addSongToFavorite(id);
  }
  addMusicToPlaylist(id: string) {

  }
  playMusic(item: ListSong[]) {
    this.store.dispatch(setSongs({value: item}))
    this.store.dispatch(setCurrentSong({ value: item[0] }));
  }
  playMusicItem(item: Song) {
    this.store.dispatch(setCurrentSong({ value: item }));
  }
}
