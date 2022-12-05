import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
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
  readonly destroy$ = new Subject<void>();
  readonly item = String(this.route.snapshot.paramMap?.get('id'));
  readonly songDetail$ = this.songDetailStore.loadSongDetail(this.item);
  readonly song$ = this.songDetailStore.value$;
  readonly myplaylist$ = this.songDetailStore.select(s => s.myPlaylist);
  readonly listLikeMusic$ = this.songDetailStore.listLikeMusic$;
  listLikeMusic?: Song[] = [];
  constructor(
    private readonly songDetailStore: SongDetailStore,
    private readonly route: ActivatedRoute,
    private readonly store: Store,
  ) {
    console.log(this.checkLikeMusic('bb9b3728-be0a-4f5f-8488-ad543620547c'));
    this.listLikeMusic$
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => (this.listLikeMusic = value));
  }

  ngOnInit(): void {}
  addMusicToPlaylist(id: string) {
    this.songDetailStore.addSongToPlaylist([this.item, id]);
  }
  addSongFavorite(id: string) {
    this.songDetailStore.addSongToFavorite(id);
  }
  playMusic(item: Song) {
    this.store.dispatch(setCurrentSong({ value: item }));
  }
  playMusicItem(item: Song) {
    this.store.dispatch(setCurrentSong({ value: item }));
  }
  checkLikeMusic(id: string) {
    if (this.listLikeMusic?.map(x => x.id).includes(id)) {
      return true;
    }
    return false;
  }
}
