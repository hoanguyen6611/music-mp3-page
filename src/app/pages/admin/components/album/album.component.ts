import { Component, OnInit } from '@angular/core';
import { AdminPageStore } from 'src/app/pages/admin/admin.store';
import { AlbumPageStore } from './album.store';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
  constructor(private readonly store: AlbumPageStore) {}

  ngOnInit(): void {}
  createForm() {
    this.store.setIsEditAlbum(false);
    this.store.setFormAlbum(true);
  }
}
