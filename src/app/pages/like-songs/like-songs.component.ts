import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Song } from 'src/app/core/services/categorys';
import { setCurrentSong, setSongs } from '../now-playing/store';
import { LikeSongStore } from './like-songs.store';

@Component({
  selector: 'app-like-songs',
  templateUrl: './like-songs.component.html',
  styleUrls: ['./like-songs.component.scss'],
})
export class LikeSongsComponent implements OnInit {
  likeSong = {
    title: 'Bài hát yêu thích',
    image:
      'https://images.unsplash.com/photo-1668881233694-1825a663b2a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    description: 'Bài hát yêu thích',
  };
  readonly vm$ = this.likeSongStore.vm$;
  constructor(
    private readonly likeSongStore: LikeSongStore,
    private readonly store: Store,
  ) {}

  ngOnInit(): void {}
  removeMusicFavorite(id: string) {
    this.likeSongStore.removeSongToFavorite(id);
  }
  addMusicToPlaylist(id: string) {
    console.log(id);
  }
  playMusicItem(item: Song) {
    this.store.dispatch(setCurrentSong({ value: item }));
  }
  playMusicList(item: Song[]) {
    this.store.dispatch(setSongs({ value: item }));
    this.store.dispatch(setCurrentSong({ value: item[0] }));
  }
}
