import { Component, OnInit } from '@angular/core';
import { AdminPageStore } from 'src/app/pages/admin/admin.store';

@Component({
  selector: 'app-album-table',
  templateUrl: './album-table.component.html',
  styleUrls: ['./album-table.component.scss']
})
export class AlbumTableComponent implements OnInit {
  checked = false;
  indeterminate = false;
  readonly vm$ = this.store.vm$;
  constructor(private readonly store: AdminPageStore) {}

  ngOnInit(): void {}
  onAllChecked(checked: boolean): void {}

}
