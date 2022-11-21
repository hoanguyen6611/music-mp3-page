import { Component, OnInit } from '@angular/core';
import { AdminPageStore } from 'src/app/pages/admin/admin.store';

@Component({
  selector: 'app-song-form',
  templateUrl: './song-form.component.html',
  styleUrls: ['./song-form.component.scss'],
})
export class SongFormComponent implements OnInit {
  readonly isFormSong$ = this.store.isFormSong$;
  constructor(private readonly store: AdminPageStore) {}

  ngOnInit(): void {}
  onClosed() {
    this.store.setFormSong(false);
  }
}
