import { Component, OnInit } from '@angular/core';
import { AdminPageStore } from 'src/app/pages/admin/admin.store';
import { SongPageStore } from '../../song.store';

@Component({
  selector: 'app-song-table',
  templateUrl: './song-table.component.html',
  styleUrls: ['./song-table.component.scss']
})
export class SongTableComponent implements OnInit {
  checked = false;
  indeterminate = false;
  readonly vm$ = this.store.vm$;
  constructor(private readonly store: SongPageStore) {}

  ngOnInit(): void {}
  onAllChecked(checked: boolean): void {}
  onEdit(id: string) {
    this.store.setIsEditSong(true);
    this.store.setFormSong(true);
    this.store.loadSongDetail(id);
  }
}
