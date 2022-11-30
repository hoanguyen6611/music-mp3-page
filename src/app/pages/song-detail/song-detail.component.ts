import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Song } from 'src/app/core/services/songs/songs.model';
import { LikeSongStore } from '../like-songs/like-songs.store';
import { setCurrentSong } from '../now-playing/store';
import { SongDetailStore } from './song-detail.store';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.scss'],
})
export class SongDetailComponent implements OnInit {
  readonly item = String(this.route.snapshot.paramMap?.get('id'));
  readonly songDetail$ = this.songDetailStore.loadSongDetail(this.item);
  readonly song$ = this.songDetailStore.value$;
  readonly myplaylist$ = this.songDetailStore.select(s => s.myPlaylist);
  constructor(
    private readonly songDetailStore: SongDetailStore,
    private readonly route: ActivatedRoute,
    private readonly store: Store
  ) {}

  ngOnInit(): void {}
  addMusicToPlaylist(id: string) {
    this.songDetailStore.addSongToPlaylist([this.item,id]);
  }
  addSongFavorite(id: string) {
    this.songDetailStore.addSongToFavorite(id);
  }
  playMusic(item: Song) {
    this.store.dispatch(setCurrentSong({ value: item }));
  }
}
