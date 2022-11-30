import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyPlayListStore } from '../../my-playlists.store';

@Component({
  selector: 'app-my-playlist-detail',
  templateUrl: './my-playlist-detail.component.html',
  styleUrls: ['./my-playlist-detail.component.scss'],
})
export class MyPlaylistDetailComponent implements OnInit {
  readonly id = String(this.route.snapshot.paramMap?.get('id'));
  readonly myPlaylistDetail$ = this.store.loadAlbumDetail(this.id);
  readonly value$ = this.store.value$;
  readonly vmPlaylist$ = this.store.vm$;
  constructor(
    private readonly store: MyPlayListStore,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit(): void {}
  addMusicFavorite(id: string) {
    this.store.addSongToFavorite(id);
  }
  addMusicToPlaylist(id: string) {

  }
}
