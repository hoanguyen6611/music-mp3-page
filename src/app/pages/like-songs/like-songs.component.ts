import { Component, OnInit } from '@angular/core';
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
    description: 'Bài hát yêu thích'
  };
  readonly vm$ = this.store.vm$;
  constructor(private readonly store: LikeSongStore) {}

  ngOnInit(): void {}
  removeMusicFavorite(id: string) {
    this.store.removeSongToFavorite(id);
  }
  addMusicToPlaylist(id: string) {
    console.log(id);
  }
}
