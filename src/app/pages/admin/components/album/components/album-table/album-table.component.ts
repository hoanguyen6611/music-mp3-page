import { Component, OnInit } from '@angular/core';
import { AlbumPageStore } from '../../album.store';

@Component({
  selector: 'app-album-table',
  templateUrl: './album-table.component.html',
  styleUrls: ['./album-table.component.scss'],
})
export class AlbumTableComponent implements OnInit {
  checked = false;
  indeterminate = false;
  readonly vm$ = this.store.vm$;
  constructor(private readonly store: AlbumPageStore) {}

  ngOnInit(): void {}
  onAllChecked(checked: boolean): void {
    this.refreshCheckedStatus();
  }
  setOfCheckedId = new Set<string>();

  updateCheckedSet(id: string, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onItemChecked(id: string, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event: any): void {
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
  }
  onEdit(id: string) {
    this.store.setIsEditAlbum(true);
    this.store.setFormAlbum(true);
    this.store.loadAlbumDetail(id);
  }
  onDelete(id: string) {
    this.store.deleteAlbum(id);
  }
}
