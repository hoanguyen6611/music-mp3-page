import { Component, OnInit } from '@angular/core';
import { AdminPageStore } from 'src/app/pages/admin/admin.store';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
  constructor(private readonly store: AdminPageStore) {}

  ngOnInit(): void {}
  onForm() {
    this.store.setFormAlbum(true);
  }
}
