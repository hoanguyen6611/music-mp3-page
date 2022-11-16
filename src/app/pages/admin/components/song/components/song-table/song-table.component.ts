import { Component, OnInit } from '@angular/core';
import { AdminPageStore } from 'src/app/pages/admin/admin.store';

@Component({
  selector: 'app-song-table',
  templateUrl: './song-table.component.html',
  styleUrls: ['./song-table.component.scss']
})
export class SongTableComponent implements OnInit {
  checked = false;
  indeterminate = false;
  readonly vm$ = this.store.vm$;
  constructor(private readonly store: AdminPageStore) {}

  ngOnInit(): void {}
  onAllChecked(checked: boolean): void {}
}
