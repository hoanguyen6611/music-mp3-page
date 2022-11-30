import { Component, OnInit } from '@angular/core';
import { SongPageStore } from './song.store';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss'],
})
export class SongComponent implements OnInit {
  constructor(private readonly store: SongPageStore) {}

  ngOnInit(): void {}
  showFormSong() {
    this.store.setIsEditSong(false);
    this.store.setFormSong(true);
  }
}
